
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getWoodAdvice = async (style: string, room: string, usage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Como experto ebanista de Muebles & Diseño Robledo, aconseja a un cliente. 
      Estilo: ${style}. Habitación: ${room}. Uso esperado: ${usage}. 
      Explica por qué recomendarías Roble o Nogal para este caso específico en un tono cálido y profesional. 
      Máximo 100 palabras.`,
      config: {
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error consultando al ebanista IA:", error);
    return "Nuestros maestros están trabajando en el taller en este momento. Por favor, contáctanos directamente para un asesoramiento personalizado sobre la mejor madera para tu hogar.";
  }
};
