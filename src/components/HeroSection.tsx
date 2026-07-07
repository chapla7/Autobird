import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Play, ArrowUpRight, CheckCircle } from "lucide-react";
import { heroSlides } from "../data";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6500); // Auto-advance every 6.5s
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  const handleScrollTo = (id: string) => {
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
    <section id="hero" className="relative h-[85vh] md:h-[90vh] bg-black text-white overflow-hidden select-none">
      {/* Light beam overlay */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F8F8F6] to-transparent z-10 opacity-100 pointer-events-none" />
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0.8, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.8, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={heroSlides[current].image}
            alt={heroSlides[current].headline}
            className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-[12000ms] ease-out brightness-75"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      {/* Slide Content Layer */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div className="max-w-3xl">
            {/* Slide Tag / Subtitle */}
            <motion.div
              key={`sub-${current}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-3 md:mb-5"
            >
              <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-ping" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] uppercase text-brand-accent text-shadow-sm">
                {heroSlides[current].subtitle}
              </span>
            </motion.div>

            {/* Headline with Split Line Effect */}
            <h1 className="overflow-hidden mb-3 md:mb-6">
              <motion.span
                key={`head-${current}`}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block font-display font-black text-2xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1] text-shadow-lg"
              >
                {heroSlides[current].headline.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < heroSlides[current].headline.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </motion.span>
            </h1>

            {/* Description/Highlight Text */}
            <motion.p
              key={`high-${current}`}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm md:text-lg text-neutral-300 font-light tracking-wide mb-6 md:mb-8 leading-relaxed max-w-xl"
            >
              {heroSlides[current].highlight}
            </motion.p>

            {/* CTAs */}
            <motion.div
              key={`cta-${current}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3 md:gap-4"
            >
              <button
                onClick={() => handleScrollTo(heroSlides[current].ctaAction)}
                className="group relative inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-4 bg-brand-accent hover:bg-brand-accent-hover text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase rounded-xl overflow-hidden transition-all duration-300 premium-glow active:scale-95"
              >
                {heroSlides[current].ctaText}
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {heroSlides[current].ctaTextSecondary && (
                <button
                  onClick={() => handleScrollTo("#buy-sell")}
                  className="px-5 py-3 sm:px-7 sm:py-4 border border-white/20 hover:border-white bg-white/5 hover:bg-white/10 text-white text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase rounded-xl transition-all duration-300 active:scale-95"
                >
                  {heroSlides[current].ctaTextSecondary}
                </button>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Handles */}
      <div className="absolute right-6 bottom-10 z-30 flex items-center gap-2.5">
        <button
          onClick={handlePrev}
          className="p-3 bg-black/60 hover:bg-black text-white border border-neutral-800/80 rounded-xl backdrop-blur-sm transition-all active:scale-95"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 bg-black/60 hover:bg-black text-white border border-neutral-800/80 rounded-xl backdrop-blur-sm transition-all active:scale-95"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Ticker indicators at bottom left */}
      <div className="absolute left-6 bottom-10 z-30 hidden md:flex items-center gap-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="flex flex-col items-start gap-1 group py-2"
          >
            <div className="w-14 h-[3px] bg-neutral-800 rounded-full overflow-hidden">
              <div
                className={`h-full bg-brand-accent transition-all duration-300 ${
                  current === idx ? "w-full" : "w-0 group-hover:w-1/3"
                }`}
              />
            </div>
            <span
              className={`text-[9px] font-mono tracking-wider ${
                current === idx ? "text-brand-accent font-bold" : "text-neutral-500"
              }`}
            >
              0{idx + 1}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
