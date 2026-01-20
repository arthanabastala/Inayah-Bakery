import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { Features } from './components/Features';
import { HowToOrder } from './components/HowToOrder';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main>
        <Hero />
        {/* Reordered to match Navbar: Home -> Menu -> Why Us -> Testimonials */}
        <ProductCatalog />
        <Features />
        <HowToOrder />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;