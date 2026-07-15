import React, { useState } from "react";
import { industriesData } from "../data";
import { LucideIcon } from "./LucideIcon";

interface IndustriesSectionProps {
  setActiveTab: (tab: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ setActiveTab }) => {
  const [selectedIndId, setSelectedIndId] = useState<string>("logistics");

  const currentIndustry = industriesData.find((i) => i.id === selectedIndId) || industriesData[0];

  return (
    <section className="py-20 bg-peacock-dark relative overflow-hidden border-b border-peacock-green/15" id="industries-section-wrapper">
      {/* Background ambient spots */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-peacock-bright/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-peacock-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-peacock-teal/40 border border-peacock-green/30 rounded-full text-peacock-gold text-xs font-bold tracking-wider uppercase font-mono">
            <LucideIcon name="Sparkle" size={12} className="text-peacock-gold" />
            Sector Blueprints
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-white">
            Tailored Industry Value Propositions
          </h2>
          <p className="text-base text-peacock-cream/85 leading-relaxed">
            Every sector suffers from unique operational bottlenecks. Select your industry below to inspect Myile's custom workflow remedies and performance metrics.
          </p>
        </div>

        {/* Board Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="industries-board-grid">
          
          {/* Left: Interactive List */}
          <div className="lg:col-span-5 space-y-2 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar" id="industry-selector-list">
            {industriesData.map((ind) => {
              const isSelected = selectedIndId === ind.id;
              return (
                <button
                  key={ind.id}
                  id={`ind-selector-btn-${ind.id}`}
                  onClick={() => setSelectedIndId(ind.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer group ${
                    isSelected
                      ? "bg-peacock-teal border-peacock-green/30 text-peacock-gold shadow-md"
                      : "bg-peacock-dark/60 border-peacock-green/15 text-peacock-cream hover:bg-peacock-teal/20 hover:border-peacock-gold"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`p-2.5 rounded-lg shrink-0 transition-colors ${
                        isSelected
                          ? "bg-peacock-dark text-peacock-gold"
                          : "bg-peacock-teal/30 text-peacock-cream group-hover:bg-peacock-teal/50"
                      }`}
                    >
                      <LucideIcon name={ind.iconName} size={18} />
                    </div>
                    <span className="font-bold text-sm sm:text-base truncate">{ind.name}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-peacock-gold text-peacock-dark"
                          : "bg-peacock-teal/55 text-peacock-cream"
                      }`}
                    >
                      {ind.caseStudyMetrics.split(" ")[0]} {/* First word of metric */}
                    </span>
                    <LucideIcon
                      name="ArrowRight"
                      size={14}
                      className={`transform transition-transform ${
                        isSelected ? "translate-x-1 text-peacock-gold" : "text-peacock-cream/50 group-hover:translate-x-1 group-hover:text-peacock-gold"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Rich Blueprint Visualizer Card */}
          <div className="lg:col-span-7 flex" id="industry-blueprint-visualizer">
            <div className="bg-peacock-dark/95 rounded-3xl border border-peacock-green/30 shadow-2xl w-full flex flex-col justify-between overflow-hidden relative">
              
              {/* Peacock accent corner eye */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-peacock-bright/10 to-transparent rounded-full pointer-events-none" />
              
              {/* Card Header */}
              <div className="p-6 sm:p-8 border-b border-peacock-green/20 bg-peacock-teal/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-peacock-teal text-peacock-gold rounded-2xl shadow-sm">
                      <LucideIcon name={currentIndustry.iconName} size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                        {currentIndustry.name} Blueprint
                      </h3>
                      <p className="text-xs text-peacock-green/60 font-mono">Myile Dedicated System Design</p>
                    </div>
                  </div>
                  
                  {/* Case study metric capsule */}
                  <div className="bg-peacock-teal/45 border border-peacock-green/25 rounded-xl px-4 py-2 text-left shrink-0 self-start sm:self-auto">
                    <span className="text-[10px] uppercase font-bold text-peacock-gold font-mono block">Impact Metric</span>
                    <span className="text-base font-bold text-white font-mono">{currentIndustry.caseStudyMetrics}</span>
                  </div>
                </div>
              </div>

              {/* Card Core Content */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 text-left">
                
                {/* Sector Pain Point */}
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1 text-rose-400 text-xs font-bold uppercase tracking-wider font-mono">
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
                    Critical Pain Point
                  </span>
                  <div className="bg-rose-950/20 border border-rose-900/35 p-4 rounded-xl text-sm text-peacock-cream/90 leading-relaxed font-medium">
                    "{currentIndustry.painPoint}"
                  </div>
                </div>

                {/* Myile Dedicated Remedy */}
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1 text-peacock-green text-xs font-bold uppercase tracking-wider font-mono">
                    <span className="w-1.5 h-1.5 bg-peacock-bright rounded-full" />
                    Myile Managed Solution
                  </span>
                  <div className="bg-peacock-teal/30 border border-peacock-green/25 p-4 rounded-xl text-sm text-peacock-cream/95 leading-relaxed font-semibold">
                    {currentIndustry.solution}
                  </div>
                </div>

                {/* Tangible Results */}
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1 text-peacock-gold text-xs font-bold uppercase tracking-wider font-mono">
                    <span className="w-1.5 h-1.5 bg-peacock-gold rounded-full" />
                    Target Outcomes & Results
                  </span>
                  <p className="text-peacock-cream/80 text-sm leading-relaxed">
                    By embedding optimized digital paths and dedicated back-office experts, we accomplish:
                  </p>
                  <div className="bg-peacock-teal/15 p-4 rounded-xl border border-peacock-green/20 text-sm font-semibold text-white flex items-center gap-2.5">
                    <LucideIcon name="CheckCircle2" size={18} className="text-peacock-gold shrink-0" />
                    <span>{currentIndustry.impactText}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer (Mock reference case study) */}
              <div className="p-6 sm:p-8 border-t border-peacock-green/20 bg-peacock-teal/60 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-left">
                  <span className="text-[10px] text-peacock-gold font-mono uppercase tracking-wider block">Operational Case Study</span>
                  <span className="text-sm font-bold text-white block mt-0.5">{currentIndustry.caseStudyTitle}</span>
                </div>
                <button
                  onClick={() => setActiveTab("contact")}
                  className="px-5 py-2.5 bg-peacock-gold hover:bg-amber-500 text-peacock-dark font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer shrink-0 flex items-center justify-center gap-2 self-start sm:self-auto"
                >
                  Consult on this blueprint
                  <LucideIcon name="ArrowRight" size={14} className="text-peacock-dark" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
