// src/pages/DetailService.jsx

import Seo from "../components/seo/Seo";  
import React from 'react';

const PoliticaDePrivacidad = () => {
  return (
    <main style={{ padding: '2rem 5%', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
      
    <Seo title="Política de Privacidad y Aviso Legal | Jubilamos" description="Aviso legal y políticas de privacidad del estudio jurídico de los Dres. Monti y Ferrara." />
      <h1 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>Política de Privacidad y Aviso Legal</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#34495e' }}>1. Información Legal y Titularidad</h2>
        <p>
          El presente sitio web ("Jubilamos") es titularidad del Estudio Jurídico de los <strong>Dres. Maximiliano Monti y Ferrara</strong>. 
          Nuestro domicilio legal y oficinas de atención se encuentran en <strong>Av. Santa Fe 1845, Ciudad Autónoma de Buenos Aires (CABA)</strong>, Argentina.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#34495e' }}>2. Ejercicio Profesional y Resultados</h2>
        <p>
          La información contenida en este sitio web tiene carácter meramente informativo y divulgativo. En ningún caso constituye asesoramiento legal integral ni sustituye la consulta personalizada. 
          Cada situación previsional o jurídica es única y requiere un análisis previo y detallado de la documentación pertinente. No garantizamos resultados específicos, ya que los mismos dependen de los organismos correspondientes (ej. ANSES) y de las resoluciones judiciales.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#34495e' }}>3. Protección de Datos Personales</h2>
        <p>
          En cumplimiento de la <strong>Ley de Protección de Datos Personales (Ley N° 25.326)</strong> de la República Argentina, informamos que los datos recabados a través de WhatsApp, correos electrónicos o formularios de contacto serán tratados con absoluta confidencialidad y secreto profesional.
        </p>
        <p>
          Dichos datos se utilizarán única y exclusivamente para evaluar su caso, responder a sus consultas y brindarle el servicio legal solicitado. No compartimos, vendemos ni cedemos sus datos a terceros sin su consentimiento expreso.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#34495e' }}>4. Enlaces a Terceros</h2>
        <p>
          Este sitio puede contener enlaces a sitios web de terceros (como organismos oficiales). El Estudio Jurídico no se hace responsable por las políticas de privacidad ni por el contenido de dichos sitios externos.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.2rem', color: '#34495e' }}>5. Contacto</h2>
        <p>
          Para cualquier consulta relacionada con este aviso legal o el tratamiento de sus datos, puede comunicarse directamente a nuestros canales oficiales detallados en la sección de contacto.
        </p>
      </section>
    </main>
  );
};

export default PoliticaDePrivacidad;