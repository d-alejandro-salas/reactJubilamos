// src/components/molecules/PageCTA.jsx
import React from 'react';

export const PageCTA = ({ title = "¿Tenés dudas sobre este trámite?" }) => {
  const whatsappMessage = encodeURIComponent(
    "Hola, estuve leyendo la información en su web y quisiera hacer una consulta sobre mi trámite."
  );

  return (
    <div style={{
      marginTop: '4.5rem',
      padding: '3rem 2rem',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      border: '1px solid rgba(10, 122, 131, 0.2)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
      textAlign: 'center'
    }}>
      <h3 style={{ margin: '0 0 1rem 0', color: '#0f172a', fontSize: '2.2rem', border: 'none', padding: 0 }}>
        {title}
      </h3>
      <p style={{ color: '#475569', fontSize: '1.6rem', marginBottom: '2rem', textAlign: 'center' }}>
        Analizamos tu situación de manera anticipada para diseñar la mejor estrategia legal.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        <a
          href={`https://api.whatsapp.com/send/?phone=5491132140614&text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="ctaBtn ctaBtn--left"
          style={{ width: 'auto', padding: '1.2rem 2.4rem' }}
        >
          💬 Consultar por WhatsApp
        </a>
        <a
          href="tel:+541132140614"
          className="ctaBtn ctaBtn--right"
          style={{ width: 'auto', padding: '1.2rem 2.4rem', color: '#0f172a', borderColor: '#0f172a' }}
        >
          📞 Llamar ahora
        </a>
      </div>
    </div>
  );
};

export default PageCTA;