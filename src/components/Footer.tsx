import React from "react";
import { Mail, Phone, MapPin, ShieldCheck, ArrowUpRight, Github, Heart, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
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
    <footer className="bg-[#0B0B0B] text-white border-t border-neutral-900 pt-12 pb-8 md:pt-20 md:pb-12 overflow-hidden relative select-none">
      {/* Decorative backdrop glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-radial-beam opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Main Grid split: Logo/Description vs Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 pb-10 md:pb-16 border-b border-neutral-900/60">
          
          {/* Brand Identity column (Col Span 5) */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <img 
                src="https://i.ibb.co/xSx6BFFy/autobird-logo.png" 
                alt="Autobird Garage Logo" 
                className="h-14 sm:h-18 md:h-20 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display font-black text-xl sm:text-2xl tracking-[0.1em] text-white italic uppercase">
                  AUTOBIRD <span className="text-brand-accent">GARAGE</span>
                </span>
                <span className="text-[7px] sm:text-[8px] tracking-[0.2em] font-light uppercase mt-1 text-white/50 font-sans">
                  AUTOMOTIVE EXCELLENCE
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[8px] font-mono uppercase tracking-widest rounded-full">
                <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Workshop Intake Active
              </span>
              <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                Est. 2001
              </span>
            </div>

            <p className="text-neutral-400 font-light text-xs sm:text-sm leading-relaxed max-w-sm">
              Establishing a new benchmark in premium multi-brand care. We consolidate factory-level diagnostics, cashless insurance coordination, and certified used trading under a single cohesive digital portal.
            </p>

            {/* Direct Lines */}
            <div className="space-y-2 font-mono text-[11px] sm:text-xs text-neutral-400 pt-1">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Phone className="w-3.5 h-3.5 text-brand-accent" />
                <span>+91 98922 05127</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Mail className="w-3.5 h-3.5 text-brand-accent" />
                <span>jobythrisookaran@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick links columns (Col Span 7) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Services Links */}
            <div>
              <h4 className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase mb-2 font-bold">
                CORE WORKSHOPS
              </h4>
              <div className="h-[1.5px] w-6 bg-brand-accent mb-4" />
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400 font-light">
                {["General Servicing", "Engine Diagnostics", "Paint & Body Work", "AC System Restoration", "Ceramic Coating"].map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleScrollToSection("#services")}
                      className="hover:text-white transition-all text-left flex items-center gap-1.5 group"
                    >
                      <span className="w-0 h-[1.5px] bg-brand-accent group-hover:w-2.5 transition-all duration-300" />
                      <span>{link}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trade In / Insurance */}
            <div>
              <h4 className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase mb-2 font-bold">
                SHOWROOM DESK
              </h4>
              <div className="h-[1.5px] w-6 bg-brand-accent mb-4" />
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400 font-light">
                <li>
                  <button onClick={() => handleScrollToSection("#buy-sell")} className="hover:text-white transition-all text-left flex items-center gap-1.5 group">
                    <span className="w-0 h-[1.5px] bg-brand-accent group-hover:w-2.5 transition-all duration-300" />
                    <span>Buy Certified Car</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollToSection("#buy-sell")} className="hover:text-white transition-all text-left flex items-center gap-1.5 group">
                    <span className="w-0 h-[1.5px] bg-brand-accent group-hover:w-2.5 transition-all duration-300" />
                    <span>Sell Evaluation</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollToSection("#insurance")} className="hover:text-white transition-all text-left flex items-center gap-1.5 group">
                    <span className="w-0 h-[1.5px] bg-brand-accent group-hover:w-2.5 transition-all duration-300" />
                    <span>Cashless Claims Hub</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* General Corporate */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase mb-2 font-bold">
                CONNECT CHANNELS
              </h4>
              <div className="h-[1.5px] w-6 bg-brand-accent mb-4" />
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400 font-light">
                <li>
                  <a
                    href="https://wa.me/919892205127"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-all text-left flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-[1.5px] bg-brand-accent group-hover:w-2.5 transition-all duration-300" />
                    <span>Concierge WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-white transition-colors shrink-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/autobird.garage?igsh=aWpzZ3VpNnRvNXB1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-all text-left flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-[1.5px] bg-brand-accent group-hover:w-2.5 transition-all duration-300" />
                    <Instagram className="w-3.5 h-3.5 text-brand-accent group-hover:text-brand-accent transition-colors shrink-0" />
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-white transition-colors shrink-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-all text-left flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-[1.5px] bg-brand-accent group-hover:w-2.5 transition-all duration-300" />
                    <span>Facebook</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-white transition-colors shrink-0" />
                  </a>
                </li>
                <li>
                  <button onClick={() => handleScrollToSection("#about")} className="hover:text-white transition-all text-left flex items-center gap-1.5 group">
                    <span className="w-0 h-[1.5px] bg-brand-accent group-hover:w-2.5 transition-all duration-300" />
                    <span>Company Perspective</span>
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom copyright details row */}
        <div className="pt-8 md:pt-10 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 text-[10px] sm:text-xs text-neutral-500 font-light font-mono">
          <div className="space-y-1 text-center md:text-left">
            <p>© {currentYear} Autobird Garage Limited. Developed for maximum performance.</p>
            <p className="text-[9px] sm:text-[10px] text-neutral-600">
              Plot 52, Road, nr. Silver Crown Bldg, Pleasant Park, Mira Road East, Mumbai, Mira Bhayandar, Maharashtra 401107
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <span>•</span>
            <button className="hover:text-white transition-colors">Terms of Care Service</button>
            <span>•</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-brand-accent fill-brand-accent animate-pulse" /> for Luxury
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
