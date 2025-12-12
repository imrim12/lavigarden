import React from 'react';
import { ServicesData } from '../types';

interface ServiceSectionProps {
  data: ServicesData;
  hotline: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ data, hotline }) => {
  return (
    <section id="services" className="py-24 bg-forest/5 relative overflow-hidden">
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Composition */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 w-full h-[500px] overflow-hidden rounded-t-full border-4 border-white shadow-xl">
              <img 
                src={data.image} 
                alt="Decor home with plants" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative circle */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-2 border-clay/30 rounded-full z-0"></div>
            <div className="absolute top-10 -left-10 w-32 h-32 bg-clay/10 rounded-full z-0 blur-xl"></div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-coffee leading-tight">
              {data.titlePart1} <br />
              <span className="text-forest">{data.titlePart2}</span>
            </h2>
            
            <div className="space-y-6 font-sans text-lg text-coffee/80 leading-relaxed">
              {data.descriptions.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>

            <ul className="space-y-4 font-serif text-forest">
              {data.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-clay rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>

            <a 
              href={`tel:${hotline.replace(/\s/g, '')}`} 
              className="inline-block mt-8 bg-coffee text-paper px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-clay transition-colors duration-300"
            >
              {data.cta}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;