"use client";

import { useState } from "react";
import { SERVICES_DATA, Service } from "@/lib/services-data";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { useCart } from "@/lib/cart-context";
import { ShoppingCart } from "@/components/cart/ShoppingCart";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function PricingPage() {
  const { addItem } = useCart();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleAddToCart = (service: Service) => {
    addItem({
      id: service.id,
      name: service.serviceName,
      description: service.learnMoreLongDescription,
      price: service.price,
      type: 'service',
      category: 'coaching',
      features: service.sellingBulletPoints,
    });
    toast.success(`${service.serviceName} added to cart!`);
  };

  const handleLearnMore = (service: Service) => {
    setSelectedService(service);
  };

  const consultingServices = SERVICES_DATA.consulting;
  const servicesProducts = SERVICES_DATA.services;
  const digitalProducts = SERVICES_DATA.digitalProducts;

  return (
    <>
      <ShoppingCart />
      
      <section>
        <div className="bg-green section-padding pt-32">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-white">
                Invest in Your Brand. Choose Your Path.
              </h1>
              <p className="text-lg md:text-xl text-white">
                From DIY resources to done-for-you services, we&apos;ve got you covered.
              </p>
            </div>
          </div>
        </div>

        <div className="container-custom section-padding">
          <div className="space-y-16">
            {/* Group 1: Consulting */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Consulting</h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {consultingServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onAddToCart={handleAddToCart}
                    onLearnMore={handleLearnMore}
                  />
                ))}
              </div>
            </div>

            {/* Group 2: Services (Other Ways to Work Together) */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Services</h2>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Other Ways to Work Together
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {servicesProducts.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onAddToCart={handleAddToCart}
                    onLearnMore={handleLearnMore}
                  />
                ))}
              </div>
            </div>

            {/* Group 3: Digital Products */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Digital Products</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {digitalProducts.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onAddToCart={handleAddToCart}
                    onLearnMore={handleLearnMore}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedService.serviceName}</DialogTitle>
                <DialogDescription className="text-base mt-2">
                  {selectedService.learnMoreLongDescription}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold">{selectedService.priceDisplay}</span>
                    {selectedService.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">
                        ${selectedService.originalPrice}
                      </span>
                    )}
                  </div>
                  {selectedService.billingPeriod && (
                    <p className="text-sm text-muted-foreground">per {selectedService.billingPeriod}</p>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold mb-3">What&apos;s included:</h4>
                  <ul className="space-y-2">
                    {selectedService.sellingBulletPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {selectedService.price > 0 && (
                  <Button onClick={() => {
                    handleAddToCart(selectedService);
                    setSelectedService(null);
                  }} className="w-full" size="lg">
                    Add to Cart - {selectedService.priceDisplay}
                  </Button>
                )}
                {selectedService.price === 0 && (
                  <Button onClick={() => {
                    setSelectedService(null);
                  }} className="w-full" size="lg">
                    Contact for Quote
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
