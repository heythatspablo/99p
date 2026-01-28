import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Layout, Presentation, UserCheck, Check, CreditCard, Calendar, Video, ArrowRight } from "lucide-react";
import { GradientBackground } from "@/components/ui/gradient-background";
import { HowItWorksCarousel } from "@/components/clarity-sessions/how-it-works-carousel";

export default function CoffeeChatsPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative section-padding pt-32 bg-charcoal">
        <GradientBackground variant="claritySessions" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-2 leading-tight text-white">
              Stuck on a Detail?
            </h1>
            <h2 className="text-43xl md:text-4xl lg:text-5xl mb-6 leading-tight text-white">
                Let&apos;s Unblock It.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-white">
              Tactical deep-dives for founders and PMs who need specific answers, not a full roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* 2. How It Works */}
      <section className="relative overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[600px]">
          {/* Left Column - Background Image */}
          <div 
            className="relative bg-cover bg-center min-h-[400px] md:min-h-[600px]"
            style={{ backgroundImage: "url('/99p-0006.png')" }}
          >
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Right Column - Auto-scrolling Carousel */}
          <div className="bg-[#FDFCF8] flex items-center justify-center p-8 md:p-16">
            <HowItWorksCarousel />
          </div>
        </div>
      </section>

      {/* 3. Perfect For... (Bento Box) */}
      <section className="bg-background pt-20 md:pt-28 lg:pt-32 pb-8 md:pb-11 lg:pb-13">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Perfect For...</h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {/* Card 1: UX/UI Audits - Takes 2 columns */}
            <div className="md:col-span-2 bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-border rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <Layout className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                UX/UI Audits
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Get a critique on your interface before you ship.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Flow analysis</li>
                <li>• Friction point identification</li>
                <li>• Conversion optimization</li>
                <li>• Accessibility review</li>
              </ul>
            </div>

            {/* Card 2: Pitch Deck Review - Takes 2 columns */}
            <div className="md:col-span-2 bg-card border border-border rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <Presentation className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                Pitch Deck Review
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Refine your narrative for investors.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Story structure</li>
                <li>• Metric presentation</li>
                <li>• Competitive positioning</li>
                <li>• Visual clarity</li>
              </ul>
            </div>

            {/* Card 3: PM Mentorship - Takes 2 columns */}
            <div className="md:col-span-2 bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <UserCheck className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                PM Mentorship
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Navigate your next career move.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Resume review</li>
                <li>• Interview prep</li>
                <li>• Negotiation strategy</li>
                <li>• Career path guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pricing Options (2-Column Grid) */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Choose Your Format</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Column 1: The Async Audit */}
            <Card>
              <CardHeader>
                <CardTitle>Async Audit (No Meeting)</CardTitle>
                <CardDescription>
                  Perfect if you want expert eyes on your work without finding a time to meet.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-4xl font-bold mb-2">$147</p>
                  <p className="text-sm text-muted-foreground">One-time</p>
                </div>
                <Separator className="my-4" />
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Receive 60-min Loom breakdown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Personalized Task List to execute</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">48-hour turnaround</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Buy Audit - $147</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Column 2: Live Working Session */}
            <Card className="border-2 border-primary">
              <CardHeader>
                <Badge className="w-fit mb-2">Most Popular</Badge>
                <CardTitle>Live Working Session</CardTitle>
                <CardDescription>
                  We open your screen and fix the problem together in real-time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-4xl font-bold mb-2">$297</p>
                  <p className="text-sm text-muted-foreground">One-time</p>
                </div>
                <Separator className="my-4" />
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">3x 60-Minute Zoom Call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Live Co-Working (Design/Copy/Strategy)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Session Recording Included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Schedule immediately after paying</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/contact">Book & Schedule - $297</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            <strong>100% Satisfaction Guarantee.</strong> If we don&apos;t unblock you, I refund the session.
          </p>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-12">Common Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How is this different from the Executive Strategy Session?
                </AccordionTrigger>
                <AccordionContent>
                  These sessions are for ONE specific tactical problem (e.g., &quot;Fix this screen&quot;, &quot;Review my pitch deck&quot;, &quot;Help me negotiate this offer&quot;). The Executive Strategy Session is for broad strategic roadmapping and business modeling—we&apos;re looking at your entire product, backlog, and growth metrics.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What if I need more than 60 minutes?
                </AccordionTrigger>
                <AccordionContent>
                  If your problem requires deeper strategic work, you likely need the Executive Strategy Sprint ($500) instead. These tactical sessions are designed to be focused and time-boxed. If we run over slightly, I won&apos;t cut you off, but anything requiring 90+ minutes should be booked as a full strategy session.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can I book multiple sessions?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. Many clients book a Clarity Session to solve an immediate blocker, then return for audits or additional sessions as new challenges arise. If you find yourself needing ongoing support, consider the Fractional Head of Product option ($2,500/mo) for continuous access.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What should I prepare before the session?
                </AccordionTrigger>
                <AccordionContent>
                  Come with ONE specific problem clearly defined. Share any relevant links, screenshots, or documents 24 hours before our call. The more focused your question, the more actionable my answer will be. Examples: &quot;Should I add this feature?&quot;, &quot;Is this pricing page clear?&quot;, &quot;How do I structure this team?&quot;
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Do you offer refunds?
                </AccordionTrigger>
                <AccordionContent>
                  For the Clarity Session: If you&apos;re not satisfied within the first 15 minutes, we&apos;ll end the call and issue a full refund. For the Async Audit: Once delivered, all sales are final, but I&apos;ll answer one round of follow-up questions via email to ensure clarity.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
