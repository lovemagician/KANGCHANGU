import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">HOME</Link>
      <Link to="/music">MUSIC</Link>
      <Link to="/picture">PICTURE</Link>
    </div>
  );
}

export default Navbar;
