import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Hero } from "@/components/sections/Hero";
import { ArrowRight, Zap, Palette, Package } from "lucide-react";
import { CONSULTING_DATA } from "@/lib/consulting-data";
import { GradientBackground } from "@/components/ui/gradient-background";

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero Section - The Umbrella */}
      <section className="relative section-padding pt-32 bg-black min-h-screen flex items-center">
        <GradientBackground variant="hero" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6">Now accepting Q1 Strategy Partners</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-white">
              Regain your focus. I&apos;ll handle the build.
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto">
              Founders shouldn&apos;t manage tickets. That&apos;s my job. I filter the noise and unblock your engineers so you can focus on growth. You keep the vision. I handle the execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/consulting">
                  Explore Strategy <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/work">View Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Meet Pablo - The Human Element */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
              <Avatar className="w-48 h-48 mx-auto md:mx-0">
                <AvatarImage src="/99p-0002.png" alt="Product Leader" />
                <AvatarFallback className="text-4xl">PL</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-3xl md:text-4xl mb-6">Meet Pablo.</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  I sit at the intersection of Engineering, Design, and Revenue.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  My role is simple: I translate your high-level vision into shipping software. I don&apos;t just design screens; I build the operational systems that unblock your developers and clarify your roadmap. I handle the chaos of execution so you don&apos;t have to.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  <strong>Who I work with:</strong> I partner exclusively with Seed to Series A founders who are tired of playing &apos;Project Manager&apos; and are ready to focus on scaling the company.
                </p>
                <p className="text-sm font-medium text-muted-foreground mb-6">
                  Pablo • Product Strategist
                </p>
                <Button asChild size="lg">
                  <Link href="/consulting">Book a Strategy Session</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Authority Bar - Bento Box */}
      <section className="bg-background pt-20 md:pt-28 lg:pt-32 pb-8 md:pb-11 lg:pb-13">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Revenue Impact - Large Feature Card */}
            <div className="col-span-2 md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-border rounded-3xl p-8 md:p-12 flex flex-col justify-center items-center text-center hover:shadow-xl transition-all duration-300 group">
              <div className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                {CONSULTING_DATA.credentials.stats[0].stat}
              </div>
              <div className="text-base md:text-lg text-muted-foreground font-medium">
                {CONSULTING_DATA.credentials.stats[0].label}
              </div>
            </div>

            {/* Efficiency Gains - Medium Card */}
            <div className="col-span-1 md:col-span-1 bg-card border border-border rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
                {CONSULTING_DATA.credentials.stats[1].stat}
              </div>
              <div className="text-sm text-muted-foreground">
                {CONSULTING_DATA.credentials.stats[1].label}
              </div>
            </div>

            {/* Churn Reduction - Medium Card */}
            <div className="col-span-1 md:col-span-1 bg-card border border-border rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
                {CONSULTING_DATA.credentials.stats[2].stat}
              </div>
              <div className="text-sm text-muted-foreground">
                {CONSULTING_DATA.credentials.stats[2].label}
              </div>
            </div>

            {/* Founders Mentored - Wide Card */}
            <div className="col-span-2 md:col-span-2 bg-gradient-to-r from-card via-card to-primary/5 border border-border rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-4 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-foreground">
                {CONSULTING_DATA.credentials.stats[3].stat}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {CONSULTING_DATA.credentials.stats[3].label}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How We Partner - Routing */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-center mb-12">How We Partner</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Primary - Consulting */}
            <Card className="border-2 border-primary relative scale-105 shadow-xl">
              <CardHeader>
                <Zap className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Strategic Advisory</CardTitle>
                <CardDescription>
                  For founders needing roadmaps, retention fixes, and operational scale.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Product Strategy & Roadmapping</li>
                  <li>• Retention & Churn Analysis</li>
                  <li>• Compliance & UX Balance</li>
                  <li>• Backlog Prioritization</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/consulting">View Consulting Packages</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Card 2: Secondary - Execution */}
            <Card>
              <CardHeader>
                <Palette className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Product Design & UX</CardTitle>
                <CardDescription>
                  End-to-end design systems and high-fidelity prototyping.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Design System Architecture</li>
                  <li>• User Flow Optimization</li>
                  <li>• High-Fidelity Prototypes</li>
                  <li>• Brand Identity Systems</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/work">View Work</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Card 3: Downsell - Resources */}
            <Card>
              <CardHeader>
                <Package className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Founder Toolkits</CardTitle>
                <CardDescription>
                  DIY frameworks for early-stage speed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Brand Strategy Workbooks</li>
                  <li>• Social Media Templates</li>
                  <li>• Onboarding Systems</li>
                  <li>• Product Masterclasses</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/pricing">Browse Resources</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Selected Case Studies - The Proof */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Selected Case Studies</h2>
          <Tabs defaultValue="fintech" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="fintech">Fintech</TabsTrigger>
              <TabsTrigger value="saas">SaaS</TabsTrigger>
              <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
            </TabsList>

            <TabsContent value="fintech">
              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">75% Faster Onboarding</Badge>
                  <CardTitle>Identity Verification Redesign</CardTitle>
                  <CardDescription>
                    Optimizing the &quot;Happy Path&quot; for a regulated B2B platform.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Reduced identity verification processing time from 75 seconds to 18 seconds while maintaining strict compliance requirements. Implemented progressive disclosure patterns that reduced user drop-off by 30% during KYC flows.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">75s → 18s</div>
                      <div className="text-sm text-muted-foreground">Processing Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">30%</div>
                      <div className="text-sm text-muted-foreground">Drop-off Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm text-muted-foreground">Compliance</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="saas">
              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">40% Revenue Lift</Badge>
                  <CardTitle>B2B SaaS Conversion Optimization</CardTitle>
                  <CardDescription>
                    Rebuilding the trial-to-paid funnel with data-driven insights.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Redesigned onboarding flow using behavioral analytics to identify friction points. Implemented progressive feature discovery and contextual upgrade prompts that increased trial-to-paid conversion by 40%.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">40%</div>
                      <div className="text-sm text-muted-foreground">Conversion Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">15%</div>
                      <div className="text-sm text-muted-foreground">Adoption Lift</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">25%</div>
                      <div className="text-sm text-muted-foreground">Churn Reduction</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="enterprise">
              <Card>
                <CardHeader>
                  <Badge className="w-fit mb-2">33% Faster Shipping</Badge>
                  <CardTitle>Enterprise Workflow Transformation</CardTitle>
                  <CardDescription>
                    Dual-track agile implementation for 200+ ticket backlog.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Orchestrated dual-track agile transformation that cleared 200+ ticket backlogs while boosting shipping cadence by 33%. Implemented discovery and delivery tracks to balance innovation with execution.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">200+</div>
                      <div className="text-sm text-muted-foreground">Tickets Cleared</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">33%</div>
                      <div className="text-sm text-muted-foreground">Faster Shipping</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">75%</div>
                      <div className="text-sm text-muted-foreground">Efficiency Gains</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 6. Final CTA - Newsletter/Lead Magnet */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <Card className="max-w-2xl mx-auto border-2 border-primary">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl md:text-4xl mb-4">Get the Product Health Checklist</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A free diagnostic framework to identify the gaps in your product strategy, UX, and growth metrics.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="flex-1"
                />
                <Button type="submit" size="lg">
                  Send It
                </Button>
              </form>
              <p className="text-sm text-muted-foreground mt-4">
                No spam. Unsubscribe anytime. We respect your inbox.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
