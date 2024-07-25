// src/pages/PUAM.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SucesionesPhoto from '../assets/Images/sucesiones.jpg';

const Sucesiones = () => {
  return (
  <main>
    <h1>Sucesiones</h1>
    <img className="pages__img" src={SucesionesPhoto} />
    <p>En momentos de duelo, enfrentar la burocracia y los trámites legales puede ser abrumador. En nuestro estudio jurídico especializado en sucesiones, comprendemos las dificultades y los desafíos que implica la gestión de los asuntos legales tras la pérdida de un ser querido.</p>
    <p>Nuestro equipo de abogados está dedicado a brindarle un servicio integral y personalizado en cada etapa del proceso sucesorio. Desde la obtención de los documentos necesarios hasta la distribución de los bienes, nos encargamos de todos los aspectos legales. Con años de experiencia en la materia, hemos asistido a numerosas familias en la resolución exitosa de sus sucesiones, por lo que nos comprometemos a ofrecerle una atención personalizada, escuchando sus necesidades y preocupaciones, y proporcionándole soluciones efectivas y adaptadas a su situación particular.</p>
  </main>
  );
};

export default Sucesiones;
