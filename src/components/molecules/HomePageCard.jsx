// src/components/molecules/HomePageCard.jsx

import { Link } from 'react-router-dom';
import data from '../../utils/dataHomePageCard.json';
import images from '../../assets/images/imagesIndex.js';
import { useIsMobile } from '../../hooks/useIsMobile'; // Importamos tu nuevo hook

export function HomePageCard() {
  // Inicializamos el hook (por defecto usa tu breakpoint de 768px)
  const isMobile = useIsMobile();

  return (
    <div id="mainGrid" style={{ marginBottom: isMobile ? '1rem' : '-5rem' }}>
      {data.map((item) => (
        <div 
          key={item.titulo}>
          <Link className="mainGrid__link" to={`/${item.titulo.toLowerCase().replace(/ /g, '')}`}>
            <h2>{item.titulo}</h2>
            <div className="linkDescription__container">
              <img 
                loading="lazy" 
                width="600" 
                height="400" 
                src={images[item.imagen.replace(/\.(jpg|jpeg|png|webp)$/, '')]} 
                alt={item.titulo} 
              />
              <p>{item.descripcion}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}