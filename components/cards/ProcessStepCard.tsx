import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProcessStepCardProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
  items?: string[];
}

export function ProcessStepCard({
  step,
  icon: Icon,
  title,
  description,
  items,
}: ProcessStepCardProps) {
  return (
    <Card className="relative">
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
        {step}
      </div>
      <CardContent className="p-6 pt-8">
        <Icon className="w-10 h-10 mb-4 text-primary" />
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        {items && items.length > 0 && (
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
