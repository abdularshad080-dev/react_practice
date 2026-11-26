import { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import UserList from "./components/UserList.jsx";
import UserPosts from "./components/UserPosts.jsx";

export default function App() {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="app">
      <header className="header">
        <h1>User Directory</h1>
        <p>Search for a user and click on them to read their posts.</p>
      </header>

      <div className="layout">
        <section className="panel">
          <SearchBar value={search} onChange={setSearch} />
          <UserList
            search={search}
            selectedUser={selectedUser}
            onSelect={setSelectedUser}
          />
        </section>

        <section className="panel">
          <UserPosts user={selectedUser} />
        </section>
      </div>
    </div>
  );
}
