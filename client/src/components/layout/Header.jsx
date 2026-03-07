import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{padding:"20px", background:"#222", color:"white"}}>
      <h2>Creator Platform</h2>

      <nav style={{display:"flex", gap:"15px"}}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}

export default Header;