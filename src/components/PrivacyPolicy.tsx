import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Shield, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

interface PrivacyPolicyProps {
  onBackToHome: () => void;
}

export default function PrivacyPolicy({ onBackToHome }: PrivacyPolicyProps) {
  // Automatically scroll to top when page is opened
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-black font-sans antialiased selection:bg-brand-accent selection:text-white">
      {/* Premium Minimal Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/80 px-4 md:px-6 py-4 transition-all">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div 
            onClick={onBackToHome}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
          >
            <img 
              src="https://i.ibb.co/xSx6BFFy/autobird-logo.png" 
              alt="Autobird Garage Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-sm sm:text-base tracking-[0.1em] text-black italic uppercase">
                AUTOBIRD <span className="text-brand-accent">GARAGE</span>
              </span>
              <span className="text-[6px] sm:text-[7px] tracking-[0.2em] font-light uppercase mt-0.5 text-black/50">
                AUTOMOTIVE EXCELLENCE
              </span>
            </div>
          </div>

          <button 
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-neutral-700 hover:text-brand-accent border border-neutral-200 hover:border-brand-accent/30 rounded-xl bg-white hover:bg-neutral-50 shadow-sm transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden py-12 md:py-20 bg-black text-white">
        <div className="absolute inset-0 bg-radial-beam opacity-30 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-brand-accent/15 border border-brand-accent/30 rounded-full text-brand-accent text-[9px] font-mono uppercase tracking-widest mb-4">
              <Shield className="w-3.5 h-3.5 animate-pulse" /> LEGAL COMPLIANCE
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none uppercase">
              Privacy Policy
            </h1>
            <p className="mt-4 text-xs sm:text-sm text-neutral-400 font-mono tracking-wider uppercase">
              Effective Date: <span className="text-white font-medium">18th May, 2026</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Quick Navigation Sidebar / Table of Contents */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-6 hidden lg:block">
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]">
              <h4 className="text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase mb-4 font-bold">
                DOCUMENT SECTIONS
              </h4>
              <nav className="space-y-1">
                {[
                  { id: "intro", label: "Overview" },
                  { id: "collect", label: "Information We Collect" },
                  { id: "use", label: "How We Use Data" },
                  { id: "cookies", label: "Cookies & Analytics" },
                  { id: "sharing", label: "Information Sharing" },
                  { id: "security", label: "Data Security" },
                  { id: "thirdparty", label: "Third-Party Services" },
                  { id: "rights", label: "Your Rights" },
                  { id: "links", label: "Third-Party Links" },
                  { id: "changes", label: "Changes to This Policy" },
                  { id: "contact", label: "Contact Information" }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.id}`}
                    className="block px-3 py-2 text-xs text-neutral-500 hover:text-brand-accent hover:bg-neutral-50 rounded-lg transition-all font-medium border-l-2 border-transparent hover:border-brand-accent"
                  >
                    {idx + 1}. {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="bg-neutral-900 text-white rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial-beam opacity-30 pointer-events-none" />
              <h5 className="font-display font-bold text-sm text-white mb-2">Need immediate assistance?</h5>
              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                Our support desk is always open for questions regarding your data privacy.
              </p>
              <a 
                href="mailto:garageautobird@gmail.com"
                className="inline-flex items-center gap-1 text-xs text-brand-accent hover:text-white font-semibold tracking-wider uppercase transition-colors"
              >
                Email Support <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </aside>

          {/* Core Content Body */}
          <article className="lg:col-span-8 bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-10 md:p-12 shadow-[0_10px_45px_-12px_rgba(0,0,0,0.03)] space-y-12">
            
            {/* Overview / Intro */}
            <section id="intro" className="scroll-mt-28 space-y-4">
              <p className="text-neutral-700 leading-relaxed font-light text-sm sm:text-base">
                At <strong className="font-semibold text-black">AutoBird Garage</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the information you provide when you visit our website or use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section id="collect" className="scroll-mt-28 space-y-4 border-t border-neutral-100 pt-8">
              <h2 className="font-display font-black text-lg sm:text-xl text-black tracking-tight uppercase">
                1. Information We Collect
              </h2>
              <p className="text-neutral-600 leading-relaxed font-light text-xs sm:text-sm">
                When you use our website, we may collect:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Name",
                  "Phone number",
                  "Email address",
                  "Address (if provided)",
                  "Vehicle details submitted through forms",
                  "Insurance-related information you choose to provide",
                  "Messages and inquiries",
                  "IP address, browser type, device info, and analytics data"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0 animate-pulse" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section id="use" className="scroll-mt-28 space-y-4 border-t border-neutral-100 pt-8">
              <h2 className="font-display font-black text-lg sm:text-xl text-black tracking-tight uppercase">
                2. How We Use Your Information
              </h2>
              <p className="text-neutral-600 leading-relaxed font-light text-xs sm:text-sm">
                We use your information to:
              </p>
              <ul className="grid grid-cols-1 gap-2.5 pt-2">
                {[
                  "Respond to your inquiries",
                  "Schedule vehicle servicing or inspections",
                  "Assist with vehicle buying and selling",
                  "Provide insurance quotations and support",
                  "Contact you regarding your request",
                  "Improve our website and services",
                  "Send service updates or promotional communications (you may opt out at any time)",
                  "Comply with legal obligations"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Cookies */}
            <section id="cookies" className="scroll-mt-28 space-y-4 border-t border-neutral-100 pt-8">
              <h2 className="font-display font-black text-lg sm:text-xl text-black tracking-tight uppercase">
                3. Cookies
              </h2>
              <p className="text-neutral-700 leading-relaxed font-light text-xs sm:text-sm">
                Our website uses cookies and similar technologies to improve your browsing experience, analyze website traffic, and enhance our services. You can manage or disable cookies through your browser settings.
              </p>
            </section>

            {/* Information Sharing */}
            <section id="sharing" className="scroll-mt-28 space-y-4 border-t border-neutral-100 pt-8">
              <h2 className="font-display font-black text-lg sm:text-xl text-black tracking-tight uppercase">
                4. Information Sharing
              </h2>
              <p className="text-neutral-700 leading-relaxed font-light text-xs sm:text-sm">
                We do not sell or rent your personal information.
              </p>
              <p className="text-neutral-700 leading-relaxed font-light text-xs sm:text-sm">
                We may share your information with trusted third parties only when necessary to:
              </p>
              <ul className="space-y-2.5 pt-2">
                {[
                  "Process insurance requests",
                  "Complete vehicle transactions",
                  "Provide requested services",
                  "Comply with legal or regulatory requirements"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Data Security */}
            <section id="security" className="scroll-mt-28 space-y-4 border-t border-neutral-100 pt-8">
              <h2 className="font-display font-black text-lg sm:text-xl text-black tracking-tight uppercase">
                5. Data Security
              </h2>
              <p className="text-neutral-700 leading-relaxed font-light text-xs sm:text-sm">
                We take reasonable security measures to protect your personal information against unauthorized access, misuse, or disclosure. However, no internet transmission or electronic storage system is completely secure.
              </p>
            </section>

            {/* Third-Party Services */}
            <section id="thirdparty" className="scroll-mt-28 space-y-4 border-t border-neutral-100 pt-8">
              <h2 className="font-display font-black text-lg sm:text-xl text-black tracking-tight uppercase">
                6. Third-Party Services
              </h2>
              <p className="text-neutral-700 leading-relaxed font-light text-xs sm:text-sm">
                Our website may use third-party services such as analytics, maps, payment providers, or social media integrations. These services have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            {/* Your Rights */}
            <section id="rights" className="scroll-mt-28 space-y-4 border-t border-neutral-100 pt-8">
              <h2 className="font-display font-black text-lg sm:text-xl text-black tracking-tight uppercase">
                7. Your Rights
              </h2>
              <p className="text-neutral-700 leading-relaxed font-light text-xs sm:text-sm">
                Depending on applicable law, you may have the right to:
              </p>
              <ul className="space-y-2.5 pt-2">
                {[
                  "Access your personal information",
                  "Request corrections",
                  "Request deletion of your data",
                  "Withdraw consent where applicable",
                  "Opt out of marketing communications"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-neutral-700 leading-relaxed font-light text-xs sm:text-sm pt-2">
                To exercise these rights, please contact us.
              </p>
            </section>

            {/* Third-Party Links */}
            <section id="links" className="scroll-mt-28 space-y-4 border-t border-neutral-100 pt-8">
              <h2 className="font-display font-black text-lg sm:text-xl text-black tracking-tight uppercase">
                8. Third-Party Links
              </h2>
              <p className="text-neutral-700 leading-relaxed font-light text-xs sm:text-sm">
                Our website may contain links to external websites. We are not responsible for the privacy practices or content of those websites.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section id="changes" className="scroll-mt-28 space-y-4 border-t border-neutral-100 pt-8">
              <h2 className="font-display font-black text-lg sm:text-xl text-black tracking-tight uppercase">
                9. Changes to This Policy
              </h2>
              <p className="text-neutral-700 leading-relaxed font-light text-xs sm:text-sm">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated effective date.
              </p>
            </section>

            {/* Contact Us */}
            <section id="contact" className="scroll-mt-28 space-y-6 border-t border-neutral-100 pt-8">
              <h2 className="font-display font-black text-lg sm:text-xl text-black tracking-tight uppercase">
                10. Contact Us
              </h2>
              <p className="text-neutral-700 leading-relaxed font-light text-xs sm:text-sm">
                If you have any questions about this Privacy Policy or how we handle your information, please contact us:
              </p>
              
              <div className="bg-neutral-50 border border-neutral-200/60 rounded-2xl p-6 space-y-4">
                <h3 className="font-display font-extrabold text-sm sm:text-base text-black tracking-wider uppercase">
                  Auto Bird Garage
                </h3>
                <div className="space-y-3.5 text-xs sm:text-sm text-neutral-600 font-light">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                    <span>Shop No. 52/1A, Near Gayatri Dham, Pleasent Park, Mira Road East, Mira Bhayander, Thane 401107</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>9892205127</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                    <a 
                      href="mailto:garageautobird@gmail.com"
                      className="text-brand-accent hover:underline font-medium"
                    >
                      garageautobird@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </article>
        </div>
      </main>

      {/* Mini Simple Footer */}
      <footer className="bg-black text-white py-10 border-t border-neutral-900 select-none text-center">
        <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] sm:text-xs text-neutral-500 font-mono">
            © {new Date().getFullYear()} AutoBird Garage. All rights reserved.
          </p>
          <button 
            onClick={onBackToHome}
            className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
          >
            Back to home
          </button>
        </div>
      </footer>
    </div>
  );
}
