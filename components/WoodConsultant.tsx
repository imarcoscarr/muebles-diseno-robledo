
import React, { useState } from 'react';
import { getWoodAdvice } from '../services/gemini';

const WoodConsultant: React.FC = () => {
  const [style, setStyle] = useState('Moderno');
  const [room, setRoom] = useState('Salón');
  const [usage, setUsage] = useState('Familiar intensivo');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    setLoading(true);
    const result = await getWoodAdvice(style, room, usage);
    setAdvice(result || null);
    setLoading(false);
  };

  return (
    <div className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-forest">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/3">
          <h3 className="text-2xl font-serif font-bold text-forest mb-4">Consultor de Maderas IA</h3>
          <p className="text-sm text-gray-600 mb-6">
            ¿No sabes qué madera elegir? Nuestro maestro ebanista digital te ayuda basándose en décadas de experiencia familiar.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Estilo de tu hogar</label>
              <select 
                value={style} 
                onChange={(e) => setStyle(e.target.value)}
                className="w-full border-b-2 border-gray-100 py-2 focus:border-forest outline-none transition-colors"
              >
                <option>Moderno / Minimalista</option>
                <option>Clásico / Elegante</option>
                <option>Rústico / Natural</option>
                <option>Industrial</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Estancia</label>
              <select 
                value={room} 
                onChange={(e) => setRoom(e.target.value)}
                className="w-full border-b-2 border-gray-100 py-2 focus:border-forest outline-none transition-colors"
              >
                <option>Salón</option>
                <option>Comedor</option>
                <option>Dormitorio</option>
                <option>Despacho</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Uso diario</label>
              <select 
                value={usage} 
                onChange={(e) => setUsage(e.target.value)}
                className="w-full border-b-2 border-gray-100 py-2 focus:border-forest outline-none transition-colors"
              >
                <option>Familiar intensivo</option>
                <option>Decorativo / Ocasional</option>
                <option>Profesional</option>
              </select>
            </div>
            
            <button 
              onClick={handleConsult}
              disabled={loading}
              className="w-full py-4 bg-forest text-white font-bold uppercase tracking-widest text-xs hover:bg-forest/90 transition-all flex justify-center items-center"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Consultar Maestro'}
            </button>
          </div>
        </div>

        <div className="md:w-2/3 bg-gray-50 p-8 rounded-sm min-h-[300px] flex items-center justify-center relative overflow-hidden">
          {advice ? (
            <div className="animate-fade-in">
              <span className="text-6xl text-forest/10 absolute top-4 left-4 font-serif">"</span>
              <p className="text-forest text-lg italic leading-relaxed relative z-10">
                {advice}
              </p>
              <span className="text-6xl text-forest/10 absolute bottom-4 right-4 font-serif">"</span>
              <div className="mt-6 text-right">
                <p className="text-sm font-bold text-forest">Fco. Javier Robledo</p>
                <p className="text-xs text-gray-400">Maestro Ebanista de 3ª Generación</p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-400">
              <svg className="w-12 h-12 mx-auto mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>Selecciona tus preferencias para recibir un consejo artesanal.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WoodConsultant;
