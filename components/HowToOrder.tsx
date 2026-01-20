import React from 'react';

export const HowToOrder: React.FC = () => {
  const steps = [
    { num: '01', title: 'Lihat Menu', desc: 'Jelajahi katalog kami dan temukan camilan favoritmu.' },
    { num: '02', title: 'Pesan Sekarang', desc: 'Klik tombol WhatsApp pada produk yang kamu pilih.' },
    { num: '03', title: 'Konfirmasi Pesanan', desc: 'Kirim pesan otomatis untuk mengonfirmasi detail pesanan.' },
    { num: '04', title: 'Nikmati Pesananmu', desc: 'Duduk santai dan nikmati camilan lezatmu.' },
  ];

  return (
    <section className="py-20 bg-dark text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cara Pesan</h2>
          <p className="text-gray-400">Memesan camilan lezat kini semakin mudah.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-700 -z-10"></div>
          
          {steps.map((step) => (
            <div key={step.num} className="bg-gray-800 lg:bg-transparent p-6 rounded-2xl relative">
               <div className="w-24 h-24 mx-auto bg-gray-800 border-4 border-gray-700 rounded-full flex items-center justify-center text-3xl font-bold text-primary mb-6 shadow-xl">
                 {step.num}
               </div>
               <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
               <p className="text-gray-400 text-sm text-center">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};