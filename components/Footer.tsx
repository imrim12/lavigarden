import React from 'react';
import { Heart } from 'lucide-react';
import { FooterData } from '../types';

interface FooterProps {
  data: FooterData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="bg-[#3D2823] text-paper/80 py-12 border-t-4 border-clay">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl font-bold text-paper mb-2">{data.brand}</h2>
            <p className="font-sans text-sm opacity-70">{data.tagline}</p>
          </div>

          <div className="text-center md:text-right font-sans text-sm">
            <p className="flex items-center justify-center md:justify-end gap-2 mb-2">
              {data.copyright} <Heart size={14} className="text-clay fill-clay" /> {data.year}
            </p>
            <div className="flex justify-center md:justify-end gap-6 text-paper/60">
              {data.links.map((link, index) => (
                <a key={index} href={link.href} className="hover:text-clay transition-colors">
                  {link.text}
                </a>
              ))}
            </div>
          </div>

        </div>
        
        {/* Decor text */}
        <div className="mt-12 text-center opacity-20 font-serif text-4xl md:text-6xl select-none">
          {data.decorText}
        </div>
      </div>
    </footer>
  );
};

export default Footer;