import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactLogo from '../assets/images/react.svg';

export const Footer = () => {
  const location = useLocation();
  const [highlightedSection, setHighlightedSection] = useState('');

  useEffect(() => {
    // Función para actualizar la sección destacada basada en el hash actual
    const updateHighlightedSection = () => {
      const currentHash = window.location.hash;
      if (currentHash === '#redesSociales') {
        setHighlightedSection('redesSociales');
      } else if (currentHash === '#enlaces') {
        setHighlightedSection('enlaces');
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

  useEffect(() => {
    // Establece el año actual en el marcador de posición
    const yearPlaceholder = document.getElementById('yearPlaceholder');
    const currentYear = new Date().getFullYear();
    if (yearPlaceholder) {
      yearPlaceholder.textContent = currentYear;
    }
  }, []);

  return (
    <footer>
      <a href="https://api.whatsapp.com/send?phone=5491132140614" className="btn-wsp" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-whatsapp icono"></i>
      </a>
      <div className="footer__container">
        <section id="redesSociales" className={highlightedSection === 'redesSociales' ? 'destacado' : ''}>
          <h3>CONTACTO - REDES SOCIALES</h3><br />
          <ul className="redesSociales__ul">
            <li><a href="https://www.facebook.com/jubilamosok" className="fa fa-facebook" title="Facebook" target="_blank" rel="noopener noreferrer"></a></li>
            <li><a href="https://www.instagram.com/jubilamos" className="fa fa-instagram" title="Instagram" target="_blank" rel="noopener noreferrer"></a></li>
            <li><a href="https://api.whatsapp.com/send/?phone=5491132140614" className="fa fa-whatsapp" title="WhatsApp" target="_blank" rel="noopener noreferrer"></a></li>
            <li><a href="mailto:jubilamosinf@hotmail.com" className="fa fa-envelope" title="Email" target="_blank" rel="noopener noreferrer"></a></li>
          </ul><br />
          <p style={{ textAlign: 'justify' }}>
            Puedes contactarnos a través de <a href="https://www.facebook.com/jubilamosok" title="Facebook">Facebook</a>, <a href="https://www.instagram.com/jubilamos" title="Instagram">Instagram</a>, <a href="https://api.whatsapp.com/send/?phone=5491132140614">WhatsApp</a>, ☎️ llamada directa al 1132140614 o por <a href="mailto:jubilamosinf@hotmail.com">correo electrónico</a>.
          </p>
        </section>
        <section id="enlaces" className={highlightedSection === 'enlaces' ? 'destacado' : ''}>
          <h3>SITIOS DE INTERÉS</h3>
          <ul>
            <li><a href="https://www.pjn.gov.ar/" target="_blank" rel="noopener noreferrer">PODER JUDICIAL</a></li>
            <li><a href="https://www.anses.gob.ar/" target="_blank" rel="noopener noreferrer">ANSES</a></li>
            <li><a href="https://www.pami.org.ar/" target="_blank" rel="noopener noreferrer">PAMI</a></li>
          </ul>
        </section>
        <section id="mapa">
          <h3>NUESTRAS OFICINAS</h3>
          <p>
            <span className="addressMap" onClick={() => document.getElementById('mapa').classList.toggle('activo')}>Av. Santa Fe 1845</span><span id="verMapa" style={{ display: 'none' }}> (hacé click para visualizar el mapa)</span>, Ciudad Autónoma de Buenos Aires.<br />(sólo con cita previa) y delegados en todo el país.
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3349961380827!2d-58.3938796!3d-34.5956896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabdfb5e76a9%3A0x47006ce9bde4a929!2sAv.%20Sta.%20Fe%201845%2C%20C1123AAA%20CABA!5e0!3m2!1ses-419!2sar!4v1705924921762!5m2!1ses-419!2sar" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </div>
      <hr /><br />
      <section className="developerSection">
        <p>
          Web Developer <a className="copyright__a" href="https://drive.google.com/file/d/1JvKXVXbLuJM6whTgIW7sI9gLW1nE9W_H/view?usp=drive_link">Daniel Alejandro</a>,
          contrataciones: <a href="mailto:daniel.salas@bue.edu.ar">daniel.salas@bue.edu.ar</a>.
          © All rights reserved <span id="yearPlaceholder"></span>.
        </p>
        <a className="reactLogoContainer" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={ReactLogo} alt="React logo" className="reactLogo" />
        </a>
      </section>
    </footer>
  );
};