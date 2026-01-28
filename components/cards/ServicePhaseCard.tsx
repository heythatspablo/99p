import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ServicePhase } from "@/lib/types";

interface ServicePhaseCardProps {
  phase: ServicePhase;
}

export function ServicePhaseCard({ phase }: ServicePhaseCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="text-4xl mb-2">{phase.icon}</div>
        <CardTitle className="text-2xl">
          Phase {String(phase.phase).padStart(2, "0")}: {phase.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6">{phase.description}</p>
        <div>
          <h4 className="font-semibold mb-3">Included</h4>
          <ul className="space-y-2">
            {phase.included.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
