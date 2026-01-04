
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-[#1B3022]' : 'text-white'}`}>
              ROBLEDO
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['Inicio', 'Catálogo', 'El Taller', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-[#1B3022]' : 'text-white/90 hover:text-white'}`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            {/* Mobile menu button could go here */}
            <button className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
