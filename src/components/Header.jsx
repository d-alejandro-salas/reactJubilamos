// src/components/Header.jsx

import { Nav } from './HeaderNav';
import logo from '../assets/images/logo.jpg';

export const Header = () => {
  return (
    <header>
      <a id="logo" href="/">
        <img src={logo} alt="Logo" />
      </a>
      <Nav />
    </header>
  );
};
