// src/pages/Jubilaciones.jsx

import { Link } from 'react-router-dom';
import jubilacionesImg from '../assets/images/jubilaciones.webp';

export const Jubilaciones = () => {
  return (
     <main>
      <h1>JUBILACIÓN</h1>
      <img className="pages__img" src={jubilacionesImg}/>
      <p className="bigFontSize">Tramitamos la mejor jubilación posible para nuestros clientes, brindándoles un servicio integral, donde se analizan requisitos de edad y aportes realizados; también posibilitamos el acceso a la jubilación utilizando las moratorias vigentes en caso de no contar con los aportes requeridos por ley.</p>
      <p className="bigFontSize">Nuestro enfoque se basa en analizar minuciosamente la situación de cada individuo de manera anticipada, permitiéndonos diseñar la estrategia correcta para obtener el mejor resultado en el proceso de la jubilación.</p><br />
          <h3 className="h3__subtitle">Requisitos necesarios para que puedas jubilarte</h3>
        <p>Con 60 años de edad si sos mujer o 65 años si sos varón y 30 años de aportes registrados podés acceder a la jubilación ordinaria. Te recordamos que los requisitos pueden variar según el tipo de trabajo que hayas realizado.</p>

        <h3 className="h3__subtitle">En caso de que no tengas todos los aportes</h3>
        <p>Podes complementarlos con aportes que hagas como autónomo o monotributistas; asimismo el exceso de edad es importante para compensarlos, con 1 año de aporte por cada 2 años de edad excedente.
        Y también, según la normativa, podes completarlos a través de las moratorias previsionales vigentes.</p>

        <h3 className="h3__subtitle">Reconocimiento de aportes por hijos - tareas de cuidado</h3>
        <p>Este es un beneficio que gozan las madres para que puedan jubilarse, reconociendo y valorando el tiempo que destinaron y destinan a la crianza de sus hijos.
        Las mujeres con hijos, en edad de jubilarse (60 años o más) que no cuenten con los años de aportes necesarios. Se computará 1 año de aportes por hijo y 2 años de aportes por hijo adoptado.
        Asimismo, se reconocerá de forma adicional 1 año por hijo con discapacidad y 2 años en caso de que haya sido beneficiario de la Asignación Universal por Hijo por al menos 12 meses. Además, se reconocerán los plazos de licencia por maternidad y de excedencia de maternidad a las mujeres que hayan hecho uso de estos períodos al momento del nacimiento de sus hijos.</p>
        <br /><br />  
        <h4>Ex combatientes de Malvinas</h4>
        <p>Las personas que participaron en la Guerra de Malvinas como soldados conscriptos o civiles, ya sea que su participación se dio en Teatro de Operaciones de Malvinas o Teatro de Operaciones del Atlántico Sur. 
        Con 53 años de edad o más y 10 años de aportes jubilatorios como trabajador. Si fuiste soldado conscripto se computarán 2 años de aportes.
        Es muy importante contar con la documentación que certifique la actividad como soldado conscripto; certificación actualizada al momento de pedir la jubilación (Art. 1 del Decreto 2634/90) con la situación de Revista: CONSCRIPTO o CIVIL, indicar que participó en el Teatro de Operaciones de Malvinas/Teatro de Operaciones del Atlántico Sur (no es necesario que figure explícitamente el perÍodo), suscripto por Departamento de Veteranos de la Guerra de Malvinas de la Fuerza, a su vez refrendado por el Ministerio de Defensa.</p>

        <h4>Jubilación especial para personas con VIH y/o Hepatitis B y/o C (Ley 27.675)</h4>
        <p>Las personas con VIH y/o Hepatitis B y/o C, podrán solicitar dicha jubilación en la medida en que éstas últimas condicionen o generen algún impedimento en su vida.
        Con 50 años de edad cumplidos y acreditando 20 años de servicios con aportes computables. También deberán certificar 10 años de antigüedad en el diagnóstico al momento de solicitar esta prestación.
        Diagnóstico de Hepatitis B y/o C: deberá contar con formulario único completo por el médico certificado en la oficina de la autoridad jurisdiccional designada por el Ministerio de Salud. Asimismo, se requerirá declaración jurada prestando consentimiento a fin de que el Ministerio de Salud de la Nación ceda la información relativa a su situación de salud, incluyendo diagnóstico de VIH o Hepatitis B y/o C y su fecha.</p>

        <h4>Jubilación Anticipada</h4>
        <p>Este beneficio está destinado a personas que cuenten con 30 años de aportes, le falten hasta 5 años para jubilarse y que estuvieran desempleadas al 30 de junio de 2023.
        Este garantiza el 80% del haber jubilatorio que te correspondería percibir cuando alcances la edad para jubilarte (mujeres 60 años y hombres 65 años). Al llegar a esa edad, comenzarás a cobrar el 100% del haber jubilatorio de manera automática.
        Requisitos: hasta 5 años menos de la edad requerida para jubilarse, hombres entre 60 y 64 años, y las mujeres entre 55 y 59 años. 30 años de aportes registrados y encontrarse desocupado al 30 de junio de 2023.</p>

        <h4>Trabajador agrario</h4>
        <p>Incluye las siguientes actividades, siempre que no se realicen en establecimientos industriales y aún cuando se desarrollen en centros urbanos: La manipulación y el almacenamiento de cereales, oleaginosos, legumbres, hortalizas, semillas u otros frutos o productos agrarios; Las que se prestaren en ferias y remates de hacienda; El empaque de frutos y productos agrarios propios; Cosecha y/o empaque de frutas en actividades reguladas por resoluciones de la Comisión Nacional de Trabajo Agrario (C.N.T.A.). Estarán incluidas hasta que se realice una Convención Colectiva de Trabajo que los comprenda y regule sus condiciones de trabajo y salarios (art. 3 del Decreto N° 301/13); Trabajadores que se desempeñen en las distintas etapas y tareas de la producción de una actividad agraria cíclica que se desarrolle dentro de un proceso temporal definido, siempre que las primeras tareas del proceso se enmarquen dentro de sus previsiones y no constituyan proceso industrial art. 4° del mencionado decreto.
        Requisitos: Tener 57 años, sin distinción de sexo y en Servicios 25 años con aportes como trabajador agrario en relación de dependencia.</p>
        <h4>Trabajadores de la construcción</h4>
        <p>Los trabajadores de la industria de la construcción de la Ley 22.250, gozarán de un régimen previsional diferencial.
        Requisitos: Los hombres, la edad requerida varía según el período trabajado. Del 1/5/2009 al 30/4/2010: 60 años; del 1/5/2010 al 30/4/2011: 57 años; del 1/5/2011 al 30/4/2012: 56 años y desde el 1/5/2012: 55 años. Las mujeres desde el 1/5/2009: 55 años.
        Y Servicios de 25 años con aportes, con al menos 12 años de los últimos 15 trabajados en la industria.
        Son esenciales las constancia de inscripción extendida por el Instituto de Estadística y Registro de la Industria de la Construcción del empleador como del trabajador a su cargo; los registros de afiliados a la Unión Obrera de la Construcción y de la Obra Social de la Construcción; la libreta de aportes al Fondo de Desempleo creado por la Ley 22.250 hasta el 31 de marzo de 2009 si corresponde y la credencial del registro laboral que extienda el Instituto de Estadística y Registro de la Industria de la Construcción (IERIC) a partir del 1º de abril de 2009.</p>
        <h4>Poder Judicial y Ministerio Público de la Nación</h4>
        <p>Con 60 años de edad para hombres y mujeres, y 30 años de servicios y 20 años de servicios con aportes computables en uno o más regímenes incluidos en el Sistema de Reciprocidad Jubilatoria. Deben al menos haberse desempeñado como mínimo 15 años continuos o 20 años discontinuos en el Poder Judicial de la Nación o en el Ministerio Público de la Nación o de las provincias adheridas al Régimen de Reciprocidad Jubilatoria o en la Fiscalía Nacional de Investigaciones Administrativas, de los cuales 5 años como mínimo deben registrarse en el desempeño de los cargos indicados en el apartado "Personal Comprendido"; haberse desempeñado como mínimo durante los últimos 10 años de servicios en cargos de los indicados en el apartado "Personal Comprendido".</p>
        <h4>Trabajadores agrarios</h4>
        <p>Incluye las siguientes actividades, siempre que no se realicen en establecimientos industriales y aún cuando se desarrollen en centros urbanos: La manipulación y el almacenamiento de cereales, oleaginosos, legumbres, hortalizas, semillas u otros frutos o productos agrarios; Las que se prestaren en ferias y remates de hacienda; El empaque de frutos y productos agrarios propios; Cosecha y/o empaque de frutas en actividades reguladas por resoluciones de la Comisión Nacional de Trabajo Agrario (C.N.T.A.). Estarán incluidas hasta que se realice una Convención Colectiva de Trabajo que los comprenda y regule sus condiciones de trabajo y salarios (art. 3 del Decreto N° 301/13); Trabajadores que se desempeñen en las distintas etapas y tareas de la producción de una actividad agraria cíclica que se desarrolle dentro de un proceso temporal definido, siempre que las primeras tareas del proceso se enmarquen dentro de sus previsiones y no constituyan proceso industrial art. 4° del mencionado decreto.
        Requisitos: Tener 57 años, sin distinción de sexo y en Servicios 25 años con aportes como trabajador agrario en relación de dependencia.</p>

        <h4>Trabajadores de la construcción</h4>
        <p>Los trabajadores de la industria de la construcción de la Ley 22.250, gozarán de un régimen previsional diferencial.
        Requisitos: Los hombres, la edad requerida varía según el período trabajado. Del 1/5/2009 al 30/4/2010: 60 años; del 1/5/2010 al 30/4/2011: 57 años; del 1/5/2011 al 30/4/2012: 56 años y desde el 1/5/2012: 55 años. Las mujeres desde el 1/5/2009: 55 años.
        Y Servicios de 25 años con aportes, con al menos 12 años de los últimos 15 trabajados en la industria.
        Son esenciales las constancia de inscripción extendida por el Instituto de Estadística y Registro de la Industria de la Construcción del empleador como del trabajador a su cargo; los registros de afiliados a la Unión Obrera de la Construcción y de la Obra Social de la Construcción; la libreta de aportes al Fondo de Desempleo creado por la Ley 22.250 hasta el 31 de marzo de 2009 si corresponde y la credencial del registro laboral que extienda el Instituto de Estadística y Registro de la Industria de la Construcción (IERIC) a partir del 1º de abril de 2009.</p>
        <h4>Personal de la industria cárnica</h4>
        <p>Quienes hayan desempeñado tareas de matanza y faenamiento de reses; procesamiento de la carne y derivados de la res; control veterinario y en el tratamiento y destrucción de animales enfermos; trabajado en salas de máquina donde se superen los 85 decibeles y cuando no hubiere protección auditiva, o los 115 decibeles cuando la hubiere; tareas de mantenimiento, supervisión, administración y limpieza cuando se presten directa y permanentemente en los sectores donde se realizan los trabajos mencionados anteriormente; con 55 años los hombres y las mujeres 50 años, con 30 años de servicios y 27 años de servicios respectivamente.</p>
        <h4>Personal de Salud</h4>
        <p>Con tareas de contacto directo con los pacientes de leproserías, salas o servicios de enfermedades infecto-contagiosas, hospitales de alienados o establecimientos de asistencia de diferenciados mentales y personas que hayan trabajado en Sanatorios y Hospitales en tareas de radioscopia, los hombres con 55 años y las mujeres 52 años, con 30 años de servicios.</p>

        <h4>Personal de seguridad operativa industrial</h4>
        <p>Con función permanente en plantas de elaboración o fraccionamiento de combustibles líquidos de primer grado, hombres con 55 años y 30 años de servicios.</p>

        <h4>Personal de servicios eléctricos</h4>
        <p>Que hayan realizado tareas en balancines, silletas, escaleras a viento o soga a nudo u otro sistema que demande la colocación de esos elementos y se efectúe a más de 4 mts. de altura, vacío o profundidad; en celdas y barras de alta tensión o instalaciones no protegidas; en trabajos con tensión o postes; en constatación de medidores registradores, cambio y revisión de los mismos en domicilio del usuario; en lugares donde se supere los 85 decibeles cuando hubiere protección y cuando realice trabajo de mantenimiento, supervisión y de limpieza en forma directa y permanente en los lugares en las que se efectuaren las tareas anteriormente mencionadas, los hombres con 55 años y 30 años de servicios.</p>
        <h4>Personal de transporte de carga</h4>
        <p>Dedicado a la conducción de vehículos automotores de transporte de carga, en relación de dependencia. Los hombres con 55 años y mujeres con 52 años, con 30 años de servicios.</p>
        <h4>Vidrieros</h4>
        <p>Quienes se hayan desempeñado en la fabricación y composición de vidrio, decreto 3176/71, los hombres con 50 años y 25 años de servicios.</p>
        <h4>Hiladores y dofeadores del rayón</h4>
        <p>Conforme Decreto 1851/75, hombres y mujeres con 50 años, y 30 años de servicios.</p>

        <h4>Metalúrgicos</h4>
        <p>Personas expuestas a la radiación del calor afectado a procesos de producción en tareas de laminación, acería y fundición realizadas en forma manual o semimanual desarrolladas en ambientes de alta temperatura, con 50 años los hombres, y con 25 años de servicios.</p>

        <h4>Mineros</h4>
        <p>Las mineras a cielo abierto, el personal que realice los labores de obtención directa de productos mineros, los hombres con 55 años y las mujeres con 52 años, con 30 años de servicio. Las tareas mineras subterráneas, conforme el Decreto 4257/68 - Art. 2° Inc. b., los hombres requerirán 50 años con 25 años de servicios.</p>

        <h4>Tareas de forja y fragua</h4>
        <p>Conforme el decreto 182/74 - Vigencia 1/8/74, los hombres con 50 años y 25 años de servicios.</p>

        <h4>Personal de la Antártida e Islas del Atlántico Sur</h4>
        <p>Las personas que hayan trabajado en la Antártida e Islas del Atlántico Sur. Decreto 4257/68 - Art. 4°, con 55 años de edad y 30 años de servicios.</p>
        <h4>Ferroviarios</h4>
        <p>Quienes hayan realizado tareas de maquinista o su equivalente, foguista o equivalente, cambista o capataz de cambista, aspirante de conducción o señaleros ferroviarios. Los hombres con 55 años y las mujeres con 52 años, y con 30 años de servicios.</p>

        <h4>Gráficos</h4>
        <p>Los tipógrafos y linotipista, bajo relación de dependencia, con 55 años los hombres y 30 años de servicios.</p>

        <h4>Personal del Teatro Colón</h4>
        <p>El Ballet estable y contratado en el Teatro Colón, ordenanza 29604, los hombres y mujeres con 40 años y 20 años de servicios. Los Cantantes líricos del Teatro Colón, ordenanza 29605, los hombres 65 años y las mujeres 60 años, con 25 años y 20 años de servicios respectivamente.</p>
        <h4>Petrolíferos y gasíferos</h4>
        <p>De la exploración petrolífera y gasífera llevada a cabo en campaña y en boca de pozo, a la perforación, terminación, mantenimiento y reparación de pozos, los hombres de 50 años con 25 años de servicios.</p>

        <h4>Recolectores de residuos</h4>
        <p>Incluye a recolectores de la Administración General de Puertos. Los hombres con 55 años y 25 años de servicios.</p>

        <h4>Telefónicos</h4>
        <p>Los operadores, telefonistas, operadores de reclamos, operadores de guía y supervisores, mujeres con 50 años y 25 años de servicios. Los telégrafos y radiotelégrafos: operadores afectados al sistema telegráfico Morse o similares y de teletipo con un mínimo 1.500 palabras por jornada de trabajo, hombres con 55 años y las mujeres de 50 años, con 30 años y con 25 años de servicios respectivamente.</p>

        <h4>Transportistas</h4>
        <p>Conductores de ómnibus o vehículos de transporte colectivo de personas pertenecientes a líneas urbanas, interurbanas o de larga distancia, hombres de 55 años y mujeres de 52 años, con 30 años de servicios.</p>
        <h4>Vidrieros</h4>
        <p>Quienes se hayan desempeñado en la fabricación y composición de vidrio, decreto 3176/71, los hombres con 50 años y 25 años de servicios.</p>

        <h4>Hiladores y dofeadores del rayón</h4>
        <p>Conforme Decreto 1851/75, hombres y mujeres con 50 años, y 30 años de servicios.</p>

        <h4>Metalúrgicos</h4>
        <p>Personas expuestas a la radiación del calor afectado a procesos de producción en tareas de laminación, acería y fundición realizadas en forma manual o semimanual desarrolladas en ambientes de alta temperatura, con 50 años los hombres, y con 25 años de servicios.</p>
    </main>
  );
};