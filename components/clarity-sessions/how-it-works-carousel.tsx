"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CreditCard, Calendar, Video } from "lucide-react";

export function HowItWorksCarousel() {
  return (
    <div className="max-w-xl w-full">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">How It Works</h2>
      <p className="text-center text-muted-foreground mb-12">
        From payment to problem solved in 3 simple steps
      </p>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {/* Step 1 */}
          <CarouselItem>
            <div className="p-8 text-center space-y-6">
              <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <CreditCard className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">1. Secure Your Spot</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Complete payment to lock in your session. No waiting, no back-and-forth.
                </p>
              </div>
            </div>
          </CarouselItem>

          {/* Step 2 */}
          <CarouselItem>
            <div className="p-8 text-center space-y-6">
              <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">2. Instant Scheduling</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Auto-redirect to my calendar. Pick a time that works for you.
                </p>
              </div>
            </div>
          </CarouselItem>

          {/* Step 3 */}
          <CarouselItem>
            <div className="p-8 text-center space-y-6">
              <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Video className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">3. We Execute</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We solve the specific blocker together. You leave with clarity.
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-8">
          <CarouselPrevious className="relative left-0 translate-x-0" />
          <CarouselNext className="relative right-0 translate-x-0" />
        </div>
      </Carousel>
    </div>
  );
}
