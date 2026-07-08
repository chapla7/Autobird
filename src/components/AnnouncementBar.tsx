import React from "react";
import { Phone, Mail, Clock, MapPin, Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div
      id="top-announcement-bar"
      className="bg-black text-white text-[7px] min-[375px]:text-[8px] sm:text-[10px] font-sans font-bold py-[9px] sm:py-3 px-[21px] sm:px-6 border-b border-neutral-900 transition-all duration-300 relative z-40 uppercase tracking-[0.08em] min-[375px]:tracking-[0.12em] sm:tracking-[0.18em]"
    >
      <div className="max-w-7xl mx-auto flex flex-row justify-center md:justify-between items-center gap-3">
        {/* Left Side: Dynamic offer ticker */}
        <div className="flex items-center gap-1.5 whitespace-nowrap justify-center">
          <span className="inline-flex items-center gap-1 px-1 py-0.5 rounded bg-brand-accent text-white text-[6.5px] min-[375px]:text-[7.5px] sm:text-[9px] font-extrabold tracking-wider animate-pulse shrink-0">
            <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> OFFER
          </span>
          <span className="text-neutral-300 font-medium">
            FREE PREMIUM WATER WASH OVER ₹3000
          </span>
        </div>

        {/* Right Side: Quick info links - Hidden on mobile screens */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 text-neutral-400">
          <a
            href="tel:+919892205127"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-brand-accent" />
            <span>+91 98922 05127</span>
          </a>
          <a
            href="mailto:jobythrisookaran@gmail.com"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3 h-3 text-brand-accent" />
            <span>jobythrisookaran@gmail.com</span>
          </a>
          <div className="hidden lg:flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-neutral-500" />
            <span>Mira Road, MH</span>
          </div>
        </div>
      </div>
    </div>
  );
}
