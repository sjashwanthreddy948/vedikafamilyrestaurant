import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Compass, 
  ShieldCheck, 
  Copy, 
  Check, 
  MessageSquare, 
  Send 
} from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const LocationContact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryGuests, setInquiryGuests] = useState('4');
  const [inquiryDate, setInquiryDate] = useState('');
  const [inquiryTime, setInquiryTime] = useState('7:30 PM');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryNote, setInquiryNote] = useState('');

  const copyAddress = () => {
    const fullAddress = `${restaurantInfo.address.line1}, ${restaurantInfo.address.landmark}, ${restaurantInfo.address.area}, ${restaurantInfo.address.city}, ${restaurantInfo.address.state} ${restaurantInfo.address.pincode}`;
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleTableInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate prefilled WhatsApp message or open call
    const message = encodeURIComponent(
      `Hello Vedhika Family Restaurant, I would like to inquire about a table reservation.\nName: ${inquiryName}\nGuests: ${inquiryGuests}\nDate: ${inquiryDate || 'Today'}\nTime: ${inquiryTime}\nPhone: ${inquiryPhone}\nNote: ${inquiryNote || 'None'}`
    );
    window.open(`https://wa.me/917672003800?text=${message}`, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#84601A] bg-[#F4ECE0] px-3.5 py-1 rounded-full border border-[#D5C7A9]">
            Visit Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10271D] mt-3">
            Location &amp; Table Enquiries
          </h2>
          <div className="w-16 h-0.5 bg-[#C59B37] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-base text-[#4E5852] font-light leading-relaxed">
            Conveniently situated on Shankarpally–Sangareddy Road right opposite HP Petrol Bunk. We look forward to serving you and your family.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Direction Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card */}
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E9DFC9] shadow-soft space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4ECE0] text-[#84601A] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#84601A]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#10271D]">
                      Restaurant Address
                    </h3>
                    <p className="text-xs text-[#84601A] font-semibold">Opposite HP Petrol Bunk</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyAddress}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#10271D] bg-[#F4ECE0] hover:bg-[#E9DFC9] border border-[#D5C7A9] transition-all"
                  title="Copy address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#84601A]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-sm text-[#3D4541] leading-relaxed pl-1">
                <p className="font-medium text-[#10271D]">{restaurantInfo.name}</p>
                <p>{restaurantInfo.address.line1}</p>
                <p className="text-[#84601A] font-medium">{restaurantInfo.address.landmark}</p>
                <p>{restaurantInfo.address.area}, {restaurantInfo.address.city}, {restaurantInfo.address.state} – {restaurantInfo.address.pincode}</p>
                <p className="text-xs text-[#7A7060] mt-1 font-mono">
                  GPS: {restaurantInfo.address.coordinates.lat}, {restaurantInfo.address.coordinates.lng}
                </p>
              </div>

              {/* Direction Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={restaurantInfo.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#FAF7F2] bg-[#10271D] hover:bg-[#1A3B2C] shadow-sm transition-all"
                >
                  <Compass className="w-4 h-4 text-[#C59B37]" />
                  <span>Get Google Maps Directions</span>
                </a>
              </div>
            </div>

            {/* Phone & Timings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E9DFC9] shadow-soft space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F4ECE0] text-[#84601A] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#84601A]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#84601A]">
                    Phone Enquiries
                  </h4>
                  <p className="font-serif text-lg font-bold text-[#10271D] mt-1">
                    {restaurantInfo.phoneDisplay}
                  </p>
                  <p className="text-[11px] text-[#7A7060] mt-0.5">
                    For takeaways &amp; table reservations
                  </p>
                </div>
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="inline-flex items-center justify-center w-full py-2 px-3 rounded-xl text-xs font-semibold bg-[#F4ECE0] hover:bg-[#E9DFC9] text-[#10271D] border border-[#D5C7A9] transition-all"
                >
                  Click to Call Now
                </a>
              </div>

              {/* Hours Card */}
              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E9DFC9] shadow-soft space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F4ECE0] text-[#84601A] flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#84601A]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#84601A]">
                    Opening Hours
                  </h4>
                  <p className="font-serif text-lg font-bold text-[#10271D] mt-1">
                    12:00 PM – 11:30 PM
                  </p>
                  <p className="text-[11px] text-[#7A7060] mt-0.5">
                    Open all 7 days a week
                  </p>
                </div>
                <div className="text-[10px] text-[#84601A] bg-[#F4ECE0] px-2.5 py-1.5 rounded-lg text-center font-medium">
                  Please verify hours before visiting
                </div>
              </div>

            </div>

            {/* FSSAI Verification Card */}
            <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#D5C7A9] flex items-center gap-3 text-xs text-[#5D5446]">
              <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0" />
              <div>
                <p className="font-semibold text-[#10271D]">Food Safety Certified (FSSAI)</p>
                <p className="text-[11px]">License Number: <strong className="font-mono text-[#10271D]">{restaurantInfo.fssaiLicense}</strong></p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Frame & Table Inquiry Form */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Embedded Interactive Map Card */}
            <div className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E9DFC9] shadow-soft">
              <div className="p-4 border-b border-[#E9DFC9] flex items-center justify-between bg-[#FAF7F2]">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#84601A]" />
                  <span className="text-xs font-bold text-[#10271D]">Map Location • Isnapur</span>
                </div>
                <a
                  href={restaurantInfo.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#84601A] hover:underline"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>

              {/* Map embed iframe centered on coordinates 17.4684058399, 78.1336476110 */}
              <div className="aspect-[16/9] w-full bg-[#EAE2D2] relative">
                <iframe
                  title="Vedhika Family Restaurant Location Map"
                  src="https://maps.google.com/maps?q=17.4684058399,78.1336476110&z=15&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className="p-3.5 bg-[#FAF7F2] text-[11px] text-[#6A6052] flex items-center justify-between">
                <span>Landmark: Opposite HP Petrol Bunk, Singapur</span>
                <span className="font-mono">17.4684° N, 78.1336° E</span>
              </div>
            </div>

            {/* Table Reservation / Family Dinner Inquiry Card */}
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E9DFC9] shadow-soft space-y-4">
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-5 h-5 text-[#84601A]" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#10271D]">
                    Quick Table / Group Inquiry
                  </h3>
                  <p className="text-xs text-[#5D5446]">
                    Visiting with family or a large group? Send a quick enquiry via WhatsApp or phone.
                  </p>
                </div>
              </div>

              {formSubmitted ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <p className="text-sm font-semibold text-emerald-800">
                    Enquiry message created!
                  </p>
                  <p className="text-xs text-emerald-700">
                    Your inquiry has been formatted. If WhatsApp did not open automatically, you can call us directly at <strong>{restaurantInfo.phoneDisplay}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-semibold text-emerald-900 underline mt-2"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTableInquiry} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#5D5446] mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="e.g. Ramesh Reddy"
                        className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D5C7A9] text-xs text-[#10271D] focus:outline-none focus:ring-2 focus:ring-[#84601A]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-[#5D5446] mb-1">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        required
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="e.g. 98765 43210"
                        className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D5C7A9] text-xs text-[#10271D] focus:outline-none focus:ring-2 focus:ring-[#84601A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#5D5446] mb-1">
                        Guests
                      </label>
                      <select
                        value={inquiryGuests}
                        onChange={(e) => setInquiryGuests(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D5C7A9] text-xs text-[#10271D] focus:outline-none focus:ring-2 focus:ring-[#84601A]"
                      >
                        <option value="2 Guests">2 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                        <option value="6-8 Guests">6–8 Guests (Family)</option>
                        <option value="10+ Guests">10+ Guests (Group)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#5D5446] mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        value={inquiryDate}
                        onChange={(e) => setInquiryDate(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D5C7A9] text-xs text-[#10271D] focus:outline-none focus:ring-2 focus:ring-[#84601A]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#5D5446] mb-1">
                        Preferred Time
                      </label>
                      <input
                        type="text"
                        value={inquiryTime}
                        onChange={(e) => setInquiryTime(e.target.value)}
                        placeholder="e.g. 7:30 PM"
                        className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D5C7A9] text-xs text-[#10271D] focus:outline-none focus:ring-2 focus:ring-[#84601A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#5D5446] mb-1">
                      Notes / Special Requests (Optional)
                    </label>
                    <input
                      type="text"
                      value={inquiryNote}
                      onChange={(e) => setInquiryNote(e.target.value)}
                      placeholder="e.g. Preferred outdoor / lawn seating"
                      className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D5C7A9] text-xs text-[#10271D] focus:outline-none focus:ring-2 focus:ring-[#84601A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-[#FAF7F2] bg-[#10271D] hover:bg-[#1A3B2C] shadow-sm transition-all mt-2"
                  >
                    <Send className="w-3.5 h-3.5 text-[#C59B37]" />
                    <span>Send Inquiry to Restaurant WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
