// src/routes/Routes.jsx

import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { Contacto } from '../pages/Contacto';
import { Nosotros } from '../pages/Nosotros';
import { Jubilaciones } from '../pages/Jubilaciones';
import { PensionesPorFallecimiento } from '../pages/PensionesPorFallecimiento';
import { ReajusteDeHaberes } from '../pages/ReajusteDeHaberes';
import { DetailService } from '../pages/DetailService';
import { WellnessSectionPage } from '../pages/WellnessSectionPage'; 
// 1. Importamos la nueva página
import PoliticaDePrivacidad from '../pages/PoliticaDePrivacidad'; 

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/jubilaciones" element={<Jubilaciones />} />
    <Route path="/contacto" element={<Contacto />} />
    <Route path="/nosotros" element={<Nosotros />} />
    <Route path="/pensionesporfallecimiento" element={<PensionesPorFallecimiento />} />
    <Route path="/reajustedehaberes" element={<ReajusteDeHaberes />} />
    <Route path="/articulos" element={<WellnessSectionPage />} />    
    {/* 2. Agregamos la ruta estática de Políticas */}
    <Route path="/politica-de-privacidad" element={<PoliticaDePrivacidad />} />
    <Route path="/:productId" element={<DetailService />} />
  </Routes>
);

export default AppRoutes;