import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        background: "#282c34",
        color: "#fff",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1>MyApp</h1>
      <nav>
        <Link to="/" style={{ color: "#fff", margin: "0 10px" }}>Home</Link>
        <Link to="/about" style={{ color: "#fff", margin: "0 10px" }}>About</Link>
      </nav>
    </header>
  );
}
