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
        {/* Lien vers la page d'accueil avec une mise en surbrillance si l'emplacement correspond à "/" */}
        <li className={location.pathname === "/" ? "active" : ""}>
          <NavLink to="/">Accueil</NavLink>
        </li>
        {/* Lien vers la page "À Propos" avec une mise en surbrillance si l'emplacement correspond à "/about" */}
        <li className={location.pathname === "/about" ? "active" : ""}>
          <NavLink to="/about">À Propos</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
}