import Seo from '../components/seo/Seo';
import AnsesAlert from '../components/home/AnsesAlert';
import ServicesSection from '../components/home/ServicesSection';
import ConsultationCTA from '../components/ui/ConsultationCta';
import { CONTACT, SITE_URL, SOCIAL_LINKS, mailUrl, telUrl } from '../config/site';

const FEATURES = [
  { title: 'Entrevistas Virtuales:', text: 'Asesoramiento remoto sin necesidad de desplazarte' },
  { title: 'Alcance Nacional:', text: 'Gestionamos trámites en todo el país' },
  { title: 'Defensa Integral:', text: 'Protección de tus derechos en sede administrativa y judicial' },
];

// Datos estructurados para Google (resultado enriquecido de negocio local)
const LEGAL_SERVICE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Jubilamos – Estudio Jurídico Previsional',
  url: SITE_URL,
  telephone: `+${CONTACT.phone}`,
  email: CONTACT.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.street,
    addressLocality: 'Ciudad Autónoma de Buenos Aires',
    addressCountry: 'AR',
  },
  areaServed: 'AR',
  sameAs: SOCIAL_LINKS.filter(({ id }) => ['fb', 'ig', 'yt'].includes(id)).map(({ href }) => href),
};

export default function HomePage() {
  return (
    <>
      <Seo
        title="Jubilamos – Derecho Previsional y Sucesiones"
        description="Estudio jurídico especializado en jubilaciones, pensiones, reajustes y sucesiones. Atención remota en todo el país."
        path="/"
        jsonLd={LEGAL_SERVICE_JSON_LD}
      />

      <section id="introduction" className="heroSection">
        <div className="heroContainer">
          <div className="heroBadge">
            <span className="heroBadgeDot" />
            Dres. Monti &amp; Ferrara • Estudio Jurídico Previsional
          </div>

          <h1 className="heroTitle">
            Estudio Jurídico Especializado en <span className="heroHighlight">Derecho Previsional</span> y Sucesiones
          </h1>

          <p className="heroDescription">
            En <strong>Jubilamos</strong> nos especializamos en brindarte la mejor orientación y resguardo en tus
            trámites frente a <strong>ANSES</strong>, tanto en sede administrativa como judicial, garantizándote máxima
            seguridad jurídica, calidez y celeridad a lo largo de todo el proceso.
          </p>

          <div className="heroFeatures">
            {FEATURES.map(({ title, text }) => (
              <div className="heroFeatureItem" key={title}>
                <span className="heroCheck" aria-hidden="true">✓</span> <strong>{title}</strong> {text}
              </div>
            ))}
          </div>

          <div className="heroCtaWrapper">
            <ConsultationCTA />
          </div>

          <p className="heroContactNote">
            Podés comunicarte también por teléfono al <a href={telUrl}>{CONTACT.phoneDisplay}</a> o vía mail a{' '}
            <a href={mailUrl}>{CONTACT.email}</a>. Tu tranquilidad es nuestra prioridad.
          </p>
        </div>
      </section>

      <main>
        <ServicesSection />
        <AnsesAlert />
      </main>
    </>
  );
}
