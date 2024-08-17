import { Link } from 'react-router-dom';
import data from '../../utils/dataHomePageCard.json';
import images from '../../assets/imagesIndex.js';

function HomePageCard() {
  return (
    <div id="mainGrid">
      {data.map((item) => (
        <div key={item.titulo}>
          <Link className="mainGrid__link" to={`/${item.titulo.toLowerCase().replace(/ /g, '')}`}>
            <h2>{item.titulo}</h2>
            <div className="linkDescription__container">
              <img src={images[item.imagen.replace(/\.(jpg|jpeg|png|webp)$/, '')]} alt={item.titulo} />
              <p>{item.descripcion}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HomePageCard;
