import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Home } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy Logic
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      
      // Default to hero if near top
      if (window.scrollY < 100) {
        setActiveSection('hero');
        return;
      }

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is roughly in the viewport
          // We use a broader range to capture larger sections
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Robust smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; // Height of fixed header + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveSection(targetId);
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group"
          >
            <div className="bg-primary p-2 rounded-xl text-white group-hover:rotate-12 transition-transform">
              <ShoppingBag size={24} />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-dark' : 'text-dark md:text-white'}`}>
              Inayah's <span className="text-primary">Bakery</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-medium transition-colors relative flex items-center ${
                    isScrolled 
                      ? (isActive ? 'text-primary' : 'text-gray-600 hover:text-primary') 
                      : (isActive ? 'text-white' : 'text-gray-100 hover:text-white')
                  }`}
                  aria-label={link.name}
                >
                  {link.name === 'Home' ? <Home size={20} /> : link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-current rounded-full"></span>
                  )}
                </a>
              );
            })}
            <a 
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="bg-primary hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-lg shadow-orange-500/20"
            >
              Order Sekarang
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-600' : 'text-dark md:text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col p-4 gap-4">
          {NAV_LINKS.map((link) => {
             const isActive = activeSection === link.href.substring(1);
             return (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium px-2 py-1 flex items-center gap-2 ${isActive ? 'text-primary bg-orange-50 rounded-lg' : 'text-gray-600 hover:text-primary'}`}
              >
                {link.name === 'Home' ? <Home size={18} /> : null}
                {link.name}
              </a>
             );
          })}
          <a 
            href="#menu" 
            onClick={(e) => handleNavClick(e, '#menu')}
            className="bg-primary hover:bg-rose-600 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-lg shadow-rose-500/20"
          >
            Order Sekarang
          </a>
        </nav>
      </div>
    </header>
  );
};