// src/components/molecules/FooterSections.jsx

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FooterSocialNetworks from '../atoms/FooterSocialNetworks';

function FooterSections() {

    const location = useLocation();
    const [highlightedSection, setHighlightedSection] = useState('');
  
    useEffect(() => {
      // Función para actualizar la sección destacada basada en el hash actual
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
  
      updateHighlightedSection(); // Actualiza cuando el componente se monta
      window.addEventListener('hashchange', updateHighlightedSection); // Escucha cambios en el hash
  
      // Limpia el evento cuando el componente se desmonta
      return () => {
        window.removeEventListener('hashchange', updateHighlightedSection);
      };
    }, [location]);

  return (
    <>
        <section id="socialNetworks" className={highlightedSection === 'socialNetworks' ? 'destacado' : ''}>
          <FooterSocialNetworks /><br />
          <p style={{ textAlign: 'justify' }}>
            Puedes contactarnos a través de <a href="https://www.facebook.com/jubilamosok" title="Facebook">Facebook</a>, <a href="https://www.instagram.com/jubilamos" title="Instagram">Instagram</a>, <a href="https://api.whatsapp.com/send/?phone=5491132140614">WhatsApp</a>, ☎️ llamada directa al 1132140614 o por <a href="mailto:jubilamosinf@hotmail.com">correo electrónico</a>.
          </p>
        </section>
        <section id="links" className={highlightedSection === 'links' ? 'destacado' : ''}>
          <h3>SITIOS DE INTERÉS</h3><br />
          <ul>
            <li><a href="https://www.pjn.gov.ar/" target="_blank" rel="noopener noreferrer">PODER JUDICIAL</a></li>
            <li><a href="https://www.anses.gob.ar/" target="_blank" rel="noopener noreferrer">ANSES</a></li>
            <li><a href="https://www.pami.org.ar/" target="_blank" rel="noopener noreferrer">PAMI</a></li>
          </ul>
        </section>
    </>
  )
}

export default FooterSections;