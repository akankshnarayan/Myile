export interface Service {
  id: string;
  name: string;
  description: string;
  previewText: string;
  expandedContent: string;
  iconName: string;
  category: "operations" | "technology" | "finance" | "support" | "customer-support" | "customer-experience";
  features: string[];
  tools: string[];
}

export interface Industry {
  id: string;
  name: string;
  painPoint: string;
  solution: string;
  impactText: string;
  iconName: string;
  caseStudyTitle: string;
  caseStudyMetrics: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
