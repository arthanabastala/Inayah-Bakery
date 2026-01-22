import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Cerita dari Pelanggan Kami</h2>
          <p className="text-gray-600">Dengarkan langsung dari mereka yang sudah mencoba.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm relative">
              <Quote className="absolute top-6 right-6 text-rose-100" size={48} />
              <p className="text-gray-600 mb-6 relative z-10 italic">"{t.comment}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatarUrl} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="font-bold text-dark">{t.name}</h4>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};