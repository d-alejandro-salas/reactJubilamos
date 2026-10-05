import { Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';
import { SERVICES, servicePath } from '../data/services';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Página no encontrada – Jubilamos"
        description="La página que buscás no existe o fue movida."
        noindex
      />
      <main>
        <h1>Página no encontrada</h1>
        <p>La página solicitada no existe o fue movida. Quizás te interese alguno de nuestros servicios:</p>
        <ul className="bulletList">
          {SERVICES.map((service) => (
            <li key={service.slug}>
              <Link to={servicePath(service)}>{service.title}</Link>
            </li>
          ))}
        </ul>
        <p>
          <Link to="/">Volver al inicio</Link>
        </p>
      </main>
    </>
  );
}
