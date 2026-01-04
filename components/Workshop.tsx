
import React from 'react';

const Workshop: React.FC = () => {
  return (
    <div className="bg-[#FDFBF7] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="aspect-video bg-gray-200 shadow-2xl relative group overflow-hidden">
                {/* Lazy loaded video placeholder using picsum for visuals or actual video tag */}
                <img 
                  src="https://images.unsplash.com/photo-1541625602330-2277a4c4b01d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Taller Robledo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all cursor-pointer">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-[#1B3022] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Real video tag would go here, wrapped in a lazy load component */}
             </div>
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#5D4037] hidden md:flex items-center justify-center p-4 text-center">
                <p className="text-white text-xs font-bold uppercase tracking-tighter">Hecho a mano desde 1954</p>
             </div>
          </div>

          <div className="space-y-6">
            <p className="text-[#5D4037] font-bold uppercase tracking-widest text-sm">Nuestro Legado</p>
            <h2 className="text-4xl font-serif font-bold text-[#1B3022]">Donde la madera vuelve a cobrar vida</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              En Muebles & Diseño Robledo no fabricamos muebles; preservamos historias. Todo comenzó con mi abuelo en un pequeño cobertizo, donde aprendimos que cada nudo de la madera tiene algo que decir.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Utilizamos técnicas de ensamblado tradicionales, sin el uso de tornillería industrial siempre que sea posible. Cada pieza pasa por un proceso de cepillado manual que garantiza un tacto sedoso y una durabilidad que atraviesa generaciones.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              <div>
                <p className="text-3xl font-serif font-bold text-[#5D4037]">3ª</p>
                <p className="text-xs uppercase text-gray-500 font-bold">Generación</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-[#5D4037]">100%</p>
                <p className="text-xs uppercase text-gray-500 font-bold">Artesanal</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-[#5D4037]">70</p>
                <p className="text-xs uppercase text-gray-500 font-bold">Años</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
