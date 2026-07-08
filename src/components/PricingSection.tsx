import React from "react";
import { motion } from "motion/react";
import { Check, Calendar, AlertCircle } from "lucide-react";
import { pricingTiers } from "../data";

interface PricingSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function PricingSection({ onSelectService }: PricingSectionProps) {
  const handleSelectPackage = (packageName: string) => {
    onSelectService(packageName);
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

  return (
    <section id="pricing" className="py-16 bg-[#F8F8F6] relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-beam opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2 md:mb-3">
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
            <span className="text-[8px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-brand-accent">
              COMPETITIVE FLAT RATES
            </span>
          </div>
          <h2 className="font-display font-black text-[21px] sm:text-3xl md:text-4xl lg:text-5xl text-black tracking-tight leading-none">
            Flat Transparent Pricing.
          </h2>
          <p className="mt-2 text-neutral-500 font-light text-[10px] sm:text-sm md:text-base leading-relaxed">
            Choose a standard care tier designed for your vehicle’s specific mileage. No surprise add-ons. Full itemized video confirmations before any work.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {pricingTiers.map((tier, idx) => {
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative p-4 sm:p-6 md:p-8 rounded-[20px] border flex flex-col justify-between transition-all duration-500 group w-[90%] mx-auto lg:w-full lg:mx-0 ${
                  tier.isPopular
                    ? "bg-black border-black text-white shadow-xl lg:-translate-y-2 shadow-black/10"
                    : "bg-white border-brand-border/40 text-black shadow-sm hover:shadow-md"
                }`}
              >
                {/* Popular Indicator badge */}
                {tier.isPopular && (
                  <span className="absolute top-3 right-4 sm:top-5 sm:right-6 inline-flex items-center gap-1.5 px-2 py-0.5 bg-brand-accent text-white text-[7px] sm:text-[9px] font-mono font-bold tracking-widest uppercase rounded-full">
                    Recommended
                  </span>
                )}

                <div>
                  {/* Category Name */}
                  <span
                    className={`text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.25em] uppercase block mb-1 sm:mb-2 ${
                      tier.isPopular ? "text-brand-accent" : "text-neutral-400"
                    }`}
                  >
                    {tier.name}
                  </span>

                  {/* Pricing and description */}
                  <div className="flex items-baseline gap-1 mb-1.5 sm:mb-3">
                    <span className="font-display font-black text-[25px] sm:text-4xl tracking-tight">
                      {tier.price}
                    </span>
                    <span className={`text-[9px] sm:text-[10px] font-mono ${tier.isPopular ? "text-neutral-400" : "text-neutral-500"}`}>
                      / standard package
                    </span>
                  </div>

                  <p className={`text-[10px] sm:text-xs font-light leading-normal mb-3 sm:mb-6 border-b pb-2 sm:pb-4 ${
                    tier.isPopular ? "text-neutral-400 border-neutral-800" : "text-neutral-500 border-neutral-100"
                  }`}>
                    {tier.description}
                  </p>

                  {/* Inclusions list */}
                  <h4 className="text-[9px] sm:text-[9px] font-mono font-bold tracking-wider uppercase text-neutral-400 mb-2 sm:mb-3">
                    KEY CHECKLIST DETAILS:
                  </h4>

                  <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 sm:flex sm:flex-col sm:gap-3 mb-4 sm:mb-8">
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 sm:gap-2.5">
                        <div className={`flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 rounded-full mt-0.5 shrink-0 ${
                          tier.isPopular ? "bg-neutral-900 text-brand-accent" : "bg-neutral-50 text-neutral-800"
                        }`}>
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        </div>
                        <span className={`text-[10px] sm:text-xs font-medium tracking-wide ${
                          tier.isPopular ? "text-neutral-300" : "text-neutral-700"
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Button CTA */}
                <button
                  onClick={() => handleSelectPackage(`${tier.name} (${tier.price})`)}
                  className={`w-full py-2 sm:py-3 text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-95 ${
                    tier.isPopular
                      ? "bg-brand-accent hover:bg-brand-accent-hover text-white shadow-md shadow-brand-accent/15 hover:shadow-brand-accent/25"
                      : "bg-black hover:bg-neutral-900 text-white"
                  }`}
                >
                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Select {tier.name}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer bar */}
        <div className="mt-5 sm:mt-8 flex items-center justify-center gap-1.5 max-w-2xl mx-auto p-2 sm:p-3.5 rounded-xl border border-brand-border/40 bg-white/60 text-[7px] sm:text-[11px] text-neutral-500 font-light leading-relaxed text-center shadow-xs">
          <AlertCircle className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-brand-accent shrink-0 animate-pulse" />
          <span>Starting prices are standard estimations. Excludes applicable taxes and specialized premium brand specific fluids where required.</span>
        </div>

      </div>
    </section>
  );
}
