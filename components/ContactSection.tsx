import React from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import { ContactData } from '../types';

interface ContactSectionProps {
  data: ContactData;
}

const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee mb-4">{data.title}</h2>
          <p className="font-sans text-lg text-coffee/70 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 bg-white p-6 md:p-10 rounded-2xl shadow-xl transform rotate-1 border border-gray-100">
          
          {/* Info Column */}
          <div className="lg:col-span-2 space-y-8 flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-forest/10 rounded-full text-forest">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-coffee mb-1">{data.addressLabel}</h3>
                <p className="font-sans text-gray-600 whitespace-pre-line">
                  {data.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-forest/10 rounded-full text-forest">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-coffee mb-1">{data.hotlineLabel}</h3>
                <p className="font-sans text-gray-600 font-bold text-lg">
                  {data.hotline}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-forest/10 rounded-full text-forest">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-coffee mb-1">{data.hoursLabel}</h3>
                <p className="font-sans text-gray-600 whitespace-pre-line">
                  {data.hours}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h4 className="font-serif text-lg font-bold text-coffee mb-4">{data.connectTitle}</h4>
              <div className="flex gap-4">
                <a 
                  href={data.facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-coffee text-paper rounded-full hover:bg-clay transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href={data.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-coffee text-paper rounded-full hover:bg-clay transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-3 h-[400px] lg:h-auto rounded-xl overflow-hidden relative group">
            <iframe 
              src={data.mapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale group-hover:grayscale-0 transition-all duration-500"
              title="Lavi's Garden Location"
            ></iframe>
            
            {/* Custom Overlay Label on top of map (aesthetic touch) */}
            <div className="absolute bottom-4 right-4 bg-paper px-4 py-2 rounded-lg shadow-lg font-serif text-coffee text-sm font-bold border border-coffee pointer-events-none">
              📍 Lavi's Garden
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;