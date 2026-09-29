import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Phone, Clock, Utensils, ArrowRight } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';
import heroBgDesktop from '../assets/hero-cinematic-bg.png';
import heroBgMobile from '../assets/hero-mobile-bg.jpg';

interface HeroProps {
  backgroundImageUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({
  backgroundImageUrl,
}) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] min-h-[100dvh] lg:min-h-screen flex flex-col justify-end lg:justify-between overflow-hidden bg-black text-white pt-16 sm:pt-20 lg:pt-28 pb-3 sm:pb-5 lg:pb-8"
      aria-label="Welcome to Vedhika Family Restaurant"
    >
      {/* 1. CINEMATIC BACKGROUND: EXACT PORTRAIT MOBILE IMAGE & LANDSCAPE DESKTOP IMAGE */}
      <picture className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <source media="(min-width: 1024px)" srcSet={backgroundImageUrl || heroBgDesktop} />
        <img
          src={backgroundImageUrl || heroBgMobile}
          alt="Vedhika Family Restaurant illuminated exterior at dusk in Isnapur, Hyderabad"
          className="w-full h-full object-cover object-top lg:object-center filter brightness-[0.98] contrast-[1.03] transition-all duration-700"
          loading="eager"
        />
      </picture>

      {/* Gradient Overlays: Subtle top vignette so sign & lights shine, focused left/bottom gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent lg:bg-gradient-to-r lg:from-black/85 lg:via-black/55 lg:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent lg:hidden pointer-events-none" />

      {/* 2. HERO EDITORIAL CONTENT (Exact Reference Mockup Layout) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto lg:my-auto py-1 sm:py-4 lg:py-14">
        <motion.div 
          className="max-w-xl text-left"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow Line & Text */}
          <div className="mb-2 sm:mb-2.5">
            <div className="w-9 sm:w-12 h-[3px] bg-[#FFD600] mb-1.5 sm:mb-2" />
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.22em] sm:tracking-[0.26em] text-[#FFD600] uppercase">
              INDIAN &nbsp;&bull;&nbsp; CHINESE &nbsp;&bull;&nbsp; BIRYANI
            </p>
          </div>

          {/* Main Headline (Exact editorial serif from mockup with tight leading) */}
          <h1 className="font-serif text-[clamp(40px,11.5vw,58px)] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white tracking-tight leading-[0.93] sm:leading-[1.0] lg:leading-[1.06] mb-2.5 sm:mb-3.5 drop-shadow-2xl">
            Good Food.
            <br />
            Great Moments.
            <br />
            <span className="text-[#FFD600]">Together.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-[340px] sm:max-w-md font-light leading-relaxed mb-4 sm:mb-5 drop-shadow">
            Welcome to Vedhika Family Restaurant, your perfect place for delicious food, family dining and unforgettable moments.
          </p>

          {/* Two Action Buttons: Compact pills side-by-side */}
          <div className="flex flex-row items-center gap-2 sm:gap-3 w-full max-w-[340px] sm:max-w-none sm:w-auto">
            {/* Explore Menu: Yellow Pill (Side-by-side compact) */}
            <a
              href="#menu"
              onClick={(e) => scrollToSection(e, '#menu')}
              className="h-9 sm:h-10 lg:h-12 flex-1 sm:flex-initial px-3.5 sm:px-5 lg:px-6 rounded-full font-bold text-[11px] sm:text-xs lg:text-base text-black bg-[#FFD600] hover:bg-white shadow-md transition-all duration-300 transform active:scale-[0.98] inline-flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap"
              id="hero-explore-menu-btn"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black stroke-[2.5]" />
            </a>

            {/* Get Directions: Translucent Pill with White Border & Location Pin (Side-by-side compact) */}
            <a
              href={restaurantInfo.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 sm:h-10 lg:h-12 flex-1 sm:flex-initial px-3.5 sm:px-5 lg:px-6 rounded-full font-semibold text-[11px] sm:text-xs lg:text-base text-white bg-black/40 hover:bg-white/10 border border-white/80 shadow-md transition-all duration-300 backdrop-blur-md transform active:scale-[0.98] inline-flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap group"
              id="hero-get-directions-btn"
            >
              <span>Get Directions</span>
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white group-hover:text-[#FFD600] transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* 3. EXACT BOTTOM RESTAURANT INFORMATION AREA & SCROLL INDICATOR: Brought up close to buttons */}
      <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full mt-3 sm:mt-5 lg:mt-auto pt-1 sm:pt-4">
        
        {/* Responsive Info Grid: 4-card horizontal row on mobile matching screenshot, 5-column divider bar on desktop */}
        <motion.div 
          className="grid grid-cols-4 lg:grid-cols-5 gap-1.5 sm:gap-2.5 lg:gap-0 lg:divide-x lg:divide-white/20 pt-1 pb-1"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          
          {/* 1. Location Card */}
          <div className="bg-[#0c0c0c]/85 backdrop-blur-md rounded-xl sm:rounded-2xl p-1.5 sm:p-2.5 border border-white/10 lg:border-none lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:px-4 lg:first:pl-0 flex flex-col justify-between">
            <div>
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD600] mb-1 sm:mb-1.5 shrink-0" />
              <p className="text-[7px] sm:text-[8.5px] text-white/70 font-semibold uppercase tracking-wider mb-0.5">
                Location
              </p>
              <p className="text-[9.5px] sm:text-xs lg:text-sm font-bold text-white leading-tight">
                Isnapur,
                <br className="lg:hidden" />
                <span className="lg:ml-1">Hyderabad</span>
              </p>
            </div>
            <p className="hidden lg:block text-[11px] text-white/75 leading-relaxed font-dmsans mt-1">
              House 6-181/1/A, Singapur, Shankarpally-Sangareddy Road, Opp. HP Petrol Bunk
            </p>
          </div>

          {/* 2. Call Us Card */}
          <div className="bg-[#0c0c0c]/85 backdrop-blur-md rounded-xl sm:rounded-2xl p-1.5 sm:p-2.5 border border-white/10 lg:border-none lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:px-4 flex flex-col justify-between">
            <div>
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD600] mb-1 sm:mb-1.5 shrink-0" />
              <p className="text-[7px] sm:text-[8.5px] text-white/70 font-semibold uppercase tracking-wider mb-0.5">
                Call Us
              </p>
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="text-[9.5px] sm:text-xs lg:text-sm font-bold text-white hover:text-[#FFD600] font-dmsans leading-tight block"
              >
                +91 76720
                <br className="lg:hidden" />
                <span className="lg:ml-1">03800</span>
              </a>
            </div>
            <p className="hidden lg:block text-[10px] text-white/60 mt-1">
              Table &amp; Takeaway
            </p>
          </div>

          {/* 3. Opening Hours Card */}
          <div className="bg-[#0c0c0c]/85 backdrop-blur-md rounded-xl sm:rounded-2xl p-1.5 sm:p-2.5 border border-white/10 lg:border-none lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:px-4 flex flex-col justify-between">
            <div>
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD600] mb-1 sm:mb-1.5 shrink-0" />
              <p className="text-[7px] sm:text-[8.5px] text-white/70 font-semibold uppercase tracking-wider mb-0.5">
                Opening Hours
              </p>
              <p className="text-[9.5px] sm:text-xs lg:text-sm font-bold text-white font-dmsans leading-tight">
                12:00 PM –
                <br className="lg:hidden" />
                <span className="lg:ml-1">11:30 PM</span>
              </p>
            </div>
            <p className="text-[7px] sm:text-[8px] text-white/60 mt-0.5 leading-none">
              (Today &bull; All Days)
            </p>
          </div>

          {/* 4. Avg. Cost Card */}
          <div className="bg-[#0c0c0c]/85 backdrop-blur-md rounded-xl sm:rounded-2xl p-1.5 sm:p-2.5 border border-white/10 lg:border-none lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:px-4 flex flex-col justify-between">
            <div>
              <Utensils className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD600] mb-1 sm:mb-1.5 shrink-0" />
              <p className="text-[7px] sm:text-[8.5px] text-white/70 font-semibold uppercase tracking-wider mb-0.5">
                Avg. Cost
              </p>
              <p className="text-[9.5px] sm:text-xs lg:text-sm font-bold text-white font-dmsans leading-tight">
                ₹800
                <br className="lg:hidden" />
                <span className="lg:ml-1">for two</span>
              </p>
            </div>
            <p className="text-[7px] sm:text-[8px] text-white/60 mt-0.5 leading-none">
              (as per Zomato)
            </p>
          </div>

          {/* 5. Dining Rating Card (Visible on desktop) */}
          <div className="hidden lg:flex bg-[#0c0c0c]/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-white/10 lg:border-none lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:px-4 flex-col justify-between">
            <div>
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD600] mb-1.5 sm:mb-2 shrink-0" />
              <p className="text-[7.5px] sm:text-[9px] text-white/70 font-semibold uppercase tracking-wider mb-0.5 sm:mb-1">
                Dining Rating
              </p>
              <p className="text-[10px] sm:text-xs lg:text-sm font-bold text-white font-dmsans leading-tight whitespace-nowrap">
                4.1 (214 ratings)
              </p>
            </div>
            <p className="text-[7.5px] sm:text-[9px] text-white/60 mt-1 leading-none">
              (as per Zomato listing)
            </p>
          </div>

        </motion.div>

        {/* 4. SCROLL INDICATOR (Exact match with reference mockup) */}
        <div className="pt-3 sm:pt-6 pb-2 sm:pb-2 flex flex-col items-center justify-center text-center">
          <a
            href="#signature"
            onClick={(e) => scrollToSection(e, '#signature')}
            className="group flex flex-col items-center gap-1 focus:outline-none"
            aria-label="Scroll to explore more content"
          >
            {/* Pill with downward arrow */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/40 flex items-center justify-center group-hover:border-[#FFD600] transition-colors mb-1">
              <svg 
                viewBox="0 0 24 24" 
                className="w-3.5 h-3.5 text-white group-hover:text-[#FFD600] transition-colors"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </div>

            {/* Label with horizontal flanking lines */}
            <div className="flex items-center gap-2">
              <span className="w-7 sm:w-10 h-[1px] bg-white/40" />
              <span className="text-[8.5px] sm:text-[10px] tracking-[0.24em] font-medium text-white/80 uppercase group-hover:text-[#FFD600] transition-colors">
                SCROLL TO EXPLORE
              </span>
              <span className="w-7 sm:w-10 h-[1px] bg-white/40" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
