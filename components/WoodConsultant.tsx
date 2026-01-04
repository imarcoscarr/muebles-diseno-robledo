
import React, { useState } from 'react';
import { getWoodAdvice } from '../services/gemini';

const WoodConsultant: React.FC = () => {
  const [style, setStyle] = useState('Moderno / Minimalista');
  const [room, setRoom] = useState('Salón Comedor');
  const [usage, setUsage] = useState('Uso Diario / Familiar');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    setLoading(true);
    const result = await getWoodAdvice(style, room, usage);
    setAdvice(result || null);
    setLoading(false);
  };

  return (
    <div className="reveal">
      <div className="flex flex-col lg:flex-row shadow-2xl overflow-hidden border border-gray-100 bg-white">
        {/* Panel Izquierdo: Formulario */}
        <div className="lg:w-2/5 bg-forest p-12 md:p-16 text-white">
          <span className="text-accent text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">Atelier Virtual</span>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-10 leading-tight">Encuentre la madera perfecta</h3>
          
          <div className="space-y-10">
            <div className="group">
              <label className="block text-[10px] font-bold uppercase text-white/40 mb-3 tracking-widest">Estilo de su hogar</label>
              <select 
                value={style} 
                onChange={(e) => setStyle(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 py-3 focus:border-accent outline-none transition-all cursor-pointer text-sm font-light appearance-none"
              >
                <option className="bg-forest">Moderno / Minimalista</option>
                <option className="bg-forest">Clásico / Elegante</option>
                <option className="bg-forest">Rústico / Orgánico</option>
                <option className="bg-forest">Nórdico / Soft</option>
              </select>
            </div>

            <div className="group">
              <label className="block text-[10px] font-bold uppercase text-white/40 mb-3 tracking-widest">Estancia de destino</label>
              <select 
                value={room} 
                onChange={(e) => setRoom(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 py-3 focus:border-accent outline-none transition-all cursor-pointer text-sm font-light appearance-none"
              >
                <option className="bg-forest">Salón Comedor</option>
                <option className="bg-forest">Dormitorio Principal</option>
                <option className="bg-forest">Despacho de Autor</option>
                <option className="bg-forest">Cocina Gourmet</option>
              </select>
            </div>

            <div className="group">
              <label className="block text-[10px] font-bold uppercase text-white/40 mb-3 tracking-widest">Intensidad de uso</label>
              <select 
                value={usage} 
                onChange={(e) => setUsage(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 py-3 focus:border-accent outline-none transition-all cursor-pointer text-sm font-light appearance-none"
              >
                <option className="bg-forest">Uso Diario / Familiar</option>
                <option className="bg-forest">Ornamental / Galería</option>
                <option className="bg-forest">Carga Pesada / Oficina</option>
              </select>
            </div>
            
            <button 
              onClick={handleConsult}
              disabled={loading}
              className="group relative w-full py-5 bg-accent text-forest font-bold uppercase tracking-widest text-[11px] overflow-hidden transition-all hover:bg-white hover:text-forest disabled:opacity-50"
            >
              {loading ? 'Consultando al Maestro...' : 'Iniciar Asesoría'}
            </button>
          </div>
        </div>

        {/* Panel Derecho: Resultado */}
        <div className="lg:w-3/5 bg-[#FDFBF7] p-12 md:p-24 flex flex-col justify-center relative min-h-[500px]">
          {advice ? (
            <div className="animate-fade-in relative z-10">
              <div className="mb-10">
                <svg className="w-14 h-14 text-accent/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1 15V9C1 6.79086 2.79086 5 5 5H7C8.10457 5 9 5.89543 9 7V8C9 9.10457 8.10457 10 7 10H4C3.44772 10 3 10.4477 3 11V15C3 15.5523 3.44772 16 4 16H7C8.10457 16 9 16.8954 9 18V21H7C3.13401 21 0 17.866 0 14V15H1Z" />
                </svg>
              </div>
              <p className="text-forest text-xl md:text-2xl font-serif italic leading-relaxed mb-12">
                {advice}
              </p>
              <div className="flex items-center gap-6">
                <div className="w-12 h-[1px] bg-accent"></div>
                <div>
                  <p className="text-xs font-bold text-forest uppercase tracking-widest">Fco. Javier Robledo</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Ebanista de 3ª Generación</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-10">
              <div className="inline-block p-8 rounded-full bg-forest/5">
                <svg className="w-12 h-12 text-forest/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.168.477-4.5 1.253" />
                </svg>
              </div>
              <div className="max-w-xs mx-auto">
                <h4 className="text-forest font-serif text-2xl mb-4">Asesoría de Calidad</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">Seleccione sus preferencias a la izquierda para que nuestro consultor analice la mejor madera para su proyecto.</p>
              </div>
            </div>
          )}
          
          <div className="absolute top-0 right-0 p-12 text-[200px] font-serif font-bold text-forest/[0.015] pointer-events-none select-none">
            R
          </div>
        </div>
      </div>
    </div>
  );
};

export default WoodConsultant;
