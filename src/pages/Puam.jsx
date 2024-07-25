// src/pages/PUAM.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PuamPhoto from '../assets/Images/puam.jpg';

const PUAM = () => {
  return (
  <main>
    <h1>Puam</h1>
    <img className="pages__img" src={PuamPhoto} />
    <p>En caso de que tengas 65 años de edad y no puedas jubilarte por falta de aportes, gestionamos la Pensión Universal al Adulto Mayor. Este beneficio es equivalente al 80% de una jubilación mínima y se actualiza por la Ley de Movilidad.</p>
    <p>PUAM es la cobertura previsional destinada a las personas mayores de 65 años, que no cuentan con ninguna jubilación o pensión. Deben ser argentinos o naturalizados con 10 años de residencia en el país (anteriores a la solicitud), o extranjero con una residencia mínima de 20 años y mantener la residencia en el país una vez solicitada la pensión.</p>
    <p>No deberán cobrar ni tener derecho a ninguna jubilación o pensión de un organismo nacional o de cajas o institutos provinciales o municipales, ni seguro de desempleo. El monto es equivalente al 80% de una jubilación mínima y se actualiza por la Ley de Movilidad. Las personas que cobran esta pensión cuentan con cobertura de salud y servicios de PAMI, pueden acceder al cobro de asignaciones familiares (por hijo/hijo con discapacidad, por cónyuge y ayuda escolar anual) y a los créditos ANSES.</p>
  </main>
  );
};

export default PUAM;
