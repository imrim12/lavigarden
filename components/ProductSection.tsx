import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ProductsData, Assets, Product } from '../types';

interface ProductSectionProps {
  data: ProductsData;
  assets: Assets;
  hotline: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ data, assets, hotline }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Default display 6 items, show all if toggle is true
  const displayedProducts = showAll ? data.items : data.items.slice(0, 6);

  return (
    <section id="shop" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="font-sans text-clay font-bold tracking-widest uppercase text-sm">{data.badge}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee">{data.title}</h2>
          <div className="w-24 h-1 bg-forest mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {displayedProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`group p-4 pb-8 shadow-xl hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 ${
                index % 2 === 0 ? 'rotate-1' : '-rotate-1'
              } hover:rotate-0`}
              style={{ backgroundImage: assets.kraftTexture }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden aspect-square mb-6 bg-gray-100 cursor-pointer shadow-sm">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-paper text-forest font-serif px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                    Xem chi tiết
                  </span>
                </div>
              </div>
              
              <div className="text-center px-2 space-y-2 cursor-pointer">
                <h3 className="font-serif text-2xl font-bold text-coffee">{product.name}</h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                <div className="pt-3 font-sans font-bold text-clay text-lg">
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && data.items.length > 6 && (
          <div className="mt-16 text-center">
             <button 
               onClick={() => setShowAll(true)}
               className="inline-block border-b-2 border-forest text-forest font-serif italic text-xl hover:text-clay hover:border-clay transition-colors pb-1 bg-transparent"
             >
               {data.viewAllText} &rarr;
             </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-coffee/60 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          ></div>
          
          <div 
            className="relative w-full max-w-4xl bg-paper rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col md:flex-row max-h-[90vh]"
            style={{ backgroundImage: assets.kraftTexture }}
          >
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-paper/80 rounded-full hover:bg-forest hover:text-paper transition-colors"
            >
              <X size={24} />
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100">
              <img 
                src={selectedProduct.imageUrl} 
                alt={selectedProduct.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <span className="font-sans text-clay font-bold tracking-widest uppercase text-xs mb-2 block">
                {data.badge}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-coffee mb-4">
                {selectedProduct.name}
              </h3>
              <div className="w-16 h-1 bg-forest mb-6 rounded-full"></div>
              
              <div className="font-sans text-coffee/80 space-y-4 leading-relaxed mb-8">
                <p>{selectedProduct.description}</p>
                {selectedProduct.longDescription && (
                  <p className="text-sm md:text-base border-l-4 border-sage pl-4 italic">
                    {selectedProduct.longDescription}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-coffee/10">
                <span className="font-serif text-3xl font-bold text-forest">
                  {selectedProduct.price}
                </span>
                <a 
                  href={`tel:${hotline.replace(/\s/g, '')}`} 
                  className="bg-forest text-paper px-8 py-3 rounded-full font-bold shadow-lg hover:bg-forest/90 hover:translate-y-[-2px] transition-all inline-block text-center"
                >
                  Liên hệ mua
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSection;