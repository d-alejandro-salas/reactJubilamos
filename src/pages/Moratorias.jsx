// src/pages/Moratorias.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import MoratoriasPhoto from '../assets/Images/moratorias.webp';

const Moratorias = () => {
  return (
    <main>
      <img className="pages__img" src={MoratoriasPhoto}/>
      <h1>Moratoria</h1>
      <p>Para aquellos que se encuentren en edad de jubilarse y les falten aportes, podrán acceder a la jubilación utilizando la moratoria vigente. Este mecanismo brinda la oportunidad de regularizar la situación previsional y así avanzar hacia un futuro garantizado y tranquilo.</p>
    </main>
  );
};

export default Moratorias;
