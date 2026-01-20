import React from 'react';
import { Button } from './Button';
import { ArrowRight, Star } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export const Hero: React.FC = () => {
  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      const headerOffset = 80;
      const elementPosition = menuElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleWhatsAppOrder = () => {
    const message = "Halo, Saya mau membeli product dari Inayah's Bakery.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/restaurant/1920/1080" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/10">
            <span className="flex text-yellow-400 gap-1"><Star size={16} fill="currentColor" /> 4.9</span>
            <span className="text-gray-200 text-sm font-medium">Dipercaya oleh 1.000+ keluarga bahagia</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Setiap <span className="text-primary">Gigitan</span>, <br/> Penuh Cerita.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
            Camilan homemade dari bahan terbaik, untuk setiap tawa dan cerita keluarga.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={handleWhatsAppOrder}>
              Order via WhatsApp <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToMenu} className="border-white text-white hover:bg-white/10 hover:text-white">
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};