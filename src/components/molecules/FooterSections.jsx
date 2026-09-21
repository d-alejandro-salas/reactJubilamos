// src/components/molecules/FooterSections.jsx
import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SocialNetworks } from '../atoms/SocialNetworks';
import { FaArrowRight } from "react-icons/fa6";

function FooterSections() {
  const location = useLocation();
  const [highlightedSection, setHighlightedSection] = useState('');

  useEffect(() => {
    const updateHighlightedSection = () => {
      const currentHash = window.location.hash;
      if (currentHash === '#socialNetworks') {
        setHighlightedSection('socialNetworks');
      } else if (currentHash === '#links') {
        setHighlightedSection('links');
      } else {
        setHighlightedSection('');
      }
    };

    updateHighlightedSection();
    window.addEventListener('hashchange', updateHighlightedSection);

    return () => {
      window.removeEventListener('hashchange', updateHighlightedSection);
    };
  }, [location]);

  return (
    <>
      {/* Columna 1: Contacto y Redes */}
      <section id="socialNetworks" className={highlightedSection === 'socialNetworks' ? 'destacado' : ''}>
        <h3>CONTACTO - REDES SOCIALES</h3>
        <SocialNetworks />
        <p>
          Puedes contactarnos a través de <a href="https://www.facebook.com/jubilamosok" target="_blank" rel="noopener noreferrer">Facebook</a>, <a href="https://www.instagram.com/jubilamos" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="https://api.whatsapp.com/send/?phone=5491132140614" target="_blank" rel="noopener noreferrer">WhatsApp</a>, ☎️ <a href="tel:+5491132140614">llamada directa al +54 9 11 3214-0614</a> o por <a href="mailto:jubilamosinf@hotmail.com">correo electrónico</a>.
        </p>
        <div className="privacyNotice">
          <Link to="/politica-de-privacidad">Política de Privacidad y Aviso Legal</Link>
        </div>
      </section>

      {/* Columna 2: Sitios de Interés con Flechita */}
      <section id="links" className={highlightedSection === 'links' ? 'destacado' : ''}>
        <h3>SITIOS DE INTERÉS</h3>
        <ul>
          <li>
            <a href="https://www.pjn.gov.ar/" target="_blank" rel="noopener noreferrer">
              <FaArrowRight className="linkArrow" /> PODER JUDICIAL
            </a>
          </li>
          <li>
            <a href="https://www.anses.gob.ar/" target="_blank" rel="noopener noreferrer">
              <FaArrowRight className="linkArrow" /> ANSES
            </a>
          </li>
          <li>
            <a href="https://www.pami.org.ar/" target="_blank" rel="noopener noreferrer">
              <FaArrowRight className="linkArrow" /> PAMI
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default FooterSections;