// src/components/organisms/WellnessSectionBanner.jsx

import { Link } from 'react-router-dom';

// Íconos SVG (Mismos diseños, optimizados)
const HeartIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#6B8E23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const AppleIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#6B8E23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
    <path d="M10 2c1 .5 2 2 2 5"></path>
  </svg>
);

const DumbbellIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#6B8E23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6.5 6.5 11 11"></path>
    <path d="m21 21-1-1"></path>
    <path d="m3 3 1 1"></path>
    <path d="m18 22 4-4"></path>
    <path d="m2 6 4-4"></path>
    <path d="m3 10 7-7"></path>
    <path d="m14 21 7-7"></path>
  </svg>
);

export const WellnessSectionBanner = () => {
  return (
    <>
      {/* Estilos CSS encapsulados aquí para facilitar el Copy-Paste */}
      <style>{`
        .wellnessSection {
          background-color: #E8F5E9; /* Un verde muy suave ("leve fondo verdecito") */
          margin-top: 60px;          /* Separación superior (mt) */
          padding: 40px 20px;        /* Padding base (Mobile First) */
          text-align: center;
          position: relative;
          overflow: hidden;
          /* Opcional: Borde redondeado suave si te gusta */
          border-radius: 4px; 
        }

        .wellnessContainer {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .wellnessTitle {
          color: #1a3c34;
          font-size: 1.8rem; /* Tamaño más chico para celular */
          font-weight: 600;
          margin-bottom: 10px;
          font-family: "Playfair Display", serif;
          line-height: 1.2;
        }

        .wellnessSubtitle {
          color: #4a5568;
          font-size: 1rem;
          margin-bottom: 25px;
          line-height: 1.5;
        }

        .wellnessBtn {
          background-color: #2E5C55;
          color: white;
          padding: 10px 24px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
          font-size: 0.95rem;
          transition: background 0.3s ease, transform 0.2s;
          display: inline-block;
          box-shadow: 0 3px 5px rgba(0,0,0,0.1);
        }

        .wellnessBtn:hover {
          background-color: #234a44;
          transform: translateY(-2px);
        }

        /* --- DECORACIONES (ÍCONOS) --- */
        .decoration-icon {
          position: absolute;
          opacity: 0.3; /* Un poco más sutil */
          pointer-events: none;
          display: none; /* Ocultos en celular para no molestar */
        }

        /* --- MEDIA QUERIES (ESCRITORIO) --- */
        @media (min-width: 768px) {
          .wellnessSection {
            padding: 45px 20px; /* Menos altura que antes (antes era 80px) */
            margin-top: 80px;
          }

          .wellnessTitle {
            font-size: 2.2rem; /* Crece el título en PC */
          }

          .wellnessSubtitle {
            font-size: 1.1rem;
            margin-bottom: 30px;
          }

          /* Mostrar y posicionar íconos solo en escritorio */
          .decoration-icon { display: block; }
          .icon-heart { left: 10%; top: 50%; transform: translateY(-50%); }
          .icon-apple { right: 15%; top: 25%; }
          .icon-dumbbell { right: 8%; top: 65%; }
        }
      `}</style>

      <section className="wellnessSectionBanner">
        <div className="wellnessContainer">
          <h2 className="wellnessTitle">Salud y Bienestar para la Tercera Edad</h2>
          <p className="wellnessSubtitle">
            Pequeños consejos para vivir mejor, con información clara y confiable.
          </p>
          
          <Link to="/articulos" className="wellnessBtn">
            VER ARTÍCULOS
          </Link>
        </div>

        {/* Decoraciones */}
        <div className="decoration-icon icon-heart"><HeartIcon /></div>
        <div className="decoration-icon icon-apple"><AppleIcon /></div>
        <div className="decoration-icon icon-dumbbell"><DumbbellIcon /></div>
      </section>
    </>
  );
};

export default WellnessSectionBanner;