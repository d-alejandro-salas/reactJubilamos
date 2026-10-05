import { FaArrowRight } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT, EXTERNAL_SITES, SOCIAL_LINKS, mailUrl, telUrl } from '../../config/site';
import SocialNetworks from '../ui/SocialNetworks';

const SECTION_IDS = ['socialNetworks', 'links'];
const textLinks = SOCIAL_LINKS.filter(({ id }) => ['fb', 'ig', 'wa'].includes(id));

export default function FooterSections() {
  // Resalta la sección a la que apunta el #hash actual (Contactanos / Sitios de interés)
  const { hash } = useLocation();
  const highlighted = SECTION_IDS.find((id) => hash === `#${id}`);
  const cls = (id) => (highlighted === id ? 'destacado' : undefined);

  return (
    <>
      <section id="socialNetworks" className={cls('socialNetworks')}>
        <h3>CONTACTO - REDES SOCIALES</h3>
        <SocialNetworks />
        <p>
          Puedes contactarnos a través de{' '}
          {textLinks.map(({ id, label, href }) => (
            <span key={id}>
              <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
              {', '}
            </span>
          ))}
          ☎️ <a href={telUrl}>llamada directa al {CONTACT.phoneDisplay}</a> o por{' '}
          <a href={mailUrl}>correo electrónico</a>.
        </p>
        <div className="privacyNotice">
          <Link to="/politica-de-privacidad">Política de Privacidad y Aviso Legal</Link>
        </div>
      </section>

      <section id="links" className={cls('links')}>
        <h3>SITIOS DE INTERÉS</h3>
        <ul>
          {EXTERNAL_SITES.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <FaArrowRight className="linkArrow" aria-hidden="true" /> {label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
