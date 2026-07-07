import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, User, Phone, Car, Clock, MapPin, Sparkles, CheckSquare, ShieldCheck, Mail } from "lucide-react";
import { services } from "../data";

interface BookingSectionProps {
  selectedService: string;
  onSelectService: (serviceName: string) => void;
}

export default function BookingSection({ selectedService, onSelectService }: BookingSectionProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleBrand, setVehicleBrand] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleType, setVehicleType] = useState("Car");
  const [bookingDate, setBookingDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("09:00 AM - 11:00 AM");
  const [pickupEnabled, setPickupEnabled] = useState(false);
  const [pickupAddress, setPickupAddress] = useState("");

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !vehicleBrand || !vehicleModel || !bookingDate) {
      alert("Please ensure all mandatory values (Name, Phone, Brand, Model, and Appointment Date) are populated.");
      return;
    }

    const heading = "📅 *AUTOBIRD GARAGE - SLOT RESERVATION REQUEST* 📅\n";
    const divider = "====================================\n";
    const body = `👤 *Owner Name:* ${name}\n` +
                 `📱 *Phone Number:* ${phone}\n` +
                 `🚗 *Vehicle Model:* ${vehicleBrand.toUpperCase()} ${vehicleModel.toUpperCase()} (${vehicleType})\n` +
                 `⚙️ *Service Desired:* ${selectedService || "General Inspection Service"}\n` +
                 `📆 *Desired Date:* ${bookingDate}\n` +
                 `🕒 *Time Slot:* ${timeSlot}\n` +
                 `🏡 *Pickup Service:* ${pickupEnabled ? "Yes, Complimentary" : "No, self-drive"}\n` +
                 `📍 *Pickup Address:* ${pickupEnabled ? pickupAddress : "N/A"}\n`;
    const footer = "====================================\n_This reservation is generated from Autobird Garage Booking Console. Please verify engineer availability._";

    const formattedMessage = encodeURIComponent(heading + divider + body + footer);
    window.open(`https://wa.me/919892205127?text=${formattedMessage}`, "_blank");
  };

  return (
    <section id="book-now" className="h-[100vh] md:h-auto py-6 md:py-24 bg-[#F8F8F6] relative overflow-hidden select-none flex flex-col justify-center">
      <div className="absolute inset-0 bg-radial-beam opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-16 items-center">
          
          {/* Left Column: Visual copy & Trust Indicators (Col Span 5) */}
          <div className="lg:col-span-5">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 mb-1 md:mb-4">
                <span className="w-10 h-[1.5px] bg-brand-accent animate-pulse" />
                <span className="text-[7px] sm:text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-brand-accent">
                  RESERVE YOUR APPOINTMENT
                </span>
              </div>
              <h2 className="font-display font-black text-[22px] sm:text-3xl md:text-5xl text-black tracking-tight leading-none mb-1 md:mb-6">
                Book A Slot.
              </h2>
              <p className="text-neutral-500 font-light text-[8px] sm:text-sm md:text-base leading-normal mb-2 md:mb-10">
                Secure standard diagnostics or major mechanical overhaul booking slots. Our coordinators will contact you within 15 minutes of submission to lock down logistics.
              </p>

              {/* Trust badges list */}
              <div className="hidden md:block space-y-4 md:space-y-6">
                <div className="flex gap-3 md:gap-4">
                  <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white border border-brand-border/40 text-brand-accent shrink-0">
                    <ShieldCheck className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-black leading-none">Instant SMS & Video Feeds</h4>
                    <p className="text-[11px] sm:text-xs text-neutral-400 font-light mt-1 md:mt-1.5 leading-relaxed">Receive live dashboard reports and repair video walkthroughs before any component replacement.</p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white border border-brand-border/40 text-brand-accent shrink-0">
                    <CheckSquare className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-black leading-none">₹0 Diagnosis if repaired</h4>
                    <p className="text-[11px] sm:text-xs text-neutral-400 font-light mt-1 md:mt-1.5 leading-relaxed">We waive diagnostic, scan, and system reading check costs entirely when you approve the repair plan.</p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white border border-brand-border/40 text-brand-accent shrink-0">
                    <Sparkles className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-black leading-none">Multi-Brand Diagnostics</h4>
                    <p className="text-[11px] sm:text-xs text-neutral-400 font-light mt-1 md:mt-1.5 leading-relaxed">Our garage features brand-specific diagnostic scanners (VCDS, OBD-II, Porsche PIWIS, BMW ICOM) for zero errors.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Reservation form (Col Span 7) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-3.5 sm:p-8 md:p-10 rounded-xl sm:rounded-[28px] border border-brand-border/40 bg-white shadow-sm"
            >
              <h3 className="font-display font-bold text-xs sm:text-lg md:text-xl text-black tracking-tight mb-3 sm:mb-8">
                Configure Appointment Parameters
              </h3>

              <form onSubmit={handleBookingSubmit} className="space-y-2.5 sm:space-y-5">
                
                {/* Vehicle Type & Requested Service Selector Row */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-5">
                  {/* Vehicle Type */}
                  <div>
                    <label className="text-[7px] sm:text-[9px] font-mono font-bold uppercase text-neutral-400 block mb-1 tracking-wider">
                      Classification *
                    </label>
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-3">
                      {["Car", "Two-Wheeler"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setVehicleType(type)}
                          className={`py-1.5 sm:py-3 rounded-lg sm:rounded-xl font-mono text-[9.5px] sm:text-xs font-bold uppercase border transition-all duration-300 ${
                            vehicleType === type
                              ? "bg-black border-black text-white"
                              : "bg-neutral-50 border-brand-border/30 text-neutral-500 hover:text-black"
                          }`}
                        >
                          {type.split("-")[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Active Service selector */}
                  <div>
                    <label className="text-[7px] sm:text-[9px] font-mono font-bold uppercase text-neutral-400 block mb-1 tracking-wider">
                      Care Service *
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => onSelectService(e.target.value)}
                      className="w-full bg-[#F8F8F6] border border-brand-border/40 rounded-lg sm:rounded-xl p-1.5 sm:p-3 text-[10px] sm:text-xs text-black focus:outline-none focus:border-black cursor-pointer h-[29px] sm:h-[46px] appearance-none"
                    >
                      <option value="">Select Service / Custom Care</option>
                      {services.map((item) => (
                        <option key={item.id} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                      <option value="Custom General Tune-up">Custom General Tune-up</option>
                      <option value="Comprehensive Shield Package">Comprehensive Shield Package</option>
                      <option value="Engine Diagnostics Overhaul">Engine Diagnostics Overhaul</option>
                      <option value="Other / Multiple Repairs">Other / Multiple Repairs</option>
                    </select>
                  </div>
                </div>

                {/* Grid 2-cols Owner Details */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-5">
                  {/* Owner name */}
                  <div>
                    <label className="text-[7px] sm:text-[9px] font-mono font-bold uppercase text-neutral-400 block mb-1 tracking-wider">
                      Owner Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-2 sm:left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Rohan Gupta"
                        className="w-full bg-[#F8F8F6] border border-brand-border/40 focus:border-black rounded-lg sm:rounded-xl py-1.5 sm:py-3 pl-7 sm:pl-10 pr-2 sm:pr-4 text-[10px] sm:text-xs text-black focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Owner phone */}
                  <div>
                    <label className="text-[7px] sm:text-[9px] font-mono font-bold uppercase text-neutral-400 block mb-1 tracking-wider">
                      WhatsApp Contact *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-2 sm:left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="WhatsApp Number"
                        className="w-full bg-[#F8F8F6] border border-brand-border/40 focus:border-black rounded-lg sm:rounded-xl py-1.5 sm:py-3 pl-7 sm:pl-10 pr-2 sm:pr-4 text-[10px] sm:text-xs text-black focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Grid 2-cols Vehicle info */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-5">
                  {/* Brand */}
                  <div>
                    <label className="text-[7px] sm:text-[9px] font-mono font-bold uppercase text-neutral-400 block mb-1 tracking-wider">
                      Manufacturer *
                    </label>
                    <div className="relative">
                      <Car className="absolute left-2 sm:left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400" />
                      <input
                        type="text"
                        required
                        value={vehicleBrand}
                        onChange={(e) => setVehicleBrand(e.target.value)}
                        placeholder="e.g., Porsche"
                        className="w-full bg-[#F8F8F6] border border-brand-border/40 focus:border-black rounded-lg sm:rounded-xl py-1.5 sm:py-3 pl-7 sm:pl-10 pr-2 sm:pr-4 text-[10px] sm:text-xs text-black focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Model */}
                  <div>
                    <label className="text-[7px] sm:text-[9px] font-mono font-bold uppercase text-neutral-400 block mb-1 tracking-wider">
                      Model / Variant *
                    </label>
                    <input
                      type="text"
                      required
                      value={vehicleModel}
                      onChange={(e) => setVehicleModel(e.target.value)}
                      placeholder="e.g., Macan S"
                      className="w-full bg-[#F8F8F6] border border-brand-border/40 focus:border-black rounded-lg sm:rounded-xl p-1.5 sm:p-3 text-[10px] sm:text-xs text-black focus:outline-none transition-colors h-[29px] sm:h-[46px]"
                    />
                  </div>
                </div>

                {/* Appointment Date and Time slots */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-5">
                  {/* Date selection */}
                  <div>
                    <label className="text-[7px] sm:text-[9px] font-mono font-bold uppercase text-neutral-400 block mb-1 tracking-wider">
                      Desired Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-2 sm:left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400 pointer-events-none" />
                      <input
                        type="date"
                        required
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full bg-[#F8F8F6] border border-brand-border/40 focus:border-black rounded-lg sm:rounded-xl py-1.5 sm:py-3 pl-7 sm:pl-10 pr-2 sm:pr-4 text-[10px] sm:text-xs text-black focus:outline-none transition-colors cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Time slot selection */}
                  <div>
                    <label className="text-[7px] sm:text-[9px] font-mono font-bold uppercase text-neutral-400 block mb-1 tracking-wider">
                      Booking Hours
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full bg-[#F8F8F6] border border-brand-border/40 rounded-lg sm:rounded-xl p-1.5 sm:p-3 text-[10px] sm:text-xs text-black focus:outline-none focus:border-black cursor-pointer h-[29px] sm:h-[46px] appearance-none"
                    >
                      <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
                      <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
                      <option value="01:00 PM - 03:00 PM">01:00 PM - 03:00 PM</option>
                      <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM</option>
                      <option value="05:00 PM - 07:00 PM">05:00 PM - 07:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Pickup Toggle switch */}
                <div className="border-t border-brand-border/20 pt-2 mt-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-bold text-[10px] sm:text-xs text-black leading-none">Pickup & Drop</h4>
                      <p className="text-[8px] sm:text-[10px] text-neutral-400 font-light mt-0.5">Complimentary vehicle logistics mapping.</p>
                    </div>
                    
                    <button
                      type="button"
                      onClick={() => setPickupEnabled(!pickupEnabled)}
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        pickupEnabled ? "bg-brand-accent" : "bg-neutral-200"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          pickupEnabled ? "translate-x-4" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Pickup address slider */}
                  <AnimatePresence>
                    {pickupEnabled && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 overflow-hidden"
                      >
                        <div className="relative">
                          <MapPin className="absolute left-2 top-2.5 w-3.5 h-3.5 text-neutral-400" />
                          <textarea
                            value={pickupAddress}
                            onChange={(e) => setPickupAddress(e.target.value)}
                            rows={1}
                            placeholder="Specify Pickup Address *"
                            required={pickupEnabled}
                            className="w-full bg-[#F8F8F6] border border-brand-border/40 focus:border-black rounded-lg sm:rounded-xl py-1.5 sm:py-3 pl-7 sm:pl-10 pr-2 sm:pr-4 text-[10px] sm:text-xs text-black focus:outline-none transition-colors resize-none"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submit scheduling button */}
                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-4 bg-brand-accent hover:bg-brand-accent-hover text-white text-[9.5px] sm:text-xs font-mono font-bold tracking-widest uppercase rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg active:scale-95"
                >
                  Confirm Appointment via WhatsApp
                </button>

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
