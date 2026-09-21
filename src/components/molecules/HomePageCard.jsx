// src/components/molecules/HomePageCard.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../utils/dataHomePageCard.json';
import images from '../../assets/images/imagesIndex.js';

// Mapeo de categorías y etiquetas para cada servicio
const serviceMetadata = {
  "Reajuste de haberes": { tag: "Reclamo Judicial", category: "reclamos" },
  "Jubilaciones": { tag: "Trámite ANSES", category: "previsional" },
  "Pensiones por fallecimiento": { tag: "Beneficio Familiar", category: "previsional" },
  "Retiros por invalidez": { tag: "Junta Médica", category: "previsional" },
  "Renta vitalicia": { tag: "Ex AFJP", category: "reclamos" },
  "Moratorias": { tag: "Sin Aportes", category: "previsional" },
  "PUAM": { tag: "Adulto Mayor", category: "previsional" },
  "Sucesiones": { tag: "Derecho Civil", category: "civil" }
};

export function HomePageCard() {
  const [activeFilter, setActiveFilter] = useState('todos');

  // Filtrado reactivo en tiempo real
  const filteredData = activeFilter === 'todos' 
    ? data 
    : data.filter(item => serviceMetadata[item.titulo]?.category === activeFilter);

  return (
    <section className="servicesSection">
      {/* Cabecera */}
      <div className="servicesHeader">
        <span className="servicesBadge">ÁREAS DE PRÁCTICA</span>
        <h2 className="servicesTitle">Nuestros Servicios Previsionales</h2>
        <p className="servicesSubtitle">
          Seleccioná el trámite de tu interés para conocer requisitos y cómo podemos asistirte.
        </p>

        {/* Pestañas de Filtro Interactivas */}
        <div className="servicesFilters">
          <button 
            className={`filterBtn ${activeFilter === 'todos' ? 'active' : ''}`}
            onClick={() => setActiveFilter('todos')}
          >
            Todos los servicios ({data.length})
          </button>
          <button 
            className={`filterBtn ${activeFilter === 'previsional' ? 'active' : ''}`}
            onClick={() => setActiveFilter('previsional')}
          >
            Jubilaciones y Pensiones
          </button>
          <button 
            className={`filterBtn ${activeFilter === 'reclamos' ? 'active' : ''}`}
            onClick={() => setActiveFilter('reclamos')}
          >
            Reajustes y Reclamos
          </button>
          <button 
            className={`filterBtn ${activeFilter === 'civil' ? 'active' : ''}`}
            onClick={() => setActiveFilter('civil')}
          >
            Sucesiones
          </button>
        </div>
      </div>

      {/* Grilla de Tarjetas */}
      <div id="mainGrid">
        {filteredData.map((item) => {
          const imageKey = item.imagen.replace(/\.(jpg|jpeg|png|webp)$/, '');
          const route = `/${item.titulo.toLowerCase().replace(/ /g, '')}`;
          const meta = serviceMetadata[item.titulo] || { tag: "Especialidad" };

          return (
            <article key={item.titulo} className="serviceCard">
              <Link className="mainGrid__link" to={route}>
                <div className="serviceCard__imageWrapper">
                  <img
                    loading="lazy"
                    width="600"
                    height="400"
                    src={images[imageKey]}
                    alt={item.titulo}
                    className="serviceCard__img"
                  />
                  <span className="serviceCard__overlayTag">{meta.tag}</span>
                </div>

                <div className="serviceCard__content">
                  <h3 className="serviceCard__title">{item.titulo}</h3>
                  <p className="serviceCard__description">{item.descripcion}</p>
                  
                  <div className="serviceCard__footer">
                    <span className="serviceCard__action">
                      Ver trámite
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}