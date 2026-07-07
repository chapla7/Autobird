import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, ArrowRight, ClipboardCheck, Sparkles, PhoneCall, HelpCircle } from "lucide-react";
import { insuranceBenefits } from "../data";

export default function InsuranceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [vehicleType, setVehicleType] = useState("Car");
  const [vehicleNo, setVehicleNo] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [insuranceType, setInsuranceType] = useState("Comprehensive");

  // Auto-swiping benefit cards every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % insuranceBenefits.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (idx: number) => {
    setActiveIndex(idx);
    // Auto-select insurance type on form based on active card clicked
    const targetType = 
      idx === 0 ? "Comprehensive" :
      idx === 1 ? "Zero Depreciation" :
      idx === 2 ? "Instant Claim Survey" : "Engine Protection Cover";
    setInsuranceType(targetType);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!ownerName || !phoneNo || !vehicleNo) {
      alert("Please populate the required fields (Name, Phone, and Vehicle Number) before submitting.");
      return;
    }

    const heading = "🛡️ *AUTOBIRD GARAGE - INSURANCE CLAIM / INQUIRY* 🛡️\n";
    const divider = "====================================\n";
    const body = `👤 *Owner Name:* ${ownerName}\n` +
                 `📱 *Phone Number:* ${phoneNo}\n` +
                 `🚗 *Vehicle Type:* ${vehicleType}\n` +
                 `🔢 *Vehicle Number:* ${vehicleNo.toUpperCase()}\n` +
                 `🔥 *Insurance Requested:* ${insuranceType}\n`;
    const footer = "====================================\n_This request is sent directly from the Autobird Garage Showroom portal. Please initiate policy mapping._";

    const formattedMessage = encodeURIComponent(heading + divider + body + footer);
    window.open(`https://wa.me/919892205127?text=${formattedMessage}`, "_blank");
  };

  return (
    <section id="insurance" className="py-8 md:py-24 bg-black text-white relative overflow-hidden select-none">
      {/* Dynamic backdrop glows */}
      <div className="absolute inset-0 bg-radial-beam opacity-40 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 md:gap-16 items-center">
          
          {/* Left Column: Stacking Tinder Swiping Cards (Col Span 6) */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
            <div className="max-w-xl mb-4 md:mb-12 flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 mb-1.5 md:mb-4">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" />
                <span className="text-[7px] sm:text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-brand-accent">
                  CASHLESS INSURANCE CLAIM
                </span>
              </div>
              <h2 className="font-display font-black text-[22px] sm:text-3xl md:text-5xl lg:text-6xl tracking-tight leading-none text-white">
                Get Your Insurance.
              </h2>
              <p className="mt-1.5 md:mt-5 text-neutral-400 font-light leading-relaxed text-[8px] sm:text-sm md:text-base max-w-md">
                Autobird Garage is an official cashless surveyor hub for 15+ major insurers. Swipe through benefits below, fill your vehicle parameters, and claim ₹0 out-of-pocket restorations instantly.
              </p>
            </div>

            {/* Tinder Stacking Area */}
            <div className="relative h-44 sm:h-80 w-full max-w-md flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                {insuranceBenefits.map((benefit, idx) => {
                  // Card stacking arrangement calculations based on activeIndex
                  const offset = (idx - activeIndex + insuranceBenefits.length) % insuranceBenefits.length;
                  const isFront = offset === 0;

                  // Stacking visual styling properties
                  const zIndex = 30 - offset;
                  const scale = 1 - offset * 0.05;
                  const translateY = offset * 10;
                  const rotate = isFront ? 0 : offset * 2;
                  const opacity = isFront ? 1 : 0.4 - offset * 0.1;

                  return (
                    <motion.div
                      key={benefit.id}
                      onClick={() => handleCardClick(idx)}
                      animate={{
                        scale,
                        y: translateY,
                        rotate,
                        opacity,
                        zIndex
                      }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className={`absolute w-full h-36 sm:h-64 rounded-xl sm:rounded-3xl p-3 sm:p-8 flex flex-col justify-between border cursor-pointer select-none text-left bg-gradient-to-tr ${benefit.bgGradient} ${
                        isFront ? "border-brand-accent/40 shadow-2xl shadow-brand-accent/5" : "border-neutral-800/40"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5 sm:mb-4">
                          <span className="text-[6.5px] sm:text-[10px] font-mono tracking-widest text-brand-accent uppercase font-bold">
                            TINDER SWIPING PROTECTION BENEFITS
                          </span>
                          <span className="text-[8px] sm:text-xs font-mono text-neutral-600">
                            0{benefit.id} / 04
                          </span>
                        </div>
                        <h3 className="font-display font-black text-xs sm:text-xl md:text-2xl text-white tracking-tight leading-tight">
                          {benefit.title}
                        </h3>
                        <p className="text-[8px] sm:text-xs text-neutral-300 mt-1 sm:mt-2 font-light leading-snug line-clamp-2">
                          {benefit.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-1.5 sm:pt-4 border-t border-white/5">
                        <span className="text-[8px] sm:text-xs font-mono text-neutral-400">Guaranteed Benefit</span>
                        <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 sm:px-3 sm:py-1 bg-white/10 text-white rounded-full font-mono text-[7px] sm:text-[10px] font-bold uppercase tracking-wider">
                          <ShieldCheck className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-brand-accent" />
                          {benefit.benefit}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Click Indicator Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-2 sm:mt-8 max-w-md">
              {insuranceBenefits.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCardClick(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-6 bg-brand-accent" : "w-1 bg-neutral-800"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* Right Column: Pre-populated WhatsApp form (Col Span 6) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-4 sm:p-8 md:p-10 rounded-xl sm:rounded-[28px] border border-neutral-900 bg-neutral-950/40 backdrop-blur-sm shadow-xl"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-8">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-neutral-900 border border-neutral-800 text-brand-accent shrink-0">
                  <ClipboardCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[13px] sm:text-lg md:text-xl text-white tracking-tight">
                    Instant Insurance Inquiry
                  </h3>
                  <p className="text-[8px] sm:text-xs text-neutral-500 font-light mt-0.5">
                    Pre-select benefit from swiper or adjust parameters below.
                  </p>
                </div>
              </div>

              {/* Form elements */}
              <form onSubmit={handleWhatsAppSubmit} className="space-y-3 sm:space-y-5">
                
                {/* Vehicle Type Selector */}
                <div>
                  <label className="text-[8px] sm:text-[10px] font-mono tracking-wider uppercase text-neutral-400 block mb-1 sm:mb-2">
                    Vehicle Type *
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {["Car", "Two-Wheeler"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setVehicleType(type)}
                        className={`py-1.5 sm:py-3 rounded-lg sm:rounded-xl font-mono text-[9px] sm:text-xs font-bold uppercase border transition-all duration-300 ${
                          vehicleType === type
                            ? "bg-brand-accent border-brand-accent text-white"
                            : "bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Owner Name Input */}
                <div>
                  <label className="text-[8px] sm:text-[10px] font-mono tracking-wider uppercase text-neutral-400 block mb-1 sm:mb-2">
                    Owner Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="Enter owner full name"
                    className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-brand-accent/40 rounded-lg sm:rounded-xl p-2 sm:p-3.5 text-[10px] sm:text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors"
                  />
                </div>

                {/* Vehicle Number & Phone Number Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="text-[8px] sm:text-[10px] font-mono tracking-wider uppercase text-neutral-400 block mb-1 sm:mb-2">
                      Vehicle Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={vehicleNo}
                      onChange={(e) => setVehicleNo(e.target.value)}
                      placeholder="e.g., MH 12 AB 1234"
                      className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-brand-accent/40 rounded-lg sm:rounded-xl p-2 sm:p-3.5 text-[10px] sm:text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors uppercase"
                    />
                  </div>

                  <div>
                    <label className="text-[8px] sm:text-[10px] font-mono tracking-wider uppercase text-neutral-400 block mb-1 sm:mb-2">
                      WhatsApp Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      placeholder="e.g., +91 99887 76655"
                      className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-brand-accent/40 rounded-lg sm:rounded-xl p-2 sm:p-3.5 text-[10px] sm:text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Insurance Type Selector */}
                <div>
                  <label className="text-[8px] sm:text-[10px] font-mono tracking-wider uppercase text-neutral-400 block mb-1 sm:mb-2">
                    Required Policy Type
                  </label>
                  <select
                    value={insuranceType}
                    onChange={(e) => setInsuranceType(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-brand-accent/40 rounded-lg sm:rounded-xl p-2 sm:p-3.5 text-[10px] sm:text-sm text-white focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="Comprehensive">Comprehensive First Party Care</option>
                    <option value="Zero Depreciation">Zero Depreciation add-on</option>
                    <option value="Instant Claim Survey">Cashless Claim Survey & Repair</option>
                    <option value="Engine Protection Cover">Engine Protection Cover (Hydrostatic lock)</option>
                    <option value="Policy Renewal">Out-of-date Policy Renewal</option>
                  </select>
                </div>

                {/* Submit button (Submits to WhatsApp) */}
                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-4 bg-brand-accent hover:bg-brand-accent-hover text-white text-[9px] sm:text-xs font-mono font-bold tracking-widest uppercase rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-accent/15 hover:shadow-brand-accent/25 active:scale-95 mt-2 sm:mt-4"
                >
                  <PhoneCall className="w-3 h-3 sm:w-4 sm:h-4" />
                  Generate WhatsApp Inquiry
                </button>

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
