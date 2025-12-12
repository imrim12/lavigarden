import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { HeroData, Assets } from '../types';

interface HeroProps {
  data: HeroData;
  assets: Assets;
}

const Hero: React.FC<HeroProps> = ({ data, assets }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sage/10 -skew-x-12 translate-x-20 z-0 hidden lg:block" />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
          <div className="inline-block px-4 py-1 border border-forest/30 rounded-full bg-white/30 backdrop-blur-sm">
            <span className="text-forest font-sans text-sm font-semibold tracking-wider uppercase">{data.badge}</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-coffee leading-[1.1]">
            {data.headlinePart1} <br/>
            <span className="text-forest italic relative inline-block">
              {data.headlinePart2}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-clay/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-coffee/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            {data.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href={data.ctaPrimaryLink}
              className="group flex items-center justify-center gap-3 bg-forest text-paper px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-forest/90 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {data.ctaPrimary}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href={data.ctaSecondaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg border-2 border-forest text-forest hover:bg-forest/5 transition-colors"
            >
              {data.ctaSecondary}
              <MapPin size={20} />
            </a>
          </div>
        </div>

        {/* Hero Image - Polaroid Style */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div 
            className="relative w-full max-w-md aspect-[4/5] p-4 pb-16 shadow-2xl rotate-3 transition-transform duration-700 hover:rotate-0"
            style={{ backgroundImage: assets.kraftTexture }}
          >
             <div className="w-full h-full overflow-hidden bg-gray-200 shadow-inner">
               <img 
                 src={data.image} 
                 alt="Góc làm việc chill" 
                 className="w-full h-full object-cover sepia-[.2]"
               />
             </div>
             <div className="absolute bottom-4 left-0 w-full text-center font-serif text-coffee text-xl italic opacity-80">
               {data.polaroidText}
             </div>
             
             {/* Sticky Tape Effect */}
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-10 bg-white/40 backdrop-blur-sm border-l border-r border-white/50 rotate-[-2deg] shadow-sm"></div>
          </div>
          
          {/* Floating Element */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-clay/20 rounded-full blur-3xl z-[-1]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;