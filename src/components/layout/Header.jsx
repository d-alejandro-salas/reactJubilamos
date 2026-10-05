import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import useScrolledPast from '../../hooks/useScrolledPast';
import HeaderNav from './HeaderNav';

export default function Header() {
  const scrolled = useScrolledPast(50);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <Link id="logo" to="/" aria-label="Jubilamos – Inicio">
        <img src={logo} alt="Jubilamos" />
      </Link>
      <HeaderNav />
    </header>
  );
}
