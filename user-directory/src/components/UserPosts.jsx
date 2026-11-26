import { useQuery } from "@tanstack/react-query";
import { fetchPostsByUser } from "../api.js";

export default function UserPosts({ user }) {
  const { data: posts, isLoading, isError, error } = useQuery({
    queryKey: ["posts", user?.id],
    queryFn: () => fetchPostsByUser(user.id),
    enabled: Boolean(user),
  });

  if (!user) {
    return <p className="message">Select a user to see their posts.</p>;
  }

  if (isLoading) return <p className="message">Loading posts...</p>;
  if (isError) return <p className="message error">{error.message}</p>;

  return (
    <div>
      <h2>Posts by {user.name}</h2>
      <p className="subtitle">
        {posts.length} posts - {user.address.city}
      </p>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
