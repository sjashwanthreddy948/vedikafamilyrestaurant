import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, CheckCircle2, Camera } from 'lucide-react';
import { galleryItems } from '../data/restaurantData';
import type { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ambience' | 'food'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredPhotos = galleryItems.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ambience') return item.category === 'ambience' || item.category === 'lawn';
    if (activeFilter === 'food') return item.category === 'food';
    return true;
  });

  return (
    <section id="gallery" className="py-20 bg-[#F4ECE0]/40 border-t border-[#E9DFC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#84601A] bg-[#EAE2D2] px-3.5 py-1 rounded-full border border-[#D5C7A9]">
            Visual Tour
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10271D] mt-3">
            Restaurant Ambience &amp; Dining
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B37] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-base text-[#4E5852] font-light leading-relaxed">
            Take a look at our open-air projector screening dining area, peaceful garden lawn, and appetizing food presentations.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === 'all'
                ? 'bg-[#10271D] text-[#FAF7F2] shadow-sm'
                : 'bg-[#FAF7F2] text-[#4F4638] border border-[#D5C7A9] hover:bg-[#F4ECE0]'
            }`}
          >
            All Photos
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('ambience')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeFilter === 'ambience'
                ? 'bg-[#10271D] text-[#FAF7F2] shadow-sm'
                : 'bg-[#FAF7F2] text-[#4F4638] border border-[#D5C7A9] hover:bg-[#F4ECE0]'
            }`}
          >
            <Camera className="w-3.5 h-3.5 text-[#C59B37]" />
            <span>Restaurant Premises (Authentic)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('food')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === 'food'
                ? 'bg-[#10271D] text-[#FAF7F2] shadow-sm'
                : 'bg-[#FAF7F2] text-[#4F4638] border border-[#D5C7A9] hover:bg-[#F4ECE0]'
            }`}
          >
            Culinary Highlights
          </button>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#E9DFC9] shadow-soft hover:shadow-soft-xl cursor-pointer transition-all duration-300 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F4ECE0]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-[#10271D]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-3 rounded-full bg-[#FAF7F2]/90 text-[#10271D] shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-5 h-5 text-[#84601A]" />
                  </span>
                </div>

                {/* Badge for Authentic vs Presentation */}
                <div className="absolute top-3 left-3">
                  {item.isAuthenticLocationPhoto ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase bg-[#10271D]/90 text-white backdrop-blur-sm shadow-sm border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Premises Photo</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-medium tracking-wide uppercase bg-[#FAF7F2]/90 text-[#554C3E] backdrop-blur-sm shadow-sm border border-[#D5C7A9]">
                      Dish Presentation
                    </span>
                  )}
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 bg-[#FAF7F2] flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-[#10271D] group-hover:text-[#84601A] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5D5446] mt-1 line-clamp-2 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#E9DFC9]/60 flex items-center justify-between text-[11px] text-[#7A7060]">
                  <span>{item.category === 'food' ? 'Food & Drinks' : 'Ambience & Setting'}</span>
                  <span className="font-semibold text-[#84601A] group-hover:underline">Click to view &rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Owner Photography Transparency Note */}
        <div className="mt-10 p-4 rounded-xl bg-[#FAF7F2] border border-[#D5C7A9] max-w-2xl mx-auto text-center text-xs text-[#6A6052]">
          <p>
            <strong>Note on Photos:</strong> Premises photos reflect the genuine location at Isnapur, Hyderabad. Culinary photos represent dish presentations for guest preview and can be updated anytime by the restaurant management.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAF7F2] rounded-2xl overflow-hidden max-w-3xl w-full border border-[#D5C7A9] shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 bg-[#FAF7F2]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#84601A]">
                    {selectedPhoto.category === 'food' ? 'Culinary Presentation' : 'Restaurant Premises'}
                  </span>
                  {selectedPhoto.isAuthenticLocationPhoto && (
                    <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-800 font-semibold">
                      Authentic Photograph
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#10271D]">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-[#4E5852] mt-2 leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
