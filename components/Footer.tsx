
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1B3022] py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-2xl font-serif font-bold tracking-tight text-white">ROBLEDO</span>
            <p className="text-white/40 text-xs mt-2 uppercase tracking-widest">Maestros Ebanistas</p>
          </div>
          
          <div className="flex space-x-6">
            {['Instagram', 'Pinterest', 'Facebook'].map(social => (
              <a key={social} href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                {social}
              </a>
            ))}
          </div>

          <div className="text-white/40 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Muebles & Diseño Robledo S.L.</p>
            <p className="text-[10px] mt-1 uppercase tracking-tighter">Hecho a mano en Soria, España</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
