
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative text-center px-4 max-w-4xl mx-auto text-white">
        <p className="uppercase tracking-[0.3em] text-sm mb-4 font-light opacity-90 animate-fade-in">Mobiliario de Lujo desde 1954</p>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          Muebles con alma para hogares únicos
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto opacity-80 leading-relaxed">
          Tercera generación de artesanos dedicados a transformar el roble y el nogal en piezas eternas.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#catalogo" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#1B3022] font-semibold rounded-sm hover:bg-[#FDFBF7] transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Explorar Catálogo
          </a>
          <a 
            href="#taller" 
            className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white font-semibold rounded-sm hover:bg-white/10 transition-all"
          >
            Nuestro Proceso
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
