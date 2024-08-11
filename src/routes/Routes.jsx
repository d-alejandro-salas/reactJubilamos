// src/routes/Routes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Nosotros from '../pages/Nosotros';
import Jubilaciones from '../pages/Jubilaciones';
import PensionesPorFallecimiento from '../pages/PensionesPorFallecimiento';
import ReajusteHaberes from '../pages/ReajusteHaberes';
import Retiros from '../pages/Retiros';
import RentaVitalicia from '../pages/RentaVitalicia';
import Moratorias from '../pages/Moratorias';
import PUAM from '../pages/Puam';
import Sucesiones from '../pages/Sucesiones';
import DetailService from '../pages/DetailService';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/nosotros" element={<Nosotros />} />
    <Route path="/jubilaciones" element={<Jubilaciones />} />
    <Route path="/pensionesporfallecimiento" element={<PensionesPorFallecimiento />} />
    <Route path="/reajustedehaberes" element={<ReajusteHaberes />} />
    <Route path="/retirosporinvalidez" element={<Retiros />} />
    <Route path="/rentavitalicia" element={<RentaVitalicia />} />
    <Route path="/moratorias" element={<Moratorias />} />
    <Route path="/PUAM" element={<PUAM />} />
    <Route path="/sucesiones" element={<Sucesiones />} />
    <Route path="/servicios/:productId" element={<DetailService />} />
  </Routes>
);

export default AppRoutes;
