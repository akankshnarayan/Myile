import React from "react";
import { LucideIcon } from "./LucideIcon";
import { MyileLogo } from "./MyileLogo";

export const AboutSection: React.FC = () => {
  const values = [
    {
      title: "Integrated Human & Automation",
      desc: "We don't believe in faceless black-box software or manual administrative slogs. We pair custom-built programmatic workflows with elite operations specialists to deliver the perfect mix of speed and human judgment.",
      icon: "Workflow"
    },
    {
      title: "Human-in-the-Loop Integrity",
      desc: "Automated systems are fast but lack context. We compile data through intelligent OCR and workflow triggers, then verify every single record with rigorous human audits before updating your live systems.",
      icon: "Cpu"
    },
    {
      title: "Absolute Operational Security",
      desc: "We operate on strict zero-trust data protocols. Your company files never leave your approved cloud directories, and all specialist actions are logged via verified enterprise audit trails.",
      icon: "Database"
    }
  ];

  return (
    <section className="py-20 bg-peacock-dark relative overflow-hidden border-b border-peacock-green/15" id="about-section-wrapper">
      {/* Peacock decorative gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-peacock-bright/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-peacock-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Story Left */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-peacock-teal/40 border border-peacock-green/30 rounded-full text-peacock-gold text-xs font-bold tracking-wider uppercase font-mono">
              <LucideIcon name="Users" size={12} className="text-peacock-gold" />
              Our Story
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-white">
              Operational Excellence, Guided by Vibrant Precision.
            </h2>

            <p className="text-peacock-cream/85 text-base leading-relaxed">
              Founded in 2024, Myile was created to cure back-office exhaustion. Fast-growing organizations frequently scale their headcount only to find their senior leaders spending up to 40% of their working hours manually copying invoices, correcting duplicate CRM contact fields, and formatting PowerPoint templates.
            </p>

            <p className="text-peacock-cream/85 text-base leading-relaxed">
              We knew there had to be a more balanced way. Myile re-engineered business support by building custom software integrations and staffing them with elite operations specialists. This delivers a complete, hassle-free operational backbone for logistics providers, SaaS hubs, accounting firms, and professional teams.
            </p>

            {/* Why Peacock theme explanation */}
            <div className="bg-peacock-teal/30 p-6 rounded-2xl border border-peacock-green/25 space-y-3">
              <h3 className="text-sm font-bold text-peacock-gold uppercase tracking-wider font-mono flex items-center gap-1.5">
                <LucideIcon name="Sparkle" className="text-peacock-gold" size={14} />
                The Symbolic Peacock Philosophy
              </h3>
              <p className="text-xs text-peacock-cream/90 leading-relaxed font-semibold">
                In classical design, the peacock represents guidance, vigilant surveillance, and rich structural harmony. At Myile, we embody these values. The "eyes" on our peacock feathers symbolize our integrated operational monitors — combining automated software listeners with the vigilant, hands-on oversight of our human specialists, keeping a reliable, round-the-clock watch over your documents and pipelines to execute every transaction with perfect, absolute accuracy.
              </p>
            </div>
          </div>

          {/* Visual Elements Right */}
          <div className="lg:col-span-5 bg-peacock-dark border border-peacock-green/35 shadow-2xl p-8 rounded-3xl text-left text-white relative overflow-hidden flex flex-col justify-between min-h-[460px]">
            {/* Peacock Feather background SVG watermark */}
            <div className="absolute -right-12 -bottom-12 opacity-15 pointer-events-none w-80 h-80">
              <MyileLogo showText={true} size="auto" />
            </div>

            <div className="space-y-6 relative z-10">
              <h3 className="text-xl font-bold tracking-tight text-white border-b border-peacock-green/25 pb-3">
                Corporate Coordinates
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-peacock-teal/50 rounded-lg text-peacock-gold mt-1">
                    <LucideIcon name="Globe" size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-peacock-gold font-mono uppercase tracking-wider block">Official Web Workspace</span>
                    <a 
                      href="https://myile-ops.co" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white hover:text-peacock-gold transition-colors flex items-center gap-1 mt-0.5"
                    >
                      https://myile-ops.co
                      <LucideIcon name="ExternalLink" size={12} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-peacock-teal/50 rounded-lg text-peacock-gold mt-1">
                    <LucideIcon name="Linkedin" size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-peacock-gold font-mono uppercase tracking-wider block">LinkedIn Channel</span>
                    <a 
                      href="https://linkedin.com/company/myile-operations" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white hover:text-peacock-gold transition-colors flex items-center gap-1 mt-0.5"
                    >
                      linkedin.com/company/myile-operations
                      <LucideIcon name="ExternalLink" size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-peacock-green/25 relative z-10 flex items-center justify-between text-[11px] text-peacock-green">
              <span>DUNS: 88-291-0012</span>
              <span>ISO 27001 (In Process)</span>
            </div>
          </div>
        </div>

        {/* Pillars / Values Section */}
        <div className="mt-24 border-t border-peacock-green/15 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-peacock-teal/15 p-6 sm:p-8 rounded-2xl border border-peacock-green/15 text-left space-y-4">
                <div className="p-3 bg-peacock-gold text-peacock-dark rounded-xl inline-block">
                  <LucideIcon name={val.icon} size={20} />
                </div>
                <h4 className="text-base font-bold font-serif text-white">{val.title}</h4>
                <p className="text-xs sm:text-sm text-peacock-cream/80 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
