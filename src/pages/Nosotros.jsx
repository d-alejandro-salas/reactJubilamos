// src/pages/Nosotros.jsx

import { Link } from 'react-router-dom';
import { ContactForm } from '../components/organism/Form'; // 👈 IMPORTACIÓN

export const Nosotros = () => {
  return (
    <main className="nosotros-page">
      <h1>NOSOTROS</h1>
      <p>
        En Jubilamos, nuestra prioridad es brindar apoyo integral a nuestros clientes en todas las etapas de sus trámites ante ANSES y en la protección de sus derechos. Nos especializamos en ofrecer asesoramiento y la mejor orientación, asegurando la máxima seguridad jurídica y bienestar para quienes confían en nuestros servicios.
      </p>
      <p>
        Nuestro compromiso es garantizar la más alta calidad en la asistencia que proporcionamos. Con calidez, celeridad y una amplia experiencia en el campo, trabajamos incansablemente para asegurar que cada cliente reciba el apoyo necesario de manera oportuna y eficiente. Creemos firmemente en la importancia de proteger los derechos y velar el bienestar en cada paso del proceso.
      </p>
      <p>
        En Jubilamos, fusionamos calidez humana con experiencia legal. Cada caso es abordado con dedicación y cuidado. Tu tranquilidad y satisfacción son nuestra meta constante, de la mano de los especialistas Dr. Monti y Dr. Ferrara, abogados dedicados exclusivamente al Derecho Previsional.
      </p>
      <ul>
        <li><Link to="/jubilaciones">✅ Jubilaciones</Link></li>
        <li><Link to="/pensionesPorFallecimiento">✅ Pensiones</Link></li>
        <li><Link to="/rentaVitalicia">✅ Rentas Vitalicias</Link></li>
        <li><Link to="/reajustedehaberes">✅ Reajuste de Haberes</Link></li>
        <li><Link to="/sucesiones">✅ Sucesiones</Link></li>
      </ul>
      <p>
        Tenemos ubicadas nuestras oficinas en el corazón de la Recoleta, en la Ciudad de Buenos Aires, realizamos trámites y gestiones previsionales en todo el país.
      </p>
      <p>
        <u>ENTREVISTAS VIRTUALES</u>: En nuestro estudio jurídico, realizamos entrevistas de forma remota, ofreciéndote la comodidad de evitar desplazamientos a nuestras oficinas. Podés comunicarte con nosotros a través de <a href="https://api.whatsapp.com/send/?phone=5491132140614">WhatsApp</a>, teléfono o <a href="mailto:jubilamosinf@hotmail.com">correo electrónico</a>. Tu tranquilidad es nuestra prioridad, y nuestro compromiso es brindarte el respaldo que necesites.
      </p>
      {/* Aquí va tu formulario */}
      
    </main>
  );
};
