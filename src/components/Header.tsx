import React, { useState } from "react";
import { LucideIcon } from "./LucideIcon";
import { MyileLogo } from "./MyileLogo";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "industries", label: "Industries" },
    { id: "sandbox", label: "Live Sandbox" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact Us" }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-peacock-dark/95 backdrop-blur-md border-b border-peacock-green/20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick("home")}
            id="header-logo-container"
          >
            {/* High-fidelity Myile Peacock Logo */}
            <div className="relative transform group-hover:scale-105 transition-transform duration-300">
              <MyileLogo showText={false} size="sm" className="w-12 h-12" />
            </div>
            <div>
              <span className="text-2xl font-bold tracking-tight text-peacock-gold font-serif block leading-none">
                Myile
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-peacock-green font-mono font-bold block mt-1">
                WITH YOU TILL THE LAST MILE
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-peacock-gold bg-peacock-teal/50 border-b-2 border-peacock-gold font-semibold"
                      : "text-peacock-cream hover:text-peacock-gold hover:bg-peacock-teal/25"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("contact")}
              id="cta-get-started"
              className="px-5 py-2.5 bg-peacock-gold hover:bg-amber-500 text-peacock-dark font-semibold text-sm rounded-xl shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer border border-peacock-gold/30 group"
            >
              Consult Myile
              <LucideIcon 
                name="ArrowRight" 
                size={16} 
                className="group-hover:translate-x-1 transition-transform text-peacock-dark" 
              />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              id="mobile-menu-toggle"
              className="inline-flex items-center justify-center p-2 rounded-lg text-peacock-cream hover:text-peacock-gold hover:bg-peacock-teal/40 focus:outline-none cursor-pointer"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-peacock-dark/98 border-b border-peacock-green/20 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200" id="mobile-nav">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-btn-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? "text-peacock-gold bg-peacock-teal/60 font-semibold border-l-4 border-peacock-gold"
                      : "text-peacock-cream hover:text-peacock-gold hover:bg-peacock-teal/30"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 pb-2 px-4 border-t border-peacock-teal/45">
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full py-3 bg-peacock-gold text-peacock-dark font-medium text-center rounded-xl shadow-md block cursor-pointer"
              >
                Consult Myile
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
