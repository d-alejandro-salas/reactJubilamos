import Seo from '../components/seo/Seo';

const SECTIONS = [
  {
    title: '1. Información Legal y Titularidad',
    paragraphs: [
      <>
        El presente sitio web (“Jubilamos”) es titularidad del Estudio Jurídico de los{' '}
        <strong>Dres. Maximiliano Monti y Ferrara</strong>. Nuestro domicilio legal y oficinas de atención se encuentran
        en <strong>Av. Santa Fe 1845, Ciudad Autónoma de Buenos Aires (CABA)</strong>, Argentina.
      </>,
    ],
  },
  {
    title: '2. Ejercicio Profesional y Resultados',
    paragraphs: [
      'La información contenida en este sitio web tiene carácter meramente informativo y divulgativo. En ningún caso constituye asesoramiento legal integral ni sustituye la consulta personalizada. Cada situación previsional o jurídica es única y requiere un análisis previo y detallado de la documentación pertinente. No garantizamos resultados específicos, ya que los mismos dependen de los organismos correspondientes (ej. ANSES) y de las resoluciones judiciales.',
    ],
  },
  {
    title: '3. Protección de Datos Personales',
    paragraphs: [
      <>
        En cumplimiento de la <strong>Ley de Protección de Datos Personales (Ley N° 25.326)</strong> de la República
        Argentina, informamos que los datos recabados a través de WhatsApp, correos electrónicos o formularios de
        contacto serán tratados con absoluta confidencialidad y secreto profesional.
      </>,
      'Dichos datos se utilizarán única y exclusivamente para evaluar su caso, responder a sus consultas y brindarle el servicio legal solicitado. No compartimos, vendemos ni cedemos sus datos a terceros sin su consentimiento expreso.',
    ],
  },
  {
    title: '4. Enlaces a Terceros',
    paragraphs: [
      'Este sitio puede contener enlaces a sitios web de terceros (como organismos oficiales). El Estudio Jurídico no se hace responsable por las políticas de privacidad ni por el contenido de dichos sitios externos.',
    ],
  },
  {
    title: '5. Contacto',
    paragraphs: [
      'Para cualquier consulta relacionada con este aviso legal o el tratamiento de sus datos, puede comunicarse directamente a nuestros canales oficiales detallados en la sección de contacto.',
    ],
  },
];

export default function PoliticaDePrivacidad() {
  return (
    <>
      <Seo
        title="Política de Privacidad y Aviso Legal | Jubilamos"
        description="Aviso legal y políticas de privacidad del estudio jurídico de los Dres. Monti y Ferrara."
        path="/politica-de-privacidad"
      />
      <main className="legalPage">
        <h1>Política de Privacidad y Aviso Legal</h1>
        {SECTIONS.map(({ title, paragraphs }) => (
          <section key={title} className="legalPage__section">
            <h2>{title}</h2>
            {paragraphs.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </section>
        ))}
      </main>
    </>
  );
}
