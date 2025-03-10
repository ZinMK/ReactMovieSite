import { Link } from "react-router-dom";
import "../Css/NavBar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/"> Movie App</Link>
      </div>

      <div className="navbar-links">
        <Link to="/"> Home</Link>
        <Link to="/favorites"> Favories</Link>
      </div>
    </nav>
  );
}

export default Navbar;
