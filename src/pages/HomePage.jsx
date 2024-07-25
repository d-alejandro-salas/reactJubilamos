// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import jubilacionesImg from '../assets/Images/jubilaciones.webp';
import pensionImg from '../assets/Images/pension.webp';
import reajustesImg from '../assets/Images/reajustes.webp';
import invalidezImg from '../assets/Images/invalidez.webp';
import rentaVitaliciaImg from '../assets/Images/rentaVitalicia.webp';
import moratoriasImg from '../assets/Images/moratorias.webp';
import puamImg from '../assets/Images/puam.jpg';
import sucesionesImg from '../assets/Images/sucesiones.jpg';

const HomePage = () => {
  return (
    <main>
      <section id="introduction">
        <h1>
          Estudio Jurídico especializado en Derecho Previsional y Sucesiones
        </h1>
        <p className="bigFontSize">
          En <span className="enterprise">Jubilamos</span> nos especializamos en ofrecerte asesoramiento y la mejor orientación en tus trámites frente al <u>ANSES</u>, protegiendo y resguardando tus derechos tanto en sede administrativa como judicial, proporcionándote así la máxima seguridad jurídica y defensa a lo largo de este camino. Nuestro compromiso es garantizar la más alta calidad en la asistencia.
        </p>
        <p>
          Con calidez, celeridad y una amplia experiencia en el campo, trabajamos incansablemente para asegurar que cada cliente reciba el apoyo necesario de manera oportuna y eficiente. Creemos firmemente en la importancia de proteger tus derechos en cada paso del proceso.
        </p>
        <p>
          <u>ENTREVISTAS VIRTUALES</u>: En nuestro estudio jurídico, realizamos entrevistas de forma remota, ofreciéndote la comodidad de evitar desplazamientos a nuestras oficinas. Podés comunicarte con nosotros a través de <a href="https://api.whatsapp.com/send/?phone=5491132140614">WhatsApp</a>, teléfono o <a href="mailto:jubilamosinf@hotmail.com">correo electrónico</a>. Tu tranquilidad es nuestra prioridad, y nuestro compromiso es brindarte el respaldo que necesites.
        </p>
      </section><br/>
      <section id="mainGrid">
        <div>
          <Link className="mainGrid__link" to="/jubilaciones">
            <h2>Jubilaciones</h2>
            <div className="linkDescription__container">
              <img src={jubilacionesImg} alt="Jubilaciones" />
              <p>
                Tramitamos la mejor jubilación posible para nuestros clientes, brindándoles un servicio integral, analizando requisitos de edad y aportes realizados; también brindamos la posibilidad de que accedan a la jubilación utilizando las moratorias vigentes en caso de no contar con los aportes requeridos por ley.
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link className="mainGrid__link" to="/pensionesPorFallecimiento">
            <h2>Pensiones por fallecimiento</h2>
            <div className="linkDescription__container">
              <img src={pensionImg} alt="Pensiones por fallecimiento" />
              <p>
                Ante el fallecimiento de un trabajador en actividad o jubilado, tendrán derecho a solicitar el beneficio de Pensión los cónyuges/convivientes o sus hijos menores e hijos mayores discapacitado.
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link className="mainGrid__link" to="/reajusteHaberes">
            <h2>Reajuste de haberes ejecución de sentencias</h2>
            <div className="linkDescription__container">
              <img src={reajustesImg} alt="Reajuste de haberes" />
              <p>
                En nuestro país, 1 de cada 5 personas cobra menos de lo que le corresponde. Recordá siempre que es tu dinero el cual aportaste a lo largo de la vida y es tu derecho reclamarlo.
              </p>
              <p>
                Revisamos el cálculo de tu jubilación para verificar si estás cobrando correctamente e iniciamos un reclamo judicial para lograr el reajuste de tu haber mensual.
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link className="mainGrid__link" to="/retiros">
            <h2>Retiros por invalidez</h2>
            <div className="linkDescription__container">
              <img src={invalidezImg} alt="Retiros por invalidez" />
              <p>
                Hombres y mujeres que no alcanzaron la edad para acceder a la jubilación ordinaria, que tengan una incapacidad laboral del 66% determinada por junta médica y que cumplan con la condición de «aportante regular» o «aportante irregular con derecho», podrán acceder a este beneficio.
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link className="mainGrid__link" to="/rentaVitalicia">
            <h2>Renta vitalicia</h2>
            <div className="linkDescription__container">
              <img src={rentaVitaliciaImg} alt="Renta vitalicia" />
              <p>
                Si tenes una Pensión / Renta Vitalicia de una Compañía de Seguro de Retiro –ex AFJP- y cobras menos que la jubilación mínima, iniciamos el reclamo para lograr los aumentos y reajustar tu haber mensual con los fallos de la Corte Suprema de Justicia de la Nación.
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link className="mainGrid__link" to="/moratorias">
            <h2>Moratorias</h2>
            <div className="linkDescription__container">
              <img src={moratoriasImg} alt="Moratorias" />
              <p>
                Toda persona que no cuente con los años de aportes necesarios, sean trabajadores autónomos o empleados en relación de dependencia, podrán acceder a una jubilación o pensión por fallecimiento de un trabajador mediante la adhesión a una moratoria.
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link className="mainGrid__link" to="/PUAM">
            <h2>PUAM</h2>
            <div className="linkDescription__container">
              <img src={puamImg} alt="PUAM" />
              <p>
                En caso de que tengas 65 años de edad y no puedas jubilarte por falta de aportes, gestionamos la Pensión Universal al Adulto Mayor. Este beneficio es equivalente al 80% de una jubilación mínima y se actualiza por la Ley de Movilidad.
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link className="mainGrid__link" to="/sucesiones">
            <h2>Sucesiones</h2>
            <div className="linkDescription__container">
              <img src={sucesionesImg} alt="Sucesiones" />
              <p>
                Te brindamos el respaldo y la orientación adecuada para gestionar los aspectos legales que conlleva una sucesión. En nuestro estudio jurídico, entendemos la complejidad y la sensibilidad que rodea este proceso, con años de experiencia y un equipo comprometido, estamos aquí para brindarle la asesoría que necesitas para afrontar este camino con confianza y tranquilidad.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
