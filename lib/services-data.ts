export interface Service {
  id: string;
  serviceName: string;
  category: 'consulting' | 'services' | 'digital-products';
  eyebrowHeadline: string;
  price: number;
  priceDisplay: string;
  originalPrice?: number;
  billingPeriod: 'monthly' | null;
  popular?: boolean;
  new?: boolean;
  sellingBulletPoints: string[];
  learnMoreLongDescription: string;
}

export const SERVICES_DATA: {
  consulting: Service[];
  services: Service[];
  digitalProducts: Service[];
} = {
  consulting: [
    {
      id: 'red-flag-audit',
      serviceName: 'The "Red Flag" Audit',
      category: 'consulting' as const,
      eyebrowHeadline: 'Diagnostics',
      price: 197,
      priceDisplay: '$197',
      billingPeriod: null,
      sellingBulletPoints: [
        'Expert Video Walkthrough (15-min Loom)',
        '"Bug & Friction" Report',
        'Compliance Risk Spot-Check',
        '48-Hour Turnaround',
      ],
      learnMoreLongDescription:
        "Get expert eyes on your product without a meeting. I'll review your interface, flows, or documentation and send you a detailed 15-minute Loom breakdown identifying critical issues, friction points, and compliance risks. Perfect for founders who need quick validation before shipping or investors who want a second opinion on a product they're evaluating. 48-hour turnaround guaranteed.",
    },
    {
      id: 'executive-strategy-sprint',
      serviceName: 'Executive Strategy Sprint',
      category: 'consulting' as const,
      eyebrowHeadline: 'Strategy',
      price: 500,
      priceDisplay: '$500',
      billingPeriod: null,
      popular: true,
      sellingBulletPoints: [
        'Includes everything in Audit, plus:',
        '90-Minute Live Strategy Workshop',
        'Live Backlog Rework & Prioritization',
        '"Unstuck" 90-Day Execution Plan',
        '30-Day KPI Tracking Framework',
        'Session Recording & Transcript',
      ],
      learnMoreLongDescription:
        "Deep dive roadmap and backlog repair for founders who are stuck. We start with the Red Flag Audit, then jump on a 90-minute live strategy workshop where we rework your backlog, prioritize your roadmap, and build a 90-day execution plan. You'll leave with a clear KPI tracking framework and complete session recording. This is for product leaders who need to get unstuck fast and execute with confidence.",
    },
    {
      id: 'fractional-head-of-product',
      serviceName: 'Fractional Head of Product',
      category: 'consulting' as const,
      eyebrowHeadline: 'Strategy',
      price: 2500,
      priceDisplay: '$2.5k/mo',
      billingPeriod: 'monthly',
      sellingBulletPoints: [
        '4x Monthly Strategy Calls',
        'Direct Slack/Email Access',
        'PRD & Spec Writing Support',
        'Vendor & Tech Stack Review',
        'Hiring & Vetting Support',
      ],
      learnMoreLongDescription:
        "Ongoing leadership and execution for startups that need a Head of Product but aren't ready to hire full-time. I become your embedded product leader with 4 monthly strategy calls, direct Slack/email access, PRD and spec writing support, vendor oversight, and hiring guidance. Perfect for technical founders who need product expertise or non-technical founders who need someone to translate business goals into technical execution.",
    },
  ],
  services: [
    {
      id: 'fractional-technical-pm',
      serviceName: 'Fractional Technical PM',
      category: 'services' as const,
      eyebrowHeadline: 'Execution',
      price: 3000,
      priceDisplay: '$3k/mo',
      billingPeriod: 'monthly',
      sellingBulletPoints: [
        'Sprint Planning & Agile Ceremonies (Jira/Linear)',
        'Daily Dev Unblocking & QA',
        'Roadmap Management & Prioritization',
        'Vendor/Agency Oversight',
      ],
      learnMoreLongDescription:
        "For teams that have engineers but lack direction. I take over your backlog and delivery, running sprint planning, daily standups, and agile ceremonies in Jira or Linear. I unblock your developers daily, manage QA, prioritize your roadmap, and oversee vendors or agencies. This is hands-on execution—I'm in the trenches with your team making sure things ship on time and on spec.",
    },
    {
      id: 'strategic-clarity-call',
      serviceName: 'Strategic Clarity Call',
      category: 'services' as const,
      eyebrowHeadline: 'Diagnostics',
      price: 297,
      priceDisplay: '$297',
      billingPeriod: null,
      popular: true,
      sellingBulletPoints: [
        '60-Minute Zoom Strategy Session',
        'Validate your MVP Scope',
        'Tech Stack & Hiring Advice',
        'Session Recording Included',
      ],
      learnMoreLongDescription:
        "Stop guessing. Get a veteran PM's eyes on your roadmap or stack for 60 minutes. We'll validate your MVP scope, review your tech stack decisions, discuss hiring strategy, and answer your most pressing product questions. This is a focused, tactical session for founders who need specific answers without committing to ongoing consulting. Recording included so you can revisit the insights.",
    },
    {
      id: 'zero-to-one-launch',
      serviceName: 'The "Zero-to-One" Launch',
      category: 'services' as const,
      eyebrowHeadline: 'Execution',
      price: 0,
      priceDisplay: 'Custom pricing',
      billingPeriod: null,
      sellingBulletPoints: [
        'Full PRD & Technical Scoping',
        'Go-To-Market (GTM) Strategy',
        'Design & Dev Team Orchestration',
        'Launch Day Execution & Support',
      ],
      learnMoreLongDescription:
        "End-to-end execution. I manage your product build from concept to go-live. This includes writing the full PRD and technical scoping, developing your go-to-market strategy, orchestrating your design and development teams, and providing hands-on support on launch day. This is for founders with funding who need a seasoned product leader to take their idea from zero to one. Custom pricing based on scope and timeline.",
    },
  ],
  digitalProducts: [
    {
      id: 'diy-brand-kit',
      serviceName: 'DIY Brand Kit - Enhanced',
      category: 'digital-products' as const,
      eyebrowHeadline: 'Templates',
      price: 197,
      priceDisplay: '$197',
      originalPrice: 247,
      billingPeriod: null,
      popular: true,
      sellingBulletPoints: [
        'Brand Strategy Workbook',
        'Visual Identity Templates',
        'Social Media Templates (50+)',
        'Video Tutorials (10+ videos)',
        'Notion Workspace Template',
        'Private Community Access (30 days)',
        'Instant Download',
      ],
      learnMoreLongDescription:
        'Everything you need to build a consistent brand identity yourself. This comprehensive kit includes a brand strategy workbook to define your positioning, visual identity templates for logos and colors, 50+ social media templates, 10+ video tutorials walking you through the process, a Notion workspace template for organization, and 30 days of private community access. Perfect for founders who want to DIY their brand with professional guidance.',
    },
    {
      id: 'brand-strategy-workbook',
      serviceName: 'Brand Strategy Workbook',
      category: 'digital-products' as const,
      eyebrowHeadline: 'Templates',
      price: 47,
      priceDisplay: '$47',
      billingPeriod: null,
      sellingBulletPoints: [
        'Brand positioning framework',
        'Competitor analysis templates',
        'Target audience worksheets',
        'Messaging templates',
        'Instant PDF download',
      ],
      learnMoreLongDescription:
        "PDF workbook with exercises to define your brand positioning. Includes frameworks for brand positioning, competitor analysis templates, target audience worksheets, and messaging templates. This is the foundation of any strong brand—understanding who you are, who you serve, and how you're different. Instant PDF download.",
    },
    {
      id: 'social-templates-pack',
      serviceName: 'Social Media Templates Pack',
      category: 'digital-products' as const,
      eyebrowHeadline: 'Templates',
      price: 67,
      priceDisplay: '$67',
      billingPeriod: null,
      new: true,
      sellingBulletPoints: [
        '50+ Canva templates',
        'Instagram, LinkedIn, Twitter formats',
        'Consistent brand aesthetic',
        'Easy customization',
        'Lifetime access',
      ],
      learnMoreLongDescription:
        '50+ professionally designed Canva templates for consistent branding across all your social channels. Includes templates for Instagram posts and stories, LinkedIn posts and carousels, and Twitter graphics. All templates are designed to work together for a consistent brand aesthetic and are easily customizable in Canva. Lifetime access with all future updates included.',
    },
    {
      id: 'brand-voice-guide',
      serviceName: 'Brand Voice & Messaging Guide',
      category: 'digital-products' as const,
      eyebrowHeadline: 'Templates',
      price: 37,
      priceDisplay: '$37',
      billingPeriod: null,
      sellingBulletPoints: [
        'Tone of voice framework',
        'Messaging templates',
        'Copywriting formulas',
        'Examples and case studies',
        'Instant download',
      ],
      learnMoreLongDescription:
        'Define your brand voice and create compelling messaging. This guide includes a tone of voice framework to establish how your brand sounds, messaging templates for common scenarios, proven copywriting formulas, and real examples and case studies. Perfect for founders who struggle with writing consistent copy across their marketing. Instant download.',
    },
    {
      id: 'brand-strategy-masterclass',
      serviceName: 'Brand Strategy Masterclass',
      category: 'digital-products' as const,
      eyebrowHeadline: 'Courses',
      price: 497,
      priceDisplay: '$497',
      originalPrice: 697,
      billingPeriod: null,
      sellingBulletPoints: [
        '20+ video lessons',
        'Workbooks & templates',
        'Live Q&A sessions (monthly)',
        'Private community access',
        'Certificate of completion',
        'Lifetime access',
      ],
      learnMoreLongDescription:
        '12-week self-paced program to master brand strategy. Includes 20+ video lessons covering positioning, messaging, visual identity, and go-to-market strategy. Comes with workbooks and templates, monthly live Q&A sessions, private community access, and a certificate of completion. This is for founders and marketers who want to deeply understand brand strategy, not just execute templates. Lifetime access.',
    },
    {
      id: 'brand-identity-course',
      serviceName: 'Brand Identity Design Course',
      category: 'digital-products' as const,
      eyebrowHeadline: 'Courses',
      price: 247,
      priceDisplay: '$247',
      billingPeriod: null,
      sellingBulletPoints: [
        '6-module video course',
        'Design file templates (Figma)',
        'Step-by-step tutorials',
        'Case study breakdowns',
        'Lifetime access',
      ],
      learnMoreLongDescription:
        'Learn to design professional brand identities from scratch. This 6-module video course teaches you how to create logos, color palettes, typography systems, and complete visual identities. Includes Figma design file templates, step-by-step tutorials, and case study breakdowns of real brand projects. Perfect for designers or founders who want to learn the craft of brand identity design. Lifetime access.',
    },
    {
      id: 'client-onboarding-system',
      serviceName: 'Client Onboarding System',
      category: 'digital-products' as const,
      eyebrowHeadline: 'Templates',
      price: 147,
      priceDisplay: '$147',
      billingPeriod: null,
      sellingBulletPoints: [
        'Contract & proposal templates',
        'Project management workflows',
        'Client questionnaires',
        'Pricing calculator',
        'Email templates',
      ],
      learnMoreLongDescription:
        'Streamline your client onboarding with templates and workflows. Includes contract and proposal templates, project management workflows, client questionnaires to gather requirements, a pricing calculator spreadsheet, and email templates for every stage of the client journey. This is for service providers and agencies who want to professionalize their client experience and save hours on admin work.',
    },
  ],
};

export const ALL_SERVICES: Service[] = [
  ...SERVICES_DATA.consulting,
  ...SERVICES_DATA.services,
  ...SERVICES_DATA.digitalProducts,
];

export function getServiceById(id: string): Service | undefined {
  return ALL_SERVICES.find((s) => s.id === id);
}

export function getServicesByCategory(
  category: 'consulting' | 'services' | 'digital-products'
): Service[] {
  return ALL_SERVICES.filter((s) => s.category === category);
}
