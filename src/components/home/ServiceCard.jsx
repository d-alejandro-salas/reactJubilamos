import { Link } from 'react-router-dom';
import images from '../../assets/images/imagesIndex';
import { servicePath } from '../../data/services';

export default function ServiceCard({ service }) {
  return (
    <article className="serviceCard">
      <Link className="mainGrid__link" to={servicePath(service)}>
        <div className="serviceCard__imageWrapper">
          <img
            loading="lazy"
            width="600"
            height="400"
            src={images[service.image]}
            alt={service.title}
            className="serviceCard__img"
          />
          <span className="serviceCard__overlayTag">{service.tag}</span>
        </div>

        <div className="serviceCard__content">
          <h3 className="serviceCard__title">{service.title}</h3>
          <p className="serviceCard__description">{service.summary}</p>

          <div className="serviceCard__footer">
            <span className="serviceCard__action">
              Ver trámite
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
