import { CONTACT, MAPS_LINK } from '../../config/site';
import MapEmbed from '../ui/MapEmbed';
import FooterDeveloper from './FooterDeveloper';
import FooterSections from './FooterSections';

export default function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <FooterSections />

        <section id="mapa">
          <h3>NUESTRAS OFICINAS</h3>
          <p>
            <a className="addressMap" href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
              {CONTACT.street}
            </a>
            , {CONTACT.city}.
            <br />
            (Atención únicamente con cita previa).
          </p>
          <p>
            *Realizamos trámites en todo el país. Contamos con personal y delegados en distintas provincias. Con
            nosotros podés avanzar sin importar dónde vivas.
          </p>
          <MapEmbed title="Mapa de oficinas" />
        </section>
      </div>
      <hr />
      <FooterDeveloper />
    </footer>
  );
}
