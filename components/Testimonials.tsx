
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Elena Martínez",
      location: "Madrid",
      text: "La mesa imperial es el centro de todas nuestras cenas. Se nota la mano del artesano en cada veta. Una inversión para toda la vida.",
      wood: "Roble de Soria"
    },
    {
      name: "Carlos Rivelles",
      location: "Soria",
      text: "Buscaba algo único para mi despacho y Javier entendió mi visión al momento. El acabado al aceite es simplemente espectacular al tacto.",
      wood: "Nogal Español"
    },
    {
      name: "Sofía & Marc",
      location: "Barcelona",
      text: "Piezas que tienen alma. Compramos las sillas Herencia y son la mezcla perfecta entre comodidad y arte minimalista.",
      wood: "Nogal Americano"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl font-serif font-bold text-forest mb-4">Experiencias Robledo</h2>
          <p className="text-gray-400 uppercase tracking-widest text-[10px]">Lo que dicen quienes ya disfrutan de nuestro oficio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((rev, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-6 p-8 border border-gray-50 hover:border-accent/20 transition-all reveal" style={{ transitionDelay: `${idx * 0.2}s` }}>
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-gray-600 italic font-light leading-relaxed">"{rev.text}"</p>
              <div>
                <p className="text-forest font-bold text-sm">{rev.name}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-tighter">{rev.location} · {rev.wood}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
