// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg'; // Asegúrate de que la ruta del logo sea correcta

const Header = () => {
  return (
    <header>
      <a id="logo" href="/">
        <img src={logo} alt="Logo" />
      </a>
      <nav>
        <Link to="/jubilaciones">JUBILATE</Link>
        <Link to="/reajusteHaberes">HABER MENSUAL</Link>
        <a href="#redesSociales">CONTACTATE</a>
        <Link to="/nosotros">NOSOTROS</Link>
        <a href="#enlaces">SITIOS DE INTERÉS</a>
      </nav>
    </header>
  );
};

export default Header;
