import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ExternalLink, Clock, MapPin } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute Indian Standard Time status
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const istString = now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
      const istDate = new Date(istString);
      const hours = istDate.getHours();
      const minutes = istDate.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      // 12:00 PM is 720 minutes, 11:30 PM is 1410 minutes
      const openTime = 12 * 60;
      const closeTime = 23 * 60 + 30;

      setIsOpenNow(totalMinutes >= openTime && totalMinutes <= closeTime);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/10'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo & Brand Identity (Chef Hat Icon + Vedhika + FAMILY RESTAURANT) */}
          <a 
            href="#home" 
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0 min-w-0"
            aria-label="Vedhika Family Restaurant Home"
          >
            {/* Chef Hat Icon with subtle yellow highlight */}
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:border-[#FFD600] transition-colors duration-300 shrink-0">
              <svg 
                viewBox="0 0 24 24" 
                className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:text-[#FFD600] transition-colors duration-300"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {/* Chef Hat Contour */}
                <path d="M6 13.8V19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5.2" />
                <path d="M6 14H4a2 2 0 0 1-2-2 4 4 0 0 1 4-4 4.5 4.5 0 0 1 3-3 4.5 4.5 0 0 1 6 0 4.5 4.5 0 0 1 3 3 4 4 0 0 1 4 4 2 2 0 0 1-2 2h-2" />
                {/* Utensils inside Hat */}
                <path d="M10 11.5v6" stroke="#FFD600" strokeWidth="1.6" />
                <path d="M14 11.5v6" stroke="#FFD600" strokeWidth="1.6" />
                <path d="M9 13.5h2" stroke="#FFD600" strokeWidth="1.4" />
                <path d="M13 13.5h2" stroke="#FFD600" strokeWidth="1.4" />
              </svg>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="font-serif text-xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#FFD600] transition-colors leading-none">
                  Vedhika
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD600] shrink-0" />
              </div>
              <p className="text-[9px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-white/80 font-medium leading-tight mt-0.5">
                Family Restaurant
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
            <a
              href="#home"
              className="text-sm font-medium text-white transition-colors relative py-1 group"
            >
              <span>Home</span>
              {/* Reference image: subtle yellow underline indicator under Home */}
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFD600] rounded-full" />
            </a>
            <a
              href="#menu"
              className="text-sm font-medium text-white/90 hover:text-[#FFD600] transition-colors relative py-1"
            >
              Menu
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-white/90 hover:text-[#FFD600] transition-colors relative py-1"
            >
              About
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium text-white/90 hover:text-[#FFD600] transition-colors relative py-1"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-white/90 hover:text-[#FFD600] transition-colors relative py-1"
            >
              Contact
            </a>
          </nav>

          {/* Right Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live Open Status Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-xs font-medium text-white">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-[#FFD600] animate-pulse' : 'bg-white/40'}`} />
              <span>{isOpenNow ? 'Open Now' : 'Closed'}</span>
              <span className="text-[10px] text-white/70">• 12:00 PM – 11:30 PM</span>
            </div>

            {/* Prominent Yellow "Order Online" Button */}
            <a
              href={restaurantInfo.zomatoOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-black bg-[#FFD600] hover:bg-white transition-all duration-300 shadow-lg transform hover:scale-[1.03] active:scale-[0.98] group"
              id="header-order-online-btn"
            >
              <span>Order Online</span>
              <ExternalLink className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Right Controls: Order Online Button + Hamburger Toggle (Exact reference mockup) */}
          <div className="flex items-center gap-2 md:hidden shrink-0">
            <a
              href={restaurantInfo.zomatoOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-bold text-black bg-[#FFD600] hover:bg-white active:scale-95 transition-all shadow-sm whitespace-nowrap"
              id="mobile-header-order-btn"
            >
              <span>Order Online</span>
              <ExternalLink className="w-3 h-3 text-black stroke-[2.5]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 rounded-lg text-white hover:text-[#FFD600] hover:bg-white/10 transition-colors focus:outline-none shrink-0"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/20 px-6 pt-5 pb-8 shadow-2xl animate-in slide-in-from-top duration-200"
          id="mobile-navigation-drawer"
        >
          {/* Status Bar */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/15">
            <div className="flex items-center gap-2 text-xs font-medium text-white">
              <Clock className="w-3.5 h-3.5 text-[#FFD600]" />
              <span>{isOpenNow ? 'Open Now (12:00 PM – 11:30 PM)' : 'Closed • Opens 12:00 PM'}</span>
            </div>
            <span className="text-[10px] text-white/60">Isnapur, Hyderabad</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation Drawer">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-[#FFD600] flex items-center justify-between py-1 border-b border-white/5"
            >
              <span>Home</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD600]" />
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/90 hover:text-[#FFD600] py-1 border-b border-white/5"
            >
              Menu
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/90 hover:text-[#FFD600] py-1 border-b border-white/5"
            >
              About Vedhika
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/90 hover:text-[#FFD600] py-1 border-b border-white/5"
            >
              Gallery &amp; Ambience
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-white/90 hover:text-[#FFD600] py-1 border-b border-white/5"
            >
              Contact &amp; Location
            </a>

            {/* Mobile CTAs */}
            <div className="pt-4 space-y-3">
              <a
                href={restaurantInfo.zomatoOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-sm font-bold text-black bg-[#FFD600] hover:bg-white transition-colors shadow-lg"
              >
                <span>Order Online on Zomato</span>
                <ExternalLink className="w-4 h-4 text-black" />
              </a>

              <a
                href={`tel:${restaurantInfo.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-sm font-semibold text-white bg-black/60 border border-white/30 hover:border-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FFD600]" />
                <span>Call {restaurantInfo.phoneDisplay}</span>
              </a>

              <a
                href={restaurantInfo.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-medium text-white/80 hover:text-white border border-white/15"
              >
                <MapPin className="w-3.5 h-3.5 text-[#FFD600]" />
                <span>Get Directions (Opposite HP Petrol Bunk)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
