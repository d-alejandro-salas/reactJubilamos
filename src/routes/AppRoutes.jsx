import { Route, Routes } from 'react-router-dom';
import { SERVICES, servicePath } from '../data/services';
import Contacto from '../pages/Contacto';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import Nosotros from '../pages/Nosotros';
import PoliticaDePrivacidad from '../pages/PoliticaDePrivacidad';
import ServicePage from '../pages/ServicePage';
import WellnessSectionPage from '../pages/WellnessSectionPage';

// Las URLs de los servicios salen de `slug` (idénticas a las históricas).
// React Router no distingue mayúsculas: /rentaVitalicia entra acá y ServicePage redirige a /rentavitalicia.
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {SERVICES.map((service) => (
        <Route key={service.slug} path={servicePath(service)} element={<ServicePage service={service} />} />
      ))}
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/articulos" element={<WellnessSectionPage />} />
      <Route path="/politica-de-privacidad" element={<PoliticaDePrivacidad />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
