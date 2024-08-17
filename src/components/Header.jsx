// src/components/Header.jsx

import { Nav } from './molecules/HeaderNav';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import logo from '../assets/images/logo.jpg';

export const Header = () => {
  return (
    <header>
      <Link id="logo" to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Nav />
    </header>
  );
};

