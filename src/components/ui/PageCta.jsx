import { WHATSAPP_MESSAGES, telUrl, whatsappUrl } from '../../config/site';

export default function PageCTA({ title = '¿Tenés dudas sobre este trámite?' }) {
  return (
    <aside className="pageCta">
      <h3 className="pageCta__title">{title}</h3>
      <p className="pageCta__text">
        Analizamos tu situación de manera anticipada para diseñar la mejor estrategia legal.
      </p>
      <div className="pageCta__actions">
        <a
          href={whatsappUrl(WHATSAPP_MESSAGES.consult)}
          target="_blank"
          rel="noopener noreferrer"
          className="ctaBtn ctaBtn--left"
        >
          <span aria-hidden="true">💬</span> Consultar por WhatsApp
        </a>
        <a href={telUrl} className="ctaBtn ctaBtn--right">
          <span aria-hidden="true">📞</span> Llamar ahora
        </a>
      </div>
    </aside>
  );
}
