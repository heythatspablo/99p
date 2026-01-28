import type { BlogArticle } from "./types";

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    slug: "product-strategy-frameworks",
    title: "Product Strategy Frameworks That Actually Work",
    description: "A practical guide to choosing and implementing product strategy frameworks that drive real business outcomes.",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    category: "Strategy",
    duration: "8 min read",
    views: "8.2K",
    publishedAt: "2024-01-25",
    isFeatured: true,
    keyTakeaways: [
      "Learn when to use Jobs-to-be-Done vs. OKRs vs. North Star frameworks",
      "Build a strategy that aligns engineering, product, and business goals",
      "Avoid the common pitfalls that make frameworks fail in practice",
      "Create a roadmap that actually gets executed",
    ],
    transcript: `
# Product Strategy Frameworks That Actually Work

Most product teams adopt frameworks because they're trendy, not because they solve real problems. Here's how to choose the right one for your context.

## The Framework Trap

Every product leader has a favorite framework. But copying what worked at Google or Amazon rarely works for your team because:
- Your team size is different
- Your market maturity is different
- Your organizational structure is different
- Your technical constraints are different

## Jobs-to-be-Done: When to Use It

JTBD works best when:
- You're entering a new market
- Customer needs are unclear
- You need to differentiate from competitors
- Innovation is more important than execution speed

## OKRs: The Execution Framework

OKRs excel when:
- You have clear strategic direction
- Alignment across teams is the bottleneck
- You need to measure progress quantitatively
- Your team is larger than 20 people

## North Star Metric: Focus at Scale

The North Star approach works when:
- You have product-market fit
- Growth is the primary goal
- Multiple teams need to coordinate
- You risk optimizing for vanity metrics

## Combining Frameworks

The best teams don't pick one framework - they combine them strategically. Here's how...
`,
    relatedArticles: ["2", "3"],
  },
  {
    id: "2",
    slug: "design-system-governance",
    title: "Design System Governance: Lessons from Airbnb",
    description: "How to build and maintain a design system that scales across teams without becoming a bottleneck.",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    category: "UX Audits",
    duration: "12 min read",
    views: "6.8K",
    publishedAt: "2024-01-22",
    isFeatured: false,
    keyTakeaways: [
      "Establish clear ownership and contribution models",
      "Balance consistency with team autonomy",
      "Create a versioning strategy that doesn't break production",
      "Measure design system adoption and impact",
    ],
    transcript: `
# Design System Governance: Lessons from Airbnb

A design system without governance is just a component library. Here's how to build the processes that make it actually work.

## The Governance Problem

Most design systems fail not because of bad components, but because of unclear decision-making:
- Who approves new components?
- How do teams request changes?
- What happens when teams need exceptions?
- How do you deprecate old patterns?

## The Contribution Model

Successful design systems have clear contribution paths:

### Centralized Model
- Single team owns all components
- High consistency, slow iteration
- Works for: Small companies, regulated industries

### Federated Model
- Multiple teams contribute
- Faster innovation, requires coordination
- Works for: Large companies, fast-moving products

### Hybrid Model
- Core team owns foundations
- Product teams contribute patterns
- Best of both worlds when done right

## Versioning Strategy

Breaking changes will happen. Plan for them:
- Semantic versioning for all components
- Deprecation warnings 2 versions ahead
- Migration guides with code examples
- Automated codemods when possible

## Measuring Success

Track these metrics:
- Adoption rate across teams
- Time to ship new features
- Design consistency scores
- Developer satisfaction

The goal isn't 100% adoption - it's enabling teams to move faster while maintaining quality.
`,
    relatedArticles: ["1", "3"],
  },
  {
    id: "3",
    slug: "pm-career-transitions",
    title: "From IC to Director: The PM Career Transition Nobody Talks About",
    description: "The skills that got you promoted to senior PM won't make you a great director. Here's what actually matters.",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    category: "Career",
    duration: "10 min read",
    views: "9.1K",
    publishedAt: "2024-01-18",
    isFeatured: false,
    keyTakeaways: [
      "Shift from execution to strategy and team development",
      "Learn to influence without authority across the organization",
      "Build systems that scale beyond your direct involvement",
      "Navigate the politics of senior leadership",
    ],
    transcript: `
# From IC to Director: The PM Career Transition Nobody Talks About

The jump from senior IC to director is the hardest transition in product management. Here's why - and how to make it.

## The Mindset Shift

As an IC, you're rewarded for:
- Shipping features
- Making decisions quickly
- Being the expert in the room
- Solving problems yourself

As a director, you need to:
- Enable others to ship
- Create space for team decisions
- Develop expertise in others
- Build systems that solve problems

This isn't just a skill change - it's an identity change.

## The Delegation Paradox

You were promoted because you're great at execution. Now you need to stop executing.

The hardest part: Watching your team make decisions you would have made differently, and not intervening.

When to step in:
- Irreversible decisions with major impact
- Team is missing critical context
- Patterns of repeated mistakes

When to stay out:
- Reversible decisions
- Learning opportunities
- Different approach, similar outcome

## Building Influence

Director-level impact requires influencing teams you don't manage:
- Engineering leadership
- Sales and marketing
- Executive team
- Other product directors

The skills that matter:
- Storytelling with data
- Building coalitions
- Understanding incentives
- Playing the long game

## The Politics Are Real

At this level, politics aren't optional. They're how work gets done.

Good politics:
- Building relationships before you need them
- Understanding organizational dynamics
- Aligning incentives across teams

Bad politics:
- Taking credit for others' work
- Undermining peers
- Optimizing for perception over impact

## Your First 90 Days

Focus on:
1. Understanding the business context
2. Building relationships with peers
3. Assessing your team's strengths
4. Identifying 1-2 strategic bets

Don't:
- Reorganize immediately
- Make major decisions without context
- Try to prove yourself through execution

The transition takes 6-12 months. Be patient with yourself.
`,
    relatedArticles: ["1", "2"],
  },
];

export function getFeaturedArticle(): BlogArticle | null {
  return blogArticles.find((article) => article.isFeatured) || null;
}

export function getArticlesByCategory(category: string): BlogArticle[] {
  if (category === "All") {
    return blogArticles;
  }
  return blogArticles.filter((article) => article.category === category);
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(
  currentId: string,
  relatedIds?: string[]
): BlogArticle[] {
  if (!relatedIds || relatedIds.length === 0) {
    return blogArticles
      .filter((article) => article.id !== currentId)
      .slice(0, 3);
  }

  return blogArticles.filter((article) => relatedIds.includes(article.id));
}
