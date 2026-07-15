import React, { useState } from "react";
import { LucideIcon } from "./LucideIcon";

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

interface WorkflowDemo {
  id: string;
  name: string;
  triggerIcon: string;
  triggerText: string;
  manualSteps: string[];
  manualTime: string;
  myileSteps: string[];
  myileTime: string;
  efficiencyGain: string;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab }) => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<string>("invoice");

  const workflows: WorkflowDemo[] = [
    {
      id: "invoice",
      name: "AP Invoice Processing",
      triggerIcon: "Receipt",
      triggerText: "Vendor invoices arrive in email PDF format.",
      manualSteps: [
        "Manager downloads PDF and opens multiple browser tabs",
        "Manually copies price, line items, and addresses into ERP",
        "Checks bank ledgers manually for double-billing",
        "Sends internal Slack message to confirm division approval"
      ],
      manualTime: "2-3 Days",
      myileSteps: [
        "AI-assisted OCR instantly scrapes cost data & line items",
        "Deduplication algorithm verifies ledger for matching rows",
        "Automated routing requests department sign-off via Slack",
        "Specialist checks compliance before final ERP update"
      ],
      myileTime: "< 15 Minutes",
      efficiencyGain: "98% Speed Increase"
    },
    {
      id: "leads",
      name: "CRM Lead Routing",
      triggerIcon: "Database",
      triggerText: "High-value enterprise lead submits contact form.",
      manualSteps: [
        "Lead sits in inbound mailbox overnight",
        "Sales VP manually parses size, territory, and industry",
        "Assigns contact via manual spreadsheet rows",
        "SDR crafts standard intro message 18 hours later"
      ],
      manualTime: "18+ Hours",
      myileSteps: [
        "Webhook captures form data instantly & maps fields",
        "Data enrichment scripts retrieve size & region via API",
        "CRM specialist verifies routing priority and lead assignment",
        "SDR reviews custom briefing and activates approved sequence"
      ],
      myileTime: "< 5 Minutes",
      efficiencyGain: "95% Faster Routing"
    },
    {
      id: "hiring",
      name: "Candidate Scheduling",
      triggerIcon: "UserPlus",
      triggerText: "Top-tier engineer clears the initial screening call.",
      manualSteps: [
        "Recruiter emails back-and-forth for calendar availability",
        "Manually checks 3 panel interviewers' schedules",
        "Creates draft Zoom links and calendar invites manually",
        "Updates ATS records for interview progress logs"
      ],
      manualTime: "48 Hours",
      myileSteps: [
        "ATS stage change triggers scheduling invitation",
        "Calendar engine matches interviewer panels instantly",
        "Auto-drafts Zoom links and interviewer prep briefs",
        "Recruitment Ops specialist audits timezone slots & confirms"
      ],
      myileTime: "5 Minutes",
      efficiencyGain: "10x Shorter Turnaround"
    }
  ];

  const currentWorkflow = workflows.find((w) => w.id === selectedWorkflow) || workflows[0];

  return (
    <section className="relative overflow-hidden bg-peacock-dark text-peacock-cream pt-10 pb-20 md:py-24 border-b border-peacock-green/15">
      {/* Decorative ambient peacock circles */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-peacock-bright/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-peacock-teal/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-72 h-72 bg-peacock-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-peacock-teal/40 border border-peacock-green/30 rounded-full text-peacock-green text-xs font-semibold uppercase tracking-wider font-mono">
              <LucideIcon name="Sparkle" className="text-peacock-gold animate-pulse" size={14} />
              Operational Back-Office Elite
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-white leading-[1.1]">
              The Backbone of Your <br />
              <span className="text-peacock-gold italic font-normal">
                Operations, Re-engineered.
              </span>
            </h1>

            {/* Elite Brand Taglines */}
            <div className="border-l-2 border-peacock-gold pl-4 py-1 space-y-1 bg-peacock-teal/10 rounded-r-lg max-w-xl">
              <p className="text-xs font-bold tracking-widest text-peacock-green uppercase font-mono">
                WITH YOU TILL THE LAST MILE.
              </p>
              <p className="text-sm text-peacock-gold italic font-medium font-serif">
                "For you, the extra mile."
              </p>
            </div>

            <p className="text-lg text-peacock-cream/90 max-w-2xl leading-relaxed">
              Myile manages the high-complexity, repetitive tasks that drain your team. We supply expert specialists backed by custom automation to streamline <strong className="text-peacock-gold font-bold font-serif">HR Operations, CRM hygiene, Logistics, and AP/AR</strong>. No friction. No missed entries. Just perfect execution.
            </p>

            {/* Quick stats banner */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-peacock-green/20 max-w-xl">
              <div className="text-left">
                <span className="block text-2xl sm:text-3xl font-bold font-serif text-peacock-gold">15+ Hrs</span>
                <span className="text-xs text-peacock-green/80 font-medium">Reclaimed per Manager / Wk</span>
              </div>
              <div className="text-left border-l border-peacock-green/20 pl-4">
                <span className="block text-2xl sm:text-3xl font-bold font-serif text-peacock-gold">99.8%</span>
                <span className="text-xs text-peacock-green/80 font-medium">Manifest & Ledger Accuracy</span>
              </div>
              <div className="text-left border-l border-peacock-green/20 pl-4">
                <span className="block text-2xl sm:text-3xl font-bold font-serif text-peacock-gold">10 Min</span>
                <span className="text-xs text-peacock-green/80 font-medium">Lead Routing Response SLA</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => setActiveTab("services")}
                id="hero-explore-services"
                className="px-8 py-4 bg-peacock-gold hover:bg-amber-500 text-peacock-dark font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center cursor-pointer group"
              >
                Explore Services
              </button>
              <button
                onClick={() => setActiveTab("sandbox")}
                id="hero-try-sandbox"
                className="px-8 py-4 bg-peacock-teal/30 hover:bg-peacock-teal/55 text-peacock-cream font-bold rounded-xl border border-peacock-green/30 shadow-xs transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer group"
              >
                <LucideIcon name="Cpu" className="text-peacock-green group-hover:scale-110 transition-transform" />
                Try Live Sandbox
              </button>
            </div>
          </div>

          {/* Hero Right Widget - Live Workflow Simulator */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-peacock-dark/95 rounded-3xl border border-peacock-green/30 shadow-2xl overflow-hidden relative" id="workflow-simulator-card">
              {/* Card Header peacock ribbon */}
              <div className="h-2 bg-gradient-to-r from-peacock-teal via-peacock-bright to-peacock-gold" />
              
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-peacock-green animate-ping" />
                    <span className="text-xs font-bold text-peacock-green uppercase tracking-wider font-mono">
                      Workflow Simulator
                    </span>
                  </div>
                  <span className="text-xs text-peacock-cream/60 font-mono">Active Engine v2.4</span>
                </div>

                <div className="space-y-2 text-left">
                  <h3 className="text-base font-bold font-serif text-white">Choose a pipeline template:</h3>
                  {/* Tabs */}
                  <div className="grid grid-cols-3 gap-2 bg-peacock-dark/60 p-1.5 rounded-xl border border-peacock-green/25" id="simulator-tabs">
                    {workflows.map((w) => (
                      <button
                        key={w.id}
                        id={`sim-tab-${w.id}`}
                        onClick={() => setSelectedWorkflow(w.id)}
                        className={`py-2 px-1 text-xs font-bold rounded-lg transition-all cursor-pointer flex flex-col items-center gap-1 ${
                          selectedWorkflow === w.id
                            ? "bg-peacock-teal text-peacock-gold border border-peacock-green/45 shadow-sm font-semibold"
                            : "text-peacock-cream/70 hover:text-peacock-gold hover:bg-peacock-teal/20"
                        }`}
                      >
                        <LucideIcon name={w.triggerIcon} size={15} className={selectedWorkflow === w.id ? "text-peacock-gold" : "text-peacock-cream/50"} />
                        <span className="text-[10px] truncate w-full text-center">{w.name.split(" ")[1] || w.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trigger description */}
                <div className="bg-peacock-teal/20 p-4 rounded-xl border border-peacock-green/20 text-left text-sm flex items-start gap-3">
                  <div className="p-2 bg-peacock-teal/40 rounded-lg text-peacock-gold mt-0.5">
                    <LucideIcon name="Sparkles" size={16} />
                  </div>
                  <div>
                    <span className="font-semibold text-peacock-gold text-xs uppercase block tracking-wider font-mono">Trigger Event:</span>
                    <p className="text-xs text-peacock-cream/90 font-medium mt-0.5">{currentWorkflow.triggerText}</p>
                  </div>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Manual Pathway */}
                  <div className="bg-rose-950/20 border border-rose-900/35 p-4 rounded-xl text-left space-y-3 relative group">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-rose-300 font-mono uppercase">Traditional Way</span>
                      <span className="text-xs font-semibold px-2 py-0.5 bg-rose-950 text-rose-300 border border-rose-900/40 rounded font-mono">
                        {currentWorkflow.manualTime}
                      </span>
                    </div>
                    <ul className="space-y-2 text-[11px] text-peacock-cream/70 list-none pl-0">
                      {currentWorkflow.manualSteps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-rose-400 mt-0.5 font-bold">×</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Myile Pathway */}
                  <div className="bg-peacock-teal/30 border border-peacock-green/30 p-4 rounded-xl text-left space-y-3 relative overflow-hidden group">
                    {/* Glowing background */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-peacock-bright/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                    
                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-xs font-bold text-peacock-green font-mono uppercase flex items-center gap-1">
                        <LucideIcon name="Sparkle" size={12} className="text-peacock-gold" /> Myile Process
                      </span>
                      <span className="text-xs font-bold px-2 py-0.5 bg-peacock-bright/35 text-peacock-gold border border-peacock-green/35 rounded font-mono">
                        {currentWorkflow.myileTime}
                      </span>
                    </div>
                    <ul className="space-y-2 text-[11px] text-peacock-cream/95 list-none pl-0 relative z-10">
                      {currentWorkflow.myileSteps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <LucideIcon name="Check" className="text-peacock-gold mt-0.5 shrink-0" size={11} />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Efficiency badge */}
                <div className="bg-gradient-to-r from-peacock-teal to-peacock-dark border border-peacock-green/25 p-4 rounded-xl text-center relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-24 h-24 text-white">
                      <ellipse cx="50" cy="50" rx="30" ry="40" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-xs text-peacock-green font-mono uppercase tracking-wider block">Efficiency Impact</span>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="text-lg font-bold text-peacock-gold font-mono">{currentWorkflow.efficiencyGain}</span>
                    <span className="text-xs text-peacock-cream">saved with Myile Ops</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
