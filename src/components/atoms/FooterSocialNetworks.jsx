import { FaFacebookF, FaWhatsapp, FaEnvelope } from "react-icons/fa6";

function FooterSocialNetworks() {
  return (
    <>
      <h3>CONTACTO - REDES SOCIALES</h3><br/>
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
        <li><a href="https://www.instagram.com/jubilamos" className="fa fa-instagram" title="Instagram" target="_blank" rel="noopener noreferrer"></a></li>
        <li>
          <a 
            href="https://api.whatsapp.com/send/?phone=5491132140614" 
            className="wsp" 
            title="WhatsApp" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a 
            href="mailto:jubilamosinf@hotmail.com" 
            title="Email" 
            className="envelope" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </li>
      </ul>
    </>
  );
}

export default FooterSocialNetworks;
