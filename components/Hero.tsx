
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Capa de fondo con zoom sutil */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center animate-zoom" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white animate-hero">
        <div className="inline-block mb-8 overflow-hidden">
          <p className="uppercase tracking-[0.6em] text-[10px] md:text-xs font-medium opacity-70">
            Artesanía en Madera Noble · Soria 1954
          </p>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-[1.05] tracking-tight">
          La Poesía de lo <br /><span className="italic font-normal text-accent">Hecho a Mano</span>
        </h1>
        
        <p className="text-base md:text-xl mb-12 font-light max-w-2xl mx-auto opacity-80 leading-relaxed tracking-wide">
          Piezas que trascienden el tiempo, esculpidas por la tercera generación de la familia Robledo con maderas de gestión sostenible.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#catalogo" 
            className="group relative px-12 py-5 bg-white text-forest overflow-hidden transition-all shadow-xl hover:shadow-accent/20"
          >
            <div className="absolute inset-0 w-0 bg-accent transition-all duration-300 group-hover:w-full"></div>
            <span className="relative z-10 font-bold tracking-widest text-xs uppercase group-hover:text-white transition-colors">
              Explorar Colección
            </span>
          </a>
          <a 
            href="#taller" 
            className="px-12 py-5 border border-white/40 text-white backdrop-blur-sm font-bold tracking-widest text-xs uppercase hover:bg-white hover:text-forest transition-all"
          >
            Nuestro Legado
          </a>
        </div>
      </div>

      {/* Indicador de scroll minimalista */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <span className="text-[9px] uppercase tracking-[0.4em] text-white font-bold">Descubrir</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>

      {/* Enlaces sociales laterales */}
      <div className="absolute left-8 bottom-12 hidden lg:flex flex-col gap-6 text-white/30 text-[10px] tracking-widest uppercase [writing-mode:vertical-lr] rotate-180">
        <a href="#" className="hover:text-accent transition-colors">Instagram</a>
        <a href="#" className="hover:text-accent transition-colors">Pinterest</a>
      </div>
    </div>
  );
};

export default Hero;
