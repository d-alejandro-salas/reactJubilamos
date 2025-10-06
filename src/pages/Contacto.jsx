// src/pages/Contacto.jsx
import { ContactForm } from "../components/organism/Form";
import { SocialNetworks } from "../components/atoms/SocialNetworks";
import Seo from "../components/seo/Seo";

export const Contacto = () => {
  return (
    <>
      <Seo
        title="Contacto – Jubilamos"
        description="Escribínos o agendá tu entrevista virtual. Resolvemos consultas previsionales en todo el país."
        path="/contacto"
      />
      <main>
        <h1>CONTACTANOS</h1>
        <ContactForm />

        <div className="socialCard">
          <p>¡También podés contactarnos a través de nuestras redes sociales!</p>
          <SocialNetworks />
        </div>

        <br />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3349961380827!2d-58.3938796!3d-34.5956896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabdfb5e76a9%3A0x47006ce9bde4a929!2sAv.%20Sta.%20Fe%201845%2C%20C1123AAA%20CABA!5e0!3m2!1ses-419!2sar!4v1705924921762!5m2!1ses-419!2sar"
          width="75%"
          height="400"
          style={{ border: 0, display: "block", margin: "2rem auto 0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa: Av. Santa Fe 1845, CABA"
        />
      </main>
    </>
  );
};
