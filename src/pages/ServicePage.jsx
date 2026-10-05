import { Navigate, useLocation } from 'react-router-dom';
import images from '../assets/images/imagesIndex';
import PageCTA from '../components/ui/PageCta';
import Seo from '../components/seo/Seo';
import { servicePath } from '../data/services';

function Section({ level = 4, heading, paragraphs }) {
  const Heading = `h${level}`;
  return (
    <>
      <Heading className={level === 3 ? 'h3__subtitle' : undefined}>{heading}</Heading>
      {paragraphs.map((text) => (
        <p key={text.slice(0, 40)}>{text}</p>
      ))}
    </>
  );
}

/** Plantilla única para todos los servicios (datos en src/data/services.js). */
export default function ServicePage({ service }) {
  const { pathname } = useLocation();
  const path = servicePath(service);

  // Unifica /rentaVitalicia, /rentavitalicia/ → /rentavitalicia (evita contenido duplicado)
  if (pathname !== path) return <Navigate to={path} replace />;

  const image = images[service.image];
  const { lead = [], body = [], sections = [] } = service;

  return (
    <>
      <Seo title={service.seoTitle} description={service.seoDescription} path={path} image={image} />
      <main>
        <h1>{service.heading ?? service.title}</h1>
        <img className="pages__img" src={image} alt={service.imageAlt} />

        {lead.map((text) => (
          <p key={text.slice(0, 40)} className="bigFontSize">{text}</p>
        ))}
        {body.map((text) => (
          <p key={text.slice(0, 40)}>{text}</p>
        ))}
        {sections.map((section) => (
          <Section key={section.heading} {...section} />
        ))}

        <PageCTA />
      </main>
    </>
  );
}
