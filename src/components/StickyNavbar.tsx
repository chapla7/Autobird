import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquareCode, Calendar, Menu, X, ArrowRight } from "lucide-react";

export default function StickyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" ? window.innerWidth < 1024 : false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 100; // Account for sticky navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello Autobird Garage! I would like to inquire about your premium car services.");
    window.open(`https://wa.me/919892205127?text=${message}`, "_blank");
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Buy / Sell Car", href: "#buy-sell" },
    { label: "Insurance", href: "#insurance" },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 transition-all duration-300 border-b border-black/5 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] py-[10px]"
            : "bg-white py-[15px]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Desktop Left Navigation Items */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-start">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-[11px] font-sans font-extrabold tracking-[0.15em] uppercase text-neutral-600 hover:text-brand-accent transition-colors relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Center Brand Logo - Exactly like the image, no brand text, in-flow */}
          <div className="hidden lg:flex items-center justify-center px-4">
            <a
              href="#hero"
              onClick={(e) => handleSmoothScroll(e, "#hero")}
              className="hover:opacity-95 transition-all flex items-center"
            >
              <motion.img 
                src="https://i.ibb.co/xSx6BFFy/autobird-logo.png" 
                alt="Autobird Garage Logo" 
                className="h-12 md:h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
                layoutId={!isMobile ? "logo-emblem" : undefined}
                transition={{ type: "spring", stiffness: 90, damping: 18 }}
              />
            </a>
          </div>

          {/* Right Navigation CTAs */}
          <div className="hidden lg:flex items-center gap-3 flex-1 justify-end">
            {/* WhatsApp Link with Pulse */}
            <button
              onClick={openWhatsApp}
              className="flex items-center gap-1.5 px-3.5 py-1.5 border border-emerald-500/20 bg-emerald-50/50 hover:bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold tracking-wider uppercase rounded-full transition-all duration-300 hover:shadow-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              WhatsApp Leads
            </button>

            {/* Book Now Button */}
            <a
              href="#book-now"
              onClick={(e) => handleSmoothScroll(e, "#book-now")}
              className="flex items-center gap-1.5 px-4 py-2 bg-black hover:bg-neutral-900 text-white text-[10px] font-mono font-bold tracking-widest uppercase rounded-lg transition-all duration-300 premium-glow-hover active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-brand-accent" />
              Book Service
            </a>
          </div>

          {/* Mobile Actions (Menu Toggle) - Hidden on Desktop */}
          <div className="flex items-center lg:hidden w-full justify-between">
            {/* Hamburger on the Left */}
            <div className="w-10 flex justify-start">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-1.5 text-neutral-800 hover:bg-neutral-100 rounded-lg"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            {/* Center Brand Logo */}
            <div className="flex-1 flex justify-center">
              <a
                href="#hero"
                onClick={(e) => handleSmoothScroll(e, "#hero")}
                className="hover:opacity-95 transition-all flex items-center justify-center"
              >
                <motion.img 
                  src="https://i.ibb.co/xSx6BFFy/autobird-logo.png" 
                  alt="Autobird Garage Logo" 
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                  layoutId={isMobile ? "logo-emblem" : undefined}
                  transition={{ type: "spring", stiffness: 90, damping: 18 }}
                />
              </a>
            </div>

            {/* WhatsApp Logo on the Right */}
            <div className="w-10 flex justify-end">
              <button
                onClick={openWhatsApp}
                className="p-1.5 border border-emerald-500/20 bg-emerald-50/50 rounded-lg text-emerald-600 hover:text-emerald-700 flex items-center justify-center"
              >
                <svg className="w-5 h-5 fill-emerald-600" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.419 9.86-9.86 0-2.636-1.027-5.115-2.892-6.98C16.476 1.88 14.002 1.85 11.365 1.85c-5.437 0-9.857 4.418-9.86 9.86-.001 1.702.453 3.361 1.314 4.816L1.73 21.057l4.917-1.29zM16.811 13.84c-.262-.13-1.554-.767-1.793-.853-.239-.087-.413-.13-.588.13-.175.26-.677.853-.83 1.027-.153.173-.306.195-.568.064-.263-.13-1.11-.41-2.116-1.307-.784-.7-1.313-1.564-1.467-1.826-.153-.262-.016-.403.115-.533.118-.117.262-.304.393-.456.13-.152.175-.26.262-.433.087-.173.044-.325-.022-.456-.065-.13-.588-1.417-.805-1.943-.212-.51-.444-.44-.588-.44h-.503c-.175 0-.459.065-.7.324-.24.26-1.093 1.07-1.093 2.61s1.121 3.025 1.274 3.23c.153.204 2.207 3.37 5.347 4.723.746.32 1.329.512 1.783.656.75.239 1.433.205 1.973.125.6-.09 1.847-.756 2.11-1.45.263-.695.263-1.29.185-1.417-.078-.127-.28-.195-.542-.325z"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-[#0B0B0B] text-white shadow-2xl z-50 p-6 flex flex-col justify-between lg:hidden select-none"
            >
              <div>
                <div className="relative border-b border-neutral-900/60 pb-5 mb-8 flex flex-col items-center justify-center w-full">
                  <div className="flex flex-col items-center gap-1 text-center">
                    <img 
                      src="https://i.ibb.co/xSx6BFFy/autobird-logo.png" 
                      alt="Autobird Garage Logo" 
                      className="h-16 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <span className="font-display font-black text-xs tracking-[0.2em] uppercase text-brand-accent mt-2 leading-none text-center">
                      AUTOBIRD GARAGE
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute right-0 top-0 p-2 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all border border-neutral-800/40"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-5">
                  {navLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-base font-display font-bold text-neutral-200 hover:text-white transition-colors py-2 flex items-center justify-between group"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="border-t border-neutral-900 pt-6 mt-8 flex flex-col gap-3">
                <button
                  onClick={openWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-bold tracking-wider uppercase rounded-xl transition-all"
                >
                  <MessageSquareCode className="w-4 h-4" />
                  Chat on WhatsApp
                </button>
                <a
                  href="#book-now"
                  onClick={(e) => handleSmoothScroll(e, "#book-now")}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-mono font-bold tracking-wider uppercase rounded-xl transition-all text-center"
                >
                  <Calendar className="w-4 h-4" />
                  Book Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
