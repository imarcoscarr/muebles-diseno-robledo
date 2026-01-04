
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
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-[#1B3022] mb-4">Colección Exclusiva</h2>
        <div className="w-24 h-1 bg-[#5D4037] mx-auto mb-8"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Cada pieza es única, fabricada bajo pedido con maderas nobles certificadas. El equilibrio perfecto entre tradición rústica y minimalismo moderno.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center space-x-4 mb-12">
        {['Todos', 'Mesas', 'Sillas', 'Almacenaje'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat as any)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat 
              ? 'bg-[#1B3022] text-white shadow-md' 
              : 'text-gray-500 hover:text-[#1B3022] hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-80 overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-[#1B3022]">
                  {product.material}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                {product.description}
              </p>
              <div className="border-t border-gray-100 pt-4 mb-6">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Medidas Sugeridas</p>
                <p className="text-sm font-medium text-[#5D4037]">{product.dimensions}</p>
              </div>
              <button 
                onClick={() => onBudgetRequest(product.name)}
                className="w-full py-3 bg-[#1B3022] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#2c4a35] transition-colors"
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
