import React from "react";
import { LucideIcon } from "./LucideIcon";
import { MyileLogo } from "./MyileLogo";

interface FooterProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ activeTab, setActiveTab }) => {
  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-peacock-dark text-peacock-cream/70 pt-16 pb-8 border-t border-peacock-green/20" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left pb-12 border-b border-peacock-green/15">
          
          {/* Logo column (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            {/* High-fidelity Myile Peacock Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => handleNavClick("home")}
              id="footer-logo-container"
            >
              <div className="relative transform group-hover:scale-105 transition-transform duration-300">
                <MyileLogo showText={false} size="sm" className="w-11 h-11" />
              </div>
              <div>
                <span className="text-xl font-bold font-serif tracking-tight text-white block leading-none">
                  Myile
                </span>
                <span className="text-[9px] uppercase tracking-wider text-peacock-gold font-mono font-bold block mt-1">
                  WITH YOU TILL THE LAST MILE
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-peacock-cream/80 leading-relaxed max-w-sm">
                Myile manages back-office operations, CRM pipelines, and custom databases with elite specialized operators and workflow automations. Guided by tireless, vibrant precision.
              </p>
              <p className="text-xs text-peacock-gold italic font-medium font-serif">
                "For you, the extra mile."
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5" id="footer-social-links">
              <a 
                href="https://linkedin.com/company/myile-operations" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-peacock-teal/30 hover:bg-peacock-teal text-peacock-cream hover:text-peacock-gold rounded-lg border border-peacock-green/20 transition-colors cursor-pointer"
              >
                <LucideIcon name="Linkedin" size={16} />
              </a>
              <a 
                href="mailto:operations@myile-ops.co"
                className="p-2 bg-peacock-teal/30 hover:bg-peacock-teal text-peacock-cream hover:text-peacock-gold rounded-lg border border-peacock-green/20 transition-colors cursor-pointer"
              >
                <LucideIcon name="Mail" size={16} />
              </a>
              <a 
                href="https://myile-ops.co"
                className="p-2 bg-peacock-teal/30 hover:bg-peacock-teal text-peacock-cream hover:text-peacock-gold rounded-lg border border-peacock-green/20 transition-colors cursor-pointer"
              >
                <LucideIcon name="Globe" size={16} />
              </a>
            </div>
          </div>

           {/* Quick links navigation (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold font-mono text-peacock-gold uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-sm list-none pl-0">
              {([
                { id: "home", label: "Home Base" },
                { id: "services", label: "Capabilities Directory" },
                { id: "industries", label: "Sector Blueprints" },
                { id: "sandbox", label: "Interactive Lab" },
                { id: "about", label: "Corporate Story" },
                { id: "contact", label: "Connect SLA Desk" }
              ] as const).map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="hover:text-peacock-gold transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services lookup (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold font-mono text-peacock-gold uppercase tracking-wider">Top Capabilities</h4>
            <ul className="space-y-2 text-xs list-none pl-0 text-peacock-cream/80">
              <li>HR Operations</li>
              <li>CRM Administration</li>
              <li>Logistics Documents</li>
              <li>AP/AR Support</li>
              <li>AI Document Processing</li>
              <li>Workflow Automation</li>
            </ul>
          </div>

          {/* Security certifications and credentials (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold font-mono text-peacock-gold uppercase tracking-wider">Corporate Security</h4>
            <p className="text-xs text-peacock-cream/85 leading-relaxed">
              We operate under rigorous zero-trust frameworks, enforcing multi-factor verification (MFA) and granular IAM policies.
            </p>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-peacock-teal/40 text-peacock-gold text-[10px] font-bold font-mono border border-peacock-green/30 rounded">
                ⚙ ISO 27001 IN PROCESS
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-peacock-teal/40 text-peacock-gold text-[10px] font-bold font-mono border border-peacock-green/30 rounded ml-2">
                ⚙ HIPAA IN PROCESS
              </div>
            </div>
          </div>

        </div>

        {/* Sub-footer Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-peacock-cream/50">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© 2026 Myile Operations Ltd. All rights reserved.</span>
            <a href="https://myile-ops.co" className="hover:text-peacock-gold transition-colors">https://myile-ops.co</a>
          </div>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-peacock-gold">Privacy Policy</span>
            <span className="cursor-pointer hover:text-peacock-gold">Terms of Operations</span>
            <span className="cursor-pointer hover:text-peacock-gold">Security SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
