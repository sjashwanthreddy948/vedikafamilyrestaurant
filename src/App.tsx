import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SignatureDishes } from './components/SignatureDishes';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { LocationContact } from './components/LocationContact';
import { OrderOnlineBanner } from './components/OrderOnlineBanner';
import { Footer } from './components/Footer';
import { OwnerEditModal } from './components/OwnerEditModal';
import { Phone, Compass, ShoppingBag } from 'lucide-react';
import { restaurantInfo } from './data/restaurantData';

export const App: React.FC = () => {
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);
  const [showMobileActionBar, setShowMobileActionBar] = useState(false);

  // Show bottom sticky mobile action bar only after scrolling past the hero section
  useEffect(() => {
    const handleScroll = () => {
      setShowMobileActionBar(window.scrollY > 420);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A1E1C]">
      {/* Sticky Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* Hero Section */}
        <Hero />

        {/* Signature Highlights */}
        <SignatureDishes />

        {/* Full Searchable & Filterable Restaurant Menu */}
        <MenuSection />

        {/* About Restaurant & Family Atmosphere */}
        <About />

        {/* Photo Gallery (Authentic Restaurant Photos + Food) */}
        <GallerySection />

        {/* Order Online Partner Banner */}
        <OrderOnlineBanner />

        {/* Location, Maps, Hours & Contact */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer onOpenOwnerModal={() => setIsOwnerModalOpen(true)} />

      {/* Owner Info & Verification Guide Modal */}
      <OwnerEditModal
        isOpen={isOwnerModalOpen}
        onClose={() => setIsOwnerModalOpen(false)}
      />

      {/* Mobile Sticky Quick Action Bar (Revealed subtly only when scrolled past hero) */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-xl border-t border-white/10 px-3.5 py-2 sm:hidden shadow-2xl flex items-center justify-between gap-2 pb-[max(0.625rem,env(safe-area-inset-bottom))] transition-all duration-300 transform ${
          showMobileActionBar
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <a
          href={`tel:${restaurantInfo.phone}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-[#FFD600]" />
          <span>Call</span>
        </a>

        <a
          href={restaurantInfo.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 active:scale-95 transition-all"
        >
          <Compass className="w-3.5 h-3.5 text-[#FFD600]" />
          <span>Directions</span>
        </a>

        <a
          href={restaurantInfo.zomatoOrderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-black bg-[#FFD600] hover:bg-white active:scale-95 transition-all shadow-md"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-black" />
          <span>Order</span>
        </a>
      </div>
    </div>
  );
};

export default App;
