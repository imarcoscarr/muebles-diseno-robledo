
import React from 'react';

const Sustainability: React.FC = () => {
  return (
    <section className="py-24 bg-[#1B3022] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 reveal">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Un compromiso con <br /><span className="text-accent italic">el mañana</span>
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed font-light text-lg">
              <p>
                En Robledo, entendemos que el lujo no debe costar el planeta. Por eso, cada tablón que entra en nuestro taller cuenta con la certificación PEFC, garantizando que proviene de bosques gestionados de forma responsable.
              </p>
              <p>
                No usamos barnices sintéticos que ocultan la madera. Empleamos aceites naturales y ceras de abeja que permiten que el mueble "respire", creando ambientes saludables y piezas que envejecen con dignidad.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <h4 className="text-accent font-bold text-sm uppercase tracking-widest mb-2">Origen Local</h4>
                <p className="text-sm text-white/50">Maderas de proximidad para reducir la huella de carbono.</p>
              </div>
              <div>
                <h4 className="text-accent font-bold text-sm uppercase tracking-widest mb-2">Zero Waste</h4>
                <p className="text-sm text-white/50">Reutilizamos cada sobrante para pequeños accesorios y calefacción.</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative reveal">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop" 
                alt="Bosque Sostenible" 
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-accent p-8 hidden md:block">
              <p className="text-forest font-serif text-3xl font-bold">100%</p>
              <p className="text-forest/70 text-xs uppercase font-bold tracking-widest">Natural & Orgánico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
