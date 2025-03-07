// src/components/Footer.jsx

import FooterDeveloperSection from './molecules/FooterDeveloperSection';
import FooterSections from './molecules/FooterSections';

export const Footer = () => {

  return (
    <footer>
      <div className="footer__container">
        <FooterSections />
        <section id="mapa">
          <h3>NUESTRAS OFICINAS</h3><br />
          <p>
            <span className="addressMap" onClick={() => document.getElementById('mapa').classList.toggle('activo')}>Av. Santa Fe 1845</span><span id="verMapa" style={{ display: 'none' }}> (hacé click para visualizar el mapa)</span>, Ciudad Autónoma de Buenos Aires.<br />(sólo con cita previa) y delegados en todo el país.
          </p><br />
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3349961380827!2d-58.3938796!3d-34.5956896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabdfb5e76a9%3A0x47006ce9bde4a929!2sAv.%20Sta.%20Fe%201845%2C%20C1123AAA%20CABA!5e0!3m2!1ses-419!2sar!4v1705924921762!5m2!1ses-419!2sar" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </div>
      <hr /><br />
      <FooterDeveloperSection />
    </footer>
  );
};