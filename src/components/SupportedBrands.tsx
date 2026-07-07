import React from "react";
import { supportedBrands } from "../data";
import { Star, Car, Bike } from "lucide-react";

// Helper function to return beautiful, authentic, and highly colorful custom SVG logos
function getBrandLogo(name: string, type: string) {
  const normalized = name.toLowerCase().trim();
  
  if (normalized === "toyota") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#F4F4F4" stroke="#EB0A1E" strokeWidth="3" />
        {/* Outer Ellipse */}
        <ellipse cx="50" cy="50" rx="38" ry="24" fill="none" stroke="#EB0A1E" strokeWidth="6" />
        {/* Inner Vertical Ellipse */}
        <ellipse cx="50" cy="48" rx="11" ry="21" fill="none" stroke="#EB0A1E" strokeWidth="6" />
        {/* Inner Horizontal Ellipse */}
        <ellipse cx="50" cy="38" rx="26" ry="9" fill="none" stroke="#EB0A1E" strokeWidth="6" />
      </svg>
    );
  }
  if (normalized === "honda") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="88" height="88" rx="16" fill="#FFFFFF" stroke="#E4002B" strokeWidth="6" />
        <path d="M22 22h12v22c0 4 3 6 6 6h20c3 0 6-2 6-6V22h12v44c0 10-8 12-16 12H38c-8 0-16-2-16-12V22z" fill="#E4002B" />
        <path d="M30 40h40" stroke="#E4002B" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (normalized === "hyundai") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="92" height="92" rx="46" fill="#002C5F" />
        <ellipse cx="50" cy="50" rx="40" ry="26" fill="none" stroke="#FFFFFF" strokeWidth="5" transform="rotate(-15, 50, 50)" />
        <path d="M38 34 L45 66 M62 34 L55 66 M39 50 C46 49, 54 49, 61 50" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
      </svg>
    );
  }
  if (normalized === "kia") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="92" height="92" rx="20" fill="#050505" stroke="#BB162B" strokeWidth="4" />
        <g fill="none" stroke="#BB162B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
          {/* K */}
          <path d="M24 30v40 M42 30L25 50l17 20" />
          {/* I */}
          <path d="M54 30v40" />
          {/* A */}
          <path d="M64 70L74 30l10 40 M68 56h12" />
        </g>
      </svg>
    );
  }
  if (normalized === "mahindra") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="92" height="92" rx="20" fill="#080808" />
        {/* Twin Peaks Logo in Mahindra Red */}
        <path d="M15 75 C20 40, 30 18, 48 18 L53 35 L58 18 C76 18, 80 40, 85 75" fill="none" stroke="#DD1F26" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 75 C40 55, 45 42, 53 42 C61 42, 66 55, 74 75" fill="none" stroke="#DD1F26" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (normalized === "tata") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#005A9C" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="#FFFFFF" strokeWidth="5" />
        {/* Tata arch */}
        <path d="M26 62c8-14 16-22 24-22s16 8 24 22" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
        <path d="M50 40v35" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
      </svg>
    );
  }
  if (normalized === "bmw") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#000000" stroke="#7F7F7F" strokeWidth="2" />
        <circle cx="50" cy="50" r="32" fill="#FFFFFF" />
        {/* Quarters */}
        <path d="M50 50 L50 18 A32 32 0 0 1 82 50 Z" fill="#0066B2" />
        <path d="M50 50 L18 50 A32 32 0 0 1 50 18 Z" fill="#FFFFFF" />
        <path d="M50 50 L50 82 A32 32 0 0 1 18 50 Z" fill="#0066B2" />
        <path d="M50 50 L82 50 A32 32 0 0 1 50 82 Z" fill="#FFFFFF" />
        {/* Letters B M W curved in outer black ring */}
        <text x="50" y="15" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">M</text>
        <text x="24" y="27" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" transform="rotate(-45, 24, 27)">B</text>
        <text x="76" y="27" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" transform="rotate(45, 76, 27)">W</text>
      </svg>
    );
  }
  if (normalized === "mercedes-benz") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        {/* Metallic grey/silver gradient ring */}
        <defs>
          <linearGradient id="silver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#8E8E93" />
            <stop offset="100%" stopColor="#3A3A3C" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="none" stroke="url(#silver)" strokeWidth="6" />
        <circle cx="50" cy="50" r="43" fill="none" stroke="#1C1C1E" strokeWidth="1.5" />
        {/* Three Pointed Star */}
        <path d="M50 11 L54 44 L50 48 L46 44 Z" fill="url(#silver)" />
        <path d="M50 48 L80 68 L77 71 L47 51 Z" fill="url(#silver)" />
        <path d="M50 48 L20 68 L23 71 L53 51 Z" fill="url(#silver)" />
      </svg>
    );
  }
  if (normalized === "audi") {
    return (
      <svg viewBox="0 0 120 60" className="w-20 h-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="audiSilver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5E5EA" />
            <stop offset="30%" stopColor="#8E8E93" />
            <stop offset="70%" stopColor="#AEAEB2" />
            <stop offset="100%" stopColor="#3A3A3C" />
          </linearGradient>
        </defs>
        <g stroke="url(#audiSilver)" strokeWidth="4.5" fill="none">
          <circle cx="30" cy="30" r="16" />
          <circle cx="50" cy="30" r="16" />
          <circle cx="70" cy="30" r="16" />
          <circle cx="90" cy="30" r="16" />
        </g>
      </svg>
    );
  }
  if (normalized === "volkswagen") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#001E50" stroke="#FFFFFF" strokeWidth="4" />
        <g fill="none" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round">
          {/* VW geometry */}
          <circle cx="50" cy="50" r="40" strokeWidth="4.5" />
          {/* V */}
          <path d="M30 28 L50 60 L70 28" />
          {/* W */}
          <path d="M22 24 L42 74 L50 56 L58 74 L78 24" />
        </g>
      </svg>
    );
  }
  if (normalized === "skoda") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#FFFFFF" stroke="#4BA82E" strokeWidth="5" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="#4BA82E" strokeWidth="2" />
        {/* Winged Arrow */}
        <path d="M46 36 L24 46 L38 52 Z" fill="#4BA82E" />
        <path d="M42 42 C42 42, 64 30, 78 40 C78 40, 68 55, 48 55 C48 55, 34 52, 42 42" fill="#4BA82E" />
        <circle cx="48" cy="46" r="3" fill="#FFFFFF" />
      </svg>
    );
  }
  if (normalized === "mg motor" || normalized === "mg") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,6 92,28 92,72 50,94 8,72 8,28" fill="#FFFFFF" stroke="#E4002B" strokeWidth="5" />
        <polygon points="50,14 84,32 84,68 50,86 16,68 16,32" fill="none" stroke="#E4002B" strokeWidth="3" />
        {/* MG letters inside */}
        <path d="M24 64V36l12 14 12-14v28" fill="none" stroke="#E4002B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M52 50h16 M52 50v14h16V36H52" fill="none" stroke="#E4002B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (normalized === "jeep") {
    return (
      <svg viewBox="0 0 100 60" className="w-20 h-12" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="60" rx="10" fill="#0D2E14" />
        <text x="50" y="40" fill="#E5E5EA" fontSize="28" fontWeight="black" fontFamily="sans-serif" textAnchor="middle" letterSpacing="2">Jeep</text>
      </svg>
    );
  }
  if (normalized === "volvo") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <circle cx="46" cy="54" r="32" fill="none" stroke="#A2A2A2" strokeWidth="7" />
        {/* Arrow */}
        <path d="M64 36 L82 18 M64 18h18v18" fill="none" stroke="#A2A2A2" strokeWidth="7" strokeLinecap="square" strokeLinejoin="miter" />
        {/* Volvo horizontal bar */}
        <rect x="10" y="44" width="72" height="20" rx="3" fill="#002060" stroke="#FFFFFF" strokeWidth="1.5" />
        <text x="46" y="59" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">VOLVO</text>
      </svg>
    );
  }
  if (normalized === "lexus") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="50" rx="44" ry="32" fill="none" stroke="#C5A059" strokeWidth="6" />
        {/* Lexus "L" stylized */}
        <path d="M26 34h20 L32 72 H74" fill="none" stroke="#C5A059" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (normalized === "porsche") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        {/* Crest shape */}
        <path d="M15 15h70v30c0 22-35 44-35 44s-35-22-35-44V15z" fill="#D4AF37" stroke="#333" strokeWidth="2" />
        {/* Red and black bars inside crest */}
        {/* Quarters */}
        <rect x="23" y="21" width="22" height="22" fill="#000000" />
        <rect x="55" y="21" width="22" height="22" fill="#E4002B" />
        <rect x="23" y="49" width="22" height="22" fill="#E4002B" />
        <rect x="55" y="49" width="22" height="22" fill="#000000" />
        {/* Inner golden shield */}
        <path d="M40 38h20v14c0 10-10 18-10 18s-10-8-10-18V38z" fill="#D4AF37" stroke="#000000" strokeWidth="1" />
        {/* Horse silhouette in center */}
        <path d="M48 58 C46 54, 46 48, 50 44 C53 44, 53 49, 52 52 C54 55, 54 58, 52 61" stroke="#000000" strokeWidth="2" fill="none" />
      </svg>
    );
  }
  if (normalized === "royal enfield") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#1C1C1E" stroke="#D4AF37" strokeWidth="4" />
        <circle cx="50" cy="50" r="38" fill="#A12830" />
        {/* Wing / emblem banner */}
        <path d="M22 46h56 M24 54h52" stroke="#D4AF37" strokeWidth="2" />
        <text x="50" y="42" fill="#FFFFFF" fontSize="9" fontWeight="black" fontFamily="sans-serif" textAnchor="middle">ROYAL</text>
        <text x="50" y="62" fill="#FFFFFF" fontSize="9" fontWeight="black" fontFamily="sans-serif" textAnchor="middle">ENFIELD</text>
      </svg>
    );
  }
  if (normalized === "ktm") {
    return (
      <svg viewBox="0 0 100 60" className="w-20 h-12" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="60" rx="8" fill="#FF6600" />
        <text x="50" y="41" fill="#FFFFFF" fontSize="30" fontWeight="black" fontFamily="Impact, Arial Black, sans-serif" textAnchor="middle" italic="true">KTM</text>
      </svg>
    );
  }
  if (normalized === "honda motos") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="50" fill="#E4002B" />
        {/* Sleek Golden wing */}
        <path d="M15 65c15-4 35-12 48-26c10-11 16-24 16-30c-6 2-18 6-28 17c-12 13-20 35-24 39" fill="#FFFFFF" />
        <path d="M25 70c12-3 28-10 40-21" fill="none" stroke="#FFFFFF" strokeWidth="3" />
      </svg>
    );
  }
  if (normalized === "yamaha") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#002060" stroke="#FFFFFF" strokeWidth="4" />
        <circle cx="50" cy="50" r="34" fill="none" stroke="#FFFFFF" strokeWidth="3" />
        {/* Three Tuning Forks */}
        <path d="M50 50 V18 M50 50 L77 66 M50 50 L23 66" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        <circle cx="50" cy="50" r="8" fill="#002060" stroke="#FFFFFF" strokeWidth="3" />
      </svg>
    );
  }
  if (normalized === "suzuki") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#FFFFFF" stroke="#E4002B" strokeWidth="2" />
        {/* Highly recognizable red Suzuki S */}
        <path d="M72 24H36l-8 12L56 52L28 64l8 12H72l8-12L52 48l28-12z" fill="#E4002B" />
      </svg>
    );
  }
  if (normalized === "bmw motorrad") {
    return (
      <svg viewBox="0 0 100 100" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" fill="#000000" stroke="#EB0A1E" strokeWidth="4" />
        <circle cx="50" cy="50" r="30" fill="#FFFFFF" />
        {/* BMW Blue/white quarters */}
        <path d="M50 50 L50 20 A30 30 0 0 1 80 50 Z" fill="#0066B2" />
        <path d="M50 50 L20 50 A30 30 0 0 1 50 20 Z" fill="#FFFFFF" />
        <path d="M50 50 L50 80 A30 30 0 0 1 20 50 Z" fill="#0066B2" />
        <path d="M50 50 L80 50 A30 30 0 0 1 50 80 Z" fill="#FFFFFF" />
        {/* Red Arrow badge */}
        <path d="M42 12l8-8 8 8" fill="none" stroke="#EB0A1E" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "bike") {
    return <Bike className="w-12 h-12 text-brand-accent" />;
  }
  return <Car className="w-12 h-12 text-brand-accent" />;
}

export default function SupportedBrands() {
  const carBrandsOnly = supportedBrands.filter(brand => brand.type !== "bike");
  // Triple the array to ensure smooth seamless scrolling with zero visual jumps
  const duplicatedBrands = [...carBrandsOnly, ...carBrandsOnly, ...carBrandsOnly];

  return (
    <section id="brands" className="py-12 md:py-16 bg-black text-white overflow-hidden relative select-none">
      {/* Absolute dark fade edges for high-end look */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-6 md:mb-8 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <span className="text-[6px] sm:text-[9px] md:text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-brand-accent block mb-1">
            TRUSTED MULTI-BRAND SERVICES
          </span>
          <h3 className="font-display font-black text-[12px] sm:text-lg md:text-2xl tracking-tight text-white uppercase">
            Complete Factory Equipment For All Brands
          </h3>
        </div>
        <div className="hidden md:flex items-center gap-1.5 text-xs font-mono text-neutral-500">
          <span>OEM diagnostic databases loaded</span>
          <Star className="w-3.5 h-3.5 text-brand-accent animate-spin" />
        </div>
      </div>

      {/* Infinite Scrolling Ticker (Marquee Container) */}
      <div className="relative w-full flex items-center overflow-hidden py-4 md:py-6 border-y border-neutral-900">
        <div className="flex gap-8 md:gap-12 shrink-0 min-w-full animate-infinite-scroll items-center">
          {duplicatedBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-1 md:p-2 shrink-0 group transition-all duration-300 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32"
            >
              {/* Brand Logo with absolute precision and hover zoom */}
              <div className="transform group-hover:scale-115 transition-transform duration-300 shrink-0 flex items-center justify-center w-full h-full scale-75 sm:scale-100">
                {getBrandLogo(brand.name, brand.type)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
