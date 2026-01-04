
import React, { useState } from 'react';
import { products } from '../data/products';
import { Category } from '../types';

interface CatalogProps {
  onBudgetRequest: (productName: string) => void;
}

const Catalog: React.FC<CatalogProps> = ({ onBudgetRequest }) => {
  const [filter, setFilter] = useState<Category | 'Todos'>('Todos');

  const filteredProducts = filter === 'Todos' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20 reveal">
        <span className="text-accent text-[10px] uppercase tracking-[0.6em] font-bold block mb-4">Catálogo de Autor</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mb-6">Colección Exclusiva</h2>
        <div className="w-20 h-[1px] bg-accent mx-auto mb-8"></div>
        <p className="text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
          Cada pieza es un tributo a la naturaleza, fabricada bajo pedido con maderas nobles certificadas y acabados orgánicos.
        </p>
      </div>

      {/* Selectores de Categoría */}
      <div className="flex justify-center flex-wrap gap-4 mb-16 reveal">
        {['Todos', 'Mesas', 'Sillas', 'Almacenaje'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat as any)}
            className={`px-8 py-3 rounded-none text-[10px] uppercase font-bold tracking-widest transition-all ${
              filter === cat 
              ? 'bg-forest text-white shadow-lg' 
              : 'bg-white text-forest/50 hover:text-forest hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de Productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredProducts.map((product, idx) => (
          <div key={product.id} className="group flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <div className="relative h-[450px] overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-white/95 backdrop-blur-sm px-4 py-2 text-[9px] uppercase tracking-widest font-bold text-forest shadow-sm">
                  {product.material}
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-serif font-bold text-forest mb-4 leading-tight">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-8 font-light leading-relaxed line-clamp-3 flex-grow">
                {product.description}
              </p>
              <div className="border-t border-gray-100 pt-6 mb-8">
                <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em] mb-2 font-bold">Dimensiones Maestro</p>
                <p className="text-sm font-medium text-wood-dark">{product.dimensions}</p>
              </div>
              <button 
                onClick={() => onBudgetRequest(product.name)}
                className="w-full py-5 bg-forest text-white text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-accent transition-all transform group-hover:-translate-y-1 shadow-md"
              >
                Solicitar Presupuesto
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
