import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Service } from "@/lib/services-data";

interface ServiceCardProps {
  service: Service;
  onLearnMore?: (service: Service) => void;
  onAddToCart?: (service: Service) => void;
}

export function ServiceCard({ service, onLearnMore, onAddToCart }: ServiceCardProps) {
  return (
    <Card className={service.popular ? "border-2 border-primary" : ""}>
      <CardHeader>
        {(service.popular || service.new) && (
          <div className="flex gap-2 mb-2">
            {service.popular && <Badge>Popular</Badge>}
            {service.new && <Badge variant="secondary">New</Badge>}
          </div>
        )}
        <div className="text-sm text-muted-foreground mb-2">{service.eyebrowHeadline}</div>
        <CardTitle>{service.serviceName}</CardTitle>
        <CardDescription className="mt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-foreground">{service.priceDisplay}</span>
            {service.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ${service.originalPrice}
              </span>
            )}
          </div>
          {service.billingPeriod && (
            <span className="text-sm text-muted-foreground">per {service.billingPeriod}</span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {service.sellingBulletPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        {onAddToCart && service.price > 0 && (
          <Button onClick={() => onAddToCart(service)} className="w-full">
            Add to Cart
          </Button>
        )}
        {service.price === 0 && (
          <Button onClick={() => onLearnMore?.(service)} className="w-full">
            Get Quote
          </Button>
        )}
        {onLearnMore && service.price > 0 && (
          <Button onClick={() => onLearnMore(service)} variant="outline" className="w-full">
            Learn More
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
