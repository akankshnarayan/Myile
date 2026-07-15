import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { InteractiveShowcase } from "./components/InteractiveShowcase";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { LucideIcon } from "./components/LucideIcon";
import { MyileLogo } from "./components/MyileLogo";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>("");

  const handleSetSelectedService = (serviceName: string) => {
    setSelectedServiceForContact(serviceName);
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case "home":
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Hero setActiveTab={setActiveTab} />
            
            {/* Quick value prop banner for Home tab */}
            <section className="py-16 bg-peacock-teal/20 border-y border-peacock-teal/40 text-peacock-cream">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                  <div className="space-y-3">
                    <div className="p-3 bg-peacock-teal/55 text-peacock-gold rounded-xl inline-block border border-peacock-green/20">
                      <LucideIcon name="Workflow" size={20} />
                    </div>
                    <h3 className="text-lg font-bold font-serif text-peacock-gold">Programmatic Integration</h3>
                    <p className="text-sm text-peacock-cream/80 leading-relaxed">
                      We wire your CRM, database pipelines, and document folders into pristine, synchronized pipelines using custom API scripts and triggers.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-peacock-teal/55 text-peacock-gold rounded-xl inline-block border border-peacock-green/20">
                      <LucideIcon name="Cpu" size={20} />
                    </div>
                    <h3 className="text-lg font-bold font-serif text-peacock-gold">AI-Enhanced Structuring</h3>
                    <p className="text-sm text-peacock-cream/80 leading-relaxed">
                      No more manual data entry. We deploy advanced language models to index contracts, catalog billing waybills, and scrape invoice costs in seconds.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-peacock-teal/55 text-peacock-gold rounded-xl inline-block border border-peacock-green/20">
                      <LucideIcon name="Users" size={20} />
                    </div>
                    <h3 className="text-lg font-bold font-serif text-peacock-gold">Elite Specialist Desk</h3>
                    <p className="text-sm text-peacock-cream/80 leading-relaxed">
                      Software alone is never enough. Our professional back-office operators verify and audit every automated trigger before it commits to your books.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Call Out to Sandbox on Home */}
            <section className="py-16 bg-gradient-to-r from-peacock-dark via-peacock-teal to-peacock-dark text-peacock-cream border-t border-peacock-green/20 relative overflow-hidden">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none w-72 h-72">
                <MyileLogo showText={true} size="auto" />
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
                <div className="max-w-3xl space-y-4">
                  <span className="text-xs font-bold font-mono text-peacock-green uppercase tracking-wider block">Sandbox Interactive</span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight text-white">
                    Want to see how Myile automates operations live?
                  </h2>
                  <p className="text-peacock-cream/90 text-sm sm:text-base leading-relaxed">
                    Test our Live Sandbox to try out AI document scraping, map Zapier webhook triggers, and calculate exact operational cost savings for your business.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setActiveTab("sandbox");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="px-6 py-3 bg-peacock-gold hover:bg-amber-500 text-peacock-dark font-bold text-xs uppercase rounded-xl transition-all shadow cursor-pointer flex items-center gap-2"
                    >
                      Enter Interactive Sandbox
                      <LucideIcon name="ArrowRight" size={14} className="text-peacock-dark" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        );
      case "services":
        return (
          <motion.div
            key="services"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <ServicesSection 
              setActiveTab={setActiveTab} 
              setSelectedServiceForContact={handleSetSelectedService} 
            />
          </motion.div>
        );
      case "industries":
        return (
          <motion.div
            key="industries"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <IndustriesSection setActiveTab={setActiveTab} />
          </motion.div>
        );
      case "sandbox":
        return (
          <motion.div
            key="sandbox"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <InteractiveShowcase />
          </motion.div>
        );
      case "about":
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <AboutSection />
          </motion.div>
        );
      case "contact":
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <ContactSection selectedServiceForContact={selectedServiceForContact} />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-peacock-dark text-peacock-cream flex flex-col justify-between font-sans selection:bg-peacock-teal selection:text-peacock-gold overflow-x-hidden">
      <div className="w-full">
        {/* Navigation Header */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Multi-view Container */}
        <main className="w-full relative">
          <AnimatePresence mode="wait">
            {renderActiveView()}
          </AnimatePresence>
        </main>
      </div>

      {/* Corporate Footer */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
