import { useState } from 'react';
import { CATEGORIES, SERVICES } from '../../data/services';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState('todos');

  const visibleServices =
    activeFilter === 'todos' ? SERVICES : SERVICES.filter((service) => service.category === activeFilter);

  return (
    <section className="servicesSection">
      <div className="servicesHeader">
        <span className="servicesBadge">ÁREAS DE PRÁCTICA</span>
        <h2 className="servicesTitle">Nuestros Servicios Previsionales</h2>
        <p className="servicesSubtitle">
          Seleccioná el trámite de tu interés para conocer requisitos y cómo podemos asistirte.
        </p>

        <div className="servicesFilters" role="group" aria-label="Filtrar servicios">
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={`filterBtn ${activeFilter === id ? 'active' : ''}`}
              aria-pressed={activeFilter === id}
              onClick={() => setActiveFilter(id)}
            >
              {id === 'todos' ? `${label} (${SERVICES.length})` : label}
            </button>
          ))}
        </div>
      </div>

      <div id="mainGrid">
        {visibleServices.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}
