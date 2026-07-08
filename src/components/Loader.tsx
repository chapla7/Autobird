import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Allow exit transition to complete
    }, 3000); // 3 seconds duration as requested

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loader-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0B0B] text-white select-none overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-radial-beam opacity-40 pointer-events-none" />

          {/* Animated background lines */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Core Content */}
          <div className="relative flex flex-col items-center">
            {/* Logo Emblem Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center p-4"
            >
              <motion.img 
                src="https://i.ibb.co/xSx6BFFy/autobird-logo.png" 
                alt="Autobird Garage Logo" 
                className="w-[236px] md:w-80 h-auto object-contain drop-shadow-[0_0_25px_rgba(193,18,31,0.5)]"
                referrerPolicy="no-referrer"
                layoutId="logo-emblem"
                transition={{ type: "spring", stiffness: 90, damping: 18 }}
              />
            </motion.div>

            {/* Brand Typography */}
            <div className="mt-8 text-center relative">
              <motion.h1
                initial={{ letterSpacing: "0.2em", opacity: 0 }}
                animate={{ letterSpacing: "0.3em", opacity: 1 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-extrabold text-[20px] md:text-3xl tracking-[0.2em] uppercase text-white"
              >
                AUTOBIRD <span className="text-brand-accent">GARAGE</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-[8px] md:text-xs font-mono tracking-widest uppercase text-gray-400 mt-2"
              >
                AUTOMOTIVE EXCELLENCE
              </motion.p>
            </div>
          </div>

          {/* Loader bar */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-neutral-900 overflow-hidden rounded-full">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2.8, ease: "easeInOut" }}
              className="w-full h-full bg-brand-accent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
