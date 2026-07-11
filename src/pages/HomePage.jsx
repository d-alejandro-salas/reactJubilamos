// src/pages/HomePage.jsx
import { useState, useEffect } from "react"; // IMPORTANTE: Agregamos los hooks de React

import Seo from "../components/seo/Seo";
import { HomePageCard } from "../components/molecules/HomePageCard";
import WellnessSectionBanner from "../components/organism/WellnessSectionBanner";

// Importación correcta de ambas imágenes
import datosY from "../assets/images/datosCelular.png";
import datosX from "../assets/images/datosEscritorio.png";

export const HomePage = () => {
  // 1. Creamos el booleano. Empieza en true si la pantalla es menor o igual a 768px (tamaño estándar de tablet/celular)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // 2. Escuchamos activamente si el usuario cambia el tamaño de la ventana o gira el celular
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    
    // Limpiamos el evento cuando el componente se desmonta para que no consuma memoria de más
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Seo
        title="Jubilamos – Derecho Previsional y Sucesiones"
        description="Estudio jurídico especializado en jubilaciones, pensiones y sucesiones. Atención remota en todo el país."
        path="/"/>

      <section id="introduction">
        <h1>Estudio Jurídico especializado en Derecho Previsional y Sucesiones</h1>
        <p className="bigFontSize">
          En <span className="enterprise">Jubilamos</span> nos especializamos en
          ofrecerte asesoramiento y la mejor orientación en tus trámites frente
          al <u>ANSES</u>, protegiendo y resguardando tus derechos tanto en sede
          administrativa como judicial, proporcionándote así la máxima seguridad
          jurídica y defensa a lo largo de este camino. Nuestro compromiso es
          garantizar la más alta calidad en la asistencia.
        </p>

        <p>
          Con calidez, celeridad y una amplia experiencia en el campo,
          trabajamos incansablemente para asegurar que cada cliente reciba el
          apoyo necesario de manera oportuna y eficiente. Creemos firmemente en
          la importancia de proteger tus derechos en cada paso del proceso.
        </p>

        <p>
          <u>ENTREVISTAS VIRTUALES</u>: En nuestro estudio jurídico, realizamos
          entrevistas de forma remota, ofreciéndote la comodidad de evitar
          desplazamientos a nuestras oficinas. Podés comunicarte con nosotros a
          través de{" "}
          <a href="https://api.whatsapp.com/send/?phone=5491132140614">
            WhatsApp
          </a>
          , teléfono o{" "}
          <a href="mailto:jubilamosinf@hotmail.com">correo electrónico</a>. Tu
          tranquilidad es nuestra prioridad, y nuestro compromiso es brindarte
          el respaldo que necesites.
        </p>
      </section>
      
      <main>
        <br />
        <HomePageCard />
        <WellnessSectionBanner />        
          {!isMobile ? (
            <div className="ansesImgContainer">
              <img
                src={datosX}
                alt="Alerta de estafas virtuales de ANSES"
                className="ansesBannerImgX"
              />
            </div>
          ) : (
            <img
              src={datosY}
              alt="Alerta de estafas virtuales de ANSES"
              className="ansesBannerImg"
            />
          )}
      </main>
    </>
  );
};