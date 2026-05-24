import { useState, useRef, useEffect } from "react";
import { ChatMessage } from "../types";
import { Send, Bot, User, Sparkles, HelpCircle, Loader2, RefreshCw } from "lucide-react";

const STARTER_PROMPTS = [
  {
    label: "¿Móvil en el dormitorio por la noche?",
    prompt: "¿Qué dice el estudio sobre dejar que use el móvil por la noche en la habitación y qué recomiendan los pediatras?"
  },
  {
    label: "¿Uso de móviles durante las comidas?",
    prompt: "¿Qué impacto tiene que los padres usemos el móvil en la mesa durante la comida familiar según los datos del Principado de Asturias?"
  },
  {
    label: "¿Edad recomendada para redes sociales?",
    prompt: "¿A qué edad es aconsejable dar acceso a redes sociales como TikTok o Instagram y qué riesgos corren a los 12-13 años?"
  },
  {
    label: "¿Pautas para frenar el abuso de consolas?",
    prompt: "¿Cómo puedo acordar con mi hijo de la ESO normas saludables para jugar a videojuegos del estilo Fortnite o Brawl Stars?"
  }
];

export default function DigitalAssistantChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "¡Hola! Soy tu orientador para el Bienestar Digital Familiar. Estoy especializado en dar pautas y consejos prácticos sobre pantallas basadas en el estudio de Asturias (UNICEF 2024) y la Asociación Española de Pediatría. ¿Qué te gustaría consultar hoy sobre tu hijo/a de 12 o 13 años?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToEnd = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToEnd();
  }, [messages, isLoading]);

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || inputMessage.trim();
    if (!textToSend || isLoading) return;

    setErrorStatus(null);
    if (!customPrompt) {
      setInputMessage("");
    }

    const updatedUserMsgs = [...messages, { role: "user" as const, content: textToSend }];
    setMessages(updatedUserMsgs);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages: updatedUserMsgs })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Error al comunicarse con el servidor.");
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
    } catch (e: any) {
      console.error(e);
      setErrorStatus(e.message || "Ocurrió un problema inesperado.");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Lo siento, ha ocurrido un error al conectar con mi servidor. Por favor, asegúrate de que la clave API (GEMINI_API_KEY) está configurada en la sección 'Secrets' de Google AI Studio."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "¡Hola de nuevo! He restablecido nuestra conversación. ¿En qué puedo ayudarte sobre el uso de tecnologías en 1º o 2º de ESO?"
      }
    ]);
    setErrorStatus(null);
  };

  return (
    <section id="chat-consultor-section" className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-7xl mx-auto my-8 text-white relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-4 mb-6 border-b border-slate-800 gap-4">
        <div>
          <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5 w-fit">
            <Sparkles className="h-3 w-3 stroke-[3]" /> Consejero Inteligente
          </span>
          <h2 className="text-2xl font-bold font-display text-white mt-1.5 tracking-tight">
            Consulta al Asistente de Bienestar Digital
          </h2>
          <p className="text-slate-400 text-xs md:text-sm">
            Pregunta dudas sobre directrices de ciberacoso, adicciones sin sustancia, normas de videojuegos, loot boxes, horas de pantallas y hábitos escolares.
          </p>
        </div>
        <button
          id="btn-reset-conversation"
          onClick={handleResetChat}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg font-mono tracking-tight"
        >
          <RefreshCw className="h-3 w-3" /> Reiniciar Conversación
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Helper starter prompts */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2 px-1">
              Temas de consulta rápida:
            </span>
            <div className="flex flex-col gap-2">
              {STARTER_PROMPTS.map((starter, index) => (
                <button
                  id={`starter-prompt-btn-${index}`}
                  key={index}
                  onClick={() => handleSendMessage(starter.prompt)}
                  disabled={isLoading}
                  className="w-full text-left p-3 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white hover:scale-[1.01] transition-all text-xs flex gap-2.5 items-start"
                >
                  <HelpCircle className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="font-semibold leading-relaxed">{starter.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-850 p-4 rounded-xl border border-slate-800 text-[11px] text-slate-400 leading-normal mt-6 hidden lg:block">
            <strong>Nota científica:</strong> Las respuestas de esta IA se guían estrictamente por los porcentajes epidemiológicos de la muestra de Asturias de UNICEF (1.605 encuestas) y las recomendaciones oficiales del Plan Digital Familiar de España.
          </div>
        </div>

        {/* Chat Balloon Window */}
        <div className="lg:col-span-8 flex flex-col h-[420px] bg-slate-950/80 rounded-2xl border border-slate-800 relative overflow-hidden">
          {/* Chat history balloons container */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
            {messages.map((msg, index) => {
              const isAssistant = msg.role === "assistant";
              return (
                <div key={index} id={`msg-wrapper-${index}`} className={`flex items-start gap-3 ${isAssistant ? "" : "flex-row-reverse"}`}>
                  {/* Icon avatar */}
                  <div
                    className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isAssistant ? "bg-amber-400 text-slate-950 font-bold" : "bg-sky-500 text-white"
                    }`}
                  >
                    {isAssistant ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </div>

                  {/* Bubble content */}
                  <div
                    className={`max-w-[82%] rounded-2xl p-3.5 text-xs md:text-sm leading-relaxed ${
                      isAssistant ? "bg-slate-900 border border-slate-800 text-slate-100" : "bg-sky-600 text-white font-medium"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.content}</p>
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div id="chat-loading-balloon" className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center animate-pulse">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-xs text-slate-300 flex items-center gap-2">
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-amber-400" />
                  <span>El orientador digital está elaborando tu recomendación...</span>
                </div>
              </div>
            )}

            {errorStatus && (
              <div id="chat-error-log-banner" className="bg-rose-500/10 border border-rose-500 rounded-xl p-3 text-xs text-rose-300">
                <strong>Error: </strong> {errorStatus}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Form write input */}
          <form
            id="chat-send-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2 items-center"
          >
            <input
              id="input-text-message-field"
              type="text"
              value={inputMessage}
              disabled={isLoading}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Escribe tu duda sobre pantallas y adolescentes aquí..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs md:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
            <button
              id="submit-send-msg-btn"
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className={`p-2.5 rounded-xl transition-all ${
                !inputMessage.trim() || isLoading
                  ? "bg-slate-800 text-slate-600 border border-slate-750 cursor-not-allowed"
                  : "bg-amber-400 hover:bg-amber-300 text-slate-950 hover:scale-[1.03]"
              }`}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
