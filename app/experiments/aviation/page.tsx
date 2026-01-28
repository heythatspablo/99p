"use client";

/**
 * Case Study Template
 * 
 * This is a reusable template for creating high-end case studies with an Apple Newsroom aesthetic.
 * To create a new case study:
 * 1. Copy the entire /app/experiments/template folder to /app/experiments/[your-case-name]
 * 2. Update all hardcoded content in this file with your case study data
 * 3. Keep the same structure and styling for consistency
 * 
 * See /app/experiments/README.md for detailed instructions
 */

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, 
  Clock, 
  Shield, 
  Zap, 
  CheckCircle2,
  TrendingUp,
  Users,
  Target
} from "lucide-react";
import Link from "next/link";

export default function AviationCaseStudy() {
  const [activeSection, setActiveSection] = useState("situation");
  const [showNav, setShowNav] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 600);
      
      const sections = ["situation", "insight", "solution", "execution", "results"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero: Cinematic Banner */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pb-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Badge variant="outline" className="mb-6 text-neutral-300 border-neutral-600 bg-neutral-800/50 backdrop-blur-sm">
              Case Study
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-[0.95]">
              Digitizing the "White Glove"
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-4 max-w-2xl">
              How a manual private aviation workflow became a self-serve revenue engine.
            </p>
            <p className="text-sm text-neutral-400 mb-8 tracking-wide">
              Product Vision • Cross-Functional Leadership • Outcome Orientation
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-neutral-900 hover:bg-neutral-100" onClick={() => scrollToSection("situation")}>
                Read the case study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10" onClick={() => scrollToSection("results")}>
                Skip to outcomes
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Story Navigation */}
      <motion.nav
        style={{
          transform: showNav ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease-in-out',
        }}
        className="sticky top-20 z-40 bg-white/80 backdrop-blur-lg border-b border-neutral-200"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between py-4">
            <div className="flex gap-8">
              {["situation", "insight", "solution", "execution", "results"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors capitalize ${
                    activeSection === section
                      ? "text-neutral-900"
                      : "text-neutral-500 hover:text-neutral-700"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
          <motion.div
            className="h-0.5 bg-neutral-900"
            style={{
              scaleX: scrollYProgress,
              transformOrigin: "0%",
            }}
          />
        </div>
      </motion.nav>

      {/* Chapter 1: Situation */}
      <section id="situation" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
                Luxury at a Standstill
              </h2>
              <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
                <p>Private aviation sells time. Yet the experience behind the scenes was slow.</p>
                <p>While flights could be booked online, everything that followed remained manual.</p>
                <p>Catering requests. Passenger manifests. Ground transportation.</p>
                <p>Each update triggered emails, handoffs, and human checks.</p>
                <p>Every handoff added delay. Every delay added risk.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="border-l-4 border-neutral-900 pl-6">
                <p className="text-lg font-semibold text-neutral-900">12 emails per itinerary change</p>
              </div>
              <div className="border-l-4 border-neutral-900 pl-6">
                <p className="text-lg font-semibold text-neutral-900">60% of concierge time spent on data entry</p>
              </div>
              <div className="border-l-4 border-neutral-900 pl-6">
                <p className="text-lg font-semibold text-neutral-900">Hours to days to confirm flights</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Surface: Bento Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: Clock,
                title: "Operational Drag",
                description: "Concierge teams became the glue between systems instead of a growth engine.",
              },
              {
                icon: Shield,
                title: "Version Confusion",
                description: "No single source of truth. The latest email wasn't always right.",
              },
              {
                icon: Target,
                title: "Compliance Risk",
                description: "Passenger data arrived late and incomplete. Errors surfaced too late.",
              },
              {
                icon: Users,
                title: "Client Anxiety",
                description: "High-stakes travel shouldn't require phone calls for confidence.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-white/60 backdrop-blur-sm border-neutral-200 hover:shadow-lg transition-shadow">
                  <item.icon className="h-10 w-10 text-neutral-900 mb-4" />
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Chapter 2: Insight */}
      <section id="insight" className="py-32 bg-gradient-to-br from-neutral-100 via-neutral-50 to-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-8 tracking-tight">
              Control is the<br />Ultimate Luxury
            </h2>
            <div className="text-xl text-neutral-600 mb-4 max-w-2xl mx-auto leading-relaxed space-y-2">
              <p>Clients didn't want more service.</p>
              <p>They wanted less noise.</p>
              <p>They wanted instant control.</p>
            </div>
            <p className="text-lg text-neutral-500 mb-16 max-w-2xl mx-auto italic">
              Autonomy and privacy weren't extras. They were the experience.
            </p>

            <div className="space-y-8">
              {[
                {
                  quote: "I trust your team. I just don't want to bother them every time I need to change something.",
                },
                {
                  quote: "The emails make me nervous. I never know if the latest version is right.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-lg border border-neutral-200"
                >
                  <p className="text-lg italic text-neutral-700">"{item.quote}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 3: Solution */}
      <section id="solution" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
                The Itinerary<br />Personalization<br />Engine
              </h2>
              <div className="text-lg text-neutral-600 leading-relaxed mb-8 space-y-3">
                <p>A self-serve dashboard where clients manage every detail of their flight.</p>
                <p>Fast. Secure. In real time.</p>
                <p>The goal wasn't to digitize forms.</p>
                <p>It was to prevent errors before they existed.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[9/16] max-w-sm mx-auto bg-neutral-900 rounded-3xl shadow-2xl p-4 border-8 border-neutral-800">
                <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-neutral-900 rounded-2xl mx-auto mb-4" />
                    <div className="space-y-2">
                      <div className="h-3 bg-neutral-300 rounded w-32 mx-auto" />
                      <div className="h-3 bg-neutral-300 rounded w-24 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-neutral-500 mt-6">A single place to update the flight—without a call.</p>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-neutral-900 rounded-2xl opacity-10 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Decisions: Feature Bento */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Zap,
                title: "Progressive Disclosure",
                why: "Kept complexity hidden until needed.",
                points: ["Adaptive steps by context", "Validation at each stage", "Calm, focused experience"],
              },
              {
                icon: Shield,
                title: "Live Manifest",
                why: "Moved compliance from cleanup to prevention.",
                points: ["Real-time field rules", "Route-aware requirements", "Blocked invalid submissions"],
              },
              {
                icon: CheckCircle2,
                title: "Visual Commerce",
                why: "Eliminated catering errors.",
                points: ["Structured menus", "Exact selections", "Vendor-ready orders"],
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-white border-neutral-200 hover:shadow-lg transition-shadow">
                  <item.icon className="h-10 w-10 text-neutral-900 mb-4" />
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">{item.why}</p>
                  <ul className="space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i} className="text-sm text-neutral-500 flex items-start">
                        <span className="mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Chapter 4: Execution Timeline */}
      <section id="execution" className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-16 text-center tracking-tight"
          >
            Execution Journey
          </motion.h2>

          <div className="space-y-12">
            {[
              {
                title: "Sales Concern",
                conflict: "Automation would dilute the white glove.",
                resolution: "Removed low-value logistics to amplify relationships.",
              },
              {
                title: "Operational Reality",
                conflict: "Manual handoffs caused silent errors.",
                resolution: "Designed systems that failed early and safely.",
              },
              {
                title: "Engineering Alignment",
                conflict: "Fragile integrations risked trust.",
                resolution: "Built clear APIs with confirmations and fallbacks.",
              },
              {
                title: "Compliance Partnership",
                conflict: "Rules lived in documents.",
                resolution: "Embedded directly into product flows.",
              },
            ].map((node, index) => (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-12 border-l-2 border-neutral-300"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-neutral-900 rounded-full" />
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">{node.title}</h3>
                <div className="space-y-2">
                  <p className="text-neutral-600">
                    <span className="font-semibold text-neutral-900">Conflict:</span> {node.conflict}
                  </p>
                  <p className="text-neutral-600">
                    <span className="font-semibold text-neutral-900">Resolution:</span> {node.resolution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 5: Results */}
      <section id="results" className="py-32 bg-neutral-900 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight"
          >
            Outcomes
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                metric: "40%",
                label: "Increase in account conversion",
                description: "Instant control became the differentiator.",
              },
              {
                icon: Clock,
                metric: "60%",
                label: "Reduction in time to confirm",
                description: "Flights moved from days to hours.",
              },
              {
                icon: Shield,
                metric: "Near-zero",
                label: "Compliance errors",
                description: "Validation shifted left.",
              },
              {
                icon: Users,
                metric: "Major",
                label: "Concierge time reclaimed",
                description: "Less data entry. More growth.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <item.icon className="h-12 w-12 mx-auto mb-4 text-neutral-400" />
                <div className="text-5xl font-bold mb-2">{item.metric}</div>
                <div className="text-lg font-semibold mb-2 text-neutral-300">{item.label}</div>
                <p className="text-sm text-neutral-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Takeaway */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8 tracking-tight">
              A Modern Service Model
            </h2>
            <div className="text-xl text-neutral-600 mb-12 leading-relaxed space-y-3">
              <p>By respecting autonomy and privacy, we didn't just ship a feature.</p>
              <p>We removed friction.</p>
              <p>Prevented risk.</p>
              <p>Unlocked growth.</p>
              <p>The product became the service.</p>
            </div>
            <Button size="lg" asChild className="bg-neutral-900 hover:bg-neutral-800">
              <Link href="/contact">
                Let's talk product leadership
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
