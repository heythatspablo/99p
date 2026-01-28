"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getFeaturedArticle, getArticlesByCategory } from "@/lib/blog-data";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featuredArticle = getFeaturedArticle();
  const filteredArticles = getArticlesByCategory(activeCategory);

  return (
    <div className="min-h-screen bg-green">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto space-y-16 pt-18">
          <section className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Articles & Insights
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              In-depth articles on product strategy, design systems, and career growth.
            </p>
            <Button
              size="lg"
              variant="default"
              className="gap-2 bg-white text-charcoal hover:bg-white/90"
              asChild
            >
              <Link href="/contact">
                <BookOpen className="h-5 w-5" />
                Get Notified of New Articles
              </Link>
            </Button>
          </section>

          {featuredArticle && (
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold text-white">Featured Article</h2>
                <Badge variant="destructive">Latest</Badge>
              </div>
              <Link href={`/blog/${featuredArticle.slug}`}>
                <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative bg-neutral-800 overflow-hidden">
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          src={featuredArticle.thumbnail}
                          alt={featuredArticle.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </AspectRatio>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center space-y-4 bg-neutral-900">
                      <div className="space-y-3">
                        <Badge className="bg-primary/20 text-primary border-primary/30">{featuredArticle.category}</Badge>
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight text-white group-hover:text-primary transition-colors">
                          {featuredArticle.title}
                        </h3>
                        <p className="text-base text-white/70 leading-relaxed">
                          {featuredArticle.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {featuredArticle.duration}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Eye className="h-4 w-4" />
                          {featuredArticle.views} views
                        </div>
                      </div>
                      <Button className="w-fit mt-2 group-hover:scale-105 transition-transform">
                        Read Article
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
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
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  className="group"
                >
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow bg-neutral-900 border-neutral-800">
                    <div className="relative bg-neutral-800">
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          src={article.thumbnail}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </AspectRatio>
                    </div>
                    <CardHeader>
                      <Badge className="w-fit mb-2">{article.category}</Badge>
                      <CardTitle className="text-lg line-clamp-2 text-white group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-white/70">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {article.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3.5 w-3.5" />
                          {article.views}
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
