// src/components/molecules/AnsesAlertBanner.jsx

import React from 'react';
import celularAnses from '../../assets/images/celularAnses.png';

export const AnsesAlertBanner = () => {
  return (
    <div className="ansesAlert">
      
      {/* CONTENEDOR PRINCIPAL */}
      <div className="ansesAlert__content">
        
        {/* COLUMNA IZQUIERDA: Imagen y Mensaje Principal */}
        <div className="ansesAlert__left">
          <img 
            src={celularAnses} 
            alt="Celular ANSES" 
            className="ansesAlert__image" 
          />

          <div className="ansesAlert__textContainer">
            <div className="ansesAlert__titleWrapper">
              <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ansesAlert__shieldIcon">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <rect x="9" y="9" width="6" height="7" rx="1"></rect>
                <path d="M12 12.5v1"></path>
              </svg>
              <h2 className="ansesAlert__title">
                Protegé tus datos<br/>frente a estafas
              </h2>
            </div>
            
            <p className="ansesAlert__desc">
              Recordá que <strong>ANSES</strong> nunca solicita información personal, bancaria ni claves por medios no oficiales.
            </p>
          </div>
        </div>

        {/* COLUMNA DERECHA: Las 4 advertencias */}
        <div className="ansesAlert__right">
          <h3 className="ansesAlert__rightTitle">
            <strong>ANSES</strong> nunca solicita por teléfono, WhatsApp, correo electrónico ni redes sociales:
          </h3>
          
          <div className="ansesAlert__grid">
            {/* Item 1 */}
            <div className="ansesAlert__item">
              <div className="ansesAlert__iconBox">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <span className="ansesAlert__itemText">Claves de homebanking o Mi ANSES</span>
            </div>

            {/* Item 2 */}
            <div className="ansesAlert__item">
              <div className="ansesAlert__iconBox">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
              </div>
              <span className="ansesAlert__itemText">Datos de tarjetas de débito o crédito</span>
            </div>

            {/* Item 3 */}
            <div className="ansesAlert__item">
              <div className="ansesAlert__iconBox">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M12 2v5"></path><path d="M8 2v5"></path><path d="M16 2v5"></path></svg>
              </div>
              <span className="ansesAlert__itemText">CBU o información bancaria</span>
            </div>

            {/* Item 4 */}
            <div className="ansesAlert__item">
              <div className="ansesAlert__iconBox">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <span className="ansesAlert__itemText">Datos personales para otorgarte un beneficio</span>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="ansesAlert__footer">
        <div className="ansesAlert__footerIcon">i</div>
        <p className="ansesAlert__footerText">
          Ante cualquier duda, <strong>verificá siempre la información</strong> en los canales oficiales de <strong>ANSES</strong> y nunca compartas datos personales con terceros.
        </p>
      </div>

    </div>
  );
};