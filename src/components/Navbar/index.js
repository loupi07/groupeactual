import { Link, NavLink } from 'react-router-dom';
import './style.css';
const Navbar = () => {
  return (
    <nav className="Navbar">
      <NavLink exact activeClassName="active" to="/">
        Accueil
      </NavLink>
      <NavLink exact activeClassName="active" to="/informations">
        Informations
      </NavLink>
    </nav>
  );
};

export default Navbar;
