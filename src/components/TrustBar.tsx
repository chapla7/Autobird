import React from "react";
import { ShieldCheck, Sparkles, Award, Percent, Truck, Clock, Settings, HeartHandshake } from "lucide-react";

export default function TrustBar() {
  const metrics = [
    { label: "Cars Serviced", value: "15,000+", desc: "Premium precision", icon: Award },
    { label: "Real Warranty", value: "12 MONTHS", desc: "Parts & labor", icon: ShieldCheck },
    { label: "Cost Savings", value: "UP TO 40%", desc: "vs dealer pricing", icon: Percent },
    { label: "Expert Mechanics", value: "CERTIFIED", desc: "Manufacturer standard", icon: Sparkles },
    { label: "Pickup & Drop", value: "COMPLIMENTARY", desc: "Doorstep service", icon: Truck },
    { label: "Turnaround", value: "24-HOUR", desc: "For standard jobs", icon: Clock },
    { label: "Replacement", value: "100% OEM", desc: "Official genuine parts", icon: Settings },
    { label: "Insurance Desk", value: "CASHLESS", desc: "All major partners", icon: HeartHandshake }
  ];

  return (
    <div id="trust-bar" className="bg-[#0B0B0B] text-white py-8 sm:py-12 border-y border-neutral-900 overflow-hidden relative select-none">
      <div className="absolute inset-0 bg-radial-beam opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 md:gap-x-8 md:gap-y-10">
          {metrics.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-start gap-2 sm:gap-4 p-2.5 sm:p-4 rounded-xl border border-neutral-900 bg-neutral-950/40 hover:bg-neutral-950/80 transition-all duration-300 hover:border-brand-accent/20 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-neutral-900 border border-neutral-800 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300 shrink-0">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-sm sm:text-base md:text-2xl font-display font-black tracking-tight text-white leading-none">
                    {item.value}
                  </div>
                  <div className="text-[9px] sm:text-[10px] md:text-xs font-mono font-semibold text-neutral-400 mt-1 uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-[8px] sm:text-[9px] md:text-[10px] text-neutral-500 mt-0.5 font-light">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
