import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Sparkles, Film, ArrowRight } from "lucide-react";
import { videoGallery } from "../data";

// Helper to extract video ID and return a YouTube embed URL if applicable
function getYouTubeEmbedUrl(url: string) {
  if (!url) return null;
  let videoId = "";
  try {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      videoId = match[2];
    }
  } catch (e) {
    console.error("Error parsing YouTube URL", e);
  }
  if (videoId) {
    // Add autoplay, mute, loop (requires playlist of same ID), and remove related videos
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&rel=0&showinfo=0&modestbranding=1`;
  }
  return null;
}

export default function WorkingProcess() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeVideo = videoGallery[activeIdx];
  const thumbnails = videoGallery.filter((_, idx) => idx !== activeIdx);

  const handleSelectThumbnail = (targetId: number) => {
    const realIdx = videoGallery.findIndex((v) => v.id === targetId);
    if (realIdx !== -1) {
      setActiveIdx(realIdx);
    }
  };

  return (
    <section id="working-process" className="py-10 md:py-24 bg-white relative overflow-hidden select-none">
      <div className="absolute top-0 right-0 w-80 h-80 bg-radial-beam opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-2.5 md:mb-4">
            <span className="w-10 h-[1.5px] bg-brand-accent" />
            <span className="text-[7.5px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-brand-accent">
              PRESTIGE IN MOTION
            </span>
          </div>
          <h2 className="font-display font-black text-[24px] sm:text-4xl md:text-5xl lg:text-6xl text-black tracking-tight leading-none">
            Our Premium Process.
          </h2>
          <p className="mt-3 text-neutral-500 font-light text-[10px] sm:text-base md:text-lg leading-relaxed">
            Watch our master technicians in action. We maintain a surgically sterile workshop, utilizing specific brand parameters to deliver world-class automotive care.
          </p>
        </div>

        {/* Interactive Showcase Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Selected Video Display (Col Span 8) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="relative rounded-[28px] overflow-hidden border border-brand-border/40 bg-black aspect-video shadow-lg group">
              
              {/* Video rendering depending on URL type (YouTube iframe or direct mp4) */}
              {getYouTubeEmbedUrl(activeVideo.videoUrl) ? (
                <iframe
                  key={activeVideo.videoUrl}
                  src={getYouTubeEmbedUrl(activeVideo.videoUrl) || ""}
                  title={activeVideo.title}
                  className="w-full h-full border-0 brightness-90 group-hover:scale-102 transition-transform duration-500"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <video
                  key={activeVideo.videoUrl}
                  src={activeVideo.videoUrl}
                  poster={activeVideo.coverImage}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover brightness-90 group-hover:scale-102 transition-transform duration-[8000ms]"
                />
              )}

              {/* Gradient Dark Cover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25 pointer-events-none" />

              {/* Interactive Pulsing Play Overlay Badge */}
              <div className="absolute top-2 left-2 sm:top-6 sm:left-6 flex items-center gap-1 sm:gap-2 px-1.5 py-0.5 sm:px-3 sm:py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                <span className="text-[6px] sm:text-[10px] font-mono tracking-widest uppercase text-white font-bold flex items-center gap-0.5 sm:gap-1">
                  <Film className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-brand-accent" /> LIVE FEED
                </span>
              </div>

              {/* Video descriptive text metadata */}
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-8 sm:left-8 sm:right-8 z-20">
                <span className="text-[5px] sm:text-[10px] font-mono tracking-widest text-brand-accent uppercase font-black block mb-0.5 sm:mb-2">
                  WORKSHOP INSIGHTS
                </span>
                <h3 className="font-display font-black text-[7.5px] sm:text-xl md:text-3xl text-white tracking-tight leading-none mb-1 sm:mb-3">
                  {activeVideo.title}
                </h3>
                <p className="hidden sm:block text-[7.5px] sm:text-sm text-neutral-300 font-light leading-normal max-w-xl">
                  {activeVideo.description}
                </p>
              </div>

            </div>
          </div>

          {/* Alternate Thumbnail Selections (Col Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <div className="p-6 md:p-8 bg-[#F8F8F6] border border-brand-border/40 rounded-[28px] h-full flex flex-col justify-between">
              <div>
                <h4 className="font-display font-extrabold text-xs uppercase tracking-widest text-neutral-400 mb-6 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-accent" /> EXPLORE ALTERNATE VIEWS:
                </h4>

                <div className="flex flex-col gap-4">
                  {thumbnails.map((thumb) => (
                    <button
                      key={thumb.id}
                      onClick={() => handleSelectThumbnail(thumb.id)}
                      className="w-full text-left p-4 rounded-2xl border border-brand-border/20 bg-white hover:border-brand-accent/30 group transition-all duration-300 flex items-center gap-4 relative overflow-hidden hover:shadow-sm"
                    >
                      {/* Left thumbnail poster visual */}
                      <div className="w-20 h-14 rounded-lg overflow-hidden bg-black relative shrink-0">
                        <img
                          src={thumb.coverImage}
                          alt={thumb.title}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Play className="w-4 h-4 text-white fill-white group-hover:scale-125 transition-transform" />
                        </div>
                      </div>

                      {/* Right metadata description */}
                      <div>
                        <h5 className="font-display font-bold text-xs md:text-sm text-black group-hover:text-brand-accent transition-colors line-clamp-1 leading-snug">
                          {thumb.title}
                        </h5>
                        <p className="text-[10px] text-neutral-400 font-mono mt-1 uppercase tracking-wider">
                          Click to Play Feed
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick direct book redirect */}
              <div className="mt-8 pt-6 border-t border-brand-border/40 flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                  Ready for booking?
                </span>
                <a
                  href="#book-now"
                  className="flex items-center gap-1 text-xs font-mono font-bold uppercase text-brand-primary hover:text-brand-accent transition-colors group"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 text-brand-accent group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
