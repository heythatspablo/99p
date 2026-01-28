import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company?: string;
  image?: string;
  result?: string;
}

export function TestimonialCard({
  quote,
  author,
  title,
  company,
  image,
  result,
}: TestimonialCardProps) {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <p className="text-lg mb-6 flex-grow italic">&quot;{quote}&quot;</p>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={image} alt={author} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">
              {title}
              {company && `, ${company}`}
            </p>
            {result && <p className="text-sm text-primary font-medium mt-1">{result}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
