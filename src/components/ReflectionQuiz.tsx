import { useState } from "react";
import { REFLEXIONES_QUESTS } from "../data";
import { HelpCircle, ChevronRight, RefreshCw, Milestone, HeartHandshake } from "lucide-react";

export default function ReflectionQuiz() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSelectOption = (questId: string, optIdx: number) => {
    setAnswers((prev) => ({ ...prev, [questId]: optIdx }));
  };

  const isAllAnswered = Object.keys(answers).length === REFLEXIONES_QUESTS.length;

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
  };

  return (
    <section id="reflection-quiz-section" className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 max-w-7xl mx-auto my-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 pb-4 border-b border-rose-100/40">
        <div>
          <span className="text-rose-600 text-xs font-semibold tracking-wider uppercase font-mono bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Cuestionario de Autoevaluación
          </span>
          <h2 className="text-3xl font-bold font-display text-slate-900 mt-2 tracking-tight animate-fade-in">
            Preguntas para Reflexionar en Familia
          </h2>
          <p className="text-slate-500 max-w-xl mt-1 text-sm md:text-base">
            Ninguna familia es perfecta. Responde con sinceridad estas tres cuestiones clave y conoce el diagnóstico y comentario de pediatras sobre tu hogar.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left column: Questions */}
        <div className="lg:col-span-7 space-y-6">
          {REFLEXIONES_QUESTS.map((quest, qIdx) => (
            <div id={`question-block-${quest.id}`} key={quest.id} className="bg-slate-50/70 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-display font-bold text-sm md:text-base text-slate-800 flex items-start gap-2">
                <span className="bg-slate-200 text-slate-700 text-xs font-mono font-bold h-6 w-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  {qIdx + 1}
                </span>
                {quest.question}
              </h3>

              <div className="mt-4 space-y-2">
                {quest.options.map((opt, oIdx) => {
                  const selected = answers[quest.id] === oIdx;
                  return (
                    <button
                      id={`opt-btn-${quest.id}-${oIdx}`}
                      key={oIdx}
                      disabled={showResults}
                      onClick={() => handleSelectOption(quest.id, oIdx)}
                      className={`w-full text-left p-3 text-xs md:text-sm rounded-xl border transition-all flex items-center justify-between ${
                        selected
                          ? "bg-slate-900 border-slate-900 text-white font-medium shadow-xs"
                          : showResults
                          ? "bg-slate-100/30 border-slate-100 text-slate-400 cursor-not-allowed"
                          : "bg-white border-slate-200 hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      <span>{opt}</span>
                      <span
                        className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                          selected ? "border-sky-400 bg-sky-400/20 text-sky-300" : "border-slate-300"
                        }`}
                      >
                        {selected && "✓"}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Show commentary directly below each question if submitted */}
              {showResults && answers[quest.id] !== undefined && (
                <div id={`quest-feedback-${quest.id}`} className="mt-4 bg-white border border-slate-200 rounded-xl p-4 transition-all">
                  <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">
                    Comentario y Alerta del Estudio:
                  </span>
                  <p className="text-slate-600 text-xs md:text-sm mt-1 leading-relaxed">
                    {quest.expertCommentary[answers[quest.id]]}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right column: Cumulative Diagnostics */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden">
            {/* Visual background decor */}
            <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none transform rotate-12">
              <Milestone className="h-64 w-64" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <HeartHandshake className="h-6 w-6 text-amber-400" />
                <h3 className="font-display font-bold text-lg text-white">
                  Diagnóstico Familiar Digital
                </h3>
              </div>

              {!showResults ? (
                <div className="space-y-4">
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                    Responde las 3 reflexiones propuestas de la columna de la izquierda para generar una valoración general interactiva sobre la seguridad y convivencia y bienestar de tu familia.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold mb-2">
                      Ficha de progreso:
                    </span>
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Reflexiones contestadas:</span>
                      <span className="font-bold font-mono">
                        {Object.keys(answers).length} / {REFLEXIONES_QUESTS.length}
                      </span>
                    </div>
                    {/* Linear progress bar */}
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-2 border border-slate-700/50">
                      <div
                        className="bg-amber-400 h-full transition-all duration-300"
                        style={{ width: `${(Object.keys(answers).length / REFLEXIONES_QUESTS.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
                    <span className="text-amber-400 text-xs font-bold font-mono uppercase tracking-widest block mb-1">
                      Conclusión Pedagógica:
                    </span>
                    <p className="text-slate-200 text-xs md:text-sm leading-relaxed mt-1">
                      Tus respuestas muestran que eres consciente de los retos de las pantallas. El estudio de Asturias demuestra que aplicar la higiene digital colectiva (sin móviles cargando en dormitorios, sin tele durante el almuerzo familiar, y aplazando el acceso a redes sociales) reduce de forma directa la tasa de malestar y adicción telemática a la mitad.
                    </p>
                  </div>
                  <p className="text-slate-400 text-[10px] uppercase font-mono tracking-wider leading-relaxed">
                    * El acompañamiento habilitante (sin juzgar, dialogando y pactando) es el factor protector pedagógico de mayor efectividad entre los 12 y 13 años.
                  </p>
                </div>
              )}
            </div>

            {/* Submissions & Reset CTA block */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
              {!showResults ? (
                <button
                  id="diagnose-quiz-btn"
                  onClick={() => setShowResults(true)}
                  disabled={!isAllAnswered}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold font-display transition-all ${
                    isAllAnswered
                      ? "bg-amber-400 text-slate-950 hover:bg-amber-300 cursor-pointer"
                      : "bg-slate-800 text-slate-500 border border-slate-750 cursor-not-allowed"
                  }`}
                >
                  Generar diagnóstico médico familiar
                </button>
              ) : (
                <button
                  id="reset-quiz-btn"
                  onClick={handleReset}
                  className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 border border-slate-750 text-slate-200 text-xs font-bold font-display rounded-xl flex items-center justify-center gap-2"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  Repetir autoevaluación
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
