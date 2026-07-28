// src/components/atoms/SocialNetworks.jsx
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa6";

export const SocialNetworks = () => {
  return (<div>
  <div className="socialNetworks">
    <h3 className="socialNetworks__h3">CONTACTO - REDES SOCIALES</h3><br/>
    <ul className="socialNetworks__ul">
      <li>
        <a 
            href="https://www.facebook.com/jubilamosok" 
            title="Facebook" 
            className="fb" 
            target="_blank" 
            rel="noopener noreferrer">
            <FaFacebookF />
        </a>
      </li>
      <li>
        <a 
            href="https://www.instagram.com/jubilamos" 
            title="Instagram" 
            className="instagram" 
            target="_blank" 
            rel="noopener noreferrer">
            <FaInstagram />
        </a>
      </li>
      <li>
        <a 
          href="mailto:jubilamosinf@hotmail.com" 
          title="Email" 
          className="envelope" 
          target="_blank" 
          aria-label="Email" 
          rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </li>
      <li>
        <a 
          href="https://api.whatsapp.com/send/?phone=5491132140614" 
          className="wsp" 
          title="WhatsApp"
          aria-label="WhatsApp"
          target="_blank" 
          rel="noopener noreferrer">
          <FaWhatsapp aria-hidden="true" focusable="false" />
        </a>
      </li>
      <li>
        <a 
          href="https://www.youtube.com/@Jubilamos-Info" 
          title="YouTube" 
          className="youTube" 
          target="_blank" 
          rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </li>
    </ul>
    <br/>
    <p style={{ textAlign: 'justify' }}>
      Puedes contactarnos a través de <a href="https://www.facebook.com/jubilamosok" title="Facebook">Facebook</a>, <a href="https://www.instagram.com/jubilamos" title="Instagram">Instagram</a>, <a href="https://api.whatsapp.com/send/?phone=5491132140614">WhatsApp</a>, ☎️ <a href="tel:+5491132140614" title="Llamar ahora">llamada directa al +54 9 11 3214-0614</a> o por <a href="mailto:jubilamosinf@hotmail.com">correo electrónico</a>.
    </p>
  </div>
  
            <div style={{ textAlign: 'center', margin: '15px 0' }}>
        <Link to="/politica-de-privacidad" style={{ fontSize: '0.85rem', color: '#b3b3b3', textDecoration: 'none' }}>
          Política de Privacidad y Aviso Legal
        </Link>
      </div></div>
  );
}