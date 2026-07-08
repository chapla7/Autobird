import React from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { whyChooseUsCards } from "../data";

export default function WhyChooseUs() {
  const extraDetails = [
    { category: "CERTIFICATION", badge: "#TECH-911", status: "100% CERTIFIED", color: "text-emerald-600 bg-emerald-50" },
    { category: "DIAGNOSTICS", badge: "#SCAN-ECU", status: "HIGH-FIDELITY", color: "text-blue-600 bg-blue-50" },
    { category: "TRANSPARENCY", badge: "#BILL-LIVE", status: "PRE-APPROVED", color: "text-emerald-600 bg-emerald-50" },
    { category: "WARRANTY", badge: "#WRNT-12M", status: "SECURE WARRANTY", color: "text-emerald-600 bg-emerald-50" },
    { category: "LOGISTICS", badge: "#VALET-KEY", status: "COMPLIMENTARY", color: "text-amber-600 bg-amber-50" },
    { category: "SPARE PARTS", badge: "#PART-OEM", status: "100% AUTHENTIC", color: "text-emerald-600 bg-emerald-50" },
    { category: "INSURANCE", badge: "#CLAIM-FAST", status: "CASHLESS CLAIMS", color: "text-blue-600 bg-blue-50" },
    { category: "SPEED", badge: "#TIME-24H", status: "EXPRESS SERVICE", color: "text-orange-600 bg-orange-50" },
    { category: "COMPATIBILITY", badge: "#BRND-PRESTIGE", status: "PRESTIGE SUPPORT", color: "text-purple-600 bg-purple-50" },
    { category: "CONCIERGE", badge: "#CARE-247", status: "ALWAYS LIVE", color: "text-emerald-600 bg-emerald-50" },
  ];

  return (
    <section id="why-choose-us" className="py-8 md:py-16 bg-[#F8F8F6] relative overflow-hidden flex items-center md:h-[95vh] md:max-h-[95vh] select-none">
      {/* Structural background highlights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-radial-beam opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-stretch h-full">
          
          {/* Left Column: Title & Reference Box 1 */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-4 md:space-y-8">
            
            {/* Section Header */}
            <div>
              <div className="inline-flex items-center gap-2 mb-1.5 md:mb-3">
                <span className="w-8 h-[1.5px] bg-brand-accent" />
                <span className="text-[7px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-brand-accent">
                  THE APEX STANDARD
                </span>
              </div>
              <h2 className="font-display font-black text-[14.5px] sm:text-3xl md:text-4xl lg:text-5xl text-black tracking-tight leading-tight">
                Designed for those who expect absolute precision.
              </h2>
              <p className="mt-1.5 md:mt-4 text-neutral-600 font-light text-[8px] sm:text-sm md:text-base leading-relaxed">
                We operate at the intersection of elite mechanics and modern digital transparency. Our commitment to factory-perfect parameters is why luxury car owners trust our bays.
              </p>
            </div>

            {/* Reference Box 1 (Premium Black/Red Card) */}
            <div className="bg-black text-white p-3 sm:p-5 rounded-2xl shadow-lg relative overflow-hidden border border-neutral-800">
              {/* Subtle visual elements */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-red-900/10 rounded-full blur-2xl" />
              <div className="absolute right-4 top-4 opacity-10">
                <Icons.ShieldCheck className="w-12 h-12 sm:w-24 sm:h-24 text-white" />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[8px] sm:text-xs font-mono font-bold tracking-widest text-white uppercase">
                  Service Quality index
                </span>
                <div className="flex gap-0.5">
                  <Icons.Star className="w-2 h-2 sm:w-3.5 sm:h-3.5 fill-yellow-400 text-yellow-400" />
                  <Icons.Star className="w-2 h-2 sm:w-3.5 sm:h-3.5 fill-yellow-400 text-yellow-400" />
                  <Icons.Star className="w-2 h-2 sm:w-3.5 sm:h-3.5 fill-yellow-400 text-yellow-400" />
                </div>
              </div>

              <div className="mt-1.5 sm:mt-3 flex items-baseline gap-2">
                <span className="text-xl sm:text-4xl font-display font-black tracking-tight text-brand-accent">100%</span>
                <span className="text-[8px] sm:text-sm font-light text-neutral-300">Guaranteed standard</span>
              </div>

              <div className="mt-2 pt-2 sm:mt-4 sm:pt-3 border-t border-neutral-800 flex items-center justify-between text-[7.5px] sm:text-[11px] font-mono text-neutral-400">
                <span>Latest benchmark: July 2026</span>
                <span className="flex items-center gap-1 text-white">
                  <span className="w-1 h-1 rounded-full bg-brand-accent animate-pulse" />
                  ACTIVE BAY MONITORING
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: 10 Points vertically stacked, scrollable within 95vh bounds */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full max-h-[80vh] lg:max-h-full">
            <div className="flex items-center justify-between mb-2 md:mb-4 px-2">
              <h3 className="font-display font-bold text-sm sm:text-lg text-black uppercase tracking-wider">
                Point History
              </h3>
              <span className="text-[10px] sm:text-xs font-mono text-neutral-500 font-medium">
                "10 Metrics Verified"
              </span>
            </div>

            {/* Scrollable list of boxes */}
            <div className="space-y-2 sm:space-y-3 overflow-y-auto pr-2 max-h-[480px] lg:max-h-[62vh] custom-scrollbar scroll-smooth">
              {whyChooseUsCards.map((card, idx) => {
                const IconComponent = (Icons as any)[card.icon] || Icons.HelpCircle;
                const details = extraDetails[idx] || { category: "CRITERIA", badge: "#TECH-00", status: "VERIFIED", color: "text-neutral-600 bg-neutral-50" };

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="bg-white rounded-xl p-2 sm:p-4 border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.04)] hover:border-brand-accent/20 transition-all flex items-start gap-1.5 sm:gap-4"
                  >
                    {/* Circle icon emblem */}
                    <div className="flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-neutral-100 border border-neutral-200 text-brand-primary shrink-0">
                      <IconComponent className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-brand-accent" />
                    </div>

                    {/* Left content block */}
                    <div className="flex-1 min-w-0 pr-1 sm:pr-0">
                      <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                        <span className="text-[8px] sm:text-[10px] font-mono font-bold text-neutral-400">
                          {details.category}
                        </span>
                        <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-neutral-300" />
                        <span className="text-[8px] sm:text-[10px] font-mono font-bold text-brand-accent">
                          0{card.id}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-[11.5px] sm:text-sm text-neutral-900 mt-0.5 sm:mt-1">
                        {card.title}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-neutral-500 font-light mt-0.5 sm:mt-1 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Right status block */}
                    <div className="flex flex-col items-end justify-between self-stretch shrink-0 text-right max-w-[62px] sm:max-w-none">
                      <span className="text-[8px] sm:text-[10px] font-mono text-neutral-400">
                        {details.badge}
                      </span>
                      <span className={`text-[7px] sm:text-[9px] font-mono font-black tracking-wider uppercase px-1 py-0.5 sm:px-2 rounded ${details.color}`}>
                        {details.status}
                      </span>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
