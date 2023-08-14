import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import '../styles/_header.scss';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Logo de Kasa" className="logo" />
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>À Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}