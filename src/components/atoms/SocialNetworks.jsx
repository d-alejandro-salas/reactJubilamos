// src/components/atoms/SocialNetworks.jsx
import { FaFacebookF, FaInstagram, FaEnvelope, FaWhatsapp, FaYoutube } from "react-icons/fa6";

export const SocialNetworks = () => {
  return (
    <ul className="socialNetworks__ul">
      <li>
        <a 
          href="https://www.facebook.com/jubilamosok" 
          title="Facebook" 
          className="fb" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a 
          href="https://www.instagram.com/jubilamos" 
          title="Instagram" 
          className="ig" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </li>
      <li>
        <a 
          href="mailto:jubilamosinf@hotmail.com" 
          title="Email" 
          className="mail" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </li>
      <li>
        <a 
          href="https://api.whatsapp.com/send/?phone=5491132140614" 
          className="wa" 
          title="WhatsApp"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </li>
      <li>
        <a 
          href="https://www.youtube.com/@Jubilamos-Info" 
          title="YouTube" 
          className="yt" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
      </li>
    </ul>
  );
};

export default SocialNetworks;