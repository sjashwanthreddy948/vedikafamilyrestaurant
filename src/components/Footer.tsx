import React from 'react';
import { UtensilsCrossed, Phone, MapPin, Clock, ShieldCheck, ArrowUp, ExternalLink } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

interface FooterProps {
  onOpenOwnerModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOwnerModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-[#FAF7F2] border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 text-[#FFD600] flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-[#FFD600]" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  Vedhika
                </span>
                <p className="text-[11px] uppercase tracking-widest text-[#FFD600] font-medium -mt-0.5">
                  Family Restaurant
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Good Food. Great Moments. Together. Serving authentic Hyderabadi Dum Biryani, tandoori starters, curries, and Indo-Chinese favorites in a family-friendly garden and open-air setting in Isnapur, Hyderabad.
            </p>

            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>FSSAI License: <strong className="font-dmsans text-white tracking-wider">{restaurantInfo.fssaiLicense}</strong></span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#home" className="hover:text-[#FFD600] transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FFD600] transition-colors">Explore Menu</a>
              </li>
              <li>
                <a href="#signature" className="hover:text-[#FFD600] transition-colors">Signature Dishes</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FFD600] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FFD600] transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FFD600] transition-colors">Location &amp; Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Contact &amp; Hours
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#FFD600] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium font-dmsans">12:00 PM – 11:30 PM</p>
                  <p className="text-[11px] text-zinc-400 font-dmsans">Open all 7 days a week</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FFD600] shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${restaurantInfo.phone}`} className="text-white hover:text-[#FFD600] transition-colors font-medium font-dmsans tracking-wide">
                    {restaurantInfo.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-zinc-400">Table enquiries &amp; takeaways</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-[#FFD600] shrink-0 mt-0.5" />
                <a
                  href={restaurantInfo.zomatoOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FFD600] transition-colors underline"
                >
                  Order on Zomato
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Address
            </h4>
            <div className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed">
              <MapPin className="w-4 h-4 text-[#FFD600] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">{restaurantInfo.name}</p>
                <p className="font-dmsans">{restaurantInfo.address.line1}</p>
                <p className="text-[#FFD600] font-medium">{restaurantInfo.address.landmark}</p>
                <p>{restaurantInfo.address.area}, {restaurantInfo.address.city}, {restaurantInfo.address.state} – <span className="font-dmsans">{restaurantInfo.address.pincode}</span></p>
                <a
                  href={restaurantInfo.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs font-semibold text-[#FFD600] hover:underline"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            <p>&copy; <span className="font-dmsans">{currentYear}</span> Vedhika Family Restaurant. All rights reserved.</p>
            <p className="text-[10px] text-zinc-400 mt-0.5">
              Listed rating: <strong className="font-dmsans text-white font-semibold">4.1</strong> (<span className="font-dmsans">214</span> reviews, sourced listing information). Prices and hours subject to confirmation with restaurant.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {onOpenOwnerModal && (
              <button
                type="button"
                onClick={onOpenOwnerModal}
                className="text-[11px] text-[#FFD600] hover:underline hover:text-white transition-colors"
              >
                Owner Info Notice
              </button>
            )}

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-[#FFD600] hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
