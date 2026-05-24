import { StatItem, PautaItem, ScheduleEvent, CaseStudy, ReflectionQuestion } from "./types";

export const KEY_STATS: StatItem[] = [
  {
    id: "stat-1",
    percentage: "88,4%",
    title: "Uso Diario de Internet",
    description: "La gran mayoría de alumnos asturianos de 12 y 13 años se conecta a diario o varias veces a la semana.",
    badge: "informacion"
  },
  {
    id: "stat-2",
    percentage: "72,5%",
    title: "Exceso de Pantallas",
    description: "Supera la recomendación saludable de ocio digital de máximo 2 horas diarias de lunes a viernes.",
    badge: "riesgo"
  },
  {
    id: "stat-3",
    percentage: "57,1%",
    title: "Sueño Insuficiente",
    description: "Duerme menos de 9 horas diarias necesarias para un desarrollo adecuado en estas edades.",
    badge: "alerta"
  },
  {
    id: "stat-4",
    percentage: "28,6%",
    title: "Visto Contenido Ofensivo",
    description: "Ha estado expuesto a violencia, imágenes explícitas, lenguaje ofensivo o inapropiado digitalmente.",
    badge: "riesgo"
  },
  {
    id: "stat-5",
    percentage: "24,4%",
    title: "Indicios de Ciberacoso",
    description: "Ha vivido o presenciado situaciones de acoso telemático o cibernético entre menores.",
    badge: "alerta"
  },
  {
    id: "stat-6",
    percentage: "23,5%",
    title: "Mal Ejemplo Parental",
    description: "Refiere que sus padres usan el móvil durante desayunos, almuerzos o cenas familiares cotidianas.",
    badge: "riesgo"
  },
  {
    id: "stat-7",
    percentage: "40,1%",
    title: "Móvil en la Cama",
    description: "Duerme con el móvil dentro de su habitación, de los cuales un 48,8% lo enciende de madrugada.",
    badge: "alerta"
  }
];

export const PAUTAS_FAMILIARES: PautaItem[] = [
  {
    id: 1,
    number: "1",
    title: "TIEMPO DE PANTALLAS",
    subtitle: "CON LÍMITES CLAROS",
    iconName: "Clock",
    keyPoints: [
      "Máximo 1 a 1,5 horas al día para ocio digital.",
      "Cero pantallas durante las comidas familiares.",
      "Apagar todo 1 hora antes de dormir.",
      "Sin móviles en la habitación por la noche."
    ],
    recommendation: "Configura límites técnicos de control parental previo acuerdo de 'Higiene Digital' con tus hijos.",
    colorClass: "border-sky-500 text-sky-600 bg-sky-50/50 hover:bg-sky-50"
  },
  {
    id: 2,
    number: "2",
    title: "ACOMPAÑAMIENTO",
    subtitle: "Y DIÁLOGO ABIERTO",
    iconName: "MessageCircle",
    keyPoints: [
      "Interésate activamente por lo que hacen y ven.",
      "Habla con calma sobre lo que les preocupa o ven en redes.",
      "Acompaña sin invadir: combina confianza con límites.",
      "Pregúntales antes de establecer normas, escucha activamente."
    ],
    recommendation: "Establece un clima donde puedan acudir a ti si se sienten incómodos o asustados sin miedo a que les quites el móvil.",
    colorClass: "border-emerald-500 text-emerald-600 bg-emerald-50/50 hover:bg-emerald-50"
  },
  {
    id: 3,
    number: "3",
    title: "SEGURIDAD",
    subtitle: "Y PRIVACIDAD EN EL ENTORNO",
    iconName: "Shield",
    keyPoints: [
      "No compartir fotos íntimas, datos personales ni ubicación.",
      "Configurar perfiles como PRIVADOS en sus aplicaciones.",
      "Usar contraseñas seguras y no reutilizables.",
      "Hablarles sobre riesgos: suplantación, phishing, retos virales."
    ],
    recommendation: "Conversar sobre la huella digital: lo que suben a internet es permanente y escapa de su control.",
    colorClass: "border-indigo-500 text-indigo-600 bg-indigo-50/50 hover:bg-indigo-50"
  },
  {
    id: 4,
    number: "4",
    title: "CONTENIDOS",
    subtitle: "DE CALIDAD Y ESTUDIO",
    iconName: "Sparkles",
    keyPoints: [
      "Elegir videojuegos, vídeos y apps de calidad pedagógica.",
      "Priorizar elementos creativos, de lógica o pensamiento crítico.",
      "Evitar el scroll infinito pasivo que dispersa la atención.",
      "Fomentar el pensamiento reflexivo: 'Piensa antes de clicar'."
    ],
    recommendation: "Diferencia las pantallas como herramienta escolar útil del ocio pasivo que desregula la memoria de trabajo.",
    colorClass: "border-violet-500 text-violet-600 bg-violet-50/50 hover:bg-violet-50"
  },
  {
    id: 5,
    number: "5",
    title: "REDES SOCIALES",
    subtitle: "AÚN NO ES SU MOMENTO",
    iconName: "Users",
    keyPoints: [
      "Edad mínima legal para redes sociales en España es de 14 años.",
      "A los 12 y 13 años NO necesitan perfiles en redes.",
      "Afecta significativamente a la autoimagen y presión de grupos.",
      "Si aparecen perfiles falsos, habla con ellos y pide ayuda."
    ],
    recommendation: "Aplaza el acceso a las redes sociales. A los 12-13 años prima el desarrollo de su identidad fuera del juicio digital masivo.",
    colorClass: "border-amber-500 text-amber-600 bg-amber-50/50 hover:bg-amber-50"
  },
  {
    id: 6,
    number: "6",
    title: "EJEMPLO QUE EDUCA",
    subtitle: "EL EJEMPLO EN CASA",
    iconName: "Heart",
    keyPoints: [
      "Tu uso tecnológico enseña más que todos tus discursos.",
      "Pon límites también a tu propio uso de pantallas familiares.",
      "Evita mirar la pantalla durante las comidas con tus hijos.",
      "Dedica tiempo de calidad juntos sin tecnología de por medio."
    ],
    recommendation: "El 23.5% de padres asturianos distrae la mesa con el móvil. Esfuérzate por crear espacios de conversación reales.",
    colorClass: "border-rose-500 text-rose-600 bg-rose-50/50 hover:bg-rose-50"
  }
];

export const RECOMENDADO_SCHEDULE: ScheduleEvent[] = [
  {
    id: "sch-1",
    timeSlot: "MAÑANAS",
    title: "Antes de ir al colegio",
    recommendation: "Sin pantallas.",
    iconName: "Sun",
    status: "sin-pantallas",
    details: "Desayunar charlando, preparación de la mochila y desayuno sin televisión ni smartphones para evitar sobreestimulación matutina y retrasos."
  },
  {
    id: "sch-2",
    timeSlot: "HORARIO ESCOLAR",
    title: "Clases y recreación",
    recommendation: "Solo académico.",
    iconName: "BookOpen",
    status: "restringido",
    details: "Uso pedagógico de los ordenadores del centro exclusivamente cuando el profesorado lo indique. Interacciones físicas reales con amigos en los recreos."
  },
  {
    id: "sch-3",
    timeSlot: "COMIDAS",
    title: "Almuerzo y cena",
    recommendation: "Móviles apagados / Estación de carga.",
    iconName: "Coffee",
    status: "sin-pantallas",
    details: "Evitar completamente las pantallas en la mesa para fomentar la conversación y el vínculo familiar. También aplica a madres, padres y tutores."
  },
  {
    id: "sch-4",
    timeSlot: "TARDES",
    title: "Deberes, aficiones y deporte",
    recommendation: "Primero lo offline, después ocio digital limitado.",
    iconName: "Dribbble",
    status: "restringido",
    details: "Hacer actividades al aire libre, deberes y socialización real. Si se han cumplido el resto de rutinas, permitir entre 1 y 1.5 horas de ocio digital de calidad."
  },
  {
    id: "sch-5",
    timeSlot: "1 HORA ANTES DE DORMIR",
    title: "Transición al descanso",
    recommendation: "Sin pantallas.",
    iconName: "Moon",
    status: "sin-pantallas",
    details: "Evita la luz azul de pantallas que bloquea la melatonina en el cerebro en desarrollo. Realiza lectura física en papel, charla tranquila o juegos de mesa."
  },
  {
    id: "sch-6",
    timeSlot: "NOCHE",
    title: "Hora de dormir (Descanso reparador)",
    recommendation: "Ningún dispositivo en el dormitorio.",
    iconName: "Bed",
    status: "sin-pantallas",
    details: "El móvil se carga fuera de la habitación. Evita el 'vamping' (uso nocturno). El alumnado necesita dormir entre 9 y 11 horas diarias de calidad ininterrumpida."
  }
];

export const CASOS_REALES: CaseStudy[] = [
  {
    id: "caso-1",
    problem: "El Smartphone bajo la almohada",
    scenario: "Tu hija de 13 años saca malas notas y está de mal humor por las mañanas. Sospechas que duerme con el móvil escondido o chatea hasta tarde.",
    options: [
      {
        text: "Ponerle un candado a su cajón por la noche sin explicar nada.",
        feedback: "Insuficiente. Genera desconfianza radical y no educa sobre los impactos del sueño en el cerebro y rendimiento.",
        isRecommended: false
      },
      {
        text: "Establecer una estación familiar de carga común en el salón a las 21:30. Todos cargan el móvil allí (padres incluidos).",
        feedback: "¡Excelente! Es una medida colectiva que da ejemplo, quita la tentación de la habitación garantizando las 9-11 horas de sueño, y se introduce como un acuerdo de salud común.",
        isRecommended: true
      },
      {
        text: "No hacer nada, al fin y al cabo tiene que madurar y aprender a autogestionarse sola.",
        feedback: "Incorrecto. A los 12-13 años la corteza prefrontal está en pleno desarrollo, el autocontrol de estímulos de dopamina continuos es biológicamente muy difícil sin mediación externa.",
        isRecommended: false
      }
    ],
    expertAdvice: "El 40,1% de adolescentes en Asturias duerme en la misma habitación con el móvil. Provoca retrasos del ciclo circadiano, vamping y mal humor matutino grave. Retirar las pantallas de la habitación por la noche reduce el riesgo a la mitad."
  },
  {
    id: "caso-2",
    problem: "Enfados por apagar los videojuegos",
    scenario: "Tu hijo de 12 años se pone muy agresivo o grita cada vez que le pides que apague la consola para ir a cenar, diciendo que 'es una partida online'.",
    options: [
      {
        text: "Gritar más fuerte o apagar el router de manera súbita para imponer respeto.",
        feedback: "Ineficaz. Genera una espiral conflictiva física y la hostilidad del menor, dañando la futura mediación habilitante.",
        isRecommended: false
      },
      {
        text: "Pactar el límite temporal antes de encender el juego, avisarle 10 minutos antes con un temporizador y dialogar sobre cómo el juego está diseñado para engancharle.",
        feedback: "¡Muy recomendado! Los pactos previos reducen el secuestro de atención de dopamina. Los niños de ESO entienden los mecanismos de retención técnica de los videojuegos si se les explica con calma.",
        isRecommended: true
      },
      {
        text: "Dejar que juegue el tiempo que quiera para evitar discusiones familiares estresantes.",
        feedback: "Peligroso. En el estudio, el 29,6% considera que pasa más tiempo del debido. Ceder constantemente aumenta el riesgo alimentando dependencias problemáticas.",
        isRecommended: false
      }
    ],
    expertAdvice: "Jugar no es inherentemente malo; permite socializar y estimula la resolución de problemas. Pero el juego sin límites claros ni supervisión puede derivar en trastorno por uso de videojuegos (1,3% en Asturias). Pactar tiempos antes de encender la consola es clave."
  },
  {
    id: "caso-3",
    problem: "Dinero en Cajas de Recompensa (Loot Boxes)",
    scenario: "Tu hijo te pide permiso continuo para usar tu tarjeta para comprar 'sobres' y 'gemas' virtuales en Brawl Stars o Fortnite para conseguir mejores personajes.",
    options: [
      {
        text: "Darle la tarjeta vigilando que no gaste demasiado dinero al mes.",
        feedback: "Riesgoso. Las cajas de recompensa activan circuitos cerebrales idénticos a los del juego de azar (azar, estimulo aleatorio y dinero).",
        isRecommended: false
      },
      {
        text: "Explicarle que las cajas de botín imitan las apuestas ilegales, jugar por su propio esfuerzo y rechazar micropagos de azar.",
        feedback: "¡Brillante! El 14% de menores en Asturias ha apostado dinero. Explicarles cómo funciona el azar del refuerzo intermitente les previene contra la ludopatía.",
        isRecommended: true
      },
      {
        text: "Comprarle todos los elementos para que sea popular entre sus compañeros escolares.",
        feedback: "Ineficaz. Fomenta la dependencia económica afectiva familiar hacia estímulos de corta validez, aumentando la presión del grupo.",
        isRecommended: false
      }
    ],
    expertAdvice: "El 62,8% de alumnos asturianos ha abierto Loot Boxes sin pagar y un 14,7% gastó dinero. El gasto en cajas de recompensas en secundarias está directamente correlacionado con una mayor tasa de apuestas reales online posteriormente."
  }
];

export const REFLEXIONES_QUESTS: ReflectionQuestion[] = [
  {
    id: "ref-1",
    question: "¿Tu hijo/a duerme con el teléfono móvil en su habitación durante la noche?",
    options: ["Sí, siempre o casi siempre", "A veces, cuando se le olvida en la cama", "Nunca, lo deja cargando en el salón"],
    expertCommentary: [
      "Alerta: El 40.1% de los alumnos de Asturias duerme con el dispositivo en su habitación. Esto duplica el riesgo de uso problemático de pantallas, y provoca vamping de madrugada.",
      "Cuidado: Incluso a veces, la simple luz de notificación rompe la calidad profunda del sueño reparador nocturno.",
      "Excelente decisión: Retirar el móvil antes del descanso y cargarlo fuera de la habitación fomenta una higiene digital óptima y un sueño de 9-11 horas necesario."
    ]
  },
  {
    id: "ref-2",
    question: "¿Se utilizan dispositivos (móviles, tabletas, TV) durante los desayunos, comidas o cenas familiares?",
    options: ["Sí, es habitual tener el móvil al lado o la TV puesta", "Ocasionalmente si hay algo importante", "Nunca, las comidas son libres de pantallas"],
    expertCommentary: [
      "Atención: En Asturias, el 23.5% refiere que sus padres usan el móvil durante las comidas. Los hijos de padres que usan el móvil en la mesa duplican las conductas de riesgo online (sexting, pornografía, apuestas, etc.).",
      "Riesgo de desconexión familiar. Haz el esfuerzo de apartar el móvil de la mesa por completo para dar ejemplo.",
      "¡Felicidades! Mantener la mesa como un espacio sin pantallas y de conversación real protege la salud emocional de toda la familia."
    ]
  },
  {
    id: "ref-3",
    question: "¿Qué opinas sobre el momento de entrada en Redes Sociales (TikTok, Instagram, etc.) de tu hijo/a de 12 o 13 años?",
    options: [
      "Tiene perfiles abiertos porque todos sus compañeros de clase ya los tienen",
      "Tiene una cuenta privada supervisada por mí de vez en cuando",
      "Aún no tiene perfil social; esperamos a que cumpla la edad recomendada legal (14 años)"
    ],
    expertCommentary: [
      "Riesgo elevado: El 91.6% de los adolescentes en Asturias ya cuenta con alguna red social. Los perfiles tempranos a los 12 años exponen al menor al juicio social destructivo, problemas de autoimagen, sexting pasivo o contacto inadecuado.",
      "Supervisión necesaria: Aunque sea privado, es fundamental dialogar de manera activa y revisar periódicamente, pero considera aplazar la entrada formal.",
      "Muy adecuado: Seguir el criterio legal en España de esperar a los 14 años previene el impacto de los algoritmos de gratificación rápida sobre la autoestima y el bienestar mental en edades clave de maduración."
    ]
  }
];
