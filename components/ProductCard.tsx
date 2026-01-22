import React, { useState } from 'react';
import { Product, ProductVariant } from '../types';
import { MessageCircle, Flame, ChevronDown } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Default to the first variant if available, otherwise null
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;

  const handleOrder = () => {
    let message = `Halo, Saya mau memesan : ${product.name}`;
    
    if (selectedVariant) {
      message += `, Ukuran ${selectedVariant.label}`;
    }
    
    message += `, Harga  Rp.${currentPrice.toLocaleString()}, Apakah tersedia?`;
    
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col h-full group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.isPopular && (
          <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            BESTSELLER
          </div>
        )}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-sm font-bold text-primary shadow-sm border border-orange-100">
          IDR {currentPrice.toLocaleString()}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{product.category}</div>
          {/* Ensure spicinessLevel defaults to 0 if undefined */}
          {(product.spicinessLevel || 0) > 0 && (
             <div className="flex gap-0.5" title={`Spiciness: ${product.spicinessLevel}/3`}>
               {[...Array(product.spicinessLevel || 0)].map((_, i) => (
                 <Flame key={i} size={16} className="text-red-500 fill-red-500" />
               ))}
             </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-dark mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
        
        {/* Variant Selector */}
        {product.variants && (
          <div className="mb-4">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 block">Select Size</label>
            <div className="relative">
              <select 
                value={selectedVariant?.label}
                onChange={(e) => {
                  const variant = product.variants?.find(v => v.label === e.target.value);
                  if (variant) setSelectedVariant(variant);
                }}
                className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-primary transition-colors cursor-pointer text-sm font-medium"
              >
                {product.variants.map((v) => (
                  <option key={v.label} value={v.label}>
                    {v.label} - IDR {v.price.toLocaleString()}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        )}

        <Button onClick={handleOrder} fullWidth className="gap-2 mt-auto">
          <MessageCircle size={18} /> Order on WhatsApp
        </Button>
      </div>
    </div>
  );
};