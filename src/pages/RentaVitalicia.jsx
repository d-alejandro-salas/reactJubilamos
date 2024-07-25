// src/pages/Retiros.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import RentaVitaliciaPhoto from '../assets/Images/rentaVitalicia.webp';

const RentaVitalicia = () => {
  return (
    <main>
      <img className="pages__img" src={RentaVitaliciaPhoto}/>
      <h1>Renta Vitalicia</h1>
      <p>Si tenes una Pensión / Renta Vitalicia de una Compañía de Seguro de Retiro –ex AFJP- y cobras menos que la jubilación mínima, iniciamos el reclamo para que obtengas los aumentos y así reajustar tu haber mensual con los fallos de la Corte Suprema de Justicia de la Nación.</p>
      <p>Tu Pensión / Renta Vitalicia nunca puede ser menor a la jubilación mínima; es tu derecho tener los aumentos que otorga ANSES. Así, ante los bajísimos valores de quienes aún cobran una renta vitalicia privada, exigiremos mediante el reclamo judicial el complemento de las diferencias para que así puedas cobrar todos los meses lo que te corresponde.</p>
    </main>
  );
};

export default RentaVitalicia;
