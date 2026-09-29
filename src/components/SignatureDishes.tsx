import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Phone } from 'lucide-react';
import { signatureDishes, restaurantInfo } from '../data/restaurantData';
import type { DietaryType } from '../types';

interface SignatureDishesProps {
  onSelectCategory?: (category: string) => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = () => {
  const renderDietaryIcon = (dietary: DietaryType) => {
    if (dietary === 'veg') {
      return (
        <span className="veg-icon" title="Vegetarian" />
      );
    }
    if (dietary === 'egg') {
      return (
        <span className="egg-icon" title="Contains Egg" />
      );
    }
    return (
      <span className="non-veg-icon" title="Non-Vegetarian" />
    );
  };

  return (
    <section id="signature" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#84601A] bg-[#F4ECE0] px-3.5 py-1 rounded-full border border-[#D5C7A9]">
            Chef’s Highlights
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10271D] mt-3">
            Signature Selections
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B37] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-base text-[#4E5852] font-light leading-relaxed">
            A curated glimpse of guest-favorite dishes from our menu, freshly prepared with aromatic spices and authentic recipes.
          </p>
          <p className="text-xs text-[#7A7060] mt-1">
            (Prices as per supplied restaurant listing • Confirm current availability with restaurant)
          </p>
        </div>

        {/* Dish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E9DFC9] shadow-soft hover:shadow-soft-xl hover:border-[#D5C7A9] transition-all duration-300 flex flex-col group"
            >
              {/* Dish Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F4ECE0]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = '/images/veg-biryani.jpg';
                  }}
                />
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-[#E9DFC9] flex items-center gap-1.5 shadow-sm">
                  {renderDietaryIcon(dish.dietary)}
                  <span className="text-[11px] font-semibold text-[#10271D] uppercase tracking-wider">
                    {dish.dietary === 'veg' ? 'Veg' : dish.dietary === 'egg' ? 'Egg' : 'Non-Veg'}
                  </span>
                </div>
                
                <div className="absolute top-3 right-3 bg-[#10271D]/90 backdrop-blur-sm px-3 py-1 rounded-lg text-white font-dmsans font-bold text-sm shadow-sm tracking-tight">
                  ₹{dish.price}
                </div>
              </div>

              {/* Dish Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#84601A] font-semibold uppercase tracking-wider mb-1.5">
                    <span>{dish.category}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#10271D] group-hover:text-[#84601A] transition-colors mb-2">
                    {dish.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4E5852] line-clamp-3 leading-relaxed mb-4">
                    {dish.description}
                  </p>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-[#E9DFC9] flex items-center justify-between">
                  <span className="text-xs text-[#7A7060]">Freshly prepared</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${restaurantInfo.phone}`}
                      className="p-2 rounded-lg text-[#10271D] hover:bg-[#F4ECE0] transition-colors"
                      title="Call to order"
                    >
                      <Phone className="w-4 h-4 text-[#84601A]" />
                    </a>
                    <a
                      href={restaurantInfo.zomatoOrderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#10271D] hover:text-[#84601A] transition-colors"
                    >
                      <span>Order</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu CTA Button */}
        <div className="mt-14 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-[#FAF7F2] bg-[#10271D] hover:bg-[#1A3B2C] shadow-soft hover:shadow-soft-lg transition-all group focus:outline-none focus:ring-2 focus:ring-[#10271D] focus:ring-offset-2"
          >
            <span>View Complete Restaurant Menu (100+ Items)</span>
            <ArrowRight className="w-4 h-4 text-[#C59B37] group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
