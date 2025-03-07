// src/routes/Routes.jsx

import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { Nosotros } from '../pages/Nosotros';
import { Jubilaciones } from '../pages/Jubilaciones';
import { PensionesPorFallecimiento } from '../pages/PensionesPorFallecimiento';
import { ReajusteDeHaberes } from '../pages/ReajusteDeHaberes';
import { DetailService } from '../pages/DetailService';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/jubilaciones" element={<Jubilaciones />} />
    <Route path="/nosotros" element={<Nosotros />} />
    <Route path="/pensionesporfallecimiento" element={<PensionesPorFallecimiento />} />
    <Route path="/reajustedehaberes" element={<ReajusteDeHaberes />} />
    <Route path="/:productId" element={<DetailService />} />
  </Routes>
);

export default AppRoutes;