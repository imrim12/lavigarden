import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import ServiceSection from './components/ServiceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { SiteData } from './types';

function App() {
  const [data, setData] = useState<SiteData | null>(null);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then((fetchedData: SiteData) => {
        setData(fetchedData);
      })
      .catch(err => {
        console.error("Failed to load site data", err);
      });
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-forest border-t-transparent rounded-full animate-spin"></div>
          <span className="font-serif text-forest text-xl animate-pulse">Lavi's Garden...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper text-coffee font-sans selection:bg-forest selection:text-paper relative">
      {/* Global CSS Noise Overlay - defined in index.html, but enforced here visually if needed via classes */}
      <div className="fixed inset-0 bg-noise opacity-[0.08] pointer-events-none z-0 mix-blend-multiply"></div>
      
      {/* Content wrapper to ensure z-index is above noise */}
      <div className="relative z-10 flex flex-col">
        <Header data={data.header} />
        <main className="flex-grow">
          <Hero data={data.hero} assets={data.assets} />
          <ProductSection 
            data={data.products} 
            assets={data.assets} 
            hotline={data.header.hotline}
          />
          <ServiceSection data={data.services} hotline={data.header.hotline} />
          <ContactSection data={data.contact} />
        </main>
        <Footer data={data.footer} />
      </div>
    </div>
  );
}

export default App;