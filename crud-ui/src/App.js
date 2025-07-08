import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm]   = useState({ name: "", email: "" });
  const [editingId, setEditingId] = useState(null);

  // Fetch all users from Spring Boot
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:8080/api/users");
    setUsers(await res.json());
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle form submit for create/update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editingId
      ? `http://localhost:8080/api/users/${editingId}`
      : "http://localhost:8080/api/users";
    const method = editingId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ name: "", email: "" });
    setEditingId(null);
    fetchUsers();
  };

  // Start editing a user
  const startEdit = (user) => {
    setForm({ name: user.name, email: user.email });
    setEditingId(user.id);
  };

  // Delete a user
  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/api/users/${id}`, { method: "DELETE" });
    fetchUsers();
  };

  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Users</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          required
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})}
        />
        <input
          required
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
        />
        <button type="submit">{editingId ? "Update" : "Add"}</button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setForm({ name: "", email: "" });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <table border="1" cellPadding="8">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button onClick={() => startEdit(u)}>Edit</button>
                <button onClick={() => handleDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
