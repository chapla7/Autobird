import React from "react";
import { MapPin, Phone, Mail, Clock, Compass, ArrowUpRight } from "lucide-react";

export default function GoogleMapSection() {
  const address = "Plot 52, Road, nr. Silver Crown Bldg, Pleasant Park, Mira Road East, Mumbai, Mira Bhayandar, Maharashtra 401107";
  const phone = "+91 98922 05127";
  const email = "jobythrisookaran@gmail.com";
  const mapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.8115664183864!2d72.8465!3d19.2945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0688fc9bd5d%3A0xe543dfcd5b399105!2sBhayandar%20West%2C%20Mira%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  const handleDirectionsClick = () => {
    window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, "_blank");
  };

  return (
    <section id="map-section" className="h-[80vh] md:h-auto py-6 md:py-20 bg-black text-white relative overflow-hidden select-none flex flex-col justify-center">
      {/* Subtle backdrop light */}
      <div className="absolute inset-0 bg-radial-beam opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-12 items-center">
          
          {/* Left Column: Embedded Map with luxury border (Col Span 7) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl sm:rounded-[28px] overflow-hidden border border-neutral-900 bg-neutral-950 p-1 sm:p-3 shadow-2xl">
              <div className="rounded-[20px] overflow-hidden h-[160px] md:h-[450px] relative">
                {/* Embedded Map */}
                <iframe
                  title="Autobird Garage Workshop Location Map"
                  src={mapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(120%)" }} // Luxury dark-mode map style!
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact details & Call-To-Action (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="max-w-md">
              <span className="text-[8px] sm:text-[10px] font-mono font-bold tracking-[0.3em] text-brand-accent uppercase block mb-1 sm:mb-3">
                MANUFACTURING HUB
              </span>
              
              <h2 className="font-display font-black text-[22px] sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-none mb-3 sm:mb-10 uppercase">
                VISIT OUR<br />COMPANY
              </h2>

              <div className="space-y-2.5 sm:space-y-8 border-l border-neutral-800 pl-3 sm:pl-6">
                
                {/* Physical Address */}
                <div>
                  <h4 className="text-[7.5px] sm:text-[9px] font-mono tracking-widest text-neutral-500 uppercase mb-0.5 sm:mb-2">
                    CORPORATE HEADQUARTERS
                  </h4>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <MapPin className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-brand-accent shrink-0 mt-0.5 animate-pulse" />
                    <p className="text-[9.5px] sm:text-sm text-neutral-300 font-light leading-snug sm:leading-relaxed">
                      {address}
                      <span className="text-neutral-500 block mt-0.5">Mira Bhayandar, Maharashtra, India</span>
                    </p>
                  </div>
                </div>

                {/* Direct Line */}
                <div>
                  <h4 className="text-[7.5px] sm:text-[9px] font-mono tracking-widest text-neutral-500 uppercase mb-0.5 sm:mb-2">
                    CONTACT NUMBER
                  </h4>
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center gap-2 sm:gap-3 text-xs sm:text-lg md:text-xl font-display font-bold text-white hover:text-brand-accent transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-brand-accent shrink-0" />
                    <span>{phone}</span>
                  </a>
                </div>

                {/* Email Address */}
                <div>
                  <h4 className="text-[7.5px] sm:text-[9px] font-mono tracking-widest text-neutral-500 uppercase mb-0.5 sm:mb-2">
                    EMAIL ADDRESS
                  </h4>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-sm text-neutral-300 hover:text-white transition-colors font-mono"
                  >
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-accent shrink-0" />
                    <span>{email}</span>
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <h4 className="text-[7.5px] sm:text-[9px] font-mono tracking-widest text-neutral-500 uppercase mb-0.5 sm:mb-2">
                    BUSINESS HOUR LOGS
                  </h4>
                  <div className="flex items-center gap-2 sm:gap-3 text-[9.5px] sm:text-xs text-neutral-400">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-600 shrink-0" />
                    <span>Monday - Saturday: 9:00 AM - 7:00 PM</span>
                  </div>
                </div>

              </div>

              {/* Get Directions Button */}
              <button
                onClick={handleDirectionsClick}
                className="mt-3.5 sm:mt-10 group relative inline-flex items-center gap-1.5 px-4 py-2.5 sm:px-6 sm:py-4 bg-brand-accent hover:bg-brand-accent-hover text-white text-[9.5px] sm:text-xs font-mono font-bold tracking-widest uppercase rounded-lg sm:rounded-xl transition-all duration-300 active:scale-95"
              >
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                GET DIRECTIONS
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
