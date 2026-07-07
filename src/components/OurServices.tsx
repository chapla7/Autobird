import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Tag, CheckCircle2, ChevronRight, Sparkles, CalendarCheck } from "lucide-react";
import { services } from "../data";

interface OurServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function OurServices({ onSelectService }: OurServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleBookNow = (title: string) => {
    onSelectService(title);
    const element = document.querySelector("#book-now");
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const renderServiceDetails = (service: typeof services[0], isMobile: boolean) => {
    return (
      <div
        className={`${
          isMobile 
            ? "bg-[#F8F8F6] border border-brand-border/40 rounded-xl overflow-hidden mt-2 p-2.5 text-black"
            : "bg-[#F8F8F6] border border-brand-border/50 rounded-2xl sm:rounded-[24px] overflow-hidden shadow-sm"
        }`}
      >
        {/* Service Feature Banner */}
        <div className={`${isMobile ? "h-24 sm:h-28" : "h-48 sm:h-64"} relative overflow-hidden group`}>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[6000ms]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F8F6] via-transparent to-black/20" />
          
          {/* Tags over image */}
          <div className={`absolute ${isMobile ? "top-1.5 left-1.5" : "top-4 left-4 sm:top-6 sm:left-6"} flex gap-1 sm:gap-2`}>
            <span className={`inline-flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white font-mono tracking-widest uppercase rounded-full border border-white/10 ${
              isMobile ? "px-1.5 py-0.5 text-[6px]" : "px-2.5 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[10px]"
            }`}>
              <Clock className={`${isMobile ? "w-2.5 h-2.5" : "w-2.5 h-2.5 sm:w-3 h-3"} text-brand-accent`} />
              {service.estimatedTime}
            </span>
            <span className={`inline-flex items-center gap-1 bg-brand-accent text-white font-mono tracking-widest uppercase rounded-full font-bold ${
              isMobile ? "px-1.5 py-0.5 text-[6px]" : "px-2.5 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[10px]"
            }`}>
              <Tag className={isMobile ? "w-2.5 h-2.5" : "w-2.5 h-2.5 sm:w-3 h-3"} />
              From {service.startingPrice}
            </span>
          </div>
        </div>

        {/* Service Specs Content */}
        <div className={isMobile ? "p-2.5" : "p-5 sm:p-8 md:p-10"}>
          <h3 className={`font-display font-black text-black tracking-tight leading-none ${
            isMobile ? "text-[12px] mb-1.5" : "text-xl md:text-3xl mb-3 sm:mb-4"
          }`}>
            {service.title} Details
          </h3>
          
          <p className={`text-neutral-600 font-light leading-relaxed border-b border-brand-border/40 ${
            isMobile ? "text-[8px] mb-2.5 pb-2" : "text-xs sm:text-sm md:text-base mb-5 sm:mb-8 pb-4 sm:pb-6"
          }`}>
            {service.overview}
          </p>

          <h4 className={`font-display font-bold uppercase text-neutral-400 tracking-wider ${
            isMobile ? "text-[7px] mb-1.5" : "text-[10px] sm:text-xs mb-3 sm:mb-4"
          }`}>
            WHAT IS COMPREHENSIVELY INCLUDED:
          </h4>

          <div className={`${
            isMobile 
              ? "flex flex-col gap-1 mb-2.5"
              : "grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3.5 mb-6 sm:mb-10"
          }`}>
            {service.included.map((item, i) => (
              <div key={i} className="flex items-start gap-1 sm:gap-3">
                <CheckCircle2 className={`${isMobile ? "w-2.5 h-2.5" : "w-4 h-4 sm:w-5 sm:h-5"} text-brand-accent shrink-0 mt-0.5`} />
                <span className={isMobile ? "text-[8px] text-neutral-800 font-medium tracking-wide" : "text-xs sm:text-sm text-neutral-800 font-medium tracking-wide"}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className={`flex sm:flex-row sm:items-center justify-between border-t border-brand-border/40 ${
            isMobile ? "pt-2 gap-2" : "pt-4 sm:pt-6 gap-4 sm:gap-5"
          }`}>
            <div>
              <span className={`font-mono text-neutral-400 block tracking-widest uppercase ${
                isMobile ? "text-[6.5px] mb-0.5" : "text-[10px] mb-1"
              }`}>
                Estimated Starting Cost
              </span>
              <span className={`font-display font-black text-black ${
                isMobile ? "text-xs" : "text-2xl sm:text-3xl"
              }`}>
                {service.startingPrice}
              </span>
            </div>

            <button
              onClick={() => handleBookNow(service.title)}
              className={`inline-flex items-center justify-center gap-1.5 bg-black hover:bg-neutral-900 font-mono font-bold tracking-widest uppercase transition-all duration-300 premium-glow-hover active:scale-95 ${
                isMobile ? "px-2.5 py-1.5 text-[7px] rounded-lg" : "px-5 py-3 sm:px-6 sm:py-3.5 text-[10px] sm:text-xs rounded-xl"
              }`}
            >
              <CalendarCheck className={isMobile ? "w-2.5 h-2.5 text-brand-accent" : "w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-accent"} />
              Book This Service
            </button>
          </div>

        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Light background beam elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-radial-beam opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2 md:gap-6 mb-4 md:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-1.5 md:mb-4">
              <span className="w-10 h-[1.5px] bg-brand-accent" />
              <span className="text-[7px] sm:text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-brand-accent">
                ELITE AUTOMOTIVE SERVICES
              </span>
            </div>
            <h2 className="font-display font-black text-[15px] sm:text-3xl md:text-5xl lg:text-6xl text-black tracking-tight leading-none">
              Precision Care, Re-engineered.
            </h2>
          </div>
          <p className="text-neutral-500 font-light text-[8px] sm:text-sm md:text-base max-w-md leading-relaxed">
            Every task is handled by a factory-trained expert in brand-dedicated bays. Select a card below to inspect diagnostic inclusions and flat starting prices.
          </p>
        </div>

        {/* Services Grid with Expandable Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-start">
          
          {/* Left Side: Services List Trigger Cards (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 sm:gap-3">
            {services.map((service) => {
              const isSelected = expandedId === service.id;
              return (
                <div key={service.id} className="w-full flex flex-col">
                  <button
                    onClick={() => handleToggleExpand(service.id)}
                    className={`w-full text-left p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${
                      isSelected
                        ? "bg-black border-black text-white shadow-lg shadow-black/5"
                        : "bg-neutral-50 hover:bg-neutral-100/50 border-brand-border/40 text-black"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                      <span
                        className={`font-mono text-[10px] sm:text-xs font-bold ${
                          isSelected ? "text-brand-accent" : "text-neutral-400 group-hover:text-black"
                        }`}
                      >
                        {service.id === "general-service" ? "01" : 
                         service.id === "paint-body" ? "02" : 
                         service.id === "engine-repair" ? "03" : 
                         service.id === "brake-service" ? "04" : 
                         service.id === "suspension" ? "05" : 
                         service.id === "battery" ? "06" : 
                         service.id === "tyres" ? "07" : 
                         service.id === "alignment" ? "08" : 
                         service.id === "ac-service" ? "09" : "10"}
                      </span>
                      <span className="font-display font-bold text-sm sm:text-base tracking-tight">
                        {service.title}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-3 relative z-10">
                      <span className={`text-[10px] sm:text-xs font-mono font-medium ${
                        isSelected ? "text-neutral-400" : "text-neutral-500"
                      }`}>
                        {service.startingPrice}
                      </span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${
                          isSelected ? "text-brand-accent rotate-90" : "text-neutral-400 group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Inline expansion on mobile */}
                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="block lg:hidden overflow-hidden"
                      >
                        {renderServiceDetails(service, true)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Side: Active Service Deep Details Showcase (Col Span 7) - Hidden on Mobile */}
          <div className="hidden lg:block lg:col-span-7 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              {expandedId ? (
                (() => {
                  const activeService = services.find((s) => s.id === expandedId)!;
                  return (
                    <motion.div
                      key={activeService.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {renderServiceDetails(activeService, false)}
                    </motion.div>
                  );
                })()
              ) : (
                <div className="bg-neutral-50 border border-dashed border-brand-border/60 rounded-[24px] h-[550px] flex flex-col items-center justify-center text-center p-8">
                  <Sparkles className="w-12 h-12 text-brand-accent mb-4 animate-bounce" />
                  <h3 className="font-display font-bold text-lg text-black">Select an option</h3>
                  <p className="text-neutral-500 font-light text-sm mt-2 max-w-xs">
                    Review specific details on pricing checklists and workshop parameters by choosing a service from the left.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
