// src/components/atoms/ScrollComponent.jsx

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollComponent = () => {
  const { pathname } = useLocation();

  // Este useEffect asegura que el navegador se desplace hacia arriba
  // cada vez que se cambie de ruta en la aplicación.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById('scrollToTopButton');
      if (window.scrollY > 300) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const button = document.getElementById('scrollToTopButton');
    button.classList.add('scaled');
    setTimeout(() => {
      button.classList.remove('scaled');
    }, 300); // Duración de la animación de escala
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <button
        id="scrollToTopButton"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <img
          src="https://www.euroresidentes.com/tecnologia/trucos-diseno-web/wp-content/uploads/sites/7/2014/08/up1_azul1.png"
          alt="Scroll to top"
        />
      </button>
    </>
  );
};

export default ScrollComponent;
