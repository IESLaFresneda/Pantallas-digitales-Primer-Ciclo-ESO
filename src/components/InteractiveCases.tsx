import { useState } from "react";
import { CASOS_REALES } from "../data";
import { CaseStudy } from "../types";
import { HelpCircle, Sparkles, BookOpen, ChevronRight, CheckCircle2, XCircle } from "lucide-react";

export default function InteractiveCases() {
  const [activeCase, setActiveCase] = useState<string>("caso-1");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleCaseChange = (caseId: string) => {
    setActiveCase(caseId);
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  const handleOptionSelect = (idx: number) => {
    if (isSubmitted) return; // Ignore if already locked
    setSelectedOption(idx);
  };

  const activeCaseObj = CASOS_REALES.find((c) => c.id === activeCase) || CASOS_REALES[0];

  return (
    <section id="interactive-cases-section" className="bg-slate-950 text-white rounded-3xl p-6 md:p-10 max-w-7xl mx-auto my-8 relative overflow-hidden">
      {/* Visual glowing decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-sky-500/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-rose-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 pb-4 border-b border-slate-800">
          <div>
            <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Resolución de Conflictos
            </span>
            <h2 className="text-3xl font-bold font-display text-white mt-2 tracking-tight">
              Problemas Reales y Posibles Soluciones
            </h2>
            <p className="text-slate-400 max-w-xl mt-1 text-sm md:text-base">
              Pon a prueba tu estilo de acompañamiento digital. Selecciona una situación conflictiva recurrente de la ESO y elige la mejor respuesta pedagógica.
            </p>
          </div>

          {/* Tab selectors */}
          <div className="flex gap-2 mt-4 md:mt-0 flex-wrap">
            {CASOS_REALES.map((caso) => (
              <button
                id={`caso-selector-btn-${caso.id}`}
                key={caso.id}
                onClick={() => handleCaseChange(caso.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                  caso.id === activeCase
                    ? "bg-amber-400 border-amber-400 text-slate-950 font-bold"
                    : "bg-slate-900 border-slate-800 text-slate-300 hover:text-white"
                }`}
              >
                {caso.problem}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Case Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-6">
          {/* Situation Brief */}
          <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <HelpCircle className="h-5 w-5 text-amber-400" />
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  La Situación Familiar:
                </span>
              </div>
              <h3 className="text-xl font-bold font-display text-white mt-1 uppercase">
                {activeCaseObj.problem}
              </h3>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/50">
                "{activeCaseObj.scenario}"
              </p>
            </div>

            {/* Expert stats card */}
            <div className="mt-6 bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] uppercase font-mono text-slate-400 block font-bold">
                Clave del Estudio en Asturias:
              </span>
              <p className="text-slate-300 text-xs mt-1 leading-normal">
                {activeCaseObj.expertAdvice}
              </p>
            </div>
          </div>

          {/* Interactive Options Choice */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-4">
                Elige la alternativa pedagógica recomendada:
              </span>

              <div className="space-y-3">
                {activeCaseObj.options.map((opt, index) => {
                  const isSelected = selectedOption === index;
                  let cardCls = "bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-300";
                  if (isSelected) {
                    if (isSubmitted) {
                      cardCls = opt.isRecommended
                        ? "bg-emerald-500/10 border-emerald-500 text-emerald-100"
                        : "bg-rose-500/10 border-rose-500 text-rose-100";
                    } else {
                      cardCls = "bg-amber-400/5 border-amber-400 text-amber-200";
                    }
                  }

                  return (
                    <div
                      id={`option-card-${activeCase}-${index}`}
                      key={index}
                      onClick={() => handleOptionSelect(index)}
                      className={`cursor-pointer rounded-xl border p-4 text-xs md:text-sm leading-relaxed transition-all flex items-start gap-3 ${cardCls}`}
                    >
                      <span className="mt-1">
                        {isSubmitted && isSelected ? (
                          opt.isRecommended ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                          ) : (
                            <XCircle className="h-4 w-4 text-rose-400" />
                          )
                        ) : (
                          <span
                            className={`h-4 w-4 rounded-full border flex items-center justify-center text-[10px] ${
                              isSelected ? "border-amber-400 text-amber-400" : "border-slate-600 text-slate-500"
                            }`}
                          >
                            {index + 1}
                          </span>
                        )}
                      </span>
                      <p className="flex-1 font-medium">{opt.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Answer feedback and submissions block */}
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
              <div className="flex-1">
                {isSubmitted && selectedOption !== null && (
                  <div id="option-feedback-block" className="text-xs transition-opacity duration-300">
                    <span
                      className={`font-bold font-mono uppercase ${
                        activeCaseObj.options[selectedOption].isRecommended ? "text-emerald-400" : "text-rose-400"
                      }`}
                    >
                      {activeCaseObj.options[selectedOption].isRecommended ? "✓ Opción Recomendada" : "✗ Opción No Recomendada"}
                    </span>
                    <p className="text-slate-300 mt-1 leading-relaxed">
                      {activeCaseObj.options[selectedOption].feedback}
                    </p>
                  </div>
                )}
                {!isSubmitted && (
                  <p className="text-xs text-slate-500 font-mono">
                    {selectedOption === null ? "Selecciona una opción para continuar." : "Pulsa 'Validar respuesta' para ver el diagnóstico."}
                  </p>
                )}
              </div>

              {!isSubmitted ? (
                <button
                  id="submit-case-btn"
                  onClick={() => setIsSubmitted(true)}
                  disabled={selectedOption === null}
                  className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all self-end ${
                    selectedOption === null
                      ? "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                      : "bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold hover:scale-[1.01]"
                  }`}
                >
                  Validar respuesta
                </button>
              ) : (
                <button
                  id="retry-case-btn"
                  onClick={() => {
                    setSelectedOption(null);
                    setIsSubmitted(false);
                  }}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-750 text-slate-300 text-xs font-bold rounded-lg self-end"
                >
                  Intentar de nuevo
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
