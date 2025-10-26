import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "200px",
        background: "#333",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h3>Admin Menu</h3>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/admin/dashboard" style={{ color: "#fff" }}>Dashboard</Link></li>
          <li><Link to="/admin/users" style={{ color: "#fff" }}>Users</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
