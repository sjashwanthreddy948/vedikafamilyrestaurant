import React from 'react';
import { ExternalLink, Phone, ShoppingBag, ShieldCheck } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const OrderOnlineBanner: React.FC = () => {
  return (
    <section className="py-14 bg-[#10271D] text-[#FAF7F2] relative overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#C59B37]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#1A3B2C]/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#153225] border border-[#C59B37]/30 rounded-3xl p-8 sm:p-12 shadow-soft-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Content */}
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C59B37]/20 border border-[#C59B37]/40 text-[#DDBB5C] text-xs font-semibold uppercase tracking-wider">
              <ShoppingBag className="w-3.5 h-3.5 text-[#C59B37]" />
              <span>Doorstep Delivery &amp; Takeaway</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Enjoy Vedhika’s Flavors at Home
            </h2>

            <p className="text-sm sm:text-base text-[#D5C7A9] font-light leading-relaxed">
              Order your favorite Hyderabadi Dum Biryani, spicy starters, curries, and Chinese dishes directly through our verified ordering partner Zomato, or call us for easy takeaway pickup.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#A89F91] justify-center lg:justify-start">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Direct official order partner link • No fake checkout</span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto shrink-0">
            {/* Zomato Order Button */}
            <a
              href={restaurantInfo.zomatoOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm text-[#10271D] bg-[#C59B37] hover:bg-[#DDBB5C] shadow-soft transition-all duration-200 group"
            >
              <span>Order Online on Zomato</span>
              <ExternalLink className="w-4 h-4 text-[#10271D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Direct Call Button */}
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-xs text-[#FAF7F2] bg-[#10271D]/60 hover:bg-[#10271D] border border-[#C59B37]/40 transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-[#C59B37]" />
              <span>Call Takeaway: {restaurantInfo.phoneDisplay}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
