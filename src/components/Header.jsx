import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo de Kasa" className="logo" />
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header