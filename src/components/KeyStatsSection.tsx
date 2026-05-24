import { useState } from "react";
import { KEY_STATS } from "../data";
import { StatItem } from "../types";
import { Smartphone, Sparkles, AlertCircle, Info, ThumbsDown, HelpCircle, ShieldAlert } from "lucide-react";

export default function KeyStatsSection() {
  const [selectedStat, setSelectedStat] = useState<string | null>(null);
  const [filterBadge, setFilterBadge] = useState<string>("all");

  const filteredStats = KEY_STATS.filter((stat) => {
    if (filterBadge === "all") return true;
    if (filterBadge === "riesgo") return stat.badge === "riesgo" || stat.badge === "alerta";
    return stat.badge === filterBadge;
  });

  const getBadgeStyles = (badge: StatItem["badge"]) => {
    switch (badge) {
      case "alerta":
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "riesgo":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "informacion":
        return "bg-sky-50 text-sky-700 border-sky-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  const getStatIcon = (title: string) => {
    if (title.includes("Uso")) return <Smartphone className="h-5 w-5 text-sky-600" />;
    if (title.includes("Sueño")) return <AlertCircle className="h-5 w-5 text-rose-500" />;
    if (title.includes("Ejemplo")) return <ThumbsDown className="h-5 w-5 text-amber-600" />;
    if (title.includes("Bed") || title.includes("Móvil en")) return <HelpCircle className="h-5 w-5 text-rose-600" />;
    return <ShieldAlert className="h-5 w-5 text-indigo-500" />;
  };

  return (
    <section id="key-stats-section" className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 max-w-7xl mx-auto my-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-rose-100/40">
        <div>
          <span className="text-rose-600 text-xs font-semibold tracking-wider uppercase font-mono bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Estudio Asturias (12 y 13 años)
          </span>
          <h2 className="text-3xl font-bold font-display text-slate-900 mt-2 tracking-tight">
            ¿Qué dicen los resultados del alumnado?
          </h2>
          <p className="text-slate-500 max-w-xl mt-1 text-sm md:text-base">
            Resultados verídicos sobre el Principado de Asturias de UNICEF. Conoce la realidad digital de los estudiantes del primer ciclo de ESO.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
          <button
            id="filter-all-btn"
            onClick={() => setFilterBadge("all")}
            className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
              filterBadge === "all"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200"
            }`}
          >
            Todos los datos
          </button>
          <button
            id="filter-high-risk-btn"
            onClick={() => setFilterBadge("riesgo")}
            className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
              filterBadge === "riesgo"
                ? "bg-amber-600 text-white border-amber-600"
                : "bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200"
            }`}
          >
            Alertas y Riesgos
          </button>
        </div>
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredStats.map((stat) => (
          <div
            id={`stat-card-${stat.id}`}
            key={stat.id}
            onClick={() => setSelectedStat(selectedStat === stat.id ? null : stat.id)}
            className={`group cursor-pointer rounded-2xl border p-5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
              selectedStat === stat.id
                ? "bg-slate-950 border-slate-950 text-white shadow-lg scale-[1.02]"
                : "bg-slate-50/50 hover:bg-white border-slate-100 hover:border-slate-300 shadow-xs hover:shadow-md"
            }`}
          >
            {/* Top row */}
            <div className="flex items-center justify-between mb-2">
              <span
                className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md border ${
                  selectedStat === stat.id ? "bg-white/10 text-white border-white/20" : getBadgeStyles(stat.badge)
                }`}
              >
                {stat.badge === "alerta" ? "Alerta" : stat.badge === "riesgo" ? "Riesgo" : "Info"}
              </span>
              <span className={`transition-all duration-300 ${selectedStat === stat.id ? "text-slate-200" : ""}`}>
                {getStatIcon(stat.title)}
              </span>
            </div>

            {/* Middle row: Big percentage */}
            <div className="my-3">
              <div
                className={`text-4xl md:text-5xl font-mono font-bold tracking-tight ${
                  selectedStat === stat.id ? "text-amber-400" : "text-slate-900"
                }`}
              >
                {stat.percentage}
              </div>
              <h3
                className={`font-display text-sm font-semibold mt-1 tracking-tight uppercase ${
                  selectedStat === stat.id ? "text-slate-100" : "text-slate-800"
                }`}
              >
                {stat.title}
              </h3>
            </div>

            {/* Bottom text */}
            <p
              className={`text-xs leading-relaxed mt-2 ${
                selectedStat === stat.id ? "text-slate-300" : "text-slate-500"
              }`}
            >
              {stat.description}
            </p>

            {/* Expansion Indicator */}
            <div className="mt-4 flex items-center justify-between pointer-events-none">
              <span
                className={`text-[10px] uppercase tracking-wider font-semibold transition-all duration-300 ${
                  selectedStat === stat.id ? "text-amber-400 opacity-100" : "text-slate-500 group-hover:opacity-100 opacity-60"
                }`}
              >
                {selectedStat === stat.id ? "Ver menos" : "Saber más"}
              </span>
              <span
                className={`text-xs ml-1 transition-transform duration-300 ${
                  selectedStat === stat.id ? "rotate-180 text-amber-400" : "group-hover:translate-x-1"
                }`}
              >
                ▼
              </span>
            </div>

            {/* Interactive backdrop decor */}
            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-4 translate-y-4">
              <Sparkles className="h-24 w-24" />
            </div>
          </div>
        ))}
      </div>

      {/* Expanded statistical helper panel */}
      {selectedStat && (
        <div id="expanded-stat-panel" className="mt-8 bg-slate-950 text-white rounded-2xl p-6 transition-all duration-300 flex flex-col md:flex-row gap-6 items-center">
          <div className="bg-amber-400/10 p-4 rounded-xl border border-amber-400/20 text-center">
            <span className="text-xs text-amber-400 font-mono font-bold">Asturias Vs Recomendación</span>
            <div className="text-4xl font-mono font-bold text-amber-400 mt-1">
              {KEY_STATS.find((s) => s.id === selectedStat)?.percentage}
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-amber-400 font-display font-semibold uppercase text-sm tracking-wider">
              ¿Por qué es preocupante este indicador en 1º y 2º de ESO?
            </h4>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              {selectedStat === "stat-2" &&
                "El uso lúdico excesivo de pantallas bloquea otras actividades clave en el primer ciclo de ESO: deporte, juego libre, sueño reparador y conversación presencial. Promover límites claros ayuda a restaurar la memoria de trabajo necesaria para el estudio."}
              {selectedStat === "stat-3" &&
                "El cerebro adolescente necesita secretar melatonina para reparar conexiones neuronales y fijar la memoria escolar. Menos de 9 horas de sueño provoca problemas de ira por las mañanas, hostilidad, ansiedad y una pérdida severa de atención escolar."}
              {selectedStat === "stat-6" &&
                "Enseñar con el móvil en la mano durante la cena destruye la conversación y fomenta la desconexión protectora. Si no nos apartamos del dispositivo nosotros mismos, duplicamos el riesgo de conductas peligrosas online de nuestros hijos de 12 años."}
              {selectedStat === "stat-7" &&
                "Llevarse el teléfono móvil a la habitación y consultar de madrugada destruye la autodisciplina. Estimula y secuestra el cerebro infantil con ráfagas continuas de dopamina cuando deberían estar consolidando su crecimiento."}
              {selectedStat === "stat-1" &&
                "La conectividad omnipresente puede ser muy útil para proyectos escolares interactivos y de investigación, pero sin mediación digital se consume en bucles compulsivos de vídeos cortos y redes de amigos."}
              {selectedStat === "stat-4" &&
                "Casi 1 de cada 3 niños asturianos ve contenido violento o erótico no solicitado. El acompañamiento y los filtros técnicos protegen al menor mientras carece del filtro de criterio madurativo maduro."}
              {selectedStat === "stat-5" &&
                "El ciberacoso tradicional y escolar daña la salud mental escolar críticamente. Las cibervíctimas tienen hasta un riesgo de malestar elevado que repercute de forma directa en su rendimiento académico."}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
