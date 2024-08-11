// src/pages/Jubilaciones.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Pension from '../assets/images/pension.webp';

const PensionesPorFallecimiento = () => {
  return (
    <main>
      <h1>Pensiones por fallecimiento</h1>
      <img className="pages__img" src={Pension} />
      <p className="bigFontSize">Ante el fallecimiento de un trabajador en actividad o jubilado, tendrán derecho a solicitar el beneficio de Pensión los cónyuges/convivientes o sus hijos menores e hijos mayores discapacitado.</p>
      <p className="bigFontSize">EnEn el estudio nos comprometemos a trabajar en tu nombre para asegurarte el reconocimiento de tu derecho a la pensión, evaluaremos en detalle la regularidad de los aportes necesarios para solicitar el beneficio ante ANSES, y en situaciones en las que tu derecho no sea reconocido, iniciaremos un reclamo judicial para obtener la compensación que te corresponde.</p>
      <h4>En el caso de un trabajador fallecido</h4>
      <p>
      Se requieren 30 años de aportes para el régimen común. Un aportante regular debe haber contribuido durante 30 meses o más en los últimos 36 meses previos al fallecimiento.</p>
      <p>Para un aportante irregular, se exige un mínimo de 18 meses de aportes dentro de los últimos 36 meses, 12 meses dentro de los últimos 60 meses, y tener la mitad del total de años requeridos por el régimen común o diferencial.</p>
      <p>Se deberá establecer el vínculo familiar. En el caso de convivientes, la situación es más compleja, ya que se debe demostrar la convivencia real con pruebas concretas. La convivencia debe tener una duración mínima de 5 años, reduciéndose a 2 años si hay hijos en común.</p>
    </main>
  );
};

export default PensionesPorFallecimiento;
