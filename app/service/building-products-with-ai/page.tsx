"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Layers, 
  Shield, 
  MessageSquare, 
  ArrowRight,
  Sparkles,
  Code2,
  Database,
  TestTube,
  Zap
} from "lucide-react";

const pageData = {
  hero: {
    headline: "Building Products with A.I.",
    subheadline: "For Teams and Individuals",
    description: "A comprehensive 2-week intensive residency program that transforms your product development capabilities through AI-native architecture, type-safe systems, and agentic workflows.",
    cta: {
      primary: "Apply for Residency",
      secondary: "View Curriculum"
    }
  },
  
  technicalBreadth: {
    title: "Technical Breadth",
    subtitle: "Master the full spectrum of modern AI product development",
    cards: [
      {
        icon: Layers,
        title: "Architecture-First Design",
        description: "Build systems that scale from prototype to production",
        details: [
          "Monorepo architecture with Turborepo",
          "Shared type definitions across frontend/backend",
          "Component-driven development patterns",
          "Scalable folder structures and conventions",
          "API design and versioning strategies"
        ]
      },
      {
        icon: Shield,
        title: "The Type-Safe Fortress",
        description: "Eliminate runtime errors before they happen",
        details: [
          "End-to-end type safety with TypeScript",
          "Zod schema validation at boundaries",
          "Type inference and generic patterns",
          "Database type generation with Prisma",
          "API contract validation"
        ]
      },
      {
        icon: MessageSquare,
        title: "Agentic Communication (ARM)",
        description: "Build AI agents that actually work in production",
        details: [
          "Action-Response-Memory patterns",
          "Tool calling and function execution",
          "Context management and state persistence",
          "Multi-agent orchestration",
          "Production monitoring and debugging"
        ]
      }
    ]
  },
  
  residency: {
    title: "2-Week Intensive Residency",
    subtitle: "From foundation to production deployment",
    weeks: [
      {
        number: "01",
        title: "Foundation",
        theme: "Architecture, Types, and Core Systems",
        modules: [
          {
            day: "Days 1-2",
            title: "Environment & Architecture",
            topics: [
              "Development environment setup (Cursor, Windsurf)",
              "Monorepo architecture with Turborepo",
              "TypeScript configuration and best practices",
              "Git workflows and version control"
            ]
          },
          {
            day: "Days 3-4",
            title: "Database & Type Safety",
            topics: [
              "Supabase setup and schema design",
              "Prisma ORM and type generation",
              "Zod validation patterns",
              "API route architecture"
            ]
          },
          {
            day: "Day 5",
            title: "Frontend Foundation",
            topics: [
              "Next.js App Router patterns",
              "shadcn/ui component system",
              "Tailwind CSS design system",
              "Client/Server component patterns"
            ]
          }
        ]
      },
      {
        number: "02",
        title: "Production",
        theme: "AI Integration, Testing, and Deployment",
        modules: [
          {
            day: "Days 6-7",
            title: "AI Agent Development",
            topics: [
              "OpenAI API integration",
              "ARM (Action-Response-Memory) patterns",
              "Tool calling and function execution",
              "Context management strategies"
            ]
          },
          {
            day: "Days 8-9",
            title: "Testing & Quality",
            topics: [
              "Playwright E2E testing",
              "API testing strategies",
              "Type-safe test patterns",
              "CI/CD pipeline setup"
            ]
          },
          {
            day: "Day 10",
            title: "Deployment & Monitoring",
            topics: [
              "Fly.io deployment",
              "Environment variable management",
              "Production monitoring",
              "Performance optimization"
            ]
          }
        ]
      }
    ]
  },
  
  techStack: {
    title: "Production-Grade Tech Stack",
    tools: [
      { name: "Cursor", logo: "cursor" },
      { name: "Windsurf", logo: "windsurf" },
      { name: "Next.js", logo: "nextjs" },
      { name: "TypeScript", logo: "typescript" },
      { name: "Supabase", logo: "supabase" },
      { name: "Prisma", logo: "prisma" },
      { name: "Zod", logo: "zod" },
      { name: "Playwright", logo: "playwright" },
      { name: "Turborepo", logo: "turborepo" },
      { name: "Fly.io", logo: "flyio" }
    ]
  },
  
  footerCTA: {
    statement: "Transform your product development velocity with AI-native architecture and type-safe systems.",
    subtext: "Limited to 10 participants per cohort. Next cohort starts in 3 weeks.",
    cta: "Apply Now",
    price: "$4,997"
  }
};

export default function BuildingProductsWithAI() {
  return (
    <main className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 py-24">
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-balance mb-6">
              {pageData.hero.headline}
            </h1>
            <p className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-600 dark:text-neutral-400 mb-8">
              {pageData.hero.subheadline}
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto mb-12">
              {pageData.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105 bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900"
              >
                <Link href="/contact">
                  {pageData.hero.cta.primary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105"
              >
                <Link href="#curriculum">
                  {pageData.hero.cta.secondary}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Breadth Bento */}
      <section className="py-32 px-6">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              {pageData.technicalBreadth.title}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              {pageData.technicalBreadth.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pageData.technicalBreadth.cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-neutral-50 dark:bg-neutral-900/50 rounded-3xl p-8 border border-neutral-200/50 dark:border-neutral-800"
              >
                <div className="mb-6">
                  <card.icon className="h-12 w-12 text-neutral-900 dark:text-neutral-50" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
                <p className="text-muted-foreground mb-6">{card.description}</p>
                <ul className="space-y-3">
                  {card.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Sparkles className="h-4 w-4 mt-0.5 flex-shrink-0 text-neutral-400" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Residency Timeline */}
      <section id="curriculum" className="py-32 px-6 bg-neutral-50 dark:bg-neutral-900/30">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              {pageData.residency.title}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              {pageData.residency.subtitle}
            </p>
          </motion.div>

          <div className="space-y-32">
            {pageData.residency.weeks.map((week, weekIndex) => (
              <motion.div
                key={week.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-12"
              >
                <div className="md:col-span-3 md:sticky md:top-24 self-start">
                  <div className="text-8xl font-bold text-neutral-200 dark:text-neutral-800 mb-4">
                    {week.number}
                  </div>
                  <h3 className="text-3xl font-semibold mb-2">{week.title}</h3>
                  <p className="text-muted-foreground">{week.theme}</p>
                </div>

                <div className="md:col-span-9 space-y-8">
                  {week.modules.map((module, moduleIndex) => (
                    <motion.div
                      key={moduleIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: moduleIndex * 0.1 }}
                      className="bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-200/50 dark:border-neutral-800"
                    >
                      <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">
                        {module.day}
                      </div>
                      <h4 className="text-2xl font-semibold mb-4">{module.title}</h4>
                      <ul className="space-y-3">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-neutral-900 dark:bg-neutral-50 mt-2 flex-shrink-0" />
                            <span className="text-neutral-600 dark:text-neutral-400">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-screen-xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              {pageData.techStack.title}
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          <div className="flex gap-16 animate-marquee">
            {[...pageData.techStack.tools, ...pageData.techStack.tools].map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex items-center justify-center min-w-[200px] h-24 grayscale hover:grayscale-0 transition-all"
              >
                <div className="text-6xl font-bold text-neutral-300 dark:text-neutral-700">
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-neutral-900 dark:bg-neutral-950 border border-neutral-800 p-16 md:p-24"
          >
            <div className="absolute inset-0 backdrop-blur-xl bg-white/10" />
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                {pageData.footerCTA.statement}
              </h2>
              <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                {pageData.footerCTA.subtext}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Button 
                  asChild 
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105 bg-white text-neutral-900"
                >
                  <Link href="/contact">
                    {pageData.footerCTA.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <p className="text-3xl font-bold text-white">{pageData.footerCTA.price}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
