import React from 'react';
import { Users, Tv, Trees, UtensilsCrossed, CheckCircle2 } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F4ECE0]/50 border-y border-[#E9DFC9]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#84601A] bg-[#EAE2D2] px-3 py-1 rounded-full border border-[#D5C7A9]/60">
            About Our Restaurant
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#10271D] mt-3">
            A Welcoming Space for Family Dining
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B37] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-base text-[#4E5852] font-light leading-relaxed">
            Located conveniently on Shankarpally–Sangareddy Road opposite HP Petrol Bunk in Isnapur, Vedhika Family Restaurant is designed for relaxed dining, great food, and comfortable gatherings.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Authentic Photography Collage */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-soft border border-[#E9DFC9]">
                <img
                  src="/images/ambience-screening.jpg"
                  alt="Open-air rooftop dining at night with projector screen"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-medium text-white">Big-Screen Open-Air Dining</span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-soft border border-[#E9DFC9]">
                <img
                  src="/images/garden-lawn.jpg"
                  alt="Green garden lawn with palm trees"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-medium text-white">Lush Garden Walkway</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-soft border border-[#E9DFC9]">
              <img
                src="/images/restaurant-exterior.png"
                alt="Vedhika Family Restaurant building facade"
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                <span className="text-[11px] font-medium text-white">
                  Front Façade • Opposite HP Petrol Bunk, Isnapur
                </span>
              </div>
            </div>
            
            <p className="text-center text-xs text-[#7A7060] italic">
              Genuine photographs of Vedhika Family Restaurant premises in Isnapur, Hyderabad.
            </p>
          </div>

          {/* Right Column: Descriptive Story & Dining Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#E9DFC9] shadow-soft space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#10271D]">
                Good Food, Wholesome Hospitality
              </h3>
              
              <p className="text-sm sm:text-base text-[#3D4541] leading-relaxed">
                At Vedhika Family Restaurant, we prioritize bringing families and friends together over freshly prepared meals. Whether you are craving a traditional Hyderabadi Chicken Dum Biryani, spicy Indo-Chinese chicken starters, or comforting vegetarian curries with hot rotis, our kitchen offers an expansive variety tailored to diverse tastes.
              </p>

              <p className="text-sm sm:text-base text-[#3D4541] leading-relaxed">
                Enjoy your dinner in our spacious upper open-air dining section with a large projection screen, or take a peaceful stroll through our garden lawn. With direct highway access and dedicated parking, it is a convenient stop for locals and travelers alike.
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E9DFC9]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EFE7D8] text-[#84601A] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-[#84601A]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#10271D]">Family-Friendly</h4>
                    <p className="text-xs text-[#5D5446]">Spacious table arrangements suitable for groups &amp; kids.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EFE7D8] text-[#84601A] flex items-center justify-center shrink-0">
                    <Tv className="w-4 h-4 text-[#84601A]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#10271D]">Big Screen Screening</h4>
                    <p className="text-xs text-[#5D5446]">Open-air evening screenings in our upper seating area.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EFE7D8] text-[#84601A] flex items-center justify-center shrink-0">
                    <Trees className="w-4 h-4 text-[#84601A]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#10271D]">Garden &amp; Lawn Setting</h4>
                    <p className="text-xs text-[#5D5446]">Lush greenery and stone walkways for a refreshing vibe.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EFE7D8] text-[#84601A] flex items-center justify-center shrink-0">
                    <UtensilsCrossed className="w-4 h-4 text-[#84601A]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#10271D]">Biryani, Indian &amp; Chinese</h4>
                    <p className="text-xs text-[#5D5446]">Over 100+ vegetarian and non-vegetarian selections.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Info Pill */}
            <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#D5C7A9]/80 flex flex-wrap items-center justify-between gap-3 text-xs text-[#4F4638]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Listed average cost: <strong>{restaurantInfo.averageCostForTwo}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B37]" />
                <span>Daily: <strong>12:00 PM – 11:30 PM</strong></span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
