import logo from '../assets/logo.png';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/_header.scss';

export default function Header() {
const location = useLocation();

return (
  <header>
    <img src={logo} alt="Logo de Kasa" className="logo" />
    <nav>
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <NavLink to="/about">À Propos</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
}