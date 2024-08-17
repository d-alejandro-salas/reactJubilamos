// src/pages/Reajustes.jsx

import { Link } from 'react-router-dom';
import ReajustesPhoto from '../assets/images/reajustes.webp';

export const ReajusteDeHaberes = () => {
  return (
  <main>
    <h1>Reajuste de haberes</h1>
    <img className="pages__img" src={ReajustesPhoto} />
    <p>En nuestro país, 1 de cada 5 personas cobra menos de lo que le corresponde. Recordá siempre que es tu dinero el cual aportaste a lo largo de la vida y es tu derecho reclamarlo.</p><br />
    <ul>
      <li>- Si te jubilaste por ANSES antes de marzo del año 2018 o la pensión de tu esposo es de esa fecha.</li>
      <li>- No aceptaste la Reparación Histórica.</li>
      <li>- Gran parte de los aportes que realizaste fueron en relación de dependencia.</li>
    </ul>
    <br />
    <p>Revisamos el cálculo de tu jubilación para verificar si estás cobrando correctamente e iniciamos un reclamo judicial para lograr el reajuste de tu haber mensual.</p><p>
    El proceso se lleva a cabo mediante el análisis de la viabilidad del reclamo de ajuste. Determinamos el monto aproximado del aumento que podrías obtener y luego procedemos a presentar el reclamo ante ANSES. Si el organismo deniega la solicitud, nos permite iniciar una demanda ante la Justicia Federal.</p>

    <h3 className="h3__subtitle">Ejecución de Sentencias y Liquidaciones</h3>
    <p>Al no cumplir ANSES con las órdenes judiciales, muchas veces las liquidaciones que se ponen al pago dan cuantías que no son las correctas, estableciendo así pagos más bajos de los que corresponden, incumpliendo con dichas mandas y calculando mal los desembolsos, dejando montos pendientes.</p><p>
    Es por ello que, en el caso de que hayas cobrado un juicio de reajuste contra ANSES o dicho organismo no haya cumplido con la sentencia, realizamos el control y la revisión, exigiendo el cumplimiento y el correcto pago.</p><p>
    Recordá que ANSES tiene, una vez firme la sentencia, 120 días hábiles para cumplir con la misma. Pasado dicho plazo, podes ejecutar la sentencia y exigir el pago mediante la “Ejecución de Sentencia”.</p>
  </main>
  );
};
