import Link from "next/link";
import Image from "next/image";
import { Calendar, Share2, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { MarkdownRenderer } from "@/components/ui/markdown-renderer";

interface MediaItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  duration?: string;
  views?: string;
  youtubeId?: string;
  keyTakeaways: string[];
  transcript: string;
  thumbnail: string;
}

interface RelatedItem {
  id: string;
  slug: string;
  title: string;
  thumbnail: string;
  duration?: string;
}

interface MediaDetailTemplateProps {
  media: MediaItem;
  relatedItems?: RelatedItem[];
  showVideo?: boolean;
  mediaType?: "video" | "article";
  relatedLabel?: string;
  relatedBasePath?: string;
}

export function MediaDetailTemplate({
  media,
  relatedItems = [],
  showVideo = true,
  mediaType = "video",
  relatedLabel = "Related Videos",
  relatedBasePath = "/channel",
}: MediaDetailTemplateProps) {
  const publishedDate = new Date(media.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-green text-white pt-12">

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-sm">
                {media.category}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {publishedDate}
                </div>
                {media.duration && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {media.duration}
                  </div>
                )}
                {media.views && (
                  <div className="flex items-center gap-1.5">
                    <Eye className="h-4 w-4" />
                    {media.views} views
                  </div>
                )}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              {media.title}
            </h1>
            <p className="text-xl text-neutral-300 text-white">
              {media.description}
            </p>
            <div className="flex gap-3 pt-4">
              <Button variant="outline" size="sm" className="gap-2 text-green bg-white">
                <Share2 className="h-4 w-4 text-green" />
                Share
              </Button>
            </div>
          </div>

          {showVideo && media.youtubeId && (
            <AspectRatio ratio={16 / 9}>
              <div className="rounded-xl overflow-hidden shadow-2xl h-full">
                <iframe
                  src={`https://www.youtube.com/embed/${media.youtubeId}`}
                  title={media.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full absolute inset-0"
                />
              </div>
            </AspectRatio>
          )}

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8 pt-8">
              <Card className="border-none bg-white">
                <CardHeader className="mb-0 pb-0">
                  <CardTitle className="text-2xl text-green">Key Takeaways</CardTitle>
                  <CardDescription>
                    What you'll learn in this {mediaType === "video" ? "episode" : "article"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-charcoal mt-0">
                    {media.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-primary font-semibold mt-0.5 text-charcoal">•</span>
                        <span className="text-charcoal">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-transparent p-0 border-none text-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    {mediaType === "video" ? "Transcript & Notes" : "Article"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <MarkdownRenderer content={media.transcript} />
                </CardContent>
              </Card>

              {relatedItems.length > 0 && (
                <Card className="bg-charcoal border-none text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">{relatedLabel}</CardTitle>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedItems.map((related) => (
                      <Link
                        key={related.id}
                        href={`${relatedBasePath}/${related.slug}`}
                        className="block group"
                      >
                        <div className="space-y-3">
                          <div className="relative rounded-lg overflow-hidden bg-neutral-800">
                            <AspectRatio ratio={16 / 9}>
                              <Image
                                src={related.thumbnail}
                                alt={related.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </AspectRatio>
                          </div>
                          <div>
                            <h4 className="font-semibold text-base line-clamp-2 group-hover:text-primary transition-colors text-white">
                              {related.title}
                            </h4>
                            {related.duration && (
                              <div className="flex items-center gap-2 text-sm text-neutral-400 mt-2">
                                <Clock className="h-4 w-4" />
                                {related.duration}
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="space-y-6 pt-8">
              <Card className="bg-charcoal border-primary/20 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    Need more help with {media.category}?
                  </CardTitle>
                  <CardDescription className="text-neutral-300">
                    Get tactical help applying this framework in a live working session.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-400">Duration</span>
                      <span className="font-semibold text-white">60 minutes</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-400">Format</span>
                      <span className="font-semibold text-white">Live Zoom Call</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-400">What's Included</span>
                      <span className="font-semibold text-white">Recording</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-400">Investment</span>
                      <span className="font-semibold text-lg text-white">$297</span>
                    </div>
                  </div>
                  <Separator className="bg-neutral-700" />
                  <Button asChild className="w-full bg-white text-green" size="lg">
                    <Link href="/clarity-sessions">Book Clarity Session</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
