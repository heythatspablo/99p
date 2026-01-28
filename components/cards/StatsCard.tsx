import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  stat: string;
  label: string;
}

export function StatsCard({ icon: Icon, stat, label }: StatsCardProps) {
  return (
    <Card>
      <CardContent className="p-6 text-center">
        <Icon className="w-8 h-8 mx-auto mb-4 text-primary" />
        <p className="text-3xl font-bold mb-2">{stat}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
}
