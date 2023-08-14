import logo_footer from '../assets/logo_footer.png'
import '../styles/_footer.scss';

export default function Footer() {
  return (
    <footer>
      <img src={logo_footer} alt="Logo de Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

