// src/pages/ReajusteDeHaberes.jsx

import Seo from "../components/seo/Seo";
import ReajustesPhoto from "../assets/images/reajustes.webp";

export const ReajusteDeHaberes = () => {
  return (
    <>
      {/* ✅ Descripción corregida */}
      <Seo
        title="Reajuste de haberes – Jubilamos"
        description="Revisamos tu haber previsional, calculamos el monto correcto y promovemos el reclamo administrativo o judicial para actualizarlo."
        path="/reajustedehaberes"/>
  <main>
    <h1>Reajuste de haberes</h1><img
  className="pages__img"
  src={ReajustesPhoto}
  alt="Reajuste de haberes previsionales"/>
    <p>En nuestro país, 1 de cada 5 personas cobra menos de lo que le corresponde. Recordá siempre que es tu dinero, el cual aportaste a lo largo de la vida, y es tu derecho reclamarlo.
    </p><p>
Numerosos fallos de la Justicia Federal en distintas jurisdicciones del país vienen declarando la inconstitucionalidad de la fórmula de movilidad vigente, por considerar que ha provocado una pérdida significativa del poder adquisitivo en los haberes previsionales. En muchos casos, las sentencias reconocen que las personas jubiladas cobran hasta un 50% menos de lo que deberían percibir.
</p><p>
Estos pronunciamientos se apoyan, además, en antecedentes clave de la Corte Suprema de Justicia de la Nación, como los fallos Badaro y Elliff, que reafirmaron el carácter sustitutivo del haber previsional y la necesidad de que las jubilaciones mantengan su valor real en el tiempo. A la luz de estos principios, la justicia sigue amparando los reclamos cuando se acredita una pérdida injustificada en el haber jubilatorio.
</p><p>
No se trata de un reajuste automático: es necesario presentar un reclamo judicial individual para que se analice tu situación y se reconozca el haber que realmente te corresponde. La Justicia está amparando estos reclamos cuando existen fundamentos legales, económicos y documentales suficientes.
Revisamos el cálculo de tu Jubilación/Pensión para verificar si estás cobrando correctamente e iniciamos un reclamo judicial para lograr el reajuste de tu haber mensual.
</p><p>
El proceso se lleva a cabo mediante el análisis de la viabilidad del reclamo de ajuste. Determinamos el monto aproximado del aumento que podrías obtener y luego procedemos a presentar el reclamo ante ANSES. Si el organismo deniega la solicitud o guarda silencio, nos habilita a iniciar una demanda ante la Justicia Federal.
</p><h3 className="h3__subtitle">Ejecución de Sentencias y Liquidaciones</h3>
    <p>Al no cumplir ANSES con las órdenes judiciales, muchas veces las liquidaciones que se ponen al pago dan cuantías que no son las correctas, estableciendo así pagos más bajos de los que corresponden, incumpliendo con dichas mandas y calculando mal los desembolsos, dejando montos pendientes.</p><p>
    Es por ello que, en el caso de que hayas cobrado un juicio de reajuste contra ANSES o dicho organismo no haya cumplido con la sentencia, realizamos el control y la revisión, exigiendo el cumplimiento y el correcto pago.</p><p>
    Recordá que ANSES tiene, una vez firme la sentencia, 120 días hábiles para cumplir con la misma. Pasado dicho plazo, podes ejecutar la sentencia y exigir el pago mediante la “Ejecución de Sentencia”.</p>
  </main></>
  );
};
