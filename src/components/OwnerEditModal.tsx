import React from 'react';
import { X, ShieldAlert, FileCode, ExternalLink } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

interface OwnerEditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerEditModal: React.FC<OwnerEditModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] rounded-2xl max-w-xl w-full border border-[#D5C7A9] shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#7A7060] hover:text-[#10271D] hover:bg-[#EAE2D2] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#F4ECE0] text-[#84601A] flex items-center justify-center">
            <FileCode className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-[#10271D]">
              Owner Information &amp; Updates Guide
            </h3>
            <p className="text-xs text-[#7A7060]">
              Maintainable data architecture for Vedhika Family Restaurant
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs text-[#4F4638] leading-relaxed">
          <div className="p-3.5 rounded-xl bg-[#F4ECE0] border border-[#D5C7A9] flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-[#84601A] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#10271D]">Sourced Listing Verification Notice:</p>
              <p className="mt-0.5">
                The restaurant rating (<strong>4.1 based on 214 ratings</strong>), menu prices, and operating hours (<strong>12:00 PM – 11:30 PM</strong>) are strictly sourced from the supplied restaurant listing.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-[#10271D] text-sm">Where to edit data:</h4>
            <p>
              All menu items, prices, phone numbers, addresses, and images are cleanly organized in a single centralized file:
            </p>
            <div className="p-2.5 bg-[#10271D] text-emerald-300 font-mono text-xs rounded-lg select-all">
              src/data/restaurantData.ts
            </div>
            <p>
              To adjust a dish price, update opening hours, or add photos, simply open that file and change the values. The changes will instantly reflect throughout the website.
            </p>
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#E9DFC9] space-y-1">
            <div className="flex justify-between py-1 border-b border-[#F4ECE0]">
              <span className="font-medium text-[#7A7060]">FSSAI License:</span>
              <span className="font-mono font-bold text-[#10271D]">{restaurantInfo.fssaiLicense}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F4ECE0]">
              <span className="font-medium text-[#7A7060]">Contact Phone:</span>
              <span className="font-bold text-[#10271D]">{restaurantInfo.phoneDisplay}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#F4ECE0]">
              <span className="font-medium text-[#7A7060]">Coordinates:</span>
              <span className="font-mono text-[#10271D]">17.4684058399, 78.1336476110</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-medium text-[#7A7060]">Online Orders:</span>
              <a
                href={restaurantInfo.zomatoOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#84601A] font-semibold hover:underline flex items-center gap-1"
              >
                <span>Verified Zomato URL</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#10271D] text-[#FAF7F2] hover:bg-[#1A3B2C] transition-all"
            >
              Close Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
