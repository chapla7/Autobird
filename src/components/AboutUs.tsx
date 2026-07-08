import React from "react";
import { motion } from "motion/react";
import { Star, ShieldAlert, Award, Compass, ArrowUpRight } from "lucide-react";

export default function AboutUs() {
  const milestones = [
    {
      year: "2001",
      title: "Founding in Grant Road",
      description: "Established our initial premium service and mechanical workshop in Grant Road, serving car owners with unmatched passion and dedication."
    },
    {
      year: "2011",
      title: "Relocation to Mira Road",
      description: "Shifted to a much larger, fully-equipped state-of-the-art facility in Mira Road, multiplying our diagnostic bays and service capacity."
    },
    {
      year: "2017",
      title: "Multi-Brand Prestige Expansion",
      description: "Scaled to 15 fully-equipped structural bays, onboarded master manufacturer-certified engineers, and opened a climate-controlled paint workshop."
    },
    {
      year: "2021",
      title: "Cashless Claims Network",
      description: "Inaugurated direct in-house cashless claims liaisons with leading insurers, removing administrative friction for our clients."
    },
    {
      year: "2026",
      title: "The Ultimate Autobird Hub",
      description: "Consolidated premium diagnostic telemetry, parts sourcing, and state-of-the-art repair infrastructure at our Mira Road headquarters."
    }
  ];

  return (
    <section id="about" className="h-[80vh] overflow-y-auto lg:overflow-visible md:h-auto py-8 md:py-24 bg-[#F8F8F6] relative overflow-hidden select-none flex flex-col justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-beam opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Core Content - Max Width 60% as requested */}
        <div className="max-w-3xl mx-auto text-center mb-6 md:mb-20">
          
          <div className="inline-flex items-center justify-center gap-2 mb-1 sm:mb-2 md:mb-4">
            <span className="w-8 h-[1.5px] bg-brand-accent animate-pulse" />
            <span className="text-[9px] sm:text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-brand-accent">
              OUR MISSION & IDENTITY
            </span>
            <span className="w-8 h-[1.5px] bg-brand-accent animate-pulse" />
          </div>

          <h2 className="font-display font-black text-[19.5px] sm:text-3xl md:text-6xl text-black uppercase tracking-[0.1em] mb-2 md:mb-8 leading-none">
            PERSPECTIVE
          </h2>

          <p className="font-display font-extrabold text-[11.5px] sm:text-lg md:text-2xl text-neutral-800 leading-relaxed tracking-tight italic">
            "We believe that maintaining a performance vehicle shouldn’t be a series of stressful negotiations — it should be a seamless, professional transaction."
          </p>

          <p className="mt-2 sm:mt-8 text-neutral-500 font-light text-[9.5px] sm:text-sm md:text-base leading-relaxed">
            Founded with a vision to deliver dealer-grade technical capability at transparent independent pricing, Autobird Garage has evolved into the region's premier multi-service automotive facility. We treat your vehicle with the exact same reverence and mechanical standard that Porsche, BMW, or Mercedes engineers intended.
          </p>
        </div>

        {/* Milestones Vertical / Timeline Layout */}
        <div className="max-w-4xl mx-auto relative border-l border-neutral-200/80 pl-5 md:pl-12 space-y-4 md:space-y-12 py-2 md:py-4">
          
          {milestones.map((milestone, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Timeline node circle */}
                <span className="absolute -left-[29px] md:-left-[57px] top-1 md:top-1.5 flex h-4 w-4 md:h-6 md:w-6 items-center justify-center rounded-full bg-white border-2 border-brand-accent shadow-sm">
                  <span className="h-1.5 w-1.5 md:h-2.5 md:w-2.5 rounded-full bg-black" />
                </span>

                <div className="bg-white border border-brand-border/40 p-3 sm:p-8 rounded-xl sm:rounded-[20px] shadow-sm hover:shadow-md transition-shadow duration-300 relative group overflow-hidden">
                  {/* Subtle hover background highlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-red-500/[0.015] to-transparent pointer-events-none" />

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1.5 sm:mb-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="font-display font-black text-[15.5px] md:text-3xl text-brand-accent leading-none">
                        {milestone.year}
                      </span>
                      <h4 className="font-display font-bold text-[12px] sm:text-base md:text-lg text-black tracking-tight leading-none">
                        {milestone.title}
                      </h4>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                      Milestone 0{idx + 1}
                    </span>
                  </div>

                  <p className="text-[11px] sm:text-sm text-neutral-500 font-light leading-relaxed max-w-2xl">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
