import Sidebar from "../components/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: "20px" }}>
        <h2>Admin Panel</h2>
        {children}
      </div>
    </div>
  );
}
