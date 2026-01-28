"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  id: string;
  title: string;
  client: string;
  image: string;
  category: string;
  description: string;
  details?: string;
  metric?: string;
}

interface ProjectGalleryProps {
  projects: Project[];
}

const CATEGORY_LABELS: Record<string, string> = {
  all: "All",
  fintech: "Fintech",
  saas: "SaaS",
  enterprise: "Enterprise",
  "identity systems": "Identity Systems",
};

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedCategory(category)}
          >
            {CATEGORY_LABELS[category] || category}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedProject(project)}
          >
            <div className="aspect-video bg-muted relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {project.metric && (
                <Badge className="absolute top-3 right-3 bg-background/90 text-foreground border shadow-sm">
                  {project.metric}
                </Badge>
              )}
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">{project.client}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <DialogTitle className="text-2xl">{selectedProject.client}</DialogTitle>
                  <Badge variant="secondary">
                    {CATEGORY_LABELS[selectedProject.category] || selectedProject.category}
                  </Badge>
                </div>
              </DialogHeader>
              <div className="space-y-6">
                <div className="aspect-video bg-muted relative rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                  {selectedProject.metric && (
                    <Badge className="absolute top-3 right-3 bg-background/90 text-foreground border shadow-sm">
                      {selectedProject.metric}
                    </Badge>
                  )}
                </div>
                <DialogDescription className="text-base">
                  {selectedProject.description}
                </DialogDescription>
                {selectedProject.details && (
                  <div className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground">{selectedProject.details}</p>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
