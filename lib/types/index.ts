export interface NavItem {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ServicePhase {
  phase: number;
  icon: string;
  title: string;
  description: string;
  included: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PortfolioProject {
  id: string;
  client: string;
  description: string;
  image: string;
  deliverable: string;
  clientName: string;
  location: string;
  overview: string;
  brandDNA: string[];
  concept?: string;
  solution: string;
  outcome: string;
  testimonial?: {
    quote: string;
    author: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  client: string;
  image: string;
  category: string;
  description: string;
  details?: string;
  metric?: string;
}

export interface VideoEpisode {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeId: string;
  category: "Strategy" | "UX Audits" | "Career";
  duration: string;
  views: string;
  publishedAt: string;
  isFeatured?: boolean;
  keyTakeaways: string[];
  transcript: string;
  relatedEpisodes?: string[];
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  category: "Strategy" | "UX Audits" | "Career";
  duration: string;
  views: string;
  publishedAt: string;
  isFeatured?: boolean;
  keyTakeaways: string[];
  transcript: string;
  relatedArticles?: string[];
}
