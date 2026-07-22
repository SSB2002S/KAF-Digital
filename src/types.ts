export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryKey: string; // Used for filtering (e.g. 'ui-ux', 'branding', 'graphics', 'web')
  description: string;
  problem: string;
  role: string;
  services: string[];
  result: string;
  image: string; // Premium custom-styled SVG or visual card mockups
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  project: string;
  serviceType: string;
  avatarUrl?: string;
}

export interface ProjectFormValues {
  fullName: string;
  companyName: string;
  email: string;
  whatsapp: string;
  serviceType: string;
  budget: string;
  timeline: string;
  description: string;
}
