// src/components/organism/WellnessSectionBanner.jsx

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
  );
};

export default WellnessSectionBanner;