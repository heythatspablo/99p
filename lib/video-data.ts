import type { VideoEpisode } from "./types";

export const videoEpisodes: VideoEpisode[] = [
  {
    id: "1",
    slug: "unit-economics-saas-breakdown",
    title: "Unit Economics: The SaaS Breakdown Nobody Talks About",
    description: "Deep dive into the real metrics that matter for SaaS businesses. Learn how to calculate CAC, LTV, and payback periods that actually drive decisions.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
    category: "Strategy",
    duration: "24:15",
    views: "12.4K",
    publishedAt: "2024-01-20",
    isFeatured: true,
    keyTakeaways: [
      "Calculate true Customer Acquisition Cost (CAC) including hidden expenses",
      "Build a cohort-based LTV model that accounts for churn patterns",
      "Identify the 3 inflection points that signal product-market fit",
      "Use the Rule of 40 to benchmark your growth efficiency",
    ],
    transcript: `
# Understanding Unit Economics in SaaS

Unit economics are the foundation of every successful SaaS business. Yet most founders focus on vanity metrics instead of the numbers that actually matter.

## The CAC Trap

Customer Acquisition Cost isn't just your ad spend. It includes:
- Sales team salaries and commissions
- Marketing technology stack
- Content production costs
- Free trial infrastructure costs

Most companies underestimate their true CAC by 40-60%.

## Building a Real LTV Model

Lifetime Value calculations need to account for:
- Monthly churn rate (not annual)
- Expansion revenue from upsells
- Contraction from downgrades
- Support costs per customer

The formula everyone uses is wrong. Here's what actually works...

## The Rule of 40

Growth Rate + Profit Margin should equal at least 40%. This is the benchmark that separates great SaaS companies from mediocre ones.

If you're growing at 60% but losing 30% margins, you're at 30% - below the threshold. Time to optimize.

## Conclusion

Master these metrics before you scale. Every dollar you spend on growth should be backed by solid unit economics.
    `,
    relatedEpisodes: ["2", "3"],
  },
  {
    id: "2",
    slug: "design-system-audit-airbnb",
    title: "Design System Audit: How Airbnb Maintains Consistency at Scale",
    description: "A forensic analysis of Airbnb's design system. Learn the patterns, components, and governance that enable 100+ designers to ship cohesively.",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
    category: "UX Audits",
    duration: "18:42",
    views: "8.9K",
    publishedAt: "2024-01-15",
    keyTakeaways: [
      "Component architecture that scales to 1000+ screens",
      "Token naming conventions that prevent design debt",
      "Governance models for distributed design teams",
      "Documentation patterns that developers actually use",
    ],
    transcript: `
# Design System Audit: Airbnb

Airbnb's design system is one of the most mature in the industry. Let's break down what makes it work.

## Component Architecture

Their system is built on atomic design principles, but with key modifications...

## Token Strategy

Color, spacing, and typography tokens follow a mathematical scale that ensures consistency...

## Governance

With 100+ designers, they use a federated model where teams own components but follow central standards...
    `,
    relatedEpisodes: ["1", "4"],
  },
  {
    id: "3",
    slug: "career-pivot-pm-to-founder",
    title: "Career Pivot: From Product Manager to Founder",
    description: "The skills that transfer, the gaps you'll face, and the mindset shifts required to go from employee to entrepreneur.",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
    category: "Career",
    duration: "21:33",
    views: "15.2K",
    publishedAt: "2024-01-10",
    keyTakeaways: [
      "The 5 PM skills that directly translate to founding",
      "Financial runway planning for a safe transition",
      "Building in public vs. stealth mode tradeoffs",
      "Finding your first 10 customers without a network",
    ],
    transcript: `
# From PM to Founder

Making the leap from Product Manager to Founder is one of the most common career pivots in tech. Here's what you need to know.

## Skills That Transfer

As a PM, you already have:
- User research and validation skills
- Roadmap planning and prioritization
- Cross-functional collaboration experience

But you're missing...

## The Gaps

Founders need to master:
- Sales and revenue generation
- Fundraising and investor relations
- Financial modeling and unit economics

## The Mindset Shift

The biggest change isn't tactical - it's psychological...
    `,
    relatedEpisodes: ["1", "5"],
  },
  {
    id: "4",
    slug: "pricing-psychology-saas",
    title: "Pricing Psychology: Why Your SaaS Pricing Page Is Broken",
    description: "Behavioral economics applied to SaaS pricing. Learn the cognitive biases that drive purchasing decisions and how to architect your pricing tiers.",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
    category: "Strategy",
    duration: "19:28",
    views: "10.1K",
    publishedAt: "2024-01-05",
    keyTakeaways: [
      "Anchoring effects and how to use decoy pricing",
      "The psychology of 'per seat' vs. 'per usage' models",
      "Value metric selection that aligns with customer success",
      "A/B testing framework for pricing experiments",
    ],
    transcript: `
# Pricing Psychology for SaaS

Your pricing page is a product. Here's how to design it using behavioral economics.

## Anchoring and Decoys

The first price a customer sees becomes their reference point...

## Value Metrics

Choosing the right value metric is more important than the price itself...

## Testing Framework

Here's how to run pricing experiments without destroying trust...
    `,
    relatedEpisodes: ["1", "2"],
  },
  {
    id: "5",
    slug: "ux-audit-notion-onboarding",
    title: "UX Audit: Notion's Onboarding Flow (2024 Edition)",
    description: "A screen-by-screen breakdown of Notion's user onboarding. What they do brilliantly, where they stumble, and what you can steal.",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
    category: "UX Audits",
    duration: "16:55",
    views: "9.3K",
    publishedAt: "2023-12-28",
    keyTakeaways: [
      "Progressive disclosure patterns that reduce cognitive load",
      "Template strategy that accelerates time-to-value",
      "Activation metrics and how Notion optimizes for them",
      "Empty state design that drives engagement",
    ],
    transcript: `
# UX Audit: Notion Onboarding

Notion has one of the most sophisticated onboarding flows in SaaS. Let's dissect it.

## First Impression

The moment you sign up, Notion asks you about your use case...

## Template Strategy

Instead of a blank canvas, they offer curated templates...

## Activation Loops

Notion's activation metric is "3 pages created in 7 days"...
    `,
    relatedEpisodes: ["2", "4"],
  },
];

export function getEpisodeBySlug(slug: string): VideoEpisode | undefined {
  return videoEpisodes.find((episode) => episode.slug === slug);
}

export function getFeaturedEpisode(): VideoEpisode | undefined {
  return videoEpisodes.find((episode) => episode.isFeatured);
}

export function getEpisodesByCategory(category: string): VideoEpisode[] {
  if (category === "All") return videoEpisodes;
  return videoEpisodes.filter((episode) => episode.category === category);
}

export function getRelatedEpisodes(episodeId: string, relatedIds?: string[]): VideoEpisode[] {
  if (!relatedIds) return [];
  return videoEpisodes.filter((episode) => relatedIds.includes(episode.id));
}
