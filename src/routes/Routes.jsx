// src/routes/Routes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Nosotros from '../pages/Nosotros';
import Jubilaciones from '../pages/Jubilaciones';
import PensionesPorFallecimiento from '../pages/Pensionesporfallecimiento';
import ReajusteHaberes from '../pages/Reajustehaberes';
import Retiros from '../pages/Retiros';
import RentaVitalicia from '../pages/Rentavitalicia';
import Moratorias from '../pages/Moratorias';
import PUAM from '../pages/PUAM';
import Sucesiones from '../pages/Sucesiones';

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
  </Routes>
);

export default AppRoutes;
