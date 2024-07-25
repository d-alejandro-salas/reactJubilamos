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

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/nosotros" element={<Nosotros />} />
    <Route path="/jubilaciones" element={<Jubilaciones />} />
    <Route path="/pensionesPorFallecimiento" element={<PensionesPorFallecimiento />} />
    <Route path="/reajusteHaberes" element={<ReajusteHaberes />} />
    <Route path="/retiros" element={<Retiros />} />
    <Route path="/rentaVitalicia" element={<RentaVitalicia />} />
    <Route path="/moratorias" element={<Moratorias />} />
    <Route path="/PUAM" element={<PUAM />} />
    <Route path="/Sucesiones" element={<Sucesiones />} />
  </Routes>
);

export default AppRoutes;
