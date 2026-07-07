import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import { faqs } from "../data";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  const displayedFaqs = isMobile ? faqs.slice(0, 6) : faqs;

  return (
    <section id="faq" className="min-h-[60vh] md:h-auto py-8 md:py-24 bg-white relative overflow-hidden select-none flex flex-col justify-center">
      <div className="absolute top-0 left-0 w-80 h-80 bg-radial-beam opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-1 sm:mb-4">
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-ping" />
            <span className="text-[7px] sm:text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-brand-accent">
              GOT QUESTIONS?
            </span>
          </div>
          <h2 className="font-display font-black text-[18px] sm:text-3xl md:text-5xl text-black tracking-tight leading-none mb-1 sm:mb-4">
            Frequently Asked.
          </h2>
          <p className="text-neutral-500 font-light text-[8px] sm:text-sm md:text-base leading-normal">
            Have questions regarding diagnostic timelines, cashless coverage, or certified used car valuations? Read our quick reference responses.
          </p>
        </div>

        {/* FAQs Accordion container */}
        <div className="space-y-2.5 sm:space-y-3">
          {displayedFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-brand-border/40 rounded-lg sm:rounded-2xl bg-[#F8F8F6] overflow-hidden transition-colors duration-300 hover:border-brand-accent/20"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full text-left p-2.5 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 group focus:outline-none"
                >
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="font-mono text-[8px] sm:text-xs text-neutral-400 group-hover:text-black transition-colors font-bold shrink-0">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="font-display font-bold text-[10.5px] sm:text-sm md:text-base text-black group-hover:text-brand-accent transition-colors tracking-tight leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  {/* Toggle Indicator */}
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 border border-brand-border/20 bg-white transition-all duration-300 ${
                    isOpen ? "bg-black text-white border-black" : "text-neutral-500"
                  }`}>
                    {isOpen ? (
                      <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                    ) : (
                      <Plus className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-2.5 pb-2.5 sm:px-6 sm:pb-6 pt-1 border-t border-brand-border/10">
                        <p className="text-neutral-600 font-light text-[9.5px] sm:text-sm leading-relaxed max-w-3xl pl-4 sm:pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* FAQ Footer block */}
        <div className="mt-4 sm:mt-12 text-center p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <h4 className="font-display font-bold text-[10.5px] sm:text-sm tracking-tight">Still have custom queries?</h4>
            <p className="text-[8.5px] sm:text-xs text-neutral-400 font-light mt-0.5">Connect with our workshop leads directly.</p>
          </div>
          <a
            href="https://wa.me/919892205127"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 bg-brand-accent hover:bg-brand-accent-hover text-white text-[9.5px] sm:text-xs font-mono font-bold tracking-widest uppercase rounded-lg sm:rounded-xl transition-all"
          >
            <span>Ask via WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
