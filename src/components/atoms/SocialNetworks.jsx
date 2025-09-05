// src/components/atoms/SocialNetworks.jsx

import { FaFacebookF, FaYoutube, FaWhatsapp, FaEnvelope } from "react-icons/fa6";

export const SocialNetworks = () => {
  return (
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
        <a href="https://www.instagram.com/jubilamos" className="fa fa-instagram" title="Instagram" target="_blank" rel="noopener noreferrer"></a></li>
        <li>
        <a 
          href="mailto:jubilamosinf@hotmail.com" 
          title="Email" 
          className="envelope" 
          target="_blank" 
            aria-label="WhatsApp"
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
      Puedes contactarnos a través de <a href="https://www.facebook.com/jubilamosok" title="Facebook">Facebook</a>, <a href="https://www.instagram.com/jubilamos" title="Instagram">Instagram</a>, <a href="https://api.whatsapp.com/send/?phone=5491132140614">WhatsApp</a>, ☎️ llamada directa al 1132140614 o por <a href="mailto:jubilamosinf@hotmail.com">correo electrónico</a>.
    </p>
  </div>
  );
}