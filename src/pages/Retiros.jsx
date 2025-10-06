// src/pages/Retiros.jsx
import Invalidez from "../assets/images/invalidez.webp";
import Seo from "../components/seo/Seo";

export const Retiros = () => {
  return (
    <>
      {/* ✅ Descripción propia de Retiros */}
      <Seo
        title="Retiros por invalidez – Jubilamos"
        description="Te asesoramos para acceder al retiro por invalidez: requisitos médicos, condición de aportante y tramitación ante ANSES."
        path="/retirosporinvalidez"
      />
      <main>
        <h1>Retiros por invalidez</h1>
        <img className="pages__img" src={Invalidez} alt="Retiro por invalidez: asesoramiento y trámite" />
        
      <p>Hombres y mujeres que no alcanzaron la edad para acceder a la jubilación ordinaria, que tengan una incapacidad laboral del 66% determinada por junta médica y que cumplan con la condición de "aportante regular" o "aportante irregular con derecho" podrán acceder a este beneficio.</p>
      <p>No te demores, hace tu consulta. Contáctanos para que podamos evaluar tu situación y brindarte la asistencia necesaria, el tiempo es muy importante para que accedas a este beneficio.</p>
    </main></>
  );
};
