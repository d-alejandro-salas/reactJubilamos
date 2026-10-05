// Única fuente de verdad de los servicios: alimenta las cards del home, las rutas,
// las páginas de detalle, el SEO y el sitemap.
//
// - `slug` conserva EXACTAMENTE las URLs históricas del sitio (minúsculas, sin espacios).
// - `image` es la clave de src/assets/images/imagesIndex.js
// - `lead`     -> párrafos destacados (clase .bigFontSize)
// - `body`     -> párrafos normales
// - `sections` -> bloques con subtítulo (level 3 = .h3__subtitle, por defecto h4)

export const CATEGORIES = [
  { id: 'todos', label: 'Todos los servicios' },
  { id: 'previsional', label: 'Jubilaciones y Pensiones' },
  { id: 'reclamos', label: 'Reajustes y Reclamos' },
  { id: 'civil', label: 'Sucesiones' },
];

export const SERVICES = [
  {
    slug: 'reajustedehaberes',
    title: 'Reajuste de haberes',
    tag: 'Reclamo Judicial',
    category: 'reclamos',
    image: 'reajustes',
    summary:
      'En nuestro país, 1 de cada 5 personas cobra menos de lo que le corresponde. Recordá siempre que es tu dinero el cual aportaste a lo largo de la vida y es tu derecho reclamarlo.',
    seoTitle: 'Reajuste de haberes – Jubilamos',
    seoDescription:
      'Revisamos tu haber previsional, calculamos el monto correcto y promovemos el reclamo administrativo o judicial para actualizarlo.',
    imageAlt: 'Reajuste de haberes previsionales',
    body: [
      `En nuestro país, 1 de cada 5 personas cobra menos de lo que le corresponde. Recordá siempre que es tu dinero, el cual aportaste a lo largo de la vida, y es tu derecho reclamarlo.`,
      `Numerosos fallos de la Justicia Federal en distintas jurisdicciones del país vienen declarando la inconstitucionalidad de la fórmula de movilidad vigente, por considerar que ha provocado una pérdida significativa del poder adquisitivo en los haberes previsionales. En muchos casos, las sentencias reconocen que las personas jubiladas cobran hasta un 50% menos de lo que deberían percibir.`,
      `Estos pronunciamientos se apoyan, además, en antecedentes clave de la Corte Suprema de Justicia de la Nación, como los fallos Badaro y Elliff, que reafirmaron el carácter sustitutivo del haber previsional y la necesidad de que las jubilaciones mantengan su valor real en el tiempo. A la luz de estos principios, la justicia sigue amparando los reclamos cuando se acredita una pérdida injustificada en el haber jubilatorio.`,
      `No se trata de un reajuste automático: es necesario presentar un reclamo judicial individual para que se analice tu situación y se reconozca el haber que realmente te corresponde. La Justicia está amparando estos reclamos cuando existen fundamentos legales, económicos y documentales suficientes. Revisamos el cálculo de tu Jubilación/Pensión para verificar si estás cobrando correctamente e iniciamos un reclamo judicial para lograr el reajuste de tu haber mensual.`,
      `El proceso se lleva a cabo mediante el análisis de la viabilidad del reclamo de ajuste. Determinamos el monto aproximado del aumento que podrías obtener y luego procedemos a presentar el reclamo ante ANSES. Si el organismo deniega la solicitud o guarda silencio, nos habilita a iniciar una demanda ante la Justicia Federal.`,
    ],
    sections: [
      {
        level: 3,
        heading: 'Ejecución de Sentencias y Liquidaciones',
        paragraphs: [
          `Al no cumplir ANSES con las órdenes judiciales, muchas veces las liquidaciones que se ponen al pago dan cuantías que no son las correctas, estableciendo así pagos más bajos de los que corresponden, incumpliendo con dichas mandas y calculando mal los desembolsos, dejando montos pendientes.`,
          `Es por ello que, en el caso de que hayas cobrado un juicio de reajuste contra ANSES o dicho organismo no haya cumplido con la sentencia, realizamos el control y la revisión, exigiendo el cumplimiento y el correcto pago. Recordá que ANSES tiene, una vez firme la sentencia, 120 días hábiles para cumplir con la misma. Pasado dicho plazo, podés ejecutar la sentencia y exigir el pago mediante la “Ejecución de Sentencia”.`,
        ],
      },
    ],
  },

  {
    slug: 'jubilaciones',
    title: 'Jubilaciones',
    heading: 'Jubilación',
    tag: 'Trámite ANSES',
    category: 'previsional',
    image: 'jubilaciones',
    summary:
      'Tramitamos la mejor jubilación posible para nuestros clientes, brindándoles un servicio integral, analizando requisitos de edad y aportes realizados; también brindamos la posibilidad de que accedan a la jubilación utilizando las moratorias vigentes en caso de no contar con los aportes requeridos por ley.',
    seoTitle: 'Jubilaciones – Trámite y asesoramiento',
    seoDescription:
      'Análisis de requisitos, moratorias vigentes y estrategia para obtener la mejor jubilación posible.',
    imageAlt: 'Asesoramiento y trámite de jubilaciones',
    lead: [
      `Tramitamos la mejor jubilación posible para nuestros clientes, brindándoles un servicio integral, donde se analizan requisitos de edad y aportes realizados; también posibilitamos el acceso a la jubilación utilizando las moratorias vigentes en caso de no contar con los aportes requeridos por ley.`,
      `Nuestro enfoque se basa en analizar minuciosamente la situación de cada individuo de manera anticipada, permitiéndonos diseñar la estrategia correcta para obtener el mejor resultado en el proceso de la jubilación.`,
    ],
    sections: [
      {
        level: 3,
        heading: 'Requisitos necesarios para que puedas jubilarte',
        paragraphs: [
          `Con 60 años de edad si sos mujer o 65 años si sos varón y 30 años de aportes registrados podés acceder a la jubilación ordinaria. Te recordamos que los requisitos pueden variar según el tipo de trabajo que hayas realizado.`,
        ],
      },
      {
        level: 3,
        heading: 'En caso de que no tengas todos los aportes',
        paragraphs: [
          `Podés complementarlos con aportes que hagas como autónomo o monotributista; asimismo el exceso de edad es importante para compensarlos, con 1 año de aporte por cada 2 años de edad excedente. Y también, según la normativa, podés completarlos a través de las moratorias previsionales vigentes.`,
        ],
      },
      {
        level: 3,
        heading: 'Reconocimiento de aportes por hijos - tareas de cuidado',
        paragraphs: [
          `Este es un beneficio que gozan las madres para que puedan jubilarse, reconociendo y valorando el tiempo que destinaron y destinan a la crianza de sus hijos. Las mujeres con hijos, en edad de jubilarse (60 años o más) que no cuenten con los años de aportes necesarios. Se computará 1 año de aportes por hijo y 2 años de aportes por hijo adoptado. Asimismo, se reconocerá de forma adicional 1 año por hijo con discapacidad y 2 años en caso de que haya sido beneficiario de la Asignación Universal por Hijo por al menos 12 meses. Además, se reconocerán los plazos de licencia por maternidad y de excedencia de maternidad a las mujeres que hayan hecho uso de estos períodos al momento del nacimiento de sus hijos.`,
        ],
      },
      {
        heading: 'Ex combatientes de Malvinas',
        paragraphs: [
          `Las personas que participaron en la Guerra de Malvinas como soldados conscriptos o civiles, ya sea que su participación se dio en Teatro de Operaciones de Malvinas o Teatro de Operaciones del Atlántico Sur. Con 53 años de edad o más y 10 años de aportes jubilatorios como trabajador. Si fuiste soldado conscripto se computarán 2 años de aportes. Es muy importante contar con la documentación que certifique la actividad como soldado conscripto; certificación actualizada al momento de pedir la jubilación (Art. 1 del Decreto 2634/90) con la situación de Revista: CONSCRIPTO o CIVIL, indicar que participó en el Teatro de Operaciones de Malvinas/Teatro de Operaciones del Atlántico Sur (no es necesario que figure explícitamente el período), suscripto por Departamento de Veteranos de la Guerra de Malvinas de la Fuerza, a su vez refrendado por el Ministerio de Defensa.`,
        ],
      },
      {
        heading: 'Jubilación especial para personas con VIH y/o Hepatitis B y/o C (Ley 27.675)',
        paragraphs: [
          `Las personas con VIH y/o Hepatitis B y/o C, podrán solicitar dicha jubilación en la medida en que éstas últimas condicionen o generen algún impedimento en su vida. Con 50 años de edad cumplidos y acreditando 20 años de servicios con aportes computables. También deberán certificar 10 años de antigüedad en el diagnóstico al momento de solicitar esta prestación. Diagnóstico de Hepatitis B y/o C: deberá contar con formulario único completo por el médico certificado en la oficina de la autoridad jurisdiccional designada por el Ministerio de Salud. Asimismo, se requerirá declaración jurada prestando consentimiento a fin de que el Ministerio de Salud de la Nación ceda la información relativa a su situación de salud, incluyendo diagnóstico de VIH o Hepatitis B y/o C y su fecha.`,
        ],
      },
      {
        heading: 'Jubilación Anticipada',
        paragraphs: [
          `Este beneficio está destinado a personas que cuenten con 30 años de aportes, le falten hasta 5 años para jubilarse y que estuvieran desempleadas al 30 de junio de 2023. Este garantiza el 80% del haber jubilatorio que te correspondería percibir cuando alcances la edad para jubilarte (mujeres 60 años y hombres 65 años). Al llegar a esa edad, comenzarás a cobrar el 100% del haber jubilatorio de manera automática. Requisitos: hasta 5 años menos de la edad requerida para jubilarse, hombres entre 60 y 64 años, y las mujeres entre 55 y 59 años. 30 años de aportes registrados y encontrarse desocupado al 30 de junio de 2023.`,
        ],
      },
      {
        heading: 'Poder Judicial y Ministerio Público de la Nación',
        paragraphs: [
          `Con 60 años de edad para hombres y mujeres, y 30 años de servicios y 20 años de servicios con aportes computables en uno o más regímenes incluidos en el Sistema de Reciprocidad Jubilatoria. Deben al menos haberse desempeñado como mínimo 15 años continuos o 20 años discontinuos en el Poder Judicial de la Nación o en el Ministerio Público de la Nación o de las provincias adheridas al Régimen de Reciprocidad Jubilatoria o en la Fiscalía Nacional de Investigaciones Administrativas, de los cuales 5 años como mínimo deben registrarse en el desempeño de los cargos indicados en el apartado "Personal Comprendido"; haberse desempeñado como mínimo durante los últimos 10 años de servicios en cargos de los indicados en el apartado "Personal Comprendido".`,
        ],
      },
      {
        heading: 'Trabajadores agrarios',
        paragraphs: [
          `Incluye las siguientes actividades, siempre que no se realicen en establecimientos industriales y aún cuando se desarrollen en centros urbanos: La manipulación y el almacenamiento de cereales, oleaginosos, legumbres, hortalizas, semillas u otros frutos o productos agrarios; Las que se prestaren en ferias y remates de hacienda; El empaque de frutos y productos agrarios propios; Cosecha y/o empaque de frutas en actividades reguladas por resoluciones de la Comisión Nacional de Trabajo Agrario (C.N.T.A.). Estarán incluidas hasta que se realice una Convención Colectiva de Trabajo que los comprenda y regule sus condiciones de trabajo y salarios (art. 3 del Decreto N° 301/13); Trabajadores que se desempeñen en las distintas etapas y tareas de la producción de una actividad agraria cíclica que se desarrolle dentro de un proceso temporal definido, siempre que las primeras tareas del proceso se enmarquen dentro de sus previsiones y no constituyan proceso industrial art. 4° del mencionado decreto. Requisitos: Tener 57 años, sin distinción de sexo y en Servicios 25 años con aportes como trabajador agrario en relación de dependencia.`,
        ],
      },
      {
        heading: 'Trabajadores de la construcción',
        paragraphs: [
          `Los trabajadores de la industria de la construcción de la Ley 22.250, gozarán de un régimen previsional diferencial. Requisitos: Los hombres, la edad requerida varía según el período trabajado. Del 1/5/2009 al 30/4/2010: 60 años; del 1/5/2010 al 30/4/2011: 57 años; del 1/5/2011 al 30/4/2012: 56 años y desde el 1/5/2012: 55 años. Las mujeres desde el 1/5/2009: 55 años. Y Servicios de 25 años con aportes, con al menos 12 años de los últimos 15 trabajados en la industria. Son esenciales las constancias de inscripción extendida por el Instituto de Estadística y Registro de la Industria de la Construcción del empleador como del trabajador a su cargo; los registros de afiliados a la Unión Obrera de la Construcción y de la Obra Social de la Construcción; la libreta de aportes al Fondo de Desempleo creado por la Ley 22.250 hasta el 31 de marzo de 2009 si corresponde y la credencial del registro laboral que extienda el Instituto de Estadística y Registro de la Industria de la Construcción (IERIC) a partir del 1º de abril de 2009.`,
        ],
      },
      {
        heading: 'Personal de la industria cárnica',
        paragraphs: [
          `Quienes hayan desempeñado tareas de matanza y faenamiento de reses; procesamiento de la carne y derivados de la res; control veterinario y en el tratamiento y destrucción de animales enfermos; trabajado en salas de máquina donde se superen los 85 decibeles y cuando no hubiere protección auditiva, o los 115 decibeles cuando la hubiere; tareas de mantenimiento, supervisión, administración y limpieza cuando se presten directa y permanentemente en los sectores donde se realizan los trabajos mencionados anteriormente; con 55 años los hombres y las mujeres 50 años, con 30 años de servicios y 27 años de servicios respectivamente.`,
        ],
      },
      {
        heading: 'Personal de Salud',
        paragraphs: [
          `Con tareas de contacto directo con los pacientes de leproserías, salas o servicios de enfermedades infecto-contagiosas, hospitales de alienados o establecimientos de asistencia de diferenciados mentales y personas que hayan trabajado en Sanatorios y Hospitales en tareas de radioscopia, los hombres con 55 años y las mujeres 52 años, con 30 años de servicios.`,
        ],
      },
      {
        heading: 'Personal de seguridad operativa industrial',
        paragraphs: [
          `Con función permanente en plantas de elaboración o fraccionamiento de combustibles líquidos de primer grado, hombres con 55 años y 30 años de servicios.`,
        ],
      },
      {
        heading: 'Personal de servicios eléctricos',
        paragraphs: [
          `Que hayan realizado tareas en balancines, silletas, escaleras a viento o soga a nudo u otro sistema que demande la colocación de esos elementos y se efectúe a más de 4 mts. de altura, vacío o profundidad; en celdas y barras de alta tensión o instalaciones no protegidas; en trabajos con tensión o postes; en constatación de medidores registradores, cambio y revisión de los mismos en domicilio del usuario; en lugares donde se supere los 85 decibeles cuando hubiere protección y cuando realice trabajo de mantenimiento, supervisión y de limpieza en forma directa y permanente en los lugares en las que se efectuaren las tareas anteriormente mencionadas, los hombres con 55 años y 30 años de servicios.`,
        ],
      },
      {
        heading: 'Personal de transporte de carga',
        paragraphs: [
          `Dedicado a la conducción de vehículos automotores de transporte de carga, en relación de dependencia. Los hombres con 55 años y mujeres con 52 años, con 30 años de servicios.`,
        ],
      },
      {
        heading: 'Mineros',
        paragraphs: [
          `Las mineras a cielo abierto, el personal que realice los labores de obtención directa de productos mineros, los hombres con 55 años y las mujeres con 52 años, con 30 años de servicio. Las tareas mineras subterráneas, conforme el Decreto 4257/68 - Art. 2° Inc. b., los hombres requerirán 50 años con 25 años de servicios.`,
        ],
      },
      {
        heading: 'Tareas de forja y fragua',
        paragraphs: [`Conforme el decreto 182/74 - Vigencia 1/8/74, los hombres con 50 años y 25 años de servicios.`],
      },
      {
        heading: 'Personal de la Antártida e Islas del Atlántico Sur',
        paragraphs: [
          `Las personas que hayan trabajado en la Antártida e Islas del Atlántico Sur. Decreto 4257/68 - Art. 4°, con 55 años de edad y 30 años de servicios.`,
        ],
      },
      {
        heading: 'Ferroviarios',
        paragraphs: [
          `Quienes hayan realizado tareas de maquinista o su equivalente, foguista o equivalente, cambista o capataz de cambista, aspirante de conducción o señaleros ferroviarios. Los hombres con 55 años y las mujeres con 52 años, y con 30 años de servicios.`,
        ],
      },
      {
        heading: 'Gráficos',
        paragraphs: [`Los tipógrafos y linotipista, bajo relación de dependencia, con 55 años los hombres y 30 años de servicios.`],
      },
      {
        heading: 'Personal del Teatro Colón',
        paragraphs: [
          `El Ballet estable y contratado en el Teatro Colón, ordenanza 29604, los hombres y mujeres con 40 años y 20 años de servicios. Los Cantantes líricos del Teatro Colón, ordenanza 29605, los hombres 65 años y las mujeres 60 años, con 25 años y 20 años de servicios respectivamente.`,
        ],
      },
      {
        heading: 'Petrolíferos y gasíferos',
        paragraphs: [
          `De la exploración petrolífera y gasífera llevada a cabo en campaña y en boca de pozo, a la perforación, terminación, mantenimiento y reparación de pozos, los hombres de 50 años con 25 años de servicios.`,
        ],
      },
      {
        heading: 'Recolectores de residuos',
        paragraphs: [`Incluye a recolectores de la Administración General de Puertos. Los hombres con 55 años y 25 años de servicios.`],
      },
      {
        heading: 'Telefónicos',
        paragraphs: [
          `Los operadores, telefonistas, operadores de reclamos, operadores de guía y supervisores, mujeres con 50 años y 25 años de servicios. Los telégrafos y radiotelégrafos: operadores afectados al sistema telegráfico Morse o similares y de teletipo con un mínimo 1.500 palabras por jornada de trabajo, hombres con 55 años y las mujeres de 50 años, con 30 años y con 25 años de servicios respectivamente.`,
        ],
      },
      {
        heading: 'Transportistas',
        paragraphs: [
          `Conductores de ómnibus o vehículos de transporte colectivo de personas pertenecientes a líneas urbanas, interurbanas o de larga distancia, hombres de 55 años y mujeres de 52 años, con 30 años de servicios.`,
        ],
      },
      {
        heading: 'Vidrieros',
        paragraphs: [`Quienes se hayan desempeñado en la fabricación y composición de vidrio, decreto 3176/71, los hombres con 50 años y 25 años de servicios.`],
      },
      {
        heading: 'Hiladores y dofeadores del rayón',
        paragraphs: [`Conforme Decreto 1851/75, hombres y mujeres con 50 años, y 30 años de servicios.`],
      },
      {
        heading: 'Metalúrgicos',
        paragraphs: [
          `Personas expuestas a la radiación del calor afectado a procesos de producción en tareas de laminación, acería y fundición realizadas en forma manual o semimanual desarrolladas en ambientes de alta temperatura, con 50 años los hombres, y con 25 años de servicios.`,
        ],
      },
    ],
  },

  {
    slug: 'pensionesporfallecimiento',
    title: 'Pensiones por fallecimiento',
    tag: 'Beneficio Familiar',
    category: 'previsional',
    image: 'pension',
    summary:
      'Ante el fallecimiento de un trabajador en actividad o jubilado, tendrán derecho a solicitar el beneficio de Pensión los cónyuges/convivientes o sus hijos menores e hijos mayores discapacitados.',
    seoTitle: 'Pensiones por fallecimiento – Jubilamos',
    seoDescription:
      'Asesoramiento legal y previsional para acceder a pensiones por fallecimiento de trabajadores o jubilados. Gestión ante ANSES y reclamos judiciales.',
    imageAlt: 'Asesoramiento en pensiones por fallecimiento',
    lead: [
      `Ante el fallecimiento de un trabajador en actividad o jubilado, tendrán derecho a solicitar el beneficio de Pensión los cónyuges/convivientes o sus hijos menores e hijos mayores discapacitados.`,
      `En el estudio nos comprometemos a trabajar en tu nombre para asegurarte el reconocimiento de tu derecho a la pensión; evaluaremos en detalle la regularidad de los aportes necesarios para solicitar el beneficio ante ANSES, y en situaciones en las que tu derecho no sea reconocido, iniciaremos un reclamo judicial para obtener la compensación que te corresponde.`,
    ],
    sections: [
      {
        heading: 'En el caso de un trabajador fallecido',
        paragraphs: [
          `Se requieren 30 años de aportes para el régimen común. Un aportante regular debe haber contribuido durante 30 meses o más en los últimos 36 meses previos al fallecimiento.`,
          `Para un aportante irregular, se exige un mínimo de 18 meses de aportes dentro de los últimos 36 meses, 12 meses dentro de los últimos 60 meses, y tener la mitad del total de años requeridos por el régimen común o diferencial.`,
          `Se deberá establecer el vínculo familiar. En el caso de convivientes, la situación es más compleja, ya que se debe demostrar la convivencia real con pruebas concretas. La convivencia debe tener una duración mínima de 5 años, reduciéndose a 2 años si hay hijos en común.`,
        ],
      },
    ],
  },

  {
    slug: 'retirosporinvalidez',
    title: 'Retiros por invalidez',
    tag: 'Junta Médica',
    category: 'previsional',
    image: 'invalidez',
    summary:
      'Hombres y mujeres que no alcanzaron la edad para acceder a la jubilación ordinaria, que tengan una incapacidad laboral del 66% determinada por junta médica y que cumplan con la condición de «aportante regular» o «aportante irregular con derecho», podrán acceder a este beneficio.',
    seoTitle: 'Retiros por invalidez – Jubilamos',
    seoDescription:
      'Te asesoramos para acceder al retiro por invalidez: requisitos médicos, condición de aportante y tramitación ante ANSES.',
    imageAlt: 'Retiro por invalidez: asesoramiento y trámite',
    body: [
      `Hombres y mujeres que no alcanzaron la edad para acceder a la jubilación ordinaria, que tengan una incapacidad laboral del 66% determinada por junta médica y que cumplan con la condición de "aportante regular" o "aportante irregular con derecho" podrán acceder a este beneficio.`,
      `No te demores, hacé tu consulta. Contactanos para que podamos evaluar tu situación y brindarte la asistencia necesaria, el tiempo es muy importante para que accedas a este beneficio.`,
    ],
  },

  {
    slug: 'rentavitalicia',
    title: 'Renta vitalicia',
    tag: 'Ex AFJP',
    category: 'reclamos',
    image: 'rentaVitalicia',
    summary:
      'Si tenés una Pensión / Renta Vitalicia de una Compañía de Seguro de Retiro –ex AFJP- y cobrás menos que la jubilación mínima, iniciamos el reclamo para lograr los aumentos y reajustar tu haber mensual con los fallos de la Corte Suprema de Justicia de la Nación.',
    seoTitle: 'Renta vitalicia – Jubilamos',
    seoDescription:
      'Reclamo para que tu renta vitalicia de ex AFJP no sea inferior a la jubilación mínima. Asesoramiento y reclamo judicial.',
    imageAlt: 'Renta vitalicia',
    body: [
      `Si tenés una Pensión / Renta Vitalicia de una Compañía de Seguro de Retiro –ex AFJP- y cobrás menos que la jubilación mínima, iniciamos el reclamo para que obtengas los aumentos y así reajustar tu haber mensual con los fallos de la Corte Suprema de Justicia de la Nación.`,
      `Tu Pensión / Renta Vitalicia nunca puede ser menor a la jubilación mínima; es tu derecho tener los aumentos que otorga ANSES. Así, ante los bajísimos valores de quienes aún cobran una renta vitalicia privada, exigiremos mediante el reclamo judicial el complemento de las diferencias para que así puedas cobrar todos los meses lo que te corresponde.`,
    ],
  },

  {
    slug: 'moratorias',
    title: 'Moratorias',
    tag: 'Sin Aportes',
    category: 'previsional',
    image: 'moratorias',
    summary:
      'Toda persona que no cuente con los años de aportes necesarios, sean trabajadores autónomos o empleados en relación de dependencia, podrán acceder a una jubilación o pensión por fallecimiento de un trabajador mediante la adhesión a una moratoria.',
    seoTitle: 'Moratorias – Jubilamos',
    seoDescription:
      'Te asesoramos para regularizar los aportes que te faltan y acceder a tu jubilación o pensión mediante una moratoria previsional.',
    imageAlt: 'Moratorias previsionales',
    body: [
      `Para aquellos que se encuentren en edad de jubilarse y les falten aportes, podrán acceder a la jubilación utilizando la moratoria vigente.`,
      `Este mecanismo brinda la oportunidad de regularizar la situación previsional y así avanzar hacia un futuro garantizado y tranquilo.`,
    ],
  },

  {
    slug: 'puam',
    title: 'PUAM',
    tag: 'Adulto Mayor',
    category: 'previsional',
    image: 'puam',
    summary:
      'En caso de que tengas 65 años de edad y no puedas jubilarte por falta de aportes, gestionamos la Pensión Universal al Adulto Mayor. Este beneficio es equivalente al 80% de una jubilación mínima y se actualiza por la Ley de Movilidad.',
    seoTitle: 'PUAM – Jubilamos',
    seoDescription:
      'Gestionamos la Pensión Universal al Adulto Mayor (PUAM): requisitos, monto y cobertura de salud de PAMI. Consultá por tu caso.',
    imageAlt: 'Pensión Universal al Adulto Mayor (PUAM)',
    body: [
      `En caso de que tengas 65 años de edad y no puedas jubilarte por falta de aportes, gestionamos la Pensión Universal al Adulto Mayor. Este beneficio es equivalente al 80% de una jubilación mínima y se actualiza por la Ley de Movilidad.`,
      `PUAM es la cobertura previsional destinada a las personas mayores de 65 años, que no cuentan con ninguna jubilación o pensión. Deben ser argentinos o naturalizados con 10 años de residencia en el país (anteriores a la solicitud), o extranjero con una residencia mínima de 20 años y mantener la residencia en el país una vez solicitada la pensión.`,
      `No deberán cobrar ni tener derecho a ninguna jubilación o pensión de un organismo nacional o de cajas o institutos provinciales o municipales, ni seguro de desempleo. El monto es equivalente al 80% de una jubilación mínima y se actualiza por la Ley de Movilidad. Las personas que cobran esta pensión cuentan con cobertura de salud y servicios de PAMI, pueden acceder al cobro de asignaciones familiares (por hijo/hijo con discapacidad, por cónyuge y ayuda escolar anual) y a los créditos ANSES.`,
    ],
  },

  {
    slug: 'sucesiones',
    title: 'Sucesiones',
    tag: 'Derecho Civil',
    category: 'civil',
    image: 'sucesiones',
    summary:
      'Te brindamos el respaldo y la orientación adecuada para gestionar los aspectos legales que conlleva una sucesión. En nuestro estudio jurídico, entendemos la complejidad y la sensibilidad que rodea este proceso, con años de experiencia y un equipo comprometido, estamos aquí para brindarle la asesoría que necesita para afrontar este camino con confianza y tranquilidad.',
    seoTitle: 'Sucesiones – Jubilamos',
    seoDescription:
      'Asesoramiento integral en sucesiones: documentación, trámite judicial y distribución de bienes, con atención personalizada en todo el país.',
    imageAlt: 'Asesoramiento en sucesiones',
    body: [
      `En momentos de duelo, enfrentar la burocracia y los trámites legales puede ser abrumador. En nuestro estudio jurídico especializado en sucesiones, comprendemos las dificultades y los desafíos que implica la gestión de los asuntos legales tras la pérdida de un ser querido.`,
      `Nuestro equipo de abogados está dedicado a brindarle un servicio integral y personalizado en cada etapa del proceso sucesorio. Desde la obtención de los documentos necesarios hasta la distribución de los bienes, nos encargamos de todos los aspectos legales. Con años de experiencia en la materia, hemos asistido a numerosas familias en la resolución exitosa de sus sucesiones, por lo que nos comprometemos a ofrecerle una atención personalizada, escuchando sus necesidades y preocupaciones, y proporcionándole soluciones efectivas y adaptadas a su situación particular.`,
    ],
  },
];

export const getServiceBySlug = (slug = '') => SERVICES.find((service) => service.slug === slug.toLowerCase());

export const servicePath = (service) => `/${service.slug}`;
