import { WHATSAPP_MESSAGES, telUrl, whatsappUrl } from '../../config/site';

export default function ConsultationCTA() {
  return (
    <div className="ctaContainer">
      <a
        href={whatsappUrl(WHATSAPP_MESSAGES.interview)}
        target="_blank"
        rel="noopener noreferrer"
        className="ctaBtn ctaBtn--left"
      >
        <span className="ctaIcon" aria-hidden="true">📅</span> Agendá tu Entrevista Virtual
      </a>

      <a href={telUrl} className="ctaBtn ctaBtn--right">
        <span className="ctaIcon" aria-hidden="true">📞</span> Llamanos Directamente
      </a>
    </div>
  );
}
