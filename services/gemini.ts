
import { GoogleGenAI } from "@google/genai";

export const getWoodAdvice = async (style: string, room: string, usage: string) => {
  if (!process.env.API_KEY) {
    return "Nuestra asesoría digital requiere configuración. Por favor, llámenos directamente al taller.";
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Eres el Maestro Ebanista de Muebles & Diseño Robledo (Soria, España). 
      Un cliente busca consejo para su hogar.
      Estilo: ${style}. 
      Estancia: ${room}. 
      Uso: ${usage}.
      
      Aconseja de forma experta y elegante sobre el uso de Roble de Soria o Nogal Español. 
      Habla sobre la durabilidad, el tono de la madera y cómo encaja con su estilo. 
      Sé breve, profesional y cercano (máximo 85 palabras).`,
      config: {
        temperature: 0.65,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error consultando al ebanista IA:", error);
    return "En el taller estamos trabajando con las gubias ahora mismo. Contáctenos directamente para una asesoría personal sobre su pieza única.";
  }
};
