import React from "react";
import { Star, ShieldCheck, Heart } from "lucide-react";
import { reviews } from "../data";

export default function CustomerReviews() {
  // Duplicate reviews array to create a seamless infinite scrolling track
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" className="h-[75vh] md:h-auto py-6 md:py-24 bg-black text-white overflow-hidden relative select-none flex flex-col justify-center">
      {/* Decorative background glows */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      <div className="absolute left-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-3 sm:mb-10 md:mb-16 relative z-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-2 sm:gap-4 md:gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-1 sm:mb-2 md:mb-4">
            <span className="w-10 h-[1px] bg-brand-accent animate-pulse" />
            <span className="text-[7px] sm:text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-brand-accent">
              VERIFIED OWNER EXPERIENCES
            </span>
          </div>
          <h2 className="font-display font-black text-[18px] sm:text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-none uppercase">
            RETAILER VOICES
          </h2>
        </div>
        <p className="text-neutral-400 font-light text-[8px] sm:text-sm max-w-sm leading-normal">
          Read genuine reviews logged by our prestige automobile client network. Absolute transparency, verified by chassis registration.
        </p>
      </div>

      {/* Infinite Horizontal Scrolling Carousel */}
      <div className="relative w-full flex items-center overflow-hidden py-2 sm:py-4 border-y border-neutral-900">
        <div className="flex gap-2 sm:gap-4 md:gap-8 shrink-0 min-w-full animate-slide" style={{ animationDuration: "65s" }}>
          {duplicatedReviews.map((review, idx) => (
            <div
              key={idx}
              className="w-[54vw] md:w-96 bg-white border border-brand-border/10 rounded-xl md:rounded-[24px] p-2.5 sm:p-4 md:p-6 shrink-0 flex flex-col justify-between hover:border-brand-accent/30 hover:shadow-2xl hover:shadow-brand-accent/5 transition-all duration-300 relative group text-black"
            >
              {/* Inner content */}
              <div>
                {/* Header row: Avatar info & Verified */}
                <div className="flex items-center justify-between mb-2 sm:mb-4 md:mb-5">
                  <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3">
                    <img
                      src={review.photo}
                      alt={review.name}
                      className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover border border-brand-border/40"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-display font-bold text-[9px] sm:text-xs md:text-sm text-black leading-none flex items-center gap-1">
                        {review.name}
                      </h4>
                      <span className="text-[7.5px] sm:text-[9px] md:text-[10px] font-mono font-medium text-neutral-400 block mt-0.5 sm:mt-1">
                        {review.vehicle}
                      </span>
                    </div>
                  </div>

                  {/* Verified Badge */}
                  {review.verified && (
                    <span className="inline-flex items-center gap-0.5 px-1 sm:px-2 py-0.5 rounded-full bg-neutral-50 border border-neutral-100 text-brand-accent text-[6.5px] sm:text-[8px] md:text-[9px] font-mono font-bold tracking-wider uppercase">
                      <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-brand-accent" />
                      Verified
                    </span>
                  )}
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 md:gap-1 mb-1.5 sm:mb-3 md:mb-4 text-brand-accent">
                  {Array.from({ length: review.rating }).map((_, sIdx) => (
                    <Star key={sIdx} className="w-2 h-2 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 fill-brand-accent stroke-brand-accent" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-neutral-600 font-light text-[8.5px] sm:text-[11px] md:text-sm leading-snug italic line-clamp-3 sm:line-clamp-none">
                  "{review.comment}"
                </p>
              </div>

              {/* Card Footer detail */}
              <div className="mt-2 sm:mt-4 md:mt-6 pt-1.5 sm:pt-3 md:pt-4 border-t border-neutral-50 flex items-center justify-between">
                <span className="text-[6.5px] sm:text-[8px] md:text-[9px] font-mono tracking-wider text-neutral-400 uppercase">
                  Service Taken: {review.serviceTaken}
                </span>
                <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-neutral-300 group-hover:text-brand-accent group-hover:fill-brand-accent transition-colors shrink-0" />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
