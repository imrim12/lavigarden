import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { HeaderData } from '../types';

interface HeaderProps {
  data: HeaderData;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-paper/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 bg-forest rounded-full text-paper transform group-hover:rotate-12 transition-transform duration-300">
            <Leaf size={20} fill="currentColor" />
          </div>
          <span className="font-serif text-2xl md:text-3xl font-bold text-forest tracking-tight">
            {data.logo}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {data.nav.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-coffee hover:text-clay font-sans font-medium text-base transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-clay after:bottom-0 after:left-0 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${data.hotline.replace(/\s/g, '')}`}
            className="px-5 py-2 border-2 border-forest text-forest rounded-full font-bold hover:bg-forest hover:text-paper transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(46,80,48,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]"
          >
            {data.hotline}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-forest p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-paper/95 backdrop-blur-xl border-t border-forest/10 p-6 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
          {data.nav.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xl font-serif text-coffee hover:text-clay text-center py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${data.hotline.replace(/\s/g, '')}`} 
            className="w-full text-center py-3 bg-forest text-paper rounded-lg font-bold mt-2"
          >
            Gọi Ngay: {data.hotline}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;