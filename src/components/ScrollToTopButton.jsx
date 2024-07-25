// src/components/ScrollToTopButton.jsx
import React, { useEffect } from 'react';

const ScrollToTopButton = () => {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      id="scrollToTopButton"
      className="scrollup"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    ><img src="https://www.euroresidentes.com/tecnologia/trucos-diseno-web/wp-content/uploads/sites/7/2014/08/up1_azul1.png" />
      
    </button>
  );
};

export default ScrollToTopButton;
