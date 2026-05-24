import { useState } from "react";
import { RECOMENDADO_SCHEDULE } from "../data";
import { Sun, BookOpen, Coffee, Dribbble, Moon, Bed, Check, VideoOff, Info } from "lucide-react";

export default function InteractiveTimeline() {
  const [selectedSlot, setSelectedSlot] = useState<string>("sch-1");

  const getSlotIcon = (iconName: string, active: boolean) => {
    const cls = active ? "h-6 w-6 text-white" : "h-6 w-6 text-slate-500";
    switch (iconName) {
      case "Sun":
        return <Sun className={cls} />;
      case "BookOpen":
        return <BookOpen className={cls} />;
      case "Coffee":
        return <Coffee className={cls} />;
      case "Dribbble":
        return <Dribbble className={cls} />;
      case "Moon":
        return <Moon className={cls} />;
      case "Bed":
        return <Bed className={cls} />;
      default:
        return <Sun className={cls} />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "sin-pantallas":
        return (
          <span className="flex items-center gap-1 bg-rose-50 text-rose-700 border border-rose-200 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
            <VideoOff className="h-3 w-3" /> Sin Pantallas
          </span>
        );
      case "restringido":
        return (
          <span className="flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
            Uso Restringido
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
            Uso Libre / Permitido
          </span>
        );
    }
  };

  const activeEvent = RECOMENDADO_SCHEDULE.find((e) => e.id === selectedSlot) || RECOMENDADO_SCHEDULE[0];

  return (
    <section id="timeline-section" className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 max-w-7xl mx-auto my-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 pb-4 border-b border-sky-100/40">
        <div>
          <span className="text-sky-600 text-xs font-semibold tracking-wider uppercase font-mono bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Higiene Digital Saludable
          </span>
          <h2 className="text-3xl font-bold font-display text-slate-900 mt-2 tracking-tight">
            Horario Orientativo Recomendado Sin Pantallas
          </h2>
          <p className="text-slate-500 max-w-xl mt-1 text-sm md:text-base">
            La Asociación Española de Pediatría aconseja regular de forma horaria las pantallas para asegurar el descanso y el estudio de calidad en 1º y 2º de ESO.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Timeline selector buttons */}
        <div className="lg:col-span-4 flex flex-col space-y-3">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest px-1 mb-1">
            Momentos del Día:
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
            {RECOMENDADO_SCHEDULE.map((event) => {
              const active = event.id === selectedSlot;
              return (
                <button
                  id={`timeline-slot-btn-${event.id}`}
                  key={event.id}
                  onClick={() => setSelectedSlot(event.id)}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                    active
                      ? "bg-slate-950 border-slate-950 text-white shadow-md font-medium"
                      : "bg-slate-50 border-slate-100 hover:border-slate-300 text-slate-700 hover:bg-white"
                  }`}
                >
                  <span className={`p-2 rounded-lg ${active ? "bg-sky-500/20" : "bg-slate-200/50"}`}>
                    {getSlotIcon(event.iconName, active)}
                  </span>
                  <div>
                    <div className={`text-[10px] font-mono leading-none ${active ? "text-sky-300" : "text-slate-400"}`}>
                      {event.timeSlot}
                    </div>
                    <div className="text-xs font-display font-bold mt-1 tracking-tight truncate max-w-[140px] md:max-w-none">
                      {event.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column: Explanatory card based on choice */}
        <div className="lg:col-span-8">
          <div id={`case-detail-card-${activeEvent.id}`} className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden transition-all duration-300">
            {/* Top decor */}
            <div className="absolute right-0 top-0 opacity-[0.02] transform translate-x-4 -translate-y-4 pointer-events-none">
              <Sun className="h-64 w-64 text-slate-950" />
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className="text-xs font-mono text-slate-400 tracking-widest font-bold uppercase">
                  {activeEvent.timeSlot} - Recomendación Oficial
                </span>
                {getStatusBadge(activeEvent.status)}
              </div>

              <h3 className="text-2xl font-bold font-display text-slate-900 tracking-tight mt-1 mb-2">
                {activeEvent.title}
              </h3>

              <div className="my-4 bg-white rounded-2xl p-4 border border-slate-100 shadow-xs">
                <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block mb-1">
                  Regla de Bienestar:
                </span>
                <p className="text-sm font-semibold text-slate-800 flex items-center">
                  <Check className="h-4 w-4 mr-2 text-emerald-500 stroke-[3]" />
                  {activeEvent.recommendation}
                </p>
              </div>

              <div className="mt-4">
                <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">
                  ¿Por qué se recomienda en el Primer Ciclo de ESO?
                </span>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  {activeEvent.details}
                </p>
              </div>
            </div>

            {/* Bottom Info box with Asturian Context */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-sky-50 rounded-xl border border-sky-100 text-sky-600">
                  <Info className="h-5 w-5" />
                </div>
                <div className="text-xs">
                  <span className="font-mono text-slate-400 block">Dato del Estudio en Asturias:</span>
                  <p className="text-slate-700 font-semibold mt-0.5">
                    {activeEvent.id === "sch-5" || activeEvent.id === "sch-6"
                      ? "El 40,1% de los escolares duerme con el móvil en su habitación y el 48,8% lo enciende de madrugada."
                      : activeEvent.id === "sch-3"
                      ? "El 23,5% de las familias de Asturias usa el móvil en la mesa, interrumpiendo el diálogo protector."
                      : "Establecer la higiene digital previene el 50% de las patologías de desatención escolar de la ESO."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
