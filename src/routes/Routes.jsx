// src/routes/Routes.jsx

import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { Contacto } from '../pages/Contacto';
import { Nosotros } from '../pages/Nosotros';
import { Jubilaciones } from '../pages/Jubilaciones';
import { PensionesPorFallecimiento } from '../pages/PensionesPorFallecimiento';
import { ReajusteDeHaberes } from '../pages/ReajusteDeHaberes';
import { DetailService } from '../pages/DetailService';

// 1. Importamos tu nueva página (asegurate que la ruta '../pages/...' sea correcta)
import { WellnessSectionPage } from '../pages/WellnessSectionPage'; 

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/jubilaciones" element={<Jubilaciones />} />
    <Route path="/contacto" element={<Contacto />} />
    <Route path="/nosotros" element={<Nosotros />} />
    <Route path="/pensionesporfallecimiento" element={<PensionesPorFallecimiento />} />
    <Route path="/reajustedehaberes" element={<ReajusteDeHaberes />} />
    
    {/* 2. Agregamos la ruta nueva aquí */}
    <Route path="/articulos" element={<WellnessSectionPage />} />
    
    <Route path="/:productId" element={<DetailService />} />
  </Routes>
);

export default AppRoutes;