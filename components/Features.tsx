import React from 'react';
import { CalendarClock, Award, Heart, Clock } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 'f1',
    title: 'Sistem Pre-Order',
    description: 'Setiap pesanan dibuat khusus untuk Anda, lebih fresh dan penuh perhatian.',
    icon: <CalendarClock size={32} />
  },
  {
    id: 'f2',
    title: 'Bahan Berkualitas',
    description: 'Kami menggunakan bahan-bahan pilihan dari sumber lokal dan hanya memilih yang paling segar.',
    icon: <Award size={32} />
  },
  {
    id: 'f3',
    title: 'Dibuat dengan Sepenuh Hati',
    description: 'Setiap hidangan disiapkan dengan penuh perhatian oleh tim kami yang berdedikasi.',
    icon: <Heart size={32} />
  },
  {
    id: 'f4',
    title: 'Buka 24 Jam',
    description: 'Kami siap melayani pesanan Anda 24 jam sehari, kapanpun keinginan ngemil datang.',
    icon: <Clock size={32} />
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="text-center p-6 rounded-2xl bg-rose-50/50 hover:bg-rose-50 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 text-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};