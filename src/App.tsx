/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { BookOpen, ShieldAlert, Sparkles, Phone, HelpCircle, GraduationCap, Layout, MessageSquareHeart, CheckCircle, ExternalLink } from "lucide-react";
import KeyStatsSection from "./components/KeyStatsSection";
import PlanDigitalGrid from "./components/PlanDigitalGrid";
import InteractiveTimeline from "./components/InteractiveTimeline";
import InteractiveCases from "./components/InteractiveCases";
import ReflectionQuiz from "./components/ReflectionQuiz";
import DigitalAssistantChat from "./components/DigitalAssistantChat";

export default function App() {
  const [activeTab, setActiveTab] = useState<"estudio" | "pautas" | "casos" | "reflexiones" | "consultor">("estudio");

  const getActiveView = () => {
    switch (activeTab) {
      case "estudio":
        return (
          <div className="animate-fade-in">
            <KeyStatsSection />
            <InteractiveTimeline />
          </div>
        );
      case "pautas":
        return <PlanDigitalGrid />;
      case "casos":
        return <InteractiveCases />;
      case "reflexiones":
        return <ReflectionQuiz />;
      case "consultor":
        return <DigitalAssistantChat />;
      default:
        return <KeyStatsSection />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* Real Asturias-Inspired Education Header Banner */}
      <header className="bg-slate-900 border-b border-slate-850 text-white shrink-0 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Logo brand */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center bg-slate-850 border border-slate-750 text-sky-400 rounded-xl">
              <GraduationCap className="h-6 w-6 stroke-[2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded-md font-bold tracking-tight">
                  Consejería de Educación
                </span>
                <span className="text-[10px] font-mono uppercase bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-md font-bold tracking-tight">
                  12 y 13 años
                </span>
              </div>
              <h1 className="text-xl md:text-2xl font-bold font-display tracking-tight text-white mt-1 uppercase">
                Infancia y Bienestar Digital - Principado de Asturias
              </h1>
            </div>
          </div>

          {/* Quick Stats pill */}
          <div className="flex items-center gap-2 bg-slate-850 border border-slate-800 px-3.5 py-1.5 rounded-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono text-slate-300 font-bold uppercase tracking-wide">
              Estudio UNICEF Asturias (Primer ciclo de ESO)
            </span>
          </div>

        </div>
      </header>

      {/* Hero Welcome banner cards */}
      <div className="bg-slate-950 text-white py-12 px-4 shadow-sm border-b border-slate-900 relative overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-900/10 via-slate-950 to-slate-950 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl md:mb-0">
            <h2 className="text-4xl md:text-5xl font-extrabold font-display leading-tight tracking-tight text-white uppercase select-none">
              Les acompañamos hoy <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-300">
                para que decidan mejor mañana.
              </span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base mt-2 select-text leading-relaxed">
              Tecnología sí, pero con criterio, límites claros, mediación habilitante y seguridad compartida. Conoce cómo equilibrar la escuela y las pantallas de forma colectiva.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#consultor-digital-tab"
                onClick={() => setActiveTab("consultor")}
                className="px-4 py-2.5 bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all font-bold text-xs rounded-xl flex items-center gap-1.5"
              >
                <MessageSquareHeart className="h-4 w-4" />
                Dudas al Experto (Chat)
              </a>
              <button
                id="see-pautas-hero-btn"
                onClick={() => setActiveTab("pautas")}
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all text-slate-200 text-xs font-semibold rounded-xl"
              >
                Ver las 6 pautas clave
              </button>
            </div>
          </div>

          {/* Golden quote visual block card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-sm">
            <div className="flex items-center gap-2 text-sky-400">
              <Sparkles className="h-5 w-5" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">La Mejor Guía Eres Tú</span>
            </div>
            <p className="text-xs md:text-sm text-slate-300 italic mt-3 leading-relaxed">
              "El recurso protector de mayor repercusión pedagógica en la adolescencia es tu tiempo de escucha familiar completa y tu confianza, combinados con límites comunes claros y sin gritos."
            </p>
            <div className="text-right text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-3">
              — Pediatras de Asturias
            </div>
          </div>
        </div>
      </div>

      {/* Navigation section selectors bar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 flex overflow-x-auto gap-1 py-3 justify-start md:justify-center md:items-center">
          
          <button
            id="nav-estudio-tab"
            onClick={() => setActiveTab("estudio")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold font-display uppercase tracking-wide shrink-0 transition-all ${
              activeTab === "estudio"
                ? "bg-slate-950 text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-950 border border-transparent"
            }`}
          >
            📊 Estudio Asturias
          </button>
          
          <button
            id="nav-pautas-tab"
            onClick={() => setActiveTab("pautas")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold font-display uppercase tracking-wide shrink-0 transition-all ${
              activeTab === "pautas"
                ? "bg-slate-950 text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-950 border border-transparent"
            }`}
          >
            📋 Pautas Familiares
          </button>

          <button
            id="nav-casos-tab"
            onClick={() => setActiveTab("casos")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold font-display uppercase tracking-wide shrink-0 transition-all ${
              activeTab === "casos"
                ? "bg-slate-950 text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-950 border border-transparent"
            }`}
          >
            🛡️ Casos Interactivos
          </button>

          <button
            id="nav-reflexiones-tab"
            onClick={() => setActiveTab("reflexiones")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold font-display uppercase tracking-wide shrink-0 transition-all ${
              activeTab === "reflexiones"
                ? "bg-slate-950 text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-950 border border-transparent"
            }`}
          >
            💭 Autoevaluación
          </button>

          <button
            id="nav-consultor-tab"
            onClick={() => setActiveTab("consultor")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold font-display uppercase tracking-wide shrink-0 transition-all ${
              activeTab === "consultor"
                ? "bg-slate-950 text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-950 border border-transparent"
            }`}
          >
            💬 Asistente IA
          </button>

        </div>
      </nav>

      {/* Main active views workspace context */}
      <main className="flex-1 px-4 py-6 md:py-8">
        {getActiveView()}
      </main>

      {/* Resources & Support Helpline Sidebar section */}
      <section className="bg-slate-900 border-t border-slate-800 text-slate-100 p-6 md:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* ANAR block info */}
          <div className="bg-slate-850 p-5 rounded-2xl border border-slate-800 self-stretch flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-400 mb-3">
                <Phone className="h-5 w-5 animate-pulse" />
                <span className="font-display font-bold text-sm tracking-tight">¿NECESITAS APOYO?</span>
              </div>
              <h4 className="text-white font-display font-semibold text-xs uppercase font-mono tracking-wider">
                Teléfono/Chat ANAR Familiar
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed mt-2">
                Canal gratuito, confidencial e inmediato para hablar con psicólogos sobre adicciones digitales, acoso escolar y malestar familiar.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80">
              <span className="text-white font-mono font-bold text-base block">900 20 20 10</span>
              <span className="text-[10px] text-slate-400 font-mono block">Disponible 24h / Teléfono gratuito</span>
            </div>
          </div>

          {/* Asturias Juego Helpline block */}
          <div className="bg-slate-850 p-5 rounded-2xl border border-slate-800 self-stretch flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-400 mb-3">
                <ShieldAlert className="h-5 w-5" />
                <span className="font-display font-bold text-sm tracking-tight">APUESTAS Y AZAR</span>
              </div>
              <h4 className="text-white font-display font-semibold text-xs uppercase font-mono tracking-wider">
                Soporte de Asturias
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed mt-2">
                Línea oficial del Principado para la ayuda y prevención del juego problemático o apuestas online de menores de edad.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80">
              <span className="text-white font-mono font-bold text-base block">900 533 533</span>
              <span className="text-[10px] text-slate-400 font-mono block">Línea regional asturiana</span>
            </div>
          </div>

          {/* Plan Digital Familiar AEP URL context */}
          <div className="bg-slate-850 p-5 rounded-2xl border border-slate-800 self-stretch flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sky-450 mb-3 text-sky-400">
                <BookOpen className="h-5 w-5" />
                <span className="font-display font-bold text-sm tracking-tight">PLAN DIGITAL</span>
              </div>
              <h4 className="text-white font-display font-semibold text-xs uppercase font-mono tracking-wider">
                Plan Familiar AEPed
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed mt-2">
                Genera tu propio plan familiar personalizado paso a paso con las directrices de la Asociación Española de Pediatría.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80">
              <a
                href="https://www.plandigitalfamilia.aeped.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 text-xs font-mono font-bold flex items-center gap-1.5"
              >
                plandigitalfamilia.aeped.es <ExternalLink className="h-3 w-3" />
              </a>
              <span className="text-[10px] text-slate-400 font-mono block mt-0.5">Asociación de Pediatría</span>
            </div>
          </div>

          {/* Expert comitee reports source text */}
          <div className="bg-slate-850 p-5 rounded-2xl border border-slate-800 self-stretch flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 mb-3">
                <CheckCircle className="h-5 w-5" />
                <span className="font-display font-bold text-sm tracking-tight">FUENTES DEL PORTAL</span>
              </div>
              <h4 className="text-white font-display font-semibold text-xs uppercase font-mono tracking-wider">
                Estudio UNICEF 2024
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed mt-2">
                Portal construido según los datos de la encuesta epidemiológica regional del Principado de Asturias y el Plan Nacional para un Entorno Digital Seguro.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80">
              <a
                href="https://infanciadigital.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 text-xs font-mono font-bold flex items-center gap-1.5"
              >
                infanciadigital.es <ExternalLink className="h-3 w-3" />
              </a>
              <span className="text-[10px] text-slate-400 font-mono block mt-0.5">UNICEF España & amp; Red.es</span>
            </div>
          </div>

        </div>
      </section>

      {/* Styled institutional footer credits matching Asturian Portal standards */}
      <footer className="bg-slate-950 text-slate-500 py-6 text-center text-xs border-t border-slate-900 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="select-text">
            © 2026 Consejería de Educación — Infancia y Bienestar Digital. Basado en el informe oficial de UNICEF de Resultados del Principado de Asturias.
          </p>
          <div className="flex gap-4 font-mono text-[10px] uppercase tracking-wider font-bold">
            <span className="text-slate-400">Educar es proteger. Acompañar es crecer.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
