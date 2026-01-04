
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-xl py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#inicio" className={`text-2xl font-serif font-bold tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-forest' : 'text-white'}`}>
              ROBLEDO<span className="text-accent">.</span>
            </a>
          </div>
          
          <div className="hidden lg:flex space-x-12">
            {['Inicio', 'Catálogo', 'Taller', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className={`text-[10px] uppercase font-bold tracking-[0.3em] transition-all duration-300 relative group ${isScrolled ? 'text-forest/60 hover:text-forest' : 'text-white/60 hover:text-white'}`}
              >
                {item}
                <span className={`absolute -bottom-2 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full`}></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <a 
              href="#contacto" 
              className={`hidden sm:block text-[9px] uppercase font-bold tracking-[0.4em] px-8 py-3.5 border transition-all duration-700 ${isScrolled ? 'border-forest text-forest hover:bg-forest hover:text-white' : 'border-white/20 text-white hover:bg-white hover:text-forest'}`}
            >
              Presupuesto
            </a>
            <button className={`${isScrolled ? 'text-forest' : 'text-white'} lg:hidden`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
