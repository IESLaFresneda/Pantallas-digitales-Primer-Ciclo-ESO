import { useState } from "react";
import { PAUTAS_FAMILIARES } from "../data";
import { Clock, MessageSquare, Shield, Sparkles, Users, Heart, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function PlanDigitalGrid() {
  const [activePauta, setActivePauta] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Clock":
        return <Clock className="h-6 w-6" />;
      case "MessageCircle":
        return <MessageSquare className="h-6 w-6" />;
      case "Shield":
        return <Shield className="h-6 w-6" />;
      case "Sparkles":
        return <Sparkles className="h-6 w-6" />;
      case "Users":
        return <Users className="h-6 w-6" />;
      case "Heart":
        return <Heart className="h-6 w-6" />;
      default:
        return <Sparkles className="h-6 w-6" />;
    }
  };

  return (
    <section id="plan-digital-section" className="bg-slate-50 rounded-3xl p-6 md:p-10 max-w-7xl mx-auto my-8 border border-slate-100">
      <div className="text-center mb-10">
        <span className="text-sky-600 text-xs font-semibold tracking-wider uppercase font-mono bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
          Recomendaciones de Pediatría y Expertos
        </span>
        <h2 className="text-3xl font-bold font-display text-slate-900 mt-3 tracking-tight">
          Pautas Clave para las Familias de 1º y 2º de ESO
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto mt-2 text-sm md:text-base">
          Como cualquier otra herramienta, el móvil o la tableta no son buenos ni malos en sí mismos. El secreto radica en diferenciar el <strong>buen uso</strong> del <strong>mal uso</strong>.
        </p>
      </div>

      {/* Grid containing cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PAUTAS_FAMILIARES.map((pauta) => (
          <div
            id={`pauta-card-${pauta.id}`}
            key={pauta.id}
            onClick={() => setActivePauta(activePauta === pauta.id ? null : pauta.id)}
            className={`cursor-pointer rounded-2xl border bg-white p-6 transition-all duration-300 flex flex-col justify-between ${
              activePauta === pauta.id
                ? "ring-2 ring-slate-900 border-transparent shadow-lg scale-[1.01]"
                : "border-slate-100 hover:border-slate-300 hover:shadow-md"
            }`}
          >
            <div>
              {/* Header block */}
              <div className="flex items-start justify-between">
                <div className={`p-3 rounded-xl border ${pauta.colorClass.split(" ")[0]} ${pauta.colorClass.split(" ")[1]}`}>
                  {getIcon(pauta.iconName)}
                </div>
                <div className="text-right text-xs font-mono font-bold text-slate-400">
                  Pauta 0{pauta.number}
                </div>
              </div>

              {/* Title & subtitle */}
              <div className="mt-4">
                <h3 className="text-xl font-bold font-display text-slate-900 tracking-tight leading-none uppercase">
                  {pauta.title}
                </h3>
                <p className="text-slate-400 text-xs font-mono font-semibold tracking-wider mt-1 uppercase">
                  {pauta.subtitle}
                </p>
              </div>

              {/* Quick glance points */}
              <ul className="mt-4 space-y-2">
                {pauta.keyPoints.slice(0, 2).map((point, index) => (
                  <li key={index} className="flex items-start text-xs text-slate-600 leading-normal">
                    <span className="text-emerald-500 mr-2 font-bold">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Expander text link */}
            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between pointer-events-none">
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                {activePauta === pauta.id ? "Ocultar detalles" : "Ver Dos & Don'ts y consejos"}
              </span>
              <span className="text-slate-400 text-xs">
                {activePauta === pauta.id ? "▲" : "▼"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded details overlay/panel based on selected pauta */}
      {activePauta && (
        <div id="expanded-pauta-details" className="mt-8 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-md transition-all duration-500">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Plan de Acción Seleccionado</span>
              <h3 className="text-2xl font-bold font-display text-slate-900 tracking-tight mt-1 uppercase">
                {PAUTAS_FAMILIARES.find((p) => p.id === activePauta)?.title}
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                {PAUTAS_FAMILIARES.find((p) => p.id === activePauta)?.subtitle}
              </p>
            </div>
            <div className="bg-slate-100 px-4 py-2 rounded-xl text-center">
              <span className="text-xs text-slate-400 font-mono">Criterio Oficial</span>
              <div className="text-xs font-bold text-slate-700 font-mono mt-0.5">Asociación de Pediatría</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
            {/* Buen Uso (Dos) */}
            <div className="bg-emerald-50/20 border border-emerald-100 rounded-2xl p-5">
              <h4 className="flex items-center text-emerald-800 font-semibold font-display text-base">
                <CheckCircle2 className="h-5 w-5 mr-2 text-emerald-600" />
                Diferenciando el BUEN USO en el Estudio
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                La tecnología digital como una herramienta clave que potencia las habilidades del alumnado.
              </p>
              <ul className="mt-4 space-y-3">
                {activePauta === 1 && (
                  <>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-emerald-500 mr-2 font-bold font-mono">✓</span>
                      Usar el ordenador en el salón de manera transparente para hacer tareas escolares interactivas.
                    </li>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-emerald-500 mr-2 font-bold font-mono">✓</span>
                      Pactar paradas lúdicas obligatorias de descanso visual cada 30 minutos (regla 20-20-20).
                    </li>
                  </>
                )}
                {activePauta === 2 && (
                  <>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-emerald-500 mr-2 font-bold font-mono">✓</span>
                      Preguntarle qué ha aprendido hoy viendo ese canal de YouTube, compartiendo momentos divertidos.
                    </li>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-emerald-500 mr-2 font-bold font-mono">✓</span>
                      Ofrecer alternativas de ocio atractivas en familia (excursiones, deporte, cocina juntas).
                    </li>
                  </>
                )}
                {activePauta === 3 && (
                  <>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-emerald-500 mr-2 font-bold font-mono">✓</span>
                      Configurar juntos la cuenta de correo académico de la ESO de forma segura.
                    </li>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-emerald-500 mr-2 font-bold font-mono">✓</span>
                      Activar controles parentales transparentes en consolas y terminales como Google Family Link.
                    </li>
                  </>
                )}
                {activePauta === 4 && (
                  <>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-emerald-500 mr-2 font-bold font-mono">✓</span>
                      Priorizar aplicaciones de aprendizaje, idiomas (Duolingo), lógica escolar o edición creativa de vídeo.
                    </li>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-emerald-500 mr-2 font-bold font-mono">✓</span>
                      Utilizar mapas interactivos de geografía o apps de astronomía para trabajos escolares.
                    </li>
                  </>
                )}
                {activePauta === 5 && (
                  <>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-emerald-500 mr-2 font-bold font-mono">✓</span>
                      Comprender que a los 12 y 13 años la maduración social requiere interacciones tú a tú presenciales reales.
                    </li>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-emerald-500 mr-2 font-bold font-mono">✓</span>
                      Hablar abiertamente de por qué redes sociales como TikTok retrasan voluntariamente el sueño.
                    </li>
                  </>
                )}
                {activePauta === 6 && (
                  <>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-emerald-500 mr-2 font-bold font-mono">✓</span>
                      Apagar tu propio móvil o dejarlo en silencio completo durante las cenas familiares en la mesa.
                    </li>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-emerald-500 mr-2 font-bold font-mono">✓</span>
                      Establecer 'zonas familiares libres de tecnología': el comedor y los dormitorios familiares.
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Mal Uso (Don'ts) */}
            <div className="bg-rose-50/20 border border-rose-100 rounded-2xl p-5">
              <h4 className="flex items-center text-rose-800 font-semibold font-display text-base">
                <AlertTriangle className="h-5 w-5 mr-2 text-rose-500" />
                Los riesgos del MAL USO de la herramienta
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Riesgos inmediatos de fatiga mental, problemas cardiovasculares o desatención escolar.
              </p>
              <ul className="mt-4 space-y-3">
                {activePauta === 1 && (
                  <>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-rose-500 mr-2 font-bold font-mono">✗</span>
                      Permitir que use el móvil de forma ilimitada mientras 'estudia', sin control de concentración.
                    </li>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-rose-500 mr-2 font-bold font-mono">✗</span>
                      Cargar el teléfono en la mesita de noche junto a la almohada (fomenta el vamping).
                    </li>
                  </>
                )}
                {activePauta === 2 && (
                  <>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-rose-500 mr-2 font-bold font-mono">✗</span>
                      Invadir su intimidad hackeando sus cuentas personales a escondidas (destruye toda posibilidad de diálogo futuro).
                    </li>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-rose-500 mr-2 font-bold font-mono">✗</span>
                      Ignorar sus horas de pantallas argumentando que 'así se distrae solo de sus deberes'.
                    </li>
                  </>
                )}
                {activePauta === 3 && (
                  <>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-rose-500 mr-2 font-bold font-mono">✗</span>
                      Permitir que cree perfiles digitales con su nombre completo, colegio y enlace de geolocalización activa.
                    </li>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-rose-500 mr-2 font-bold font-mono">✗</span>
                      Compartir tarjetas de crédito o credenciales de pago integradas en juegos online.
                    </li>
                  </>
                )}
                {activePauta === 4 && (
                  <>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-rose-500 mr-2 font-bold font-mono">✗</span>
                      Hacer scroll sin fin en redes compulsivas (TikTok/Reels) bloqueando por completo la retención de estudio.
                    </li>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-rose-500 mr-2 font-bold font-mono">✗</span>
                      Jugar a videojuegos cargados de violencia explícita o sugerencia de apuestas para mayores de 18 años.
                    </li>
                  </>
                )}
                {activePauta === 5 && (
                  <>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-rose-500 mr-2 font-bold font-mono">✗</span>
                      Crear perfiles en redes antes de los 14 años saltándose deliberadamente las leyes de protección de menores.
                    </li>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-rose-500 mr-2 font-bold font-mono">✗</span>
                      Utilizar chats no moderados y con desconocidos, lo que en el estudio asturiano aumenta drásticamente el malestar emocional.
                    </li>
                  </>
                )}
                {activePauta === 6 && (
                  <>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-rose-500 mr-2 font-bold font-mono">✗</span>
                      Estar en la mesa respondiendo tus correos laborales de espaldas a los ojos de tus propios hijos.
                    </li>
                    <li className="text-xs text-slate-700 leading-normal flex items-start">
                      <span className="text-rose-500 mr-2 font-bold font-mono">✗</span>
                      Usar las pantallas como calmante de discusiones familiares o rabietas de tus hijos adolescentes.
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Actionable Advice Footer block */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="flex-1">
              <span className="text-xs text-amber-400 font-bold font-mono tracking-wider upper">Consejo Práctico Recomendado</span>
              <p className="text-slate-300 text-xs md:text-sm mt-1">
                {PAUTAS_FAMILIARES.find((p) => p.id === activePauta)?.recommendation}
              </p>
            </div>
            <button
              id="close-action-pauta-btn"
              onClick={() => setActivePauta(null)}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-100 text-xs font-semibold rounded-lg self-end sm:self-auto"
            >
              Cerrar detalles
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
