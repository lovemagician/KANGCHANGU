import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">HOME</Link>
      <Link to="/music">MUSIC</Link>
      <Link to="/picture">PICTURE</Link>
    </>
  );
}

export default Navbar;
