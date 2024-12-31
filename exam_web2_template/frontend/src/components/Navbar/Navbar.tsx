import { Link } from "react-router-dom";

//composant NavBar
const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/library">Library</Link>
    </nav>
  );
};

export default NavBar;
