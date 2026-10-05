import ContactForm from '../components/contact/ContactForm';
import Seo from '../components/seo/Seo';
import MapEmbed from '../components/ui/MapEmbed';
import SocialNetworks from '../components/ui/SocialNetworks';

export default function Contacto() {
  return (
    <>
      <Seo
        title="Contacto – Jubilamos"
        description="Escribinos o agendá tu entrevista virtual. Resolvemos consultas previsionales en todo el país."
        path="/contacto"
      />
      <main className="contactPage">
        <h1>CONTACTANOS</h1>
        <ContactForm />

        <div className="socialCard">
          <p>¡También podés contactarnos a través de nuestras redes sociales!</p>
          <SocialNetworks />
        </div>

        <MapEmbed />
      </main>
    </>
  );
}
