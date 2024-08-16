// src/pages/HomePage.jsx

import HomePageCard from '../components/molecules/HomePageCard';

export const HomePage = () => {
  return (
    <>
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
      </section><main><br />      
      <HomePageCard/>
    </main></>
  );
};
