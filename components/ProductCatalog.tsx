import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { ProductCard } from './ProductCard';

export const ProductCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  // Custom category order as requested
  const categories = [
    'All',
    'Nastar',
    'Kue Kacang',
    'Varian Lembut',
    'Thumbprint Cookies',
    'Coklat',
    'Isian Spesial'
  ];
  
  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">Menu Kami</span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">Temukan Favorit Barumu</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Dari nastar klasik hingga camilan cokelat yang kaya rasa, kami punya pilihan untuk memuaskan setiap selera.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-dark text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 py-12">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};