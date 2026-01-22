import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { LOGO_URL } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={LOGO_URL} alt="Inayah's Bakery Logo" className="h-8 w-8" />
              </div>
              <span className="text-xl font-bold text-dark">
                Inayah's <span className="text-primary">Bakery</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Menghadirkan kebahagiaan di meja makan Anda lewat setiap sajian. Segar, lokal, dan lezat.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/berriels._/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/saina.syahira.5" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-dark mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Perdamaian dusun ix kec.binjai kab.langkat. Belakang Bengkel Prayoga</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+62 838 7703 5323</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>nurulelsafadilah@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-dark mb-4">Jam Operasional</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex justify-between items-start">
                <span className="shrink-0">Setiap Hari</span>
                <span className="font-semibold text-dark text-right">00.00 – 24.00<br/>(Buka 24 Jam)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Inayah's Bakery. All rights reserved.</p>
        </div>
    </footer>
  );
};