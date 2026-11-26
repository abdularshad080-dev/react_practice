import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api.js";

export default function UserList({ search, selectedUser, onSelect }) {
  const { data: users, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p className="message">Loading users...</p>;

  if (isError) {
    return (
      <div className="message error">
        <p>{error.message}</p>
        <button onClick={() => refetch()}>Try again</button>
      </div>
    );
  }

  const term = search.toLowerCase();
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
  );

  if (filteredUsers.length === 0) {
    return <p className="message">No users match "{search}".</p>;
  }

  return (
    <ul className="user-list">
      {filteredUsers.map((user) => (
        <li key={user.id}>
          <button
            className={
              selectedUser?.id === user.id ? "user-item active" : "user-item"
            }
            onClick={() => onSelect(user)}
          >
            <span className="user-name">{user.name}</span>
            <span className="user-email">{user.email}</span>
            <span className="user-company">{user.company.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
