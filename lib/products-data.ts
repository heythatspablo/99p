export type ProductType = 'digital' | 'service' | 'subscription';
export type ProductCategory = 'templates' | 'courses' | 'coaching' | 'services' | 'membership';

export interface Product {
  id: string;
  lemonSqueezyId?: string;
  variantId?: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  type: ProductType;
  category: ProductCategory;
  features: string[];
  image?: string;
  popular?: boolean;
  new?: boolean;
  downloadable?: boolean;
  recurring?: boolean;
  billingPeriod?: 'monthly' | 'yearly';
}

export const PRODUCTS: Product[] = [
  {
    id: 'red-flag-audit',
    name: 'The "Red Flag" Audit',
    description: 'Quick expert opinion. No meetings.',
    price: 197,
    type: 'service',
    category: 'coaching',
    features: [
      'Expert Video Walkthrough (15-min Loom)',
      '"Bug & Friction" Report',
      'Compliance Risk Spot-Check',
      '48-Hour Turnaround',
    ],
  },
  {
    id: 'executive-strategy-sprint',
    name: 'Executive Strategy Sprint',
    description: 'Deep dive roadmap & backlog repair.',
    price: 500,
    type: 'service',
    category: 'coaching',
    popular: true,
    features: [
      'Includes everything in Audit, plus:',
      '90-Minute Live Strategy Workshop',
      'Live Backlog Rework & Prioritization',
      '"Unstuck" 90-Day Execution Plan',
      '30-Day KPI Tracking Framework',
      'Session Recording & Transcript',
    ],
  },
  {
    id: 'fractional-head-of-product',
    name: 'Fractional Head of Product',
    description: 'Ongoing leadership & execution.',
    price: 2500,
    type: 'service',
    category: 'coaching',
    features: [
      '4x Monthly Strategy Calls',
      'Direct Slack/Email Access',
      'PRD & Spec Writing Support',
      'Vendor & Tech Stack Review',
      'Hiring & Vetting Support',
    ],
  },
  {
    id: 'fractional-technical-pm',
    name: 'Fractional Technical PM',
    description: 'For teams that have engineers but lack direction. I take over your backlog and delivery.',
    price: 3000,
    type: 'service',
    category: 'coaching',
    recurring: true,
    billingPeriod: 'monthly',
    features: [
      'Sprint Planning & Agile Ceremonies (Jira/Linear)',
      'Daily Dev Unblocking & QA',
      'Roadmap Management & Prioritization',
      'Vendor/Agency Oversight',
    ],
  },
  {
    id: 'strategic-clarity-call',
    name: 'Strategic Clarity Call',
    description: 'Stop guessing. Get a veteran PM\'s eyes on your roadmap or stack for 60 minutes.',
    price: 297,
    type: 'service',
    category: 'coaching',
    popular: true,
    features: [
      '60-Minute Zoom Strategy Session',
      'Validate your MVP Scope',
      'Tech Stack & Hiring Advice',
      'Session Recording Included',
    ],
  },
  {
    id: 'zero-to-one-launch',
    name: 'The "Zero-to-One" Launch',
    description: 'End-to-end execution. I manage your product build from concept to go-live.',
    price: 0,
    type: 'service',
    category: 'coaching',
    features: [
      'Full PRD & Technical Scoping',
      'Go-To-Market (GTM) Strategy',
      'Design & Dev Team Orchestration',
      'Launch Day Execution & Support',
    ],
  },
  {
    id: 'diy-brand-kit',
    name: 'DIY Brand Kit - Enhanced',
    description: 'Everything you need to build a consistent brand identity yourself.',
    price: 197,
    originalPrice: 247,
    type: 'digital',
    category: 'templates',
    popular: true,
    downloadable: true,
    features: [
      'Brand Strategy Workbook',
      'Visual Identity Templates',
      'Social Media Templates (50+)',
      'Video Tutorials (10+ videos)',
      'Notion Workspace Template',
      'Private Community Access (30 days)',
      'Instant Download',
    ],
  },
  {
    id: 'brand-strategy-workbook',
    name: 'Brand Strategy Workbook',
    description: 'PDF workbook with exercises to define your brand positioning.',
    price: 47,
    type: 'digital',
    category: 'templates',
    downloadable: true,
    features: [
      'Brand positioning framework',
      'Competitor analysis templates',
      'Target audience worksheets',
      'Messaging templates',
      'Instant PDF download',
    ],
  },
  {
    id: 'social-templates-pack',
    name: 'Social Media Templates Pack',
    description: '50+ professionally designed Canva templates for consistent branding.',
    price: 67,
    type: 'digital',
    category: 'templates',
    downloadable: true,
    new: true,
    features: [
      '50+ Canva templates',
      'Instagram, LinkedIn, Twitter formats',
      'Consistent brand aesthetic',
      'Easy customization',
      'Lifetime access',
    ],
  },
  {
    id: 'brand-voice-guide',
    name: 'Brand Voice & Messaging Guide',
    description: 'Define your brand voice and create compelling messaging.',
    price: 37,
    type: 'digital',
    category: 'templates',
    downloadable: true,
    features: [
      'Tone of voice framework',
      'Messaging templates',
      'Copywriting formulas',
      'Examples and case studies',
      'Instant download',
    ],
  },
  {
    id: 'brand-strategy-masterclass',
    name: 'Brand Strategy Masterclass',
    description: '12-week self-paced program to master brand strategy.',
    price: 497,
    originalPrice: 697,
    type: 'digital',
    category: 'courses',
    downloadable: true,
    features: [
      '20+ video lessons',
      'Workbooks & templates',
      'Live Q&A sessions (monthly)',
      'Private community access',
      'Certificate of completion',
      'Lifetime access',
    ],
  },
  {
    id: 'brand-identity-course',
    name: 'Brand Identity Design Course',
    description: 'Learn to design professional brand identities from scratch.',
    price: 247,
    type: 'digital',
    category: 'courses',
    downloadable: true,
    features: [
      '6-module video course',
      'Design file templates (Figma)',
      'Step-by-step tutorials',
      'Case study breakdowns',
      'Lifetime access',
    ],
  },
  {
    id: 'client-onboarding-system',
    name: 'Client Onboarding System',
    description: 'Streamline your client onboarding with templates and workflows.',
    price: 147,
    type: 'digital',
    category: 'templates',
    downloadable: true,
    features: [
      'Contract & proposal templates',
      'Project management workflows',
      'Client questionnaires',
      'Pricing calculator',
      'Email templates',
    ],
  },
  {
    id: 'brand-builders-club',
    name: 'Brand Builders Club',
    description: 'Monthly membership with templates, workshops, and community.',
    price: 47,
    type: 'subscription',
    category: 'membership',
    recurring: true,
    billingPeriod: 'monthly',
    popular: true,
    features: [
      'Monthly template drops',
      'Live workshops (2x/month)',
      'Private community access',
      'Resource library',
      'Office hours with Joel',
      'Cancel anytime',
    ],
  },
];

export const PRODUCT_BUNDLES = [
  {
    id: 'starter-bundle',
    name: 'Starter Bundle',
    description: 'Perfect for getting started with your brand',
    products: ['brand-strategy-workbook', 'social-templates-pack', 'brand-voice-guide'],
    price: 147,
    originalPrice: 151,
    savings: 4,
  },
  {
    id: 'pro-bundle',
    name: 'Pro Bundle',
    description: 'All digital products to build your brand',
    products: [
      'diy-brand-kit',
      'brand-strategy-workbook',
      'social-templates-pack',
      'brand-voice-guide',
      'brand-identity-course',
      'client-onboarding-system',
    ],
    price: 697,
    originalPrice: 897,
    savings: 200,
    popular: true,
  },
  {
    id: 'ultimate-bundle',
    name: 'Ultimate Bundle',
    description: 'Everything + 1 consulting session',
    products: [
      'diy-brand-kit',
      'brand-strategy-workbook',
      'social-templates-pack',
      'brand-voice-guide',
      'brand-identity-course',
      'client-onboarding-system',
      'brand-strategy-masterclass',
      'product-velocity-session',
    ],
    price: 1997,
    originalPrice: 2697,
    savings: 700,
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProductsByType(type: ProductType): Product[] {
  return PRODUCTS.filter((p) => p.type === type);
}
