import React, { useState, useEffect } from "react";
import { faqsData } from "../data";
import { LucideIcon } from "./LucideIcon";

interface ContactSectionProps {
  selectedServiceForContact: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedServiceForContact
}) => {
  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "logistics",
    service: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // FAQ accordion states
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // Synchronize pre-selected service when user navigates from services directory
  useEffect(() => {
    if (selectedServiceForContact) {
      setFormData((prev) => ({ ...prev, service: selectedServiceForContact }));
    }
  }, [selectedServiceForContact]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors(null);

    // Validation checks
    if (!formData.name.trim()) {
      setFormErrors("Please enter your name.");
      return;
    }
    if (!formData.email.trim()) {
      setFormErrors("Please enter your business email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormErrors("Please enter a valid business email address.");
      return;
    }
    if (!formData.company.trim()) {
      setFormErrors("Please enter your company name.");
      return;
    }
    if (!formData.service) {
      setFormErrors("Please choose the primary service of interest.");
      return;
    }

    // Trigger submissions mockup
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-peacock-dark relative overflow-hidden border-b border-peacock-green/15" id="contact-section-wrapper">
      {/* Decorative background vectors */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-peacock-bright/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-peacock-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-peacock-teal/40 border border-peacock-green/30 rounded-full text-peacock-gold text-xs font-bold tracking-wider uppercase font-mono">
            <LucideIcon name="Mail" size={12} className="text-peacock-gold" />
            Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-white">
            Consult Myile's Operators
          </h2>
          <p className="text-base text-peacock-cream/85 leading-relaxed">
            Ready to reclaim valuable hours and establish immaculate back-office hygiene? Submit your coordinates below, and an operations lead will reach out within 1 business hour.
          </p>
        </div>

        {/* Contact form + FAQ grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-grid">
          
          {/* Left Block: Inquiry Form / Success Banner */}
          <div className="lg:col-span-7 bg-peacock-teal/10 rounded-3xl border border-peacock-green/20 p-6 sm:p-8 shadow-2xl text-left" id="contact-form-panel">
            {isSuccess ? (
              <div className="py-12 px-4 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-950/40 rounded-full flex items-center justify-center mx-auto text-emerald-400 border border-emerald-500/30 animate-bounce">
                  <LucideIcon name="CheckCircle2" size={36} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-serif text-white">Inquiry Received Successfully</h3>
                  <p className="text-peacock-cream/80 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-peacock-gold font-semibold font-serif">{formData.name}</strong>. An operational strategist from our San Francisco desk has been dispatched to review your company's profile.
                  </p>
                </div>
                
                {/* Details ticket summary */}
                <div className="p-4 bg-peacock-teal/20 border border-peacock-green/15 text-left max-w-md mx-auto space-y-2 font-mono text-xs text-peacock-cream/80">
                  <div className="flex justify-between border-b border-peacock-green/10 pb-1">
                    <span>Inquirer Name:</span>
                    <span className="font-bold text-white">{formData.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-peacock-green/10 pb-1">
                    <span>Target Service:</span>
                    <span className="font-bold text-peacock-gold">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SLA Assignment:</span>
                    <span className="font-bold text-emerald-400">Active (under 1-hour reply)</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      industry: "logistics",
                      service: "",
                      message: ""
                    });
                  }}
                  className="px-6 py-2.5 bg-peacock-gold hover:bg-peacock-bright text-peacock-dark font-bold text-xs rounded-xl cursor-pointer transition-colors"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold font-serif uppercase tracking-wide text-peacock-gold">Your Full Name <span className="text-rose-400">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Kenneth Cole"
                      id="input-name"
                      className="w-full bg-peacock-dark/80 border border-peacock-green/30 rounded-xl px-4 py-3 text-sm text-white placeholder-peacock-cream/30 focus:outline-none focus:border-peacock-gold focus:bg-peacock-dark transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold font-serif uppercase tracking-wide text-peacock-gold">Business Email <span className="text-rose-400">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. k.cole@vanguard-ops.com"
                      id="input-email"
                      className="w-full bg-peacock-dark/80 border border-peacock-green/30 rounded-xl px-4 py-3 text-sm text-white placeholder-peacock-cream/30 focus:outline-none focus:border-peacock-gold focus:bg-peacock-dark transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold font-serif uppercase tracking-wide text-peacock-gold">Company Name <span className="text-rose-400">*</span></label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Vanguard Freight"
                      id="input-company"
                      className="w-full bg-peacock-dark/80 border border-peacock-green/30 rounded-xl px-4 py-3 text-sm text-white placeholder-peacock-cream/30 focus:outline-none focus:border-peacock-gold focus:bg-peacock-dark transition-all"
                    />
                  </div>

                  {/* Industry Select */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold font-serif uppercase tracking-wide text-peacock-gold">Target Industry</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      id="input-industry"
                      className="w-full bg-peacock-dark/80 border border-peacock-green/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-peacock-gold focus:bg-peacock-dark transition-all cursor-pointer"
                    >
                      <option className="bg-peacock-dark" value="logistics">Logistics & Supply Chain</option>
                      <option className="bg-peacock-dark" value="freight">Freight & Brokerage</option>
                      <option className="bg-peacock-dark" value="manufacturing">Manufacturing</option>
                      <option className="bg-peacock-dark" value="saas">SaaS & Software</option>
                      <option className="bg-peacock-dark" value="healthcare">Healthcare Systems</option>
                      <option className="bg-peacock-dark" value="recruitment">Recruitment Firms</option>
                      <option className="bg-peacock-dark" value="accounting">Accounting & CPAs</option>
                      <option className="bg-peacock-dark" value="legal">Legal Firms</option>
                      <option className="bg-peacock-dark" value="ecommerce">E-Commerce Brands</option>
                      <option className="bg-peacock-dark" value="realestate">Real Estate Agencies</option>
                      <option className="bg-peacock-dark" value="consulting">Consulting Practices</option>
                    </select>
                  </div>
                </div>

                {/* Service Dropdown Select */}
                <div className="space-y-2">
                  <label className="text-xs font-bold font-serif uppercase tracking-wide text-peacock-gold">Service of interest <span className="text-rose-400">*</span></label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    id="input-service"
                    className="w-full bg-peacock-dark/80 border border-peacock-green/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-peacock-gold focus:bg-peacock-dark transition-all cursor-pointer"
                  >
                    <option className="bg-peacock-dark" value="">-- Choose a custom Myile capability --</option>
                    <option className="bg-peacock-dark" value="Customer Support">Customer Support</option>
                    <option className="bg-peacock-dark" value="Customer Experience">Customer Experience</option>
                    <option className="bg-peacock-dark" value="HR Operations Support">HR Operations Support</option>
                    <option className="bg-peacock-dark" value="Recruitment Operations">Recruitment Operations</option>
                    <option className="bg-peacock-dark" value="CRM Administration">CRM Administration</option>
                    <option className="bg-peacock-dark" value="AP/AR Support">AP/AR Support</option>
                    <option className="bg-peacock-dark" value="Logistics Documentation">Logistics Documentation</option>
                    <option className="bg-peacock-dark" value="Executive Assistance">Executive Assistance</option>
                    <option className="bg-peacock-dark" value="Market Research">Market Research</option>
                    <option className="bg-peacock-dark" value="Reporting & Scorecards">Reporting & Scorecards</option>
                    <option className="bg-peacock-dark" value="Data Migration Support">Data Migration Support</option>
                    <option className="bg-peacock-dark" value="Document Management">Document Management</option>
                    <option className="bg-peacock-dark" value="Translation Coordination">Translation Coordination</option>
                    <option className="bg-peacock-dark" value="AI-Assisted Document Processing">AI-Assisted Document Processing</option>
                    <option className="bg-peacock-dark" value="Dashboard Creation">Dashboard Creation</option>
                    <option className="bg-peacock-dark" value="Workflow Automation">Workflow Automation</option>
                  </select>
                </div>

                {/* Optional Message */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold font-serif uppercase tracking-wide text-peacock-gold">Message details</label>
                    <span className="text-[10px] text-peacock-cream/50 font-mono">Optional</span>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your current operational bottlenecks, tool stack, or scheduling requirements..."
                    id="input-message"
                    className="w-full bg-peacock-dark/80 border border-peacock-green/30 rounded-xl px-4 py-3 text-sm text-white placeholder-peacock-cream/30 focus:outline-none focus:border-peacock-gold focus:bg-peacock-dark transition-all resize-none"
                  />
                </div>

                {/* Error Banner */}
                {formErrors && (
                  <div className="p-3.5 bg-rose-950/40 border border-rose-500/30 rounded-xl flex items-center gap-2 text-xs text-rose-300 font-semibold text-left">
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0" />
                    <span>{formErrors}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit-contact-form"
                  className="w-full py-4 bg-peacock-gold hover:bg-peacock-bright text-peacock-dark disabled:bg-peacock-teal/30 disabled:text-peacock-cream/30 font-serif font-bold text-sm rounded-xl shadow-lg cursor-pointer transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-peacock-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting Coordinates...
                    </>
                  ) : (
                    <>
                      <LucideIcon name="Send" size={16} />
                      Request Operator Review
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Block: Accordion FAQ */}
          <div className="lg:col-span-5 space-y-6" id="faq-accordions-panel">
            <div className="text-left">
              <h3 className="text-xl font-bold font-serif text-white">Frequently Asked Questions</h3>
              <p className="text-xs text-peacock-gold font-mono mt-1 uppercase">Our Operational Protocols</p>
            </div>

            <div className="space-y-4" id="faq-list">
              {faqsData.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    id={`faq-item-${idx}`}
                    className={`bg-peacock-teal/10 rounded-xl border transition-all duration-200 text-left overflow-hidden ${
                      isOpen
                        ? "border-peacock-gold/55 bg-peacock-teal/20 shadow-md"
                        : "border-peacock-green/20 hover:border-peacock-green/50"
                    }`}
                  >
                    {/* Header trigger */}
                    <button
                       onClick={() => toggleFaq(idx)}
                      id={`faq-trigger-${idx}`}
                      className="w-full p-4 flex items-center justify-between gap-4 text-left font-bold font-serif text-sm sm:text-base text-white cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <LucideIcon
                        name="ChevronDown"
                        size={16}
                        className={`text-peacock-gold transform transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Collapsible Body */}
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs sm:text-sm text-peacock-cream/85 leading-relaxed border-t border-peacock-green/15 pt-3 animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
