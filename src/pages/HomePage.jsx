// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import data from '../utils/data.json';

// Importar todas las imágenes
import jubilacionesImg from '../assets/Images/jubilaciones.webp';
import pensionImg from '../assets/Images/pension.webp';
import reajustesImg from '../assets/Images/reajustes.webp';
import invalidezImg from '../assets/Images/invalidez.webp';
import rentaVitaliciaImg from '../assets/Images/rentaVitalicia.webp';
import moratoriasImg from '../assets/Images/moratorias.webp';
import puamImg from '../assets/Images/puam.jpg';
import sucesionesImg from '../assets/Images/sucesiones.jpg';

// Mapeo de nombres de imágenes a sus importaciones
const imageMap = {
  'jubilaciones.jpg': jubilacionesImg,
  'pension.webp': pensionImg,
  'reajustes.webp': reajustesImg,
  'invalidez.webp': invalidezImg,
  'rentaVitalicia.webp': rentaVitaliciaImg,
  'moratorias.webp': moratoriasImg,
  'puam.jpg': puamImg,
  'sucesiones.jpg': sucesionesImg,
};

const HomePage = () => {
  return (
    <main>
      <section id="introduction">
        <h1>Estudio Jurídico especializado en Derecho Previsional y Sucesiones</h1>
        <p className="bigFontSize">
          En <span className="enterprise">Jubilamos</span> nos especializamos en ofrecerte asesoramiento y la mejor orientación en tus trámites frente al <u>ANSES</u>, protegiendo y resguardando tus derechos tanto en sede administrativa como judicial, proporcionándote así la máxima seguridad jurídica y defensa a lo largo de este camino. Nuestro compromiso es garantizar la más alta calidad en la asistencia.
        </p>
        <p>
          Con calidez, celeridad y una amplia experiencia en el campo, trabajamos incansablemente para asegurar que cada cliente reciba el apoyo necesario de manera oportuna y eficiente. Creemos firmemente en la importancia de proteger tus derechos en cada paso del proceso.
        </p>
        <p>
          <u>ENTREVISTAS VIRTUALES</u>: En nuestro estudio jurídico, realizamos entrevistas de forma remota, ofreciéndote la comodidad de evitar desplazamientos a nuestras oficinas. Podés comunicarte con nosotros a través de <a href="https://api.whatsapp.com/send/?phone=5491132140614">WhatsApp</a>, teléfono o <a href="mailto:jubilamosinf@hotmail.com">correo electrónico</a>. Tu tranquilidad es nuestra prioridad, y nuestro compromiso es brindarte el respaldo que necesites.
        </p>
      </section>
      <br />
      <section id="mainGrid">
        {data.map((item, index) => (
          <div key={index}>
            <Link className="mainGrid__link" to={`/${item.titulo.toLowerCase().replace(/ /g, '')}`}>
              <h2>{item.titulo}</h2>
              <div className="linkDescription__container">
                <img src={imageMap[item.imagen]} alt={item.titulo} />
                <p>{item.descripcion}</p>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
