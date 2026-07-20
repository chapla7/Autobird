import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import AnnouncementBar from "./components/AnnouncementBar";
import StickyNavbar from "./components/StickyNavbar";
import HeroSection from "./components/HeroSection";
import TrustBar from "./components/TrustBar";
import WhyChooseUs from "./components/WhyChooseUs";
import OurServices from "./components/OurServices";
import PricingSection from "./components/PricingSection";
import SupportedBrands from "./components/SupportedBrands";
import WorkingProcess from "./components/WorkingProcess";
import InsuranceSection from "./components/InsuranceSection";
import BuySellCars from "./components/BuySellCars";
import CustomerReviews from "./components/CustomerReviews";
import AboutUs from "./components/AboutUs";
import GoogleMapSection from "./components/GoogleMapSection";
import FAQSection from "./components/FAQSection";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import PrivacyPolicy from "./components/PrivacyPolicy";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState("");
  const [currentPage, setCurrentPage] = useState<"home" | "privacy">("home");

  useEffect(() => {
    // 3 seconds duration for loader as specified by user
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  if (currentPage === "privacy") {
    return <PrivacyPolicy onBackToHome={() => setCurrentPage("home")} />;
  }

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-black font-sans antialiased selection:bg-brand-accent selection:text-white">
      {/* Global Announcement bar */}
      <AnnouncementBar />

      {/* Sticky Main Navigation */}
      <StickyNavbar onSelectService={setSelectedService} />

      {/* Hero Carousel Banner */}
      <HeroSection onSelectService={setSelectedService} />

      {/* Performance Trust Indicators */}
      <TrustBar />

      {/* Why Choose Us Features */}
      <WhyChooseUs />

      {/* Interactive Expandable Services Grid */}
      <OurServices onSelectService={setSelectedService} />

      {/* Flat Rates Pricing Tiers */}
      <PricingSection onSelectService={setSelectedService} />

      {/* Infinite Scrolling Manufacturer Badges */}
      <SupportedBrands />

      {/* Interactive Process Video Gallery */}
      <WorkingProcess />

      {/* Tinder Swiping Cashless Insurance Section */}
      <InsuranceSection />

      {/* Split Certified Pre-Owned Showroom */}
      <BuySellCars />

      {/* Scrolling Client Testimonials */}
      <CustomerReviews />

      {/* Company Milestones Perspective */}
      <AboutUs />

      {/* Embedded Google Map Workshop Location */}
      <GoogleMapSection />

      {/* FAQs Accordion Block */}
      <FAQSection />

      {/* Main Reservation Scheduling Portal */}
      <BookingSection 
        selectedService={selectedService} 
        onSelectService={setSelectedService} 
      />

      {/* Universal Footer */}
      <Footer onNavigatePrivacy={() => setCurrentPage("privacy")} />

      {/* Floating Interactive Concierge Button */}
      <FloatingWhatsApp />
    </div>
  );
}
