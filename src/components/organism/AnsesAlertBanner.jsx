import React from 'react';

export const AnsesAlertBanner = () => {
  return (
    <section className="ansesSectionBanner">
      <div className="ansesContainer">
        
        {/* COLUMNA IZQUIERDA: Cabecera con Escudo */}
        <div className="ansesHeader">
          <div className="ansesTitleWrapper">
            <div className="ansesMainIconContainer">
              {/* Icono de escudo de protección */}
              <svg className="ansesIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <rect x="9" y="9" width="6" height="7" rx="1"></rect>
                <path d="M12 12.5v1"></path>
              </svg>
            </div>
            <div className="ansesTextTitleGroup">
              <h2 className="ansesTitle">Protegé tus datos</h2>
              <h2 className="ansesTitle sub">frente a estafas</h2>
            </div>
          </div>
          <p className="ansesSubtitle">
            Recordá que <strong>ANSES</strong> nunca solicita información personal, bancaria ni claves por medios no oficiales.
          </p>
        </div>

        {/* COLUMNA DERECHA: Advertencias y Grilla */}
        <div className="ansesWarningsGrid">
          <h3 className="ansesWarningsTitle">
            <strong>ANSES</strong> nunca solicita por teléfono, WhatsApp,<br/>correo electrónico ni redes sociales:
          </h3>
          
          <div className="ansesItemsContainer">
            <div className="ansesItem">
              <div className="ansesItemIcon">
                {/* Candado */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <span className="ansesItemText">Claves de homebanking<br/>o Mi ANSES</span>
            </div>

            <div className="ansesItem">
              <div className="ansesItemIcon">
                {/* Tarjeta */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
              </div>
              <span className="ansesItemText">Datos de tarjetas<br/>de débito o crédito</span>
            </div>

            <div className="ansesItem">
              <div className="ansesItemIcon">
                {/* Banco / Edificio */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22V10M20 22V10M2 10l10-8 10 8M6 22v-7h12v7M10 15h4"></path></svg>
              </div>
              <span className="ansesItemText">CBU o información<br/>bancaria</span>
            </div>

            <div className="ansesItem">
              <div className="ansesItemIcon">
                {/* Usuario */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <span className="ansesItemText">Datos personales para<br/>otorgarte un beneficio</span>
            </div>
          </div>
        </div>
      </div>

      {/* PIE DEL BANNER */}
      <div className="ansesFooter">
        <div className="ansesFooterIcon">i</div>
        <p className="ansesFooterText">
          Ante cualquier duda, <strong>verificá siempre la información</strong> en los canales oficiales de <strong>ANSES</strong> y nunca compartas datos personales con terceros.
        </p>
      </div>
    </section>
  );
};

export default AnsesAlertBanner;
