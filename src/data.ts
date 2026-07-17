import { Service, Industry, FAQ } from "./types";

export const servicesData: Service[] = [
  {
    id: "customer-support",
    name: "Customer Support",
    description: "Deliver world-class, 24/7 omnichannel customer assistance utilizing trained specialists and automated playbook routing.",
    previewText: "Manage inbound ticket queues, live chat support, product onboarding, and refund reconciliations.",
    expandedContent: "Sustain exceptional customer satisfaction (CSAT) scores. Our customer support desk integrates directly with your helpdesks to manage incoming ticket queues, resolve billing inquiries, moderate product questions, and walk customers through tutorials, strictly complying with your brand voice and SLAs.",
    iconName: "Headphones",
    category: "customer-support",
    features: [
      "Omnichannel Ticket Resolving",
      "Live Chat & SLA Performance Monitoring",
      "Customer Macro & Custom Playbook Tuning",
      "Billing Queries & Refunds Reconciliations"
    ],
    tools: ["Zendesk", "Intercom", "Freshdesk", "Gorgias", "Help Scout"]
  },
  {
    id: "customer-experience",
    name: "Customer Experience",
    description: "Design and manage high-retention customer journeys with custom health checks, satisfaction loops, and proactive success playbooks.",
    previewText: "Enforce standardized NPS/CSAT surveys, map customer health indices, and design proactive success playbooks.",
    expandedContent: "Turn support into a business growth engine. We specialize in mapping out complex customer onboarding journeys, configuring automated customer health signals, scheduling proactive check-ins, and managing post-sales success calendars to maximize customer lifetime value (LTV) and brand advocacy.",
    iconName: "Heart",
    category: "customer-experience",
    features: [
      "NPS & CSAT Feedback Campaigns",
      "Proactive Onboarding Journey Maps",
      "Customer Health Scorecard Audits",
      "Client Health Signals & Churn Prevention"
    ],
    tools: ["Gainsight", "HubSpot", "Vitally", "ChurnZero", "Typeform"]
  },
  {
    id: "hr-ops",
    name: "HR Operations Support",
    description: "Standardize employee lifecycles through automated checklists verified and managed by our elite operations specialists.",
    previewText: "Manage background checks, employee dossiers, leave calendars, and offer letter dispatches smoothly.",
    expandedContent: "Our HR Operations support delivers a complete hybrid solution. We take the administrative burden off your local team by deploying automated onboarding checklists, then pairing them with dedicated specialists who manually verify compliance documents, track background reports, and update PTO records.",
    iconName: "Users",
    category: "operations",
    features: [
      "New Hire Documentation Tracking",
      "Employee Record Management",
      "PTO & Leave Auditing",
      "Compliance Document Verification"
    ],
    tools: ["Rippling", "Gusto", "BambooHR", "Notion", "Google Workspace"]
  },
  {
    id: "recruitment-ops",
    name: "Recruitment Operations",
    description: "Accelerate hiring velocity with automated interview coordination scripts backed by highly responsive specialist communication.",
    previewText: "Schedule interviews across multiple complex timezones, keep candidate pipelines clean, and collect reviewer feedback.",
    expandedContent: "Avoid losing premier talent to slow scheduling back-and-forths. Our recruitment operations specialists utilize timezone-matching automation to queue times, then step in personally to manage communication loops, audit ATS data hygiene, and collect reviewer evaluations.",
    iconName: "UserPlus",
    category: "operations",
    features: [
      "Multi-timezone Interview Scheduling",
      "ATS Record Hygiene",
      "Candidate Communication Loops",
      "Reviewer Feedback Collation"
    ],
    tools: ["Greenhouse", "Lever", "Calendly", "Zoom", "Slack"]
  },
  {
    id: "crm-admin",
    name: "CRM Administration",
    description: "Maintain immaculate database hygiene and route incoming leads with automated triggers supervised by certified CRM specialists.",
    previewText: "Deduplicate contact records, route leads based on custom logic, and format automated performance reports.",
    expandedContent: "Turn your CRM back into an organized database of truth. Our certified CRM administrators write robust programmatic lead routing logic and custom workflows, while conducting hands-on records auditing, contact deduplication, and granular user access reviews.",
    iconName: "Database",
    category: "technology",
    features: [
      "Contact Deduplication & Validation",
      "Automated Lead Assignment Logic",
      "Sales Activity Scorecards",
      "Custom Field Configuration"
    ],
    tools: ["Salesforce", "HubSpot CRM", "Pipedrive", "Zoho CRM"]
  },
  {
    id: "ap-ar",
    name: "AP/AR Support",
    description: "Accelerate billing cycles using automated invoice triggers verified and logged by certified accounting specialists.",
    previewText: "Audit invoices, prepare payment runs, matching ledger entries, and follow up gently on past-due invoices.",
    expandedContent: "Protect your cash flow with institutional integrity. Our financial support specialists use automated ledger matching and expense tracking tools alongside meticulous human oversight to categorize vendor invoices, reconcile bank logs, and manage aging accounts receivable portfolios.",
    iconName: "Receipt",
    category: "finance",
    features: [
      "Aged Receivables Reminders",
      "Bank Transaction Matching",
      "Expense Report Verification",
      "Vendor Invoice Entry & Categorization"
    ],
    tools: ["QuickBooks Online", "Xero", "Bill.com", "Ramp", "Expensify"]
  },
  {
    id: "logistics-docs",
    name: "Logistics Documentation",
    description: "Audit and organize waybills, customs declarations, and manifests with specialists leveraging optical scanning integrations.",
    previewText: "Ensure bills of lading, freight documents, and custom files are perfect before container arrival to avoid port fines.",
    expandedContent: "Avoid costly port demurrage and regulatory delays. Our dedicated logistics desk pairs smart OCR indexing tools with skilled human eyes to thoroughly audit bills of lading, draft custom customs filing packets, monitor shipping coordinates, and update central ERP shipping registers.",
    iconName: "Truck",
    category: "operations",
    features: [
      "Bill of Lading Auditing",
      "Customs Manifest Preparations",
      "Carrier Status Dashboard Logs",
      "Inventory Reconciliations"
    ],
    tools: ["CargoWise", "Flexport Portal", "SAP ERP", "Excel/Sheets"]
  },
  {
    id: "executive-assistance",
    name: "Executive Assistance",
    description: "Partner with elite administrative specialists equipped with smart scheduling filters and inbox priority scripts.",
    previewText: "Prioritize critical executive mail, manage calendars, organize travels, and create structured agendas.",
    expandedContent: "Supercharge your execution and reclaim high-value hours. We combine the personal intuition of a dedicated assistant with modern digital filters to coordinate complex calendars, sort priority inbox queues, manage travel itineraries, and compile custom preparation briefs.",
    iconName: "Briefcase",
    category: "support",
    features: [
      "Inbox Priority Triaging",
      "Proactive Calendar Optimization",
      "Comprehensive Meeting Briefings",
      "Travel Planning & Itineraries"
    ],
    tools: ["Google Calendar", "Outlook", "Slack", "Superhuman", "Asana"]
  },
  {
    id: "research",
    name: "Market Research",
    description: "Acquire target directories, competitor pricing metrics, and sector reports crafted by research specialists leveraging digital scraping scripts.",
    previewText: "Gather clean lead contacts, track competitor price points, and compile industry-specific benchmark reports.",
    expandedContent: "Stop guessing and make data-driven decisions. Our research desk utilizes automated web-crawlers and directory scraping tools to pool target data points, which are then analyzed, organized, and synthesized by our specialists into comprehensive business intelligence decks.",
    iconName: "Search",
    category: "support",
    features: [
      "B2B Lead List Compilations",
      "Competitor Pricing Analysis",
      "Industry Feature Matrixes",
      "Information Gathering & Summaries"
    ],
    tools: ["ZoomInfo", "LinkedIn Sales Navigator", "Crunchbase", "Google Sheets"]
  },
  {
    id: "reporting",
    name: "Reporting & Scorecards",
    description: "Synthesize business metrics into beautiful executive presentations, combining automated pipelines with human design review.",
    previewText: "Consolidate weekly statistics, format beautiful status decks, and establish clear operational metrics.",
    expandedContent: "Keep your leadership and board fully aligned. Our specialists build programmatic data-extraction pipelines to consolidate scattered operational indices, then manually review, normalise, and design highly aesthetic business scorecards and PowerPoint presentation decks.",
    iconName: "BarChart3",
    category: "finance",
    features: [
      "Executive Dashboard Formatting",
      "Multi-source Data Consolidation",
      "Clean Financial Visualization Decks",
      "KPI Progress Audits"
    ],
    tools: ["Google Sheets", "Excel VBA", "Looker Studio", "Canva", "PowerPoint"]
  },
  {
    id: "data-migration",
    name: "Data Migration Support",
    description: "Safely execute platform upgrades using validated data-mapping scripts under close human monitoring and error audits.",
    previewText: "Map complex field schemas, cleanse contact records, and perform validated CSV data uploads.",
    expandedContent: "Upgrading your core tools doesn't have to be a hazard. Our migration engineers design custom data translations and run sandbox trials to clean accounts, deduplicate entries, and verify data schema mappings, executing final live uploads with meticulous human QA validation.",
    iconName: "RefreshCw",
    category: "technology",
    features: [
      "Data Mapping & Translation Diagrams",
      "Pre-Migration Records Sanitization",
      "Sandbox File Verification",
      "Validation Error Cleanup"
    ],
    tools: ["Python Pandas", "Excel Formulas", "OpenRefine", "System APIs"]
  },
  {
    id: "document-management",
    name: "Document Management",
    description: "Organize messy company cloud drives into clean taxonomies, using custom automation rules and expert human structuring.",
    previewText: "Enforce uniform file naming conventions, clean parent/child folders, and organize old archives.",
    expandedContent: "Regain instant access to your legacy files and agreements. Our document management team audits your existing shared drives, configures smart automated naming routines, establishes strict security groups, and manually moves existing assets into clean parent-child structures.",
    iconName: "FolderOpen",
    category: "support",
    features: [
      "Directory Folder Taxonomy Rebuilds",
      "Security Access Audits",
      "Standardized Naming Conventions",
      "Old Archives Lifecycle Cleanup"
    ],
    tools: ["Google Drive", "SharePoint", "Dropbox Business", "Box"]
  },
  {
    id: "translation-coordination",
    name: "Translation Coordination",
    description: "Manage localized content distribution and translation schedules, merging automation pipelines with certified human translators.",
    previewText: "Track translation milestones, verify multi-language layout compliance, and coordinate native-speaker proofreads.",
    expandedContent: "Simplify international growth. We coordinate global localization file deliveries, routing your copy files dynamically to certified regional translation agency networks, tracking milestones automatically, and performing multi-device human visual quality assurance.",
    iconName: "Languages",
    category: "support",
    features: [
      "Localization Assets Trackers",
      "Vendor Cost & Speed Logs",
      "Regional Formatting Quality Checks",
      "Translation Milestone Follow-ups"
    ],
    tools: ["Lokalise", "Smartling", "Crowdin", "Google Sheets"]
  },
  {
    id: "ai-processing",
    name: "AI-Assisted Document Processing",
    description: "Extract complex data points from raw invoices, bills, and resumes using semantic AI models coupled with immediate human review.",
    previewText: "Integrate LLMs to scrape receipts, extract legal terms from files, and classify customer requests.",
    expandedContent: "Eliminate manual data entry errors. We build modern LLM-based optical character recognition pipelines to scrape details from incoming PDFs and emails, paired with our operations team who inspects, validates, and approves every data point before it updates your core accounting ledger.",
    iconName: "Cpu",
    category: "technology",
    features: [
      "AI-driven Invoice Data Scraping",
      "Legal Agreement Term Extractions",
      "Customer Email Classification Rules",
      "Human-in-the-loop Verification Dashboards"
    ],
    tools: ["Gemini Pro", "Make.com", "Zapier Developer", "Python", "Webhooks"]
  },
  {
    id: "dashboard-creation",
    name: "Dashboard Creation",
    description: "Monitor operational KPIs and sales funnels on live dashboards built by our technology engineers and reviewed by analysts.",
    previewText: "Build custom Looker Studio, PowerBI, or web-based control rooms showcasing real-time operational KPIs.",
    expandedContent: "Navigate with complete operational clarity. Our systems engineers configure robust API adapters to feed raw data into beautifully designed control panels, while our operations specialists check data consistency, normalize metrics, and schedule custom status alerts.",
    iconName: "LayoutDashboard",
    category: "technology",
    features: [
      "Custom KPI Visual Boards",
      "Multi-system Live Data Connections",
      "Color-coded Target Status Indicators",
      "Auto-exporting Scheduled Email Updates"
    ],
    tools: ["Looker Studio", "Tableau", "PowerBI", "Tailwind CSS Charts"]
  },
  {
    id: "workflow-automation",
    name: "Workflow Automation",
    description: "Bridge disconnected SaaS platforms using multi-stage Zapier/Make recipes monitored and maintained by our technical architects.",
    previewText: "Integrate sales pipelines with billing channels, trigger instant slack updates, and generate automated letters.",
    expandedContent: "Free your staff from tedious copying and pasting. Our automation experts map your procedures, build reliable multi-branched Zapier/Make connections, and monitor execution webhooks. We provide continuous human oversight to resolve API errors and adapt rules as your stack evolves.",
    iconName: "Workflow",
    category: "technology",
    features: [
      "Multi-stage Zapier/Make Integrations",
      "Conditional Path Routing Rules",
      "Custom API Webhook Handlers",
      "Automatic Error Notification Backups"
    ],
    tools: ["Zapier", "Make.com", "Workato", "Webhooks", "JSON Parser"]
  },

  {
    id: "biz-dev-emailing",
    name: "Business Development Emailing",
    description: "Amplify your sales pipeline with automated outbound prospecting scripts paired with hyper-personalized specialist oversight.",
    previewText: "Design personalized prospecting lists, draft high-converting email copy, and schedule follow-ups that book meetings.",
    expandedContent: "Accelerate your outbound growth with customized lead warming. Our specialists combine smart sequencing engines with thorough prospect research to construct laser-targeted email outreach campaigns, ensuring all communications are highly personalized and manual check-backs prevent any spam classifications.",
    iconName: "MailOpen",
    category: "support",
    features: [
      "Outbound Campaign Copywriting",
      "Prospect Account Deep Research",
      "Email Deliverability & SPF Audits",
      "Meeting Booking & Calendar Hand-offs"
    ],
    tools: ["Apollo.io", "Instantly.ai", "Lemlist", "Salesforce", "Google Workspace"]
  },
  {
    id: "business-transition",
    name: "Business Transition Services",
    description: "Seamlessly navigate mergers, acquisitions, platform migrations, or scaling phases with hand-held operational handover frameworks and documentation.",
    previewText: "Audit team handovers, draft Standard Operating Procedures (SOPs), and manage system access transition cycles.",
    expandedContent: "Ensure continuity of knowledge and operational integrity during organizational changes. Our transition experts work alongside your leadership to map critical processes, draft clean standard operating procedures, audit access credentials, and ensure flawless technical handoffs so no vital information gets lost.",
    iconName: "Replace",
    category: "operations",
    features: [
      "Standard Operating Procedure (SOP) Drafting",
      "Access Permission & Identity Transfers",
      "Legacy Database Handover Mapping",
      "Cross-Departmental Alignment Audits"
    ],
    tools: ["Notion", "Scribe", "Loom", "Miro", "Confluence"]
  },
  {
    id: "email-projects",
    name: "Email Projects & Deliverability",
    description: "Deploy technical email infrastructures, protect domain sending reputation, and build high-performance transactional email systems.",
    previewText: "Configure SPF/DKIM/DMARC DNS records, warm up cold domains, and design responsive custom HTML templates.",
    expandedContent: "Make sure your vital emails land directly in the primary inbox. We handle the complete setup of custom sending domains, SPF/DKIM/DMARC record alignments, email warming sequences, blocklist monitor integrations, and technical email template integrations.",
    iconName: "Mail",
    category: "technology",
    features: [
      "DNS, SPF, DKIM, & DMARC Optimizations",
      "Dedicated Domain Warming Strategies",
      "Custom Transactional Email Templates",
      "Blocklist Removal & Spam-Score Auditing"
    ],
    tools: ["SendGrid", "Mailgun", "Postmark", "ActiveCampaign", "MXToolbox"]
  }
];

export const industriesData: Industry[] = [
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    painPoint: "Customs declaration delays, cargo logs with missing data, and container status mismatches leading to expensive port demurrage fines.",
    solution: "Myile establishes 24/7 background operational desks that pair automated carrier tracking webhooks with expert document audits of customs manifests and waybills.",
    impactText: "99.8% regulatory document compliance and a 42% decrease in container demurrage fees.",
    iconName: "Ship",
    caseStudyTitle: "Global Ocean Carrier Scale",
    caseStudyMetrics: "42% Demurrage Savings"
  },
  {
    id: "freight",
    name: "Freight & Brokerage",
    painPoint: "Endless carrier email inquiries, delays drafting custom transit quotes, and disconnected load-matching schedules causing missed load bookings.",
    solution: "We provide dedicated carrier support agents backed by automated pricing calculators to handle load pricing, track freight logs, and update digital portals continuously.",
    impactText: "3.5x faster custom client price dispatch and a 19% gain in load fulfillment counts.",
    iconName: "Truck",
    caseStudyTitle: "Midwest Cargo Logistics",
    caseStudyMetrics: "3.5x Faster Quoting"
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    painPoint: "Disjointed purchase orders, missing warehouse packing lists, and delayed bill matches halting material pipeline planning.",
    solution: "We deploy automated invoice-to-PO reconciliation scripts paired with active, hands-on supplier follow-up loops managed by our operations specialists.",
    impactText: "32 hours a week saved in supplier follow-up logs and zero material-shortage delays.",
    iconName: "Factory",
    caseStudyTitle: "Vanguard Precision Components",
    caseStudyMetrics: "32 Hrs/Wk Reclaimed"
  },
  {
    id: "saas",
    name: "SaaS & Software",
    painPoint: "Leads dropping from CRM pipelines due to routing delays, incomplete sales logs, and uncoordinated onboarding steps.",
    solution: "Slick CRM routing scripts paired with hands-on account verification and personal, human-verified SDR outreach sequences.",
    impactText: "18% increase in trial-to-paid conversions and perfectly synchronized pipeline scorecards.",
    iconName: "CloudLightning",
    caseStudyTitle: "Optima Devops Platforms",
    caseStudyMetrics: "+18% Conversion Increase"
  },
  {
    id: "healthcare",
    name: "Healthcare Systems",
    painPoint: "Severe medical administrative exhaustion, disorganized schedule queues, and manual clinical document sorting backlogs.",
    solution: "Clinical scheduling automation scripts supported by dedicated assistants who index electronic health records and organize patient queues.",
    impactText: "30% reduction in patient schedule failures and 12 administrative hours returned to clinicians weekly.",
    iconName: "HeartPulse",
    caseStudyTitle: "Summit Multi-Specialty Group",
    caseStudyMetrics: "30% Fewer Missed Bookings"
  },
  {
    id: "recruitment",
    name: "Recruitment Firms",
    painPoint: "Hours wasted sorting messy candidate resumes, matching calendar availabilities across timezones, and chasing client reviewer comments.",
    solution: "Our Recruitment Ops desk combines automated timezone-matching tools with professional CV formatting specialists who prepare dossiers within 2 hours.",
    impactText: "Time-to-submittal cut by 3 full days and double the candidate processing speed per recruiter.",
    iconName: "SearchCode",
    caseStudyTitle: "NexGen Executive Recruiters",
    caseStudyMetrics: "-3 Days To Submittal"
  },
  {
    id: "accounting",
    name: "Accounting & CPAs",
    painPoint: "The seasonal tax bottleneck, un-indexed customer receipts, and messy transaction books delaying standard client reviews.",
    solution: "We implement continuous, year-round automated receipt scraping paired with manual bookkeeping reviews to prepare immaculate ledgers for CPA validation.",
    impactText: "Tax preparation speed boosted by 55%, enabling CPAs to handle double the customer volume.",
    iconName: "Calculator",
    caseStudyTitle: "BlueLine Strategy CPAs",
    caseStudyMetrics: "55% Faster Month-End Close"
  },
  {
    id: "legal",
    name: "Legal Firms",
    painPoint: "Unbillable attorney hours spent styling legal forms, organizing case files, and manually monitoring court hearing dates.",
    solution: "Custom directory indexing structures coupled with skilled legal administrative specialists who prepare files and verify docket deadlines.",
    impactText: "Reclaimed 15+ high-value billable partner hours every month and established pristine document directories.",
    iconName: "Scale",
    caseStudyTitle: "Pierce, Finch & Vance Partners",
    caseStudyMetrics: "15+ Billable Hrs Reclaimed/Mo"
  },
  {
    id: "ecommerce",
    name: "E-Commerce Brands",
    painPoint: "Customer return refund delays, catalog sync disconnects across multi-channels, and supplier delivery billing disputes.",
    solution: "We couple multi-channel inventory sync engines with dedicated support desk specialists who handle refunds and resolve carrier freight billing disputes.",
    impactText: "24% lift in customer satisfaction scores (CSAT) and a 95% decrease in inventory sync errors.",
    iconName: "ShoppingBag",
    caseStudyTitle: "Sola Threads Lifestyle Co",
    caseStudyMetrics: "+24% CSAT Increase"
  },
  {
    id: "realestate",
    name: "Real Estate Agencies",
    painPoint: "Lost portal listing buyers due to late call replies, incomplete escrow folders, and outdated property databases.",
    solution: "Automated routing for incoming web queries paired with dedicated coordinators who manage escrow documentation and follow up in under 5 minutes.",
    impactText: "Response speed cut to under 5 minutes, leading to a 31% expansion in closed agency contracts.",
    iconName: "Building2",
    caseStudyTitle: "Elite Properties International",
    caseStudyMetrics: "31% Higher Deal Velocity"
  },
  {
    id: "consulting",
    name: "Consulting Practices",
    painPoint: "Delayed timesheet logs, tedious report formatting, and inconsistent project performance dashboards.",
    solution: "Automated timesheet collection follow-ups paired with expert layout designers who format client presentations and compile KPI dashboards.",
    impactText: "100% on-time client invoicing and project metrics compiled in under 1 hour instead of days.",
    iconName: "Compass",
    caseStudyTitle: "Aegis Strategy Consultants",
    caseStudyMetrics: "100% On-Time Billing Logs"
  }
];

export const faqsData: FAQ[] = [
  {
    question: "How does Myile structure the work? Is it custom software or staffing?",
    answer: "Myile offers a hybrid solution: Operational Excellence as a Service. We do not just sell software, nor are we a standard staffing agency. We design and build the workflow automations, configure the software/CRMs, and supply expert operational specialists to manage the backend processes. This guarantees a complete solution with no integration gaps."
  },
  {
    question: "How quickly can Myile onboard a new company?",
    answer: "Our standard discovery and workspace construction phase takes between 5 to 10 business days. During this time, we map your current process, create secure cloud directories, establish standardized documentation guides, configure automation lines, and prepare our specialists to integrate with your existing tools."
  },
  {
    question: "Is our company data secure with Myile?",
    answer: "Security is our highest priority. We sign comprehensive Non-Disclosure Agreements (NDAs), enforce strict access controls where specialists only access files via your secure identity providers, configure multi-factor authentication (MFA) across all platforms, and never store your customer data outside your approved cloud hosts."
  },
  {
    question: "Do you integrate with our specific custom software systems?",
    answer: "Yes. Whether you utilize custom legacy databases, major SaaS hubs (like Salesforce, HubSpot, Greenhouse, CargoWise), or bespoke in-house tools, our engineers can build customized Zapier/Make connections or configure custom webhooks to feed data cleanly to your platforms."
  },
  {
    question: "What is your typical response time or operational speed?",
    answer: "For time-sensitive services like logistics data processing and recruitment candidate schedules, we operate on strict Service Level Agreements (SLAs) ranging from 15 to 60 minutes. Standard reporting and document structuring are delivered on pre-scheduled daily or weekly cycles."
  }
];
