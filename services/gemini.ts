import { GoogleGenAI } from "@google/genai";

// 1. Añadimos un chequeo para que no explote si no hay clave
const apiKey = ""; // Déjala vacía de momento para que la web cargue
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getWoodAdvice = async (style: string, room: string, usage: string) => {
  // 2. Si la IA no está configurada, devolvemos el mensaje de error amigable directamente
  if (!ai) {
    return "Nuestros maestros están trabajando en el taller en este momento. Por favor, contáctanos directamente para un asesoramiento personalizado.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash", // Nota: Cambiado a un nombre de modelo estándar
      contents: `Como experto ebanista de Muebles & Diseño Robledo...`,
      // ... resto de tu código
    });
    return response.text;
  } catch (error) {
    console.error("Error consultando al ebanista IA:", error);
    return "Nuestros maestros están trabajando en el taller en este momento...";
  }
};
