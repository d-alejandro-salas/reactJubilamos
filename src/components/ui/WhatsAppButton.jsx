import { FaWhatsapp } from 'react-icons/fa6';
import { whatsappUrl } from '../../config/site';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      className="wsp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
    >
      <FaWhatsapp className="icono" aria-hidden="true" />
    </a>
  );
}
