import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  centered?: boolean;
  children?: ReactNode;
}

export function Hero({ title, subtitle, ctaText, ctaHref, centered = true, children }: HeroProps) {
  return (
    <section className="section-padding pt-32">
      <div className="container-custom">
        <div className={`max-w-4xl ${centered ? "mx-auto text-center" : ""}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {subtitle}
            </p>
          )}
          {children ? (
            children
          ) : ctaText && ctaHref ? (
            <Button asChild size="lg">
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
