// src/pages/WellnessSectionPage.jsx

import Seo from "../components/seo/Seo";

export const WellnessSectionPage = () => {
  return (
    <>
      <Seo
        title="Salud Cardiovascular – Jubilamos"
        description="Consejos para cuidar el corazón después de los 60. Prevención y hábitos saludables."
        path="/articulos"
      />
      <main>
        <h1>La salud cardiovascular después de los 60</h1>

        <p className="bigFontSize">
          <strong>Qué dice la evidencia y qué se puede hacer</strong>
        </p>

        <p className="bigFontSize">
          Envejecer no significa resignarse a problemas cardíacos. De hecho, muchas enfermedades cardiovasculares pueden prevenirse o retrasarse con hábitos adecuados, incluso después de los 60 años.
        </p>

        <p>
          Según la Organización Mundial de la Salud, las enfermedades cardiovasculares siguen siendo la principal causa de muerte a nivel mundial. Sin embargo, la mayoría de los factores de riesgo son modificables.
        </p>

        <br />

        <h3 className="h3__subtitle">Los cuatro pilares que más impacto tienen</h3>
        <p>La evidencia científica es clara en estos puntos:</p>

        <h4>1. Presión arterial controlada</h4>
        <p>
          La hipertensión es uno de los factores de riesgo más importantes. Estudios publicados en revistas como The Lancet han demostrado que mantener la presión dentro de valores normales reduce significativamente el riesgo de infarto y ACV.
        </p>

        <h4>2. Actividad física regular</h4>
        <p>
          No hace falta entrenamiento intenso. Caminar 30 minutos diarios ya reduce riesgo cardiovascular. La Asociación Americana del Corazón recomienda actividad moderada cinco días por semana.
        </p>

        <h4>3. Alimentación equilibrada</h4>
        <p>
          Patrones como la dieta mediterránea han mostrado en múltiples estudios disminuir eventos cardiovasculares, mejorar el perfil lipídico y reducir inflamación.
        </p>

        <h4>4. Control del colesterol y la glucosa</h4>
        <p>
          La detección precoz permite intervenir antes de que aparezcan complicaciones.
        </p>

        <h3 className="h3__subtitle">Después de jubilarse, ¿qué cambia?</h3>
        <p>
          Muchas personas reducen su nivel de actividad física al dejar el trabajo. También pueden cambiar los hábitos alimentarios o aumentar el sedentarismo. Por eso esta etapa requiere atención consciente.
        </p>
        <p>
          No se trata de vivir con miedo, sino de entender que pequeñas decisiones diarias tienen impacto acumulativo.
        </p>

        <h3 className="h3__subtitle">Señales que no deben ignorarse</h3>
        <p>• Dolor en el pecho</p>
        <p>• Falta de aire inusual</p>
        <p>• Mareos frecuentes</p>
        <p>• Hinchazón persistente en piernas</p>
        
        <p><strong>Ante estos síntomas siempre corresponde consulta médica.</strong></p>

        <br />

        <p>
          En Jubilamos creemos que una jubilación saludable también implica cuidar el corazón, porque la autonomía y la calidad de vida dependen directamente de ello.
        </p>
      </main>
    </>
  );
};