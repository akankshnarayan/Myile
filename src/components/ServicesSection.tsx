import React, { useState } from "react";
import { servicesData } from "../data";
import { LucideIcon } from "./LucideIcon";
import { Service } from "../types";

interface ServicesSectionProps {
  setActiveTab: (tab: string) => void;
  setSelectedServiceForContact: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  setActiveTab,
  setSelectedServiceForContact
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Capabilities" },
    { id: "customer-support", label: "Customer Support" },
    { id: "customer-experience", label: "Customer Experience" },
    { id: "operations", label: "Business Operations" },
    { id: "technology", label: "Tech & Automations" },
    { id: "finance", label: "Finance & Accounts" },
    { id: "support", label: "Executive & Admin" }
  ];

  const filteredServices = activeCategory === "all"
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleInquireClick = (serviceName: string) => {
    setSelectedServiceForContact(serviceName);
    setActiveTab("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-peacock-dark relative overflow-hidden border-b border-peacock-green/15" id="services-section-wrapper">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-peacock-bright/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-peacock-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-peacock-teal/40 border border-peacock-green/30 rounded-full text-peacock-green text-xs font-bold tracking-wider uppercase font-mono">
            <LucideIcon name="Sparkles" size={12} className="text-peacock-gold" />
            Capabilities Directory
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-white">
            Our Core Services
          </h2>
          <p className="text-base text-peacock-cream/80 leading-relaxed">
            Hover over any capability to see a preview of its tools. Click any item to expand and inspect the core deliverables, technical integrations, and workflows.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6" id="services-category-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setExpandedId(null);
                }}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl border transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-peacock-gold text-peacock-dark border-peacock-gold shadow-sm"
                    : "bg-peacock-teal/30 text-peacock-cream border-peacock-green/20 hover:border-peacock-gold hover:text-peacock-gold hover:bg-peacock-teal/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Expandable Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start" id="services-grid-container">
          {filteredServices.map((service) => {
            const isExpanded = expandedId === service.id;
            const isHovered = hoveredId === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden relative text-left select-none ${
                  isExpanded
                    ? "border-peacock-gold ring-2 ring-peacock-gold/30 bg-peacock-teal/40 shadow-xl col-span-1 md:col-span-2"
                    : isHovered
                    ? "border-peacock-bright -translate-y-1 shadow-2xl bg-peacock-teal/25"
                    : "border-peacock-green/15 bg-peacock-teal/10 shadow-xs"
                }`}
              >
                {/* Accent ribbon when expanded or hovered */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1.5 transition-colors duration-300 ${
                    isExpanded
                      ? "bg-gradient-to-b from-peacock-bright to-peacock-gold"
                      : isHovered
                      ? "bg-peacock-bright"
                      : "bg-peacock-teal/40"
                  }`}
                />

                <div className="p-6 sm:p-8 pl-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Icon + Title */}
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          isExpanded || isHovered
                            ? "bg-peacock-gold text-peacock-dark rotate-6"
                            : "bg-peacock-teal/30 text-peacock-cream"
                        }`}
                      >
                        <LucideIcon name={service.iconName} size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold font-serif text-white flex items-center gap-2">
                          {service.name}
                          {isHovered && !isExpanded && (
                            <span className="text-[10px] text-peacock-gold font-mono font-bold bg-peacock-teal/55 px-2 py-0.5 rounded border border-peacock-green/20 animate-pulse">
                              Expand Preview
                            </span>
                          )}
                        </h3>
                        <p className="text-xs font-mono uppercase tracking-wider text-peacock-green font-bold mt-0.5">
                          Category: {service.category}
                        </p>
                      </div>
                    </div>

                    {/* Expand/Collapse Trigger Button */}
                    <button
                      onClick={() => toggleExpand(service.id)}
                      id={`expand-toggle-btn-${service.id}`}
                      className={`shrink-0 flex items-center justify-center p-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                        isExpanded
                          ? "bg-peacock-gold text-peacock-dark border-peacock-gold font-bold"
                          : "bg-peacock-teal/30 text-peacock-cream border-peacock-green/20 hover:bg-peacock-teal/50 hover:text-peacock-gold"
                      }`}
                    >
                      <span className="text-xs font-bold font-mono uppercase mr-2 hidden sm:inline">
                        {isExpanded ? "Collapse" : "Explore"}
                      </span>
                      <LucideIcon
                        name="ChevronDown"
                        size={16}
                        className={`transform transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-peacock-dark" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Service Description (Always visible, short summary) */}
                  <div className="mt-4 text-peacock-cream/90 text-sm leading-relaxed max-w-4xl">
                    {service.description}
                  </div>

                  {/* HOVER PREVIEW: Show tools and micro-summary when hovered, but not expanded */}
                  {isHovered && !isExpanded && (
                    <div className="mt-4 pt-4 border-t border-dashed border-peacock-green/20 flex flex-wrap items-center gap-x-6 gap-y-2 animate-in fade-in duration-200">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-bold text-peacock-gold font-mono uppercase">Preview Stack:</span>
                        <div className="flex items-center gap-1">
                          {service.tools.slice(0, 3).map((t, i) => (
                            <span key={i} className="text-[10px] bg-peacock-teal/40 text-peacock-green font-bold px-2 py-0.5 rounded border border-peacock-green/10">
                              {t}
                            </span>
                          ))}
                          {service.tools.length > 3 && (
                            <span className="text-[9px] text-peacock-green/60 font-mono font-bold">+{service.tools.length - 3} more</span>
                          )}
                        </div>
                      </div>
                      <div className="text-[11px] text-peacock-cream/70 italic max-w-lg">
                        "{service.previewText}"
                      </div>
                    </div>
                  )}

                  {/* EXPANDED CONTENT DRAWER */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-peacock-green/20 space-y-6 animate-in slide-in-from-top-4 fade-in duration-300" id={`expanded-drawer-${service.id}`}>
                      {/* Deep text block */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-peacock-gold uppercase tracking-wider font-mono flex items-center gap-1">
                          <LucideIcon name="Sparkle" size={12} className="text-peacock-gold" /> Deliverables Overview
                        </h4>
                        <p className="text-peacock-cream/90 text-sm leading-relaxed max-w-5xl">
                          {service.expandedContent}
                        </p>
                      </div>

                      {/* Split list: Features & Tools */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                        {/* Key deliverables lists */}
                        <div className="bg-peacock-dark/80 p-5 rounded-xl border border-peacock-green/15 text-left">
                          <h5 className="text-xs font-bold text-peacock-gold uppercase tracking-wider font-mono mb-3">
                            Key Standard Features
                          </h5>
                          <ul className="space-y-2.5 list-none pl-0">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-peacock-cream/90 font-medium">
                                <LucideIcon name="Check" size={14} className="text-peacock-gold mt-0.5 shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technology stacks used */}
                        <div className="bg-peacock-teal/30 p-5 rounded-xl border border-peacock-green/15 text-left">
                          <h5 className="text-xs font-bold text-peacock-green uppercase tracking-wider font-mono mb-3 flex items-center gap-1">
                            Supported Systems & Platforms
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {service.tools.map((tool, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1.5 px-3 py-1 bg-peacock-dark border border-peacock-green/15 text-peacock-cream text-xs font-bold rounded-lg shadow-2xs"
                              >
                                <span className="w-1.5 h-1.5 bg-peacock-bright rounded-full" />
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA inside expand drawer */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-peacock-green/20">
                        <div className="text-xs text-peacock-green/80 flex items-center gap-1.5 font-mono">
                          <LucideIcon name="CheckCircle2" size={14} className="text-peacock-bright" />
                          <span>Fully customized schemas. SLA-supported workflows.</span>
                        </div>
                        <button
                          onClick={() => handleInquireClick(service.name)}
                          id={`inquire-btn-${service.id}`}
                          className="px-5 py-2.5 bg-peacock-gold text-peacock-dark hover:bg-amber-500 font-bold text-xs rounded-xl transition-colors shadow-xs hover:shadow-md cursor-pointer flex items-center gap-2 self-start sm:self-auto"
                        >
                          Configure {service.name}
                          <LucideIcon name="ArrowRight" size={14} className="text-peacock-dark" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
