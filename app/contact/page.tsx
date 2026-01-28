"use client";

import { useState, useRef } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { toast } from "sonner";
import { ALL_SERVICES } from "@/lib/services-data";
import { ServiceCard } from "@/components/cards/ServiceCard";
import Autoplay from "embla-carousel-autoplay";
import { GradientBackground } from "@/components/ui/gradient-background";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      toast.success("Message sent! I'll respond within 24 hours.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative section-padding pt-32 bg-charcoal">
      <GradientBackground variant="home" />
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
                  Ready to Scale? Choose Your Lane.
                </h1>
                <p className="text-lg md:text-xl text-white">
                  From tactical fixes to fractional leadership. Here's how I help.
                </p>
              </div>

              <div className="relative">
                <p className="text-sm text-center text-white mb-4">
                  View all services on the{" "}
                  <a href="/pricing" className="text-white underline">
                    pricing page
                  </a>
                </p>
                <div className="relative px-0 md:px-12">
                  <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-md mx-auto"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                  >
                    <CarouselContent>
                      {ALL_SERVICES.map((service) => (
                        <CarouselItem key={service.id}>
                          <ServiceCard service={service} />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-12" />
                    <CarouselNext className="hidden md:flex -right-12" />
                  </Carousel>
                </div>
              </div>
            </div>

            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <img 
                      src="/99p-0003.png" 
                      alt="Profile" 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                    />
                    <CardTitle className="text-2xl">Start the Conversation</CardTitle>
                  </div>
                  <CardDescription>
                    Tell me about your project and I'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell me about your project</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="I'm interested in the 1-Day Sprint for my fintech startup..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-4">
                      <Button
                        type="submit"
                        className="w-full"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                      <p className="text-sm text-center text-muted-foreground">
                        I typically respond within 24 hours to schedule a fit call.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
