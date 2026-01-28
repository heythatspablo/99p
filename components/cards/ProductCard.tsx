import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/products-data";
import { CheckCircle2, Download, RefreshCw } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onLearnMore?: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onLearnMore }: ProductCardProps) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <Card className={`h-full flex flex-col ${product.popular ? "border-2 border-primary" : ""}`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <div className="flex flex-col gap-1">
            {product.popular && <Badge>Popular</Badge>}
            {product.new && <Badge variant="secondary">New</Badge>}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            {product.price === 0 ? (
              <span className="text-3xl font-bold">Custom Scope</span>
            ) : (
              <>
                {product.id === 'fractional-technical-pm' && (
                  <span className="text-sm text-muted-foreground mr-1">Starts at</span>
                )}
                <span className="text-3xl font-bold">${product.price}</span>
                {hasDiscount && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                    <Badge variant="destructive">Save {discountPercent}%</Badge>
                  </>
                )}
                {product.recurring && (
                  <span className="text-sm text-muted-foreground">/{product.billingPeriod}</span>
                )}
              </>
            )}
          </div>
          {product.downloadable && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <Download className="w-4 h-4" />
              <span>Instant Download</span>
            </div>
          )}
          {product.recurring && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <RefreshCw className="w-4 h-4" />
              <span>Cancel Anytime</span>
            </div>
          )}
        </div>

        <ul className="space-y-2">
          {product.features.slice(0, 5).map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
          {product.features.length > 5 && (
            <li className="text-sm text-muted-foreground">
              + {product.features.length - 5} more features
            </li>
          )}
        </ul>
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        <Button 
          onClick={() => onAddToCart(product)} 
          className="w-full" 
          size="lg"
          variant={product.id === 'strategic-clarity-call' ? 'default' : 'outline'}
        >
          {product.id === 'fractional-technical-pm' ? 'Inquire for Availability' :
           product.id === 'strategic-clarity-call' ? 'Book Your Session' :
           product.id === 'zero-to-one-launch' ? 'Discuss Your Launch' :
           'Add to Cart'}
        </Button>
        {onLearnMore && (
          <Button
            onClick={() => onLearnMore(product)}
            variant="outline"
            className="w-full"
            size="sm"
          >
            Learn More
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
