// src/pages/HomePage.jsx

import { useState, useEffect, useRef } from "react"; 
import ConsultationCTA from "../components/molecules/ConsultationCta";
import Seo from "../components/seo/Seo";
import { HomePageCard } from "../components/molecules/HomePageCard";
import WellnessSectionBanner from "../components/organism/WellnessSectionBanner";
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
        description="Estudio jurídico especializado en jubilaciones, pensiones, reajustes y sucesiones. Atención remota en todo el país."
        path="/"
      />

      {/* ========================================================
          HERO SECTION REDISEÑADO (Conserva todo el contenido)
          ======================================================== */}
      <section id="introduction" className="heroSection">
        <div className="heroContainer">
          
          {/* Badge institucional */}
          <div className="heroBadge">
            <span className="heroBadgeDot"></span>
            Dres. Monti & Ferrara • Estudio Jurídico Previsional
          </div>

          {/* Título Principal */}
          <h1 className="heroTitle">
            Estudio Jurídico Especializado en <span className="heroHighlight">Derecho Previsional</span> y Sucesiones
          </h1>

          {/* Párrafo Principal */}
          <p className="heroDescription">
            En <strong>Jubilamos</strong> nos especializamos en brindarte la mejor orientación y resguardo en tus trámites frente a <strong>ANSES</strong>, tanto en sede administrativa como judicial, garantizándote máxima seguridad jurídica, calidez y celeridad a lo largo de todo el proceso.
          </p>

          {/* Puntos clave / Entrevistas Virtuales */}
          <div className="heroFeatures">
            <div className="heroFeatureItem">
              <span className="heroCheck">✓</span> <strong>Entrevistas Virtuales:</strong> Asesoramiento remoto sin necesidad de desplazarte
            </div>
            <div className="heroFeatureItem">
              <span className="heroCheck">✓</span> <strong>Alcance Nacional:</strong> Gestionamos trámites en todo el país
            </div>
            <div className="heroFeatureItem">
              <span className="heroCheck">✓</span> <strong>Defensa Integral:</strong> Protección de tus derechos en sede administrativa y judicial
            </div>
          </div>

          {/* Botones de Acción (WhatsApp / Llamada directa) */}
          <div className="heroCtaWrapper">
            <ConsultationCTA />
          </div>

          {/* Vías de contacto secundarias */}
          <p className="heroContactNote">
            Podés comunicarte también por teléfono al <a href="tel:+541132140614">+54 11 3214-0614</a> o vía mail a <a href="mailto:jubilamosinf@hotmail.com">jubilamosinf@hotmail.com</a>. Tu tranquilidad es nuestra prioridad.
          </p>

        </div>
      </section>	
      
      {/* ========================================================
          CONTENIDO PRINCIPAL
          ======================================================== */}
      <main>
        <br />
        <HomePageCard />
        
        <div style={{ 
          height: isMobile ? syncedHeight : "auto", 
          transition: "height 0.1s ease",
          display: "flex", 
          flexDirection: "column",
          width: "100%"
        }}>
          <WellnessSectionBanner />        
        </div>

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

export default HomePage;