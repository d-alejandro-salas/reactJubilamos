// src/components/molecules/ConsultationCTA.jsx
import React from 'react';

export const ConsultationCTA = () => {
  // Mensaje predeterminado para WhatsApp
  const whatsappMessage = encodeURIComponent(
    "Hola, quisiera agendar una entrevista virtual para consultar por mi trámite."
  );

  return (
    <div className="ctaContainer">
      <a
        href={`https://api.whatsapp.com/send/?phone=5491132140614&text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="ctaBtn ctaBtn--left"
      >
        <span className="ctaIcon">📅</span> Agendá tu Entrevista Virtual
      </a>

      <a href="tel:+541132140614" className="ctaBtn ctaBtn--right">
        <span className="ctaIcon">📞</span> Llamanos Directamente
      </a>
    </div>
  );
};

export default ConsultationCTA;