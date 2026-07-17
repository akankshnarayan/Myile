import React from "react";
import { LucideIcon } from "./LucideIcon";
import { MyileLogo } from "./MyileLogo";

export const AboutSection: React.FC = () => {
  const coreValues = [
    {
      title: "Respect",
      desc: "We treat every client, colleague, customer, and partner with dignity and professionalism. Respect is reflected in how we communicate, how we listen, and how we honour commitments.",
      icon: "Heart"
    },
    {
      title: "Responsibility",
      desc: "We accept ownership of outcomes. We do not hide behind contracts or excuses. If something is ours to solve, we solve it.",
      icon: "ShieldAlert"
    },
    {
      title: "Relationships",
      desc: "Business is built on people. We measure success by the strength of the relationships we create, not only by the contracts we sign.",
      icon: "Handshake"
    },
    {
      title: "Excellence",
      desc: "Good enough is never our standard. We continually improve our processes, our knowledge, and our service so our clients receive exceptional support.",
      icon: "Award"
    },
    {
      title: "Integrity",
      desc: "Trust is earned through honesty. We communicate openly, admit mistakes quickly, and always choose what is right over what is convenient.",
      icon: "Shield"
    },
    {
      title: "Curiosity",
      desc: "We seek to understand our clients’ businesses before offering solutions. The better we understand their world, the better we can contribute to their success.",
      icon: "Lightbulb"
    }
  ];

  const standardQuestions = [
    "Does this earn trust?",
    "Does this strengthen the relationship?",
    "Are we taking ownership?",
    "Are we creating long-term value?",
    "Would we be proud if this represented our company?"
  ];

  return (
    <section className="py-20 bg-peacock-dark relative overflow-hidden border-b border-peacock-green/15" id="about-section-wrapper">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-peacock-bright/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-peacock-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Story Grid (Original Story & Coordinates) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
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
          <div className="lg:col-span-5 bg-peacock-dark border border-peacock-green/35 shadow-2xl p-8 rounded-3xl text-left text-white relative overflow-hidden flex flex-col justify-between min-h-[400px]">
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
                    <LucideIcon name="Mail" size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-peacock-gold font-mono uppercase tracking-wider block">Direct Contact Email</span>
                    <a 
                      href="mailto:akanksh@gomyile.com" 
                      className="text-sm font-bold text-white hover:text-peacock-gold transition-colors mt-0.5 block"
                    >
                      akanksh@gomyile.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-peacock-teal/50 rounded-lg text-peacock-gold mt-1">
                    <LucideIcon name="Globe" size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-peacock-gold font-mono uppercase tracking-wider block">Official Web Workspace</span>
                    <a 
                      href="https://myile.onrender.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white hover:text-peacock-gold transition-colors flex items-center gap-1 mt-0.5"
                    >
                      myile.onrender.com
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

            <div className="pt-6 border-t border-peacock-green/25 relative z-10 flex items-center justify-between text-[11px] text-peacock-green mt-12">
              <span>DUNS: 88-291-0012</span>
              <span>ISO 27001 (In Process)</span>
            </div>
          </div>
        </div>

        {/* Founding Philosophy Main Heading */}
        <div className="border-t border-peacock-green/15 pt-16 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-peacock-teal/40 border border-peacock-green/30 rounded-full text-peacock-gold text-xs font-bold tracking-wider uppercase font-mono">
            <LucideIcon name="Compass" size={12} className="text-peacock-gold" />
            Foundational Charter
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-serif tracking-tight text-white">
            Myile – Founding Philosophy
          </h2>
          <p className="text-peacock-green text-sm sm:text-base max-w-2xl mx-auto font-medium font-sans">
            Our identity is rooted in character, defined by responsibility, and measured through the strength of the trust we cultivate.
          </p>
        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-peacock-teal/15 p-8 rounded-3xl border border-peacock-green/20 relative overflow-hidden text-left flex flex-col justify-between">
            <div className="absolute top-4 right-4 text-peacock-gold/10">
              <LucideIcon name="Eye" size={120} />
            </div>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-peacock-gold/20 text-peacock-gold rounded-xl">
                  <LucideIcon name="Eye" size={20} />
                </div>
                <h3 className="text-2xl font-bold font-serif text-white">Vision</h3>
              </div>
              <p className="text-peacock-cream text-base leading-relaxed font-semibold">
                To become the world’s most trusted operations partner for growing and specialized businesses by proving that character, ownership, and relationships create more lasting value than scale alone.
              </p>
              <p className="text-peacock-cream/80 text-sm leading-relaxed">
                We aspire to build a company that clients don’t see as an outsourcing vendor, but as an extension of their own team—one that shares their goals, protects their reputation, and grows alongside them.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-peacock-teal/15 p-8 rounded-3xl border border-peacock-green/20 relative overflow-hidden text-left flex flex-col justify-between">
            <div className="absolute top-4 right-4 text-peacock-green/10">
              <LucideIcon name="Target" size={120} />
            </div>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-peacock-green/20 text-peacock-green rounded-xl">
                  <LucideIcon name="Target" size={20} />
                </div>
                <h3 className="text-2xl font-bold font-serif text-white">Mission</h3>
              </div>
              <p className="text-peacock-cream text-base leading-relaxed font-semibold">
                Myile exists to help ambitious businesses scale confidently by delivering exceptional operational support with the convenience of outsourcing and the accountability of a true partner.
              </p>
              <p className="text-peacock-cream/80 text-sm leading-relaxed">
                We combine dedicated people, thoughtful processes, and modern technology to solve operational challenges while building relationships founded on trust, respect, and shared success.
              </p>
            </div>
          </div>
        </div>

        {/* Purpose Hero callout */}
        <div className="relative bg-gradient-to-r from-peacock-teal/40 via-peacock-dark to-peacock-teal/40 p-8 sm:p-12 rounded-3xl border border-peacock-gold/30 shadow-xl text-center overflow-hidden">
          <div className="absolute inset-0 bg-peacock-gold/5 pointer-events-none" />
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-bold font-mono text-peacock-gold uppercase tracking-widest block">Our Purpose</span>
            <blockquote className="text-xl sm:text-2xl font-serif text-white leading-relaxed italic">
              “We believe every growing business deserves a partner that genuinely cares about its success. Our purpose is not simply to complete tasks. Our purpose is to create confidence.”
            </blockquote>
            <p className="text-peacock-cream/90 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              When a client entrusts us with part of their business, they should feel that someone is taking ownership—not just providing a service.
            </p>
          </div>
        </div>

        {/* Our Core Values */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">Our Core Values</h3>
            <p className="text-peacock-cream/75 text-sm max-w-xl mx-auto">
              These fundamental principles guide our daily interactions, shape our decisions, and drive our commitment to operational integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => (
              <div 
                key={idx} 
                className="bg-peacock-teal/10 hover:bg-peacock-teal/20 p-6 sm:p-8 rounded-2xl border border-peacock-green/15 text-left transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-peacock-gold/15 text-peacock-gold rounded-xl inline-block border border-peacock-gold/20">
                    <LucideIcon name={value.icon} size={20} />
                  </div>
                  <h4 className="text-lg font-bold font-serif text-white">{value.title}</h4>
                  <p className="text-xs sm:text-sm text-peacock-cream/80 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Ideology & Our Promise side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Core Ideology Card */}
          <div className="lg:col-span-7 bg-peacock-teal/15 border border-peacock-green/20 p-8 sm:p-10 rounded-3xl text-left space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold font-mono text-peacock-gold uppercase tracking-wider block">Our Core Ideology</span>
              <h4 className="text-2xl font-bold font-serif text-white">We are a partner before we are a provider.</h4>
              <p className="text-peacock-cream/90 text-sm sm:text-base leading-relaxed">
                We believe outsourcing should never feel distant or transactional. Clients should experience the flexibility of an outsourcing company with the responsibility and accountability of an internal team.
              </p>
              <p className="text-peacock-cream/85 text-sm leading-relaxed">
                We don’t aspire to become the largest company in our industry. We aspire to become the company clients trust the most.
              </p>
            </div>
            <div className="pt-4 border-t border-peacock-green/15 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-peacock-gold rounded-full" />
              <span className="text-xs text-peacock-gold font-semibold font-mono uppercase tracking-wider">Trust Over Scale</span>
            </div>
          </div>

          {/* Our Promise Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-peacock-teal/40 to-peacock-dark border border-peacock-green/20 p-8 sm:p-10 rounded-3xl text-left space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold font-mono text-peacock-green uppercase tracking-wider block">Our Promise</span>
              <h4 className="text-2xl font-bold font-serif text-white">Owned Responsibilities</h4>
              <p className="text-peacock-cream/90 text-sm sm:text-base leading-relaxed">
                When Myile accepts responsibility for a function, we treat it as if it were our own business.
              </p>
              <p className="text-peacock-cream/85 text-sm leading-relaxed">
                Every interaction should leave our clients feeling understood, supported, and confident that their business is in capable hands.
              </p>
            </div>
            <div className="pt-4 border-t border-peacock-green/15 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-peacock-green rounded-full" />
              <span className="text-xs text-peacock-green font-semibold font-mono uppercase tracking-wider">Absolute Accountability</span>
            </div>
          </div>
        </div>

        {/* The Myile Standard & What We Want to Be Known For */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* The Myile Standard checklist */}
          <div className="bg-peacock-teal/15 border border-peacock-green/20 p-8 sm:p-10 rounded-3xl text-left space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold font-mono text-peacock-gold uppercase tracking-wider block">The Myile Standard</span>
              <h4 className="text-2xl font-bold font-serif text-white">Before every decision, we ask ourselves:</h4>
            </div>

            <ul className="space-y-4">
              {standardQuestions.map((q, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="p-1 bg-peacock-gold/20 text-peacock-gold rounded-md mt-0.5 shrink-0 border border-peacock-gold/30">
                    <LucideIcon name="Check" size={12} />
                  </div>
                  <span className="text-peacock-cream text-sm font-semibold">{q}</span>
                </li>
              ))}
            </ul>

            <p className="pt-4 border-t border-peacock-green/15 text-xs text-peacock-cream/80 leading-relaxed font-mono">
              If the answer is yes, we move forward. <br />
              If not, we rethink our approach.
            </p>
          </div>

          {/* What We Want to Be Known For */}
          <div className="bg-gradient-to-br from-peacock-dark via-peacock-teal/20 to-peacock-dark border border-peacock-green/25 p-8 sm:p-10 rounded-3xl text-left space-y-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-10 -right-10 text-peacock-gold/5 pointer-events-none">
              <LucideIcon name="Sparkles" size={180} />
            </div>
            
            <div className="space-y-4 relative z-10">
              <span className="text-xs font-bold font-mono text-peacock-green uppercase tracking-wider block">Our Core Reputation</span>
              <h4 className="text-xl font-bold font-serif text-peacock-cream/90">What We Want to Be Known For</h4>
              
              <ul className="space-y-2 text-xs sm:text-sm text-peacock-cream/70 font-mono">
                <li>• Not because we are the biggest.</li>
                <li>• Not because we are the cheapest.</li>
                <li>• Not because we have the most employees.</li>
              </ul>
              
              <div className="p-4 bg-peacock-teal/30 rounded-xl border border-peacock-green/15 mt-2">
                <span className="text-xs text-peacock-gold font-mono uppercase tracking-widest block mb-1">Our True Earned Value</span>
                <p className="text-sm sm:text-base font-serif text-white italic leading-relaxed">
                  “If Myile says they’ll take care of it, you can stop worrying.”
                </p>
              </div>
            </div>

            <p className="text-xs text-peacock-cream/80 relative z-10 font-semibold">
              We know we have earned the trust that defines our company.
            </p>
          </div>
        </div>

        {/* Our Aspiration (Elegant Final Footer Card) */}
        <div className="bg-gradient-to-r from-peacock-teal/40 via-peacock-teal/60 to-peacock-teal/40 border border-peacock-gold/30 p-8 sm:p-12 rounded-3xl text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(238,155,0,0.06),transparent)] pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-bold font-mono text-peacock-gold uppercase tracking-widest block">Our Aspiration</span>
            <div className="h-px bg-peacock-gold/20 w-16 mx-auto" />
            <p className="text-lg sm:text-xl font-serif text-white leading-relaxed font-semibold">
              Grounded in character. Driven by purpose. Built on respect.
            </p>
            <p className="text-lg sm:text-xl font-serif text-white leading-relaxed font-semibold">
              Defined by responsibility. Strengthened through relationships.
            </p>
            <p className="text-peacock-gold text-base sm:text-lg font-serif font-semibold tracking-wider">
              Growing with every client we serve.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
