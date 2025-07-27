// src/components/Header.jsx

import { useEffect, useState } from 'react';
import { Nav } from './molecules/HeaderNav';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50); // umbral de 50px
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <Link id="logo" to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Nav />
    </header>
  );
};
