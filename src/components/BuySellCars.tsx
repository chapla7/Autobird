import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Car, Coins, User, Phone, MapPin, FileText, ArrowUpRight, Gauge, Tag, ExternalLink } from "lucide-react";

interface ShowcaseCar {
  id: number;
  title: string;
  model: string;
  km: string;
  price: string;
  image: string;
  link: string;
}

export default function BuySellCars() {
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy");
  
  // Tab Form Fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  // Showcase Cars for sale
  const showcaseCars: ShowcaseCar[] = [
    {
      id: 1,
      title: "Classic Porsche 911 Carrera S",
      model: "Type 992 · 2022",
      km: "12,000 km",
      price: "₹1.85 Cr",
      image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800",
      link: "https://autobirdgarage.in/"
    },
    {
      id: 2,
      title: "Mercedes-AMG GT R Coupe",
      model: "V8 Biturbo · 2021",
      km: "8,500 km",
      price: "₹2.10 Cr",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
      link: "https://autobirdgarage.in/"
    },
    {
      id: 3,
      title: "Audi R8 V10 Performance",
      model: "Quattro S-Tronic · 2020",
      km: "14,200 km",
      price: "₹1.95 Cr",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800",
      link: "https://autobirdgarage.in/"
    }
  ];

  const [activeCarIdx, setActiveCarIdx] = useState(0);

  // Auto-swipe functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCarIdx((prev) => (prev + 1) % showcaseCars.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [showcaseCars.length]);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !vehicleModel || !city) {
      alert("Please fill out all required parameters (Name, Phone, Model, and City) before proceeding.");
      return;
    }

    const heading = activeTab === "buy" 
      ? "🏎️ *AUTOBIRD USED SHOWROOM - BUY INQUIRY* 🏎️\n"
      : "💰 *AUTOBIRD USED SHOWROOM - SELL VALUE REQUEST* 💰\n";
    const divider = "====================================\n";
    const body = `👤 *Name:* ${name}\n` +
                 `📱 *Phone:* ${phone}\n` +
                 `🚗 *Desired Model:* ${vehicleModel}\n` +
                 `🔢 *Vehicle No:* ${vehicleNo ? vehicleNo.toUpperCase() : "N/A"}\n` +
                 `🌆 *City:* ${city}\n` +
                 `💬 *Notes/Message:* ${message || "Interested in evaluation"}\n`;
    const footer = "====================================\n_Submitted via Autobird Garage Certified Pre-Owned Digital Portal._";

    const formattedMessage = encodeURIComponent(heading + divider + body + footer);
    window.open(`https://wa.me/919892205127?text=${formattedMessage}`, "_blank");
  };

  return (
    <section 
      id="buy-sell" 
      className="py-10 md:py-24 bg-white relative overflow-hidden select-none flex flex-col justify-center"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-radial-beam opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-16 items-center">
          
          {/* Left Column: Tabbed Trade Forms (Col Span 7) */}
          <div className="lg:col-span-7">
            
            {/* Header - Centered on Mobile, Left Aligned on Desktop */}
            <div className="max-w-2xl mb-4 md:mb-10 text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 mb-1.5 md:mb-4">
                <span className="w-10 h-[1.5px] bg-brand-accent" />
                <span className="text-[7.5px] sm:text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-brand-accent">
                  CERTIFIED MULTI-BRAND TRADING
                </span>
              </div>
              <h2 className="font-display font-black text-[26px] sm:text-3xl md:text-5xl text-black tracking-tight leading-none mb-2 sm:mb-4">
                Pre-Owned Car Studio.
              </h2>
              <p className="text-neutral-500 font-light text-[8.5px] sm:text-sm md:text-base leading-relaxed max-w-lg">
                Source thoroughly audited premium multi-brand pre-owned cars, or unlock instant cash payouts for your current machine under 60 minutes.
              </p>
            </div>

            {/* Tab Swappers */}
            <div className="flex border-b border-brand-border/40 mb-4 sm:mb-8 max-w-xs mx-auto lg:mx-0">
              <button
                onClick={() => { setActiveTab("buy"); }}
                className={`flex-1 py-2 sm:py-3.5 text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 relative ${
                  activeTab === "buy" ? "text-black font-extrabold" : "text-neutral-400 hover:text-black"
                }`}
              >
                <span className="flex items-center justify-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-brand-accent" />
                  Buy Car
                </span>
                {activeTab === "buy" && (
                  <motion.div layoutId="showroom-tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-accent" />
                )}
              </button>

              <button
                onClick={() => { setActiveTab("sell"); }}
                className={`flex-1 py-2 sm:py-3.5 text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 relative ${
                  activeTab === "sell" ? "text-black font-extrabold" : "text-neutral-400 hover:text-black"
                }`}
              >
                <span className="flex items-center justify-center gap-1.5">
                  <Coins className="w-3.5 h-3.5 text-brand-accent" />
                  Sell Car
                </span>
                {activeTab === "sell" && (
                  <motion.div layoutId="showroom-tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-accent" />
                )}
              </button>
            </div>

            {/* Tab Form Containers */}
            <form 
              onSubmit={handleWhatsAppSubmit} 
              className="space-y-3 sm:space-y-5 max-w-2xl bg-[#F8F8F6] border border-brand-border/40 p-3.5 sm:p-8 rounded-xl sm:rounded-[24px] shadow-sm"
            >
              
              <div className="flex items-center gap-2 mb-2 sm:mb-6">
                <span className="text-[8px] sm:text-xs font-mono font-bold uppercase text-brand-accent">
                  {activeTab === "buy" ? "CATALOG INQUIRY REGISTRATION" : "DOORSTEP INSPECTION REQUEST"}
                </span>
              </div>

              {/* Grid 2-cols */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
                {/* Name */}
                <div className="relative">
                  <label className="text-[10px] sm:text-[9px] font-mono font-bold uppercase text-neutral-400 block mb-1 sm:mb-2 tracking-wider">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Vikram Malhotra"
                      className="w-full bg-white border border-brand-border/50 focus:border-black rounded-lg sm:rounded-xl py-2 sm:py-3.5 pl-9 sm:pl-11 pr-3 sm:pr-4 text-[13px] sm:text-sm text-black focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="relative">
                  <label className="text-[10px] sm:text-[9px] font-mono font-bold uppercase text-neutral-400 block mb-1 sm:mb-2 tracking-wider">
                    WhatsApp Phone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g., +91 99887 76655"
                      className="w-full bg-white border border-brand-border/50 focus:border-black rounded-lg sm:rounded-xl py-2 sm:py-3.5 pl-9 sm:pl-11 pr-3 sm:pr-4 text-[13px] sm:text-sm text-black focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Grid 2-cols */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
                {/* Vehicle Model */}
                <div className="relative">
                  <label className="text-[10px] sm:text-[9px] font-mono font-bold uppercase text-neutral-400 block mb-1 sm:mb-2 tracking-wider">
                    {activeTab === "buy" ? "Desired Vehicle Model *" : "Current Vehicle Model *"}
                  </label>
                  <div className="relative">
                    <Car className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400" />
                    <input
                      type="text"
                      required
                      value={vehicleModel}
                      onChange={(e) => setVehicleModel(e.target.value)}
                      placeholder={activeTab === "buy" ? "e.g., Porsche Macan or Toyota Fortuner" : "e.g., Honda City 2021 VMT"}
                      className="w-full bg-white border border-brand-border/50 focus:border-black rounded-lg sm:rounded-xl py-2 sm:py-3.5 pl-9 sm:pl-11 pr-3 sm:pr-4 text-[13px] sm:text-sm text-black focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Vehicle Number (Optional/Required for sell) */}
                <div className="relative">
                  <label className="text-[10px] sm:text-[9px] font-mono font-bold uppercase text-neutral-400 block mb-1 sm:mb-2 tracking-wider">
                    {activeTab === "sell" ? "Vehicle Number *" : "Vehicle Number (Optional)"}
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400" />
                    <input
                      type="text"
                      required={activeTab === "sell"}
                      value={vehicleNo}
                      onChange={(e) => setVehicleNo(e.target.value)}
                      placeholder="e.g., MH 12 AB 1234"
                      className="w-full bg-white border border-brand-border/50 focus:border-black rounded-lg sm:rounded-xl py-2 sm:py-3.5 pl-9 sm:pl-11 pr-3 sm:pr-4 text-[13px] sm:text-sm text-black focus:outline-none transition-colors uppercase"
                    />
                  </div>
                </div>
              </div>

              {/* City Input */}
              <div className="relative">
                <label className="text-[10px] sm:text-[9px] font-mono font-bold uppercase text-neutral-400 block mb-1 sm:mb-2 tracking-wider">
                  Location City *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400" />
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g., Thane, Mumbai, or Pune"
                    className="w-full bg-white border border-brand-border/50 focus:border-black rounded-lg sm:rounded-xl py-2 sm:py-3.5 pl-9 sm:pl-11 pr-3 sm:pr-4 text-[13px] sm:text-sm text-black focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Custom Message */}
              <div>
                <label className="text-[10px] sm:text-[9px] font-mono font-bold uppercase text-neutral-400 block mb-1 sm:mb-2 tracking-wider">
                  {activeTab === "buy" ? "Specific Requirements" : "Condition & Accolades"}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={2}
                  placeholder={activeTab === "buy" ? "e.g., Looking for immediate purchase, single-owner only." : "e.g., Pristine condition, fully serviced by authorized dealer."}
                  className="w-full bg-white border border-brand-border/50 focus:border-black rounded-lg sm:rounded-xl p-3 sm:p-4 text-[13px] sm:text-sm text-black focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Action Trigger Button - single line text & smaller font */}
              <button
                type="submit"
                className="w-full mt-2 py-3 bg-black hover:bg-neutral-900 text-white text-[11.5px] sm:text-xs font-mono font-bold tracking-widest uppercase rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-95 premium-glow-hover"
              >
                <span>Send WhatsApp Request</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-accent shrink-0" />
              </button>

            </form>
          </div>

          {/* Right Column: Tinder Swiping Premium Cars Showcase (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full mt-4 lg:mt-0">
            
            {/* Swiper Stack */}
            <div className="relative h-[480px] sm:h-[480px] lg:h-[520px] w-full max-w-sm flex items-center justify-center">
              {showcaseCars.map((car, idx) => {
                const isFront = idx === activeCarIdx;
                const total = showcaseCars.length;
                const distance = (idx - activeCarIdx + total) % total;
                
                // arrangment math for stacked look
                const zIndex = total - distance;
                const scale = 1 - distance * 0.05;
                const translateY = distance * 12;
                const opacity = distance === 0 ? 1 : distance === 1 ? 0.75 : 0.4;

                return (
                  <motion.div
                    key={car.id}
                    style={{
                      zIndex,
                      transformOrigin: "bottom center"
                    }}
                    animate={{
                      scale,
                      y: translateY,
                      opacity,
                      pointerEvents: isFront ? "auto" : "none"
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => window.open(car.link, "_blank")}
                    className={`absolute w-full h-[440px] sm:h-[440px] lg:h-[480px] rounded-[24px] sm:rounded-[28px] overflow-hidden border cursor-pointer select-none shadow-xl transition-colors duration-500 bg-black ${
                      isFront ? "border-brand-accent/40 shadow-brand-accent/5" : "border-neutral-800/40"
                    }`}
                  >
                    {/* Car Image */}
                    <img
                      src={car.image}
                      alt={car.title}
                      className="w-full h-full object-cover object-center brightness-[0.8] hover:scale-105 transition-transform duration-[6000ms]"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/50 pointer-events-none" />

                    {/* Top badging */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-10">
                      <span className="text-[7.5px] sm:text-[9px] font-mono tracking-widest text-white/80 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/5 uppercase font-bold">
                        APPROVED STOCK
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] sm:text-sm font-display font-black text-brand-accent bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-md">
                        <Tag className="w-3 h-3 text-brand-accent" />
                        {car.price}
                      </span>
                    </div>

                    {/* Bottom details block */}
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white z-10 flex flex-col gap-2">
                      <div>
                        <h4 className="font-display font-black text-[14px] sm:text-lg lg:text-xl tracking-tight leading-tight uppercase">
                          {car.title}
                        </h4>
                        
                        <div className="flex items-center gap-3 mt-1 text-neutral-400">
                          <span className="text-[10px] sm:text-xs font-mono">
                            {car.model}
                          </span>
                          <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                          <span className="text-[10px] sm:text-xs font-mono flex items-center gap-1">
                            <Gauge className="w-3 h-3" />
                            {car.km}
                          </span>
                        </div>
                      </div>

                      {/* Buy Now CTA */}
                      <div 
                        className="mt-2 w-full py-2 sm:py-3 bg-brand-accent hover:bg-brand-accent-hover text-white text-[9.5px] sm:text-xs font-mono font-bold tracking-widest uppercase rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-95 shadow-md shadow-brand-accent/15"
                      >
                        <span>Buy Now</span>
                        <ExternalLink className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pagination / Selector Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-4 max-w-xs">
              {showcaseCars.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCarIdx(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === activeCarIdx ? "w-6 bg-brand-accent" : "w-1.5 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to showcase car ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
