import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FAQ } from "@/components/sections/FAQ";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { StatsCard } from "@/components/cards/StatsCard";
import { ProcessStepCard } from "@/components/cards/ProcessStepCard";
import { CONSULTING_DATA } from "@/lib/consulting-data";
import { GradientBackground } from "@/components/ui/gradient-background";
import {
  TrendingUp,
  Users,
  Award,
  ThumbsUp,
  CheckCircle2,
  Video,
  Mail,
  ClipboardCheck,
  Rocket,
  X,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Private Consulting - 99Pablos",
  description: "Get personalized strategic guidance from an experienced consultant.",
};

export default function ConsultingPage() {
  return (
    <>
      <section className="relative section-padding pt-32 bg-charcoal">
        <GradientBackground variant="consulting" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-white">
              Unblock Outcomes.
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight text-white">
Build a Product Strategy That Actually Scales Revenue.
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
              Choose a fast Red-Flag Audit, a 90-minute Strategy Sprint, or ongoing Fractional Head of Product support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="#pricing">Book Your Strategy Audit</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#process">View the Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Apple-Style Testimonial/Philosophy Section */}
      <section className="py-24 bg-gradient-to-r from-[#F5F5F7] to-[#E8E8ED]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            {/* Left Column - Text */}
            <div className="flex flex-col justify-center space-y-8">
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#1D1D1F] leading-[1.05]">
                Feel confident in your roadmap.
              </h2>
              <div className="space-y-6">
                <p className="text-xl md:text-2xl leading-relaxed text-[#1D1D1F]/80">
                  I turn vision into shipped product. You stop worrying about whether it will get built and start focusing on what actually moves the business forward.
                </p>
                <p className="text-xl md:text-2xl leading-relaxed text-[#1D1D1F]/80">
                  I translate your strategy into engineering tasks, manage the daily chaos, and ensure your developers have exactly what they need to build. It&apos;s not just project management, it&apos;s certainty. You own the company. I own the delivery.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <img
                  src="/99p-0011.png"
                  alt="Confident founder"
                  className="w-full h-auto rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Concrete Assets You&apos;ll Receive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {/* Bento 1: Red-Flag Audit */}
            <div className="bg-gradient-to-br from-red-500/10 via-red-500/5 to-background border border-border rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col">
              <div className="w-full aspect-square bg-gradient-to-br from-red-500/20 to-red-500/5 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                <div className="text-6xl">🚩</div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                Red-Flag Audit
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A line-by-line review of your current roadmap or user flow to identify friction points causing that 30% drop-off.
              </p>
            </div>

            {/* Bento 2: Strategic Roadmap */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-border rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col">
              <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                <div className="text-6xl">🗺️</div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                Strategic Roadmap
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A prioritized 90-day execution plan. We determine exactly which features will drive that 15% adoption lift and which ones are distractions.
              </p>
            </div>

            {/* Bento 3: Compliance/UX Balance */}
            <div className="bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-background border border-border rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                <div className="text-6xl">⚖️</div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                Compliance Balance
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Specific frameworks for handling 'boring' but critical elements (KYC, Onboarding, Legal) without adding friction.
              </p>
            </div>

            {/* Bento 4: Unstuck Recording */}
            <div className="bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-background border border-border rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col">
              <div className="w-full aspect-square bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                <div className="text-6xl">🎥</div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                Unstuck Recording
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full video and transcript of our deep dive, so you don't miss a single tactical detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section-padding bg-[#FDFCF8]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-sm font-bold tracking-wider text-black/40 mb-4">THE METHODOLOGY</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              From Diagnosis to Deployment
            </h2>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              A three-phase framework that transforms your roadmap from guesswork to precision
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-6">
            {/* Step 1 */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-lg border border-black/5">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="w-12 h-12 mb-4 text-black/80">
                      <ClipboardCheck className="w-full h-full" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-3">
                      <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                        {CONSULTING_DATA.process[0].title}
                      </span>
                    </h3>
                    <p className="text-lg text-black/60 mb-6">
                      {CONSULTING_DATA.process[0].description}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {CONSULTING_DATA.process[0].items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-black/70">
                        <span className="text-black/40 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-lg border border-black/5">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="w-12 h-12 mb-4 text-black/80">
                      <Video className="w-full h-full" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-3">
                      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        {CONSULTING_DATA.process[1].title}
                      </span>
                    </h3>
                    <p className="text-lg text-black/60 mb-6">
                      {CONSULTING_DATA.process[1].description}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {CONSULTING_DATA.process[1].items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-black/70">
                        <span className="text-black/40 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-lg border border-black/5">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="w-12 h-12 mb-4 text-black/80">
                      <Mail className="w-full h-full" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-3">
                      <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                        {CONSULTING_DATA.process[2].title}
                      </span>
                    </h3>
                    <p className="text-lg text-black/60 mb-6">
                      {CONSULTING_DATA.process[2].description}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {CONSULTING_DATA.process[2].items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-black/70">
                        <span className="text-black/40 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Is This Right for You?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-green-500/20 bg-green-50/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  <h3 className="text-2xl font-bold">This is for you if:</h3>
                </div>
                <ul className="space-y-4">
                  {CONSULTING_DATA.forYou.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-muted">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <X className="w-6 h-6 text-muted-foreground" />
                  <h3 className="text-2xl font-bold">This is NOT for you if:</h3>
                </div>
                <ul className="space-y-4">
                  {CONSULTING_DATA.notForYou.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-center mb-12">What Founders Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CONSULTING_DATA.testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                title={testimonial.title}
                company={testimonial.company}
                result={testimonial.result}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Your Investment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Tier 1: "Good" - The Red Flag Audit */}
            <Card>
              <CardHeader>
                <CardTitle>The &quot;Red Flag&quot; Audit</CardTitle>
                <CardDescription>Quick expert opinion. No meetings.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-4xl font-bold">$197</p>
                  <p className="text-sm text-muted-foreground">One-time</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Expert Video Walkthrough (15-min Loom)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">&quot;Bug & Friction&quot; Report</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Compliance Risk Spot-Check</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">48-Hour Turnaround</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Get the Audit</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Tier 2: "Better" - Executive Strategy Sprint (Featured) */}
            <Card className="border-primary relative shadow-2xl scale-105 z-10">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
              <CardHeader>
                <CardTitle>Executive Strategy Sprint</CardTitle>
                <CardDescription>Deep dive roadmap & backlog repair.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-4xl font-bold">$500</p>
                  <p className="text-sm text-muted-foreground">One-time</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold">Includes everything in Audit, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">90-Minute Live Strategy Workshop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Live Backlog Rework & Prioritization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">&quot;Unstuck&quot; 90-Day Execution Plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">30-Day KPI Tracking Framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Session Recording & Transcript</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/contact">Book Your Session</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Tier 3: "Best" - Fractional Head of Product */}
            <Card>
              <CardHeader>
                <CardTitle>Fractional Head of Product</CardTitle>
                <CardDescription>Ongoing leadership & execution.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-4xl font-bold">$2,500</p>
                  <p className="text-sm text-muted-foreground">/mo</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">4x Monthly Strategy Calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Direct Slack/Email Access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">PRD & Spec Writing Support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Vendor & Tech Stack Review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Hiring & Vetting Support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Apply for Access</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <FAQ items={CONSULTING_DATA.faqs} />

      <section className="section-padding">
        <div className="container-custom">
          <Card className="max-w-3xl mx-auto text-center border-2 border-primary">
            <CardContent className="p-12">
              <Rocket className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl md:text-4xl mb-4">Ready to Get Unstuck?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Book your strategy session and get the clarity you need to move forward.
              </p>
              <Button asChild size="lg" className="mb-6">
                <Link href="/contact">Schedule Your Session</Link>
              </Button>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <Badge variant="outline">100% Confidential</Badge>
                <Badge variant="outline">No Long-Term Commitment</Badge>
                <Badge variant="outline">Satisfaction Guaranteed</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
