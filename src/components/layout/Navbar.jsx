import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="navbar_list" to="/">
        HOME
      </Link>
      <Link className="navbar_list" to="/music">
        MUSIC
      </Link>
      <Link className="navbar_list" to="/picture">
        PICTURE
      </Link>
    </div>
  );
}

export default Navbar;
