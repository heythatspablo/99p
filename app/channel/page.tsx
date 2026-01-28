"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Youtube, Play, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { videoEpisodes, getFeaturedEpisode, getEpisodesByCategory } from "@/lib/video-data";

export default function ChannelPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featuredEpisode = getFeaturedEpisode();
  const filteredEpisodes = getEpisodesByCategory(activeCategory);

  return (
    <div className="min-h-screen bg-green">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto space-y-16 pt-18">
          <section className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              The Product Playbook by Pablo
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              Deep dives into product mechanics, unit economics, and design systems.
            </p>
            <Button
              size="lg"
              variant="destructive"
              className="gap-2"
              asChild
            >
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5" />
                Subscribe on YouTube
              </a>
            </Button>
          </section>

          {featuredEpisode && (
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold text-white">Featured Episode</h2>
                <Badge variant="destructive">New Release</Badge>
              </div>
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={featuredEpisode.thumbnail}
                        alt={featuredEpisode.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="h-8 w-8 text-black ml-1" fill="black" />
                        </div>
                      </div>
                    </AspectRatio>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center space-y-4 bg-neutral-900">
                    <div className="space-y-3">
                      <Badge className="bg-primary/20 text-primary border-primary/30">{featuredEpisode.category}</Badge>
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight text-white group-hover:text-primary transition-colors">
                        {featuredEpisode.title}
                      </h3>
                      <p className="text-base text-white/70 leading-relaxed">
                        {featuredEpisode.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {featuredEpisode.duration}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Eye className="h-4 w-4" />
                        {featuredEpisode.views} views
                      </div>
                    </div>
                    <Button asChild className="w-fit mt-2 group-hover:scale-105 transition-transform">
                      <Link href={`/channel/${featuredEpisode.slug}`}>
                        Watch Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}

          <section className="space-y-8">
            <Tabs defaultValue="All" className="w-full">
              <TabsList className="w-full md:w-auto">
                <TabsTrigger
                  value="All"
                  onClick={() => setActiveCategory("All")}
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="Strategy"
                  onClick={() => setActiveCategory("Strategy")}
                >
                  Strategy
                </TabsTrigger>
                <TabsTrigger
                  value="UX Audits"
                  onClick={() => setActiveCategory("UX Audits")}
                >
                  UX Audits
                </TabsTrigger>
                <TabsTrigger
                  value="Career"
                  onClick={() => setActiveCategory("Career")}
                >
                  Career
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEpisodes.map((episode) => (
                <Link
                  key={episode.id}
                  href={`/channel/${episode.slug}`}
                  className="group"
                >
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow bg-neutral-900 border-neutral-800">
                    <div className="relative bg-neutral-800">
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          src={episode.thumbnail}
                          alt={episode.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transition-colors">
                            <Play className="h-6 w-6 text-black ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </AspectRatio>
                    </div>
                    <CardHeader>
                      <Badge className="w-fit mb-2">{episode.category}</Badge>
                      <CardTitle className="text-lg line-clamp-2 text-white group-hover:text-primary transition-colors">
                        {episode.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-white/70">
                        {episode.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {episode.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3.5 w-3.5" />
                          {episode.views}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
