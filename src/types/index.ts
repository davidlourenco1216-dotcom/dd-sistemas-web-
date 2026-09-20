export interface NavItem {
  label: string;
  href: string;
}

export interface CondoAppItem {
  id: string;
  badge: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  iconName: string;
  whatsappMessage: string;
  isMainCore?: boolean;
}

export interface SolutionItem {
  id: string;
  badge?: string;
  title: string;
  targetAudience: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  iconName: string;
  whatsappMessage: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  highlight: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  companyOrCondo: string;
  avatarUrl: string;
  rating: number;
  content: string;
  tag: string;
}

export interface MetricItem {
  value: string;
  label: string;
  detail: string;
}

export interface ContactFormData {
  name: string;
  segment: string;
  phone: string;
  message: string;
}
