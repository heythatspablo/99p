import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { GALLERY_PROJECTS } from "@/lib/gallery-data";

export const metadata = {
  title: "Selected Works - 99Pablos",
  description: "Bridging the gap between engineering constraints, business goals, and user needs.",
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Selected Works</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bridging the gap between engineering constraints, business goals, and user needs.
          </p>
        </div>
        <ProjectGallery projects={GALLERY_PROJECTS} />
      </div>
    </div>
  );
}
