"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: "aviation",
    title: "Digitizing the White Glove.",
    subtitle: "How I turned a manual aviation workflow into a self-serve revenue engine.",
    href: "/experiments/aviation",
    imagePlaceholder: true,
  },
];

export default function CaseStudyListingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-green pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
            Experiments
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Deep dives into product strategy, execution, and outcomes.
          </p>
        </div>
      </section>

      {/* Case Study List */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto space-y-0">
          {caseStudies.map((study, index) => (
            <Link key={study.id} href={study.href}>
              <article className="group">
                {/* 2-Column Layout */}
                <div className={`grid md:grid-cols-2 gap-0 bg-neutral-50 hover:bg-neutral-100 transition-colors ${
                  index % 2 === 0 ? "" : "md:grid-flow-dense"
                }`}>
                  {/* Image Column */}
                  <div className={`relative aspect-[4/3] md:aspect-auto md:min-h-[500px] ${
                    index % 2 === 0 ? "" : "md:col-start-2"
                  }`}>
                    {study.imagePlaceholder ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-24 h-24 bg-neutral-400 rounded-full mx-auto mb-4 opacity-50" />
                          <div className="space-y-2">
                            <div className="h-4 bg-neutral-400 rounded w-48 mx-auto opacity-50" />
                            <div className="h-4 bg-neutral-400 rounded w-32 mx-auto opacity-50" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={study.imagePlaceholder}
                        alt={study.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Text Column */}
                  <div className={`flex flex-col justify-center p-12 md:p-16 ${
                    index % 2 === 0 ? "" : "md:col-start-1 md:row-start-1"
                  }`}>
                    <div className="space-y-6">
                      <h2 className="text-4xl md:text-5xl font-bold tracking-tight group-hover:text-neutral-700 transition-colors">
                        {study.title}
                      </h2>
                      <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                        {study.subtitle}
                      </p>
                      <div className="flex items-center gap-2 text-neutral-900 font-medium group-hover:gap-4 transition-all">
                        <span>Read case study</span>
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Need this level of product rigor?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Let's talk about your product challenge.
          </p>
          <Button size="lg" asChild className="bg-white text-neutral-900 hover:bg-neutral-100">
            <Link href="/contact">
              Book a Strategy Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
