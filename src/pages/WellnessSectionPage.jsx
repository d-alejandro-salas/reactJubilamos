import Seo from '../components/seo/Seo';

const PILLARS = [
  {
    title: '1. Presión arterial controlada',
    text: 'La hipertensión es uno de los factores de riesgo más importantes. Estudios publicados en revistas como The Lancet han demostrado que mantener la presión dentro de valores normales reduce significativamente el riesgo de infarto y ACV.',
  },
  {
    title: '2. Actividad física regular',
    text: 'No hace falta entrenamiento intenso. Caminar 30 minutos diarios ya reduce riesgo cardiovascular. La Asociación Americana del Corazón recomienda actividad moderada cinco días por semana.',
  },
  {
    title: '3. Alimentación equilibrada',
    text: 'Patrones como la dieta mediterránea han mostrado en múltiples estudios disminuir eventos cardiovasculares, mejorar el perfil lipídico y reducir inflamación.',
  },
  {
    title: '4. Control del colesterol y la glucosa',
    text: 'La detección precoz permite intervenir antes de que aparezcan complicaciones.',
  },
];

const WARNING_SIGNS = ['Dolor en el pecho', 'Falta de aire inusual', 'Mareos frecuentes', 'Hinchazón persistente en piernas'];

export default function WellnessSectionPage() {
  return (
    <>
      <Seo
        title="Salud Cardiovascular – Jubilamos"
        description="Consejos para cuidar el corazón después de los 60. Prevención y hábitos saludables."
        path="/articulos"
        type="article"
      />
      <main>
        <h1>La salud cardiovascular después de los 60</h1>

        <p className="bigFontSize">
          <strong>Qué dice la evidencia y qué se puede hacer</strong>
        </p>
        <p className="bigFontSize">
          Envejecer no significa resignarse a problemas cardíacos. De hecho, muchas enfermedades cardiovasculares pueden
          prevenirse o retrasarse con hábitos adecuados, incluso después de los 60 años.
        </p>
        <p>
          Según la Organización Mundial de la Salud, las enfermedades cardiovasculares siguen siendo la principal causa
          de muerte a nivel mundial. Sin embargo, la mayoría de los factores de riesgo son modificables.
        </p>

        <h3 className="h3__subtitle">Los cuatro pilares que más impacto tienen</h3>
        <p>La evidencia científica es clara en estos puntos:</p>

        {PILLARS.map(({ title, text }) => (
          <section key={title}>
            <h4>{title}</h4>
            <p>{text}</p>
          </section>
        ))}

        <h3 className="h3__subtitle">Después de jubilarse, ¿qué cambia?</h3>
        <p>
          Muchas personas reducen su nivel de actividad física al dejar el trabajo. También pueden cambiar los hábitos
          alimentarios o aumentar el sedentarismo. Por eso esta etapa requiere atención consciente.
        </p>
        <p>
          No se trata de vivir con miedo, sino de entender que pequeñas decisiones diarias tienen impacto acumulativo.
        </p>

        <h3 className="h3__subtitle">Señales que no deben ignorarse</h3>
        <ul className="bulletList">
          {WARNING_SIGNS.map((sign) => (
            <li key={sign}>{sign}</li>
          ))}
        </ul>
        <p>
          <strong>Ante estos síntomas siempre corresponde consulta médica.</strong>
        </p>

        <p>
          En Jubilamos creemos que una jubilación saludable también implica cuidar el corazón, porque la autonomía y la
          calidad de vida dependen directamente de ello.
        </p>
      </main>
    </>
  );
}
