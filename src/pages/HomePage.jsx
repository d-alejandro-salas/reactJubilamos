import { useState, useEffect, useRef } from "react"; 

import Seo from "../components/seo/Seo";
import { HomePageCard } from "../components/molecules/HomePageCard";
import WellnessSectionBanner from "../components/organism/WellnessSectionBanner";

// ⚠️ Recordá: datosX = Celular | datosY = Escritorio
import datosX from "../assets/images/datosCelular.png"; 
import datosY from "../assets/images/datosEscritorio.png"; 

export const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [syncedHeight, setSyncedHeight] = useState("auto");
  const ansesImageRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile || !ansesImageRef.current) {
      setSyncedHeight("auto");
      return;
    }

    const imgElement = ansesImageRef.current;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setSyncedHeight(`${entry.borderBoxSize[0].blockSize}px`);
      }
    });

    resizeObserver.observe(imgElement);

    return () => resizeObserver.disconnect();
  }, [isMobile]);

  return (
    <>
      <Seo
        title="Jubilamos – Derecho Previsional y Sucesiones"
        description="Estudio jurídico especializado en jubilaciones..."
        path="/"
      />

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
        
        {/* EL ENVOLTORIO: Con flexbox para que el hijo obedezca la altura */}
        <div style={{ 
          height: isMobile ? syncedHeight : "auto", 
          transition: "height 0.1s ease",
          display: "flex", 
          flexDirection: "column",
          width: "100%"
        }}>
          <WellnessSectionBanner />        
        </div>

        {/* LÓGICA CORREGIDA: Si es móvil muestra X, si no muestra Y */}
        {isMobile ? (
          <img
            ref={ansesImageRef} 
            src={datosX} 
            alt="Alerta de estafas virtuales de ANSES"
            className="ansesBannerImg"
            onLoad={(e) => setSyncedHeight(`${e.target.offsetHeight}px`)} 
          />
        ) : (
          <div className="ansesImgContainer">
            <img
              src={datosY}
              alt="Alerta de estafas virtuales de ANSES"
              className="ansesBannerImgX"
            />
          </div>
        )}
      </main>
    </>
  );
};