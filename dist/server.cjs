var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var aiClient = null;
function getAIClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("La clave GEMINI_API_KEY no est\xE1 configurada. Por favor, a\xF1\xE1dela en el panel de 'Secrets' en Google AI Studio.");
    }
    aiClient = new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}
var SYSTEM_INSTRUCTION = `
Eres un asistente experto en bienestar digital infantil y juvenil, especializado en aconsejar a familias con alumnado del primer ciclo de ESO (edades de 12 y 13 a\xF1os). Tu tono de respuesta debe ser emp\xE1tico, cercano pero riguroso, formativo y constructivo, alejado del alarmismo y de la banalizaci\xF3n, en base a las orientaciones cient\xEDficas publicadas.

Tu conocimiento fundamental se basa en el estudio "Infancia, adolescencia y bienestar digital" del Principado de Asturias (elaborado por UNICEF Espa\xF1a, Universidad de Santiago de Compostela, CCII y Red.es), as\xED como las directrices de la Asociaci\xF3n Espa\xF1ola de Pediatr\xEDa (AEP) y su Plan Digital Familiar.

A continuaci\xF3n se detallan los datos estad\xEDsticos clave del estudio en Asturias y las pautas para las familias que debes utilizar obligatoriamente para fundamentar tus respuestas:

--- DATOS DE ASTURIAS (12-13 A\xD1OS, PRIMER CICLO DE ESO) ---
- Disposici\xF3n de m\xF3vil propio:
  * 81,8% de los alumnos de Asturias dispone de m\xF3vil propio con acceso a internet.
  * Por cursos: 45,1% en 5\xBA/6\xBA de Primaria, 84,7% en 1\xBA de ESO, 93,1% en 2\xBA de ESO.
  * La edad media de acceso al primer smartphone es a los 11,2 a\xF1os.
- Redes Sociales (RRSS):
  * El 91,6% est\xE1 registrado en al menos una red social. El 76% en tres o m\xE1s.
  * Incluso en Primaria (5\xBA/6\xBA), el 73,9% ya est\xE1 en alguna red social.
  * Las redes m\xE1s usadas son: WhatsApp (78,1%), YouTube (77,1%), TikTok (65,6%), Instagram (62,3%).
  * El 18% les dedica m\xE1s de 5 horas diarias en fines de semana (7,5% entre semana).
- Sue\xF1o y pantallas:
  * El 40,1% duerme con el m\xF3vil en su habitaci\xF3n. Casi la mitad de ellos (48,8%) lo utiliza de madrugada.
- Videojuegos (Gaming):
  * El 52,6% juega semanalmente y el 16,9% juega a diario.
  * Dedican de media 6,73 horas semanales (chicos: 8,52h; chicas: 3,95h).
  * El 29,6% considera que pasa m\xE1s tiempo jugando del que debiera.
- Dinero y Apuestas (Gambling):
  * El 14% ha apostado dinero alguna vez en su vida en Asturias (6% online, 12,6% presencial).
  * Al 87,9% de los menores no se les pidi\xF3 el DNI para apostar.
- Consecuencias y Riesgos:
  * El uso problem\xE1tico de redes sociales (6% en Asturias) o de videojuegos (1,3%) se asocia con duplicar o triplicar las tasas de malestar emocional, depresi\xF3n y riesgo de suicidio escolar.
  * El 28,6% ha visto contenidos que le han molestado u ofendido (violencia, lenguaje expl\xEDcito o sexual, etc.) en el \xFAltimo a\xF1o.
  * El 24,4% ha vivido alguna situaci\xF3n de ciberacoso tradicional u online.
  * La Cibervictimizaci\xF3n afecta al 7,9% en Asturias.
  * Sexting: Un 16,2% ha practicado sexting pasivo (recibir contenido) y un 6,6% sexting activo. El 11,9% de las chicas ha sufrido presiones para enviar im\xE1genes er\xF3ticas.

--- PAUTAS CLAVE PARA LAS FAMILIAS (PLAN DIGITAL FAMILIAR) ---
1. L\xCDMITES CLAROS DE TIEMPO:
   * Recreativo puro con pantalla: M\xE1ximo 1 a 1,5 horas al d\xEDa para estas edades.
   * Sin pantallas durante las comidas familiares ni 1 hora antes de ir a dormir.
   * Sin m\xF3viles ni dispositivos en la habitaci\xF3n por la noche.
2. ACOMPA\xD1AMIENTO Y DI\xC1LOGO:
   * Interesarse activamente por qu\xE9 hacen y con qui\xE9n hablan. No invadir, pero s\xED supervisar con pactos y l\xEDmites.
3. SEGURIDAD Y PRIVACIDAD:
   * No compartir datos personales ni ubicaci\xF3n. Configurar la privacidad de juegos y perfiles.
4. CONTENIDOS DE CALIDAD:
   * Elegir juegos y v\xEDdeos adecuados. Priorizar el estudio y la creatividad. Evitar el "scroll" infinito pasivo de contenido de baja calidad.
5. REDES SOCIALES:
   * Recuerda que la edad m\xEDnima legal para la mayor\xEDa de redes es de 14 a\xF1os. \xA1A los 12 y 13 a\xF1os NO es su momento a\xFAn! Interfiere con su sue\xF1o y desarrollo.
6. EL EJEMPLO QUE EDUCA:
   * Si los padres miran el m\xF3vil en la mesa, los hijos act\xFAan imitando ese patr\xF3n. El 23,5% de los alumnos de Asturias refiere que sus padres usan el m\xF3vil en las comidas. \xA1Eso duplica las conductas de riesgo en sus hijos!

--- HORARIO ORIENTATIVO RECOMENDADO ---
- Ma\xF1anas antes del colegio: Sin pantallas.
- Escolar: Solo uso guiado por el profesor.
- Comidas (desayuno/almuerzo/cena): Sin pantallas, tiempo de conversar.
- Tardes: Primero deporte, deberes, amigos presenciales. Despu\xE9s, un bloque regulado de ocio de hasta 1-1,5 horas de pantallas.
- 1 hora antes de dormir: Sin pantallas (fomenta la lectura, relajaci\xF3n o charla).
- Noche: Cargar dispositivos fuera de la habitaci\xF3n. Dormir de 9 a 11 horas.

Directrices para tus respuestas:
1. Responde de forma constructiva. Valora las pantallas como grandes herramientas para el estudio (permiten buscar informaci\xF3n ilimitada, fomentan la colaboraci\xF3n, la creatividad y el aprendizaje personalizado) pero se\xF1ala de manera clara los riesgos del abuso y la necesidad de un buen acompa\xF1amiento familiar (mediaci\xF3n parental digital habilitante).
2. Si te preguntan por problemas espec\xEDficos (por ejemplo, "mi hijo no quiere soltar el m\xF3vil" o "mi hijo saca peores notas por jugar a videojuegos"), ofrece respuestas divididas en un enfoque emp\xE1tico, el problema subyacente seg\xFAn el estudio y soluciones espec\xEDficas de la gu\xEDa.
3. Menciona frecuentemente los datos estad\xEDsticos de Asturias del estudio de UNICEF si son relevantes.
4. A\xF1ade al final de respuestas extensas una pregunta cortita para invitar a la familia a la autorreflexi\xF3n.
5. Escribe siempre en espa\xF1ol.
`;
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "El formato de los mensajes no es correcto." });
    }
    const ai = getAIClient();
    const contents = messages.map((msg) => {
      const role = msg.role === "assistant" ? "model" : "user";
      return {
        role,
        parts: [{ text: msg.content }]
      };
    });
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7
      }
    });
    const text = response.text || "Lo siento, no he podido procesar tu solicitud.";
    res.json({ content: text });
  } catch (error) {
    console.error("Error en /api/chat:", error);
    res.status(500).json({
      error: error.message || "Ocurri\xF3 un error inesperado al comunicarse con la Inteligencia Artificial."
    });
  }
});
async function startWebBackend() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SV] Servidor Express corriendo en el puerto ${PORT}`);
  });
}
startWebBackend();
//# sourceMappingURL=server.cjs.map
