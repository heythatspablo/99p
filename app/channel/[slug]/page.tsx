import { notFound } from "next/navigation";
import { getEpisodeBySlug, getRelatedEpisodes } from "@/lib/video-data";
import { MediaDetailTemplate } from "@/components/templates/MediaDetailTemplate";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EpisodePage({ params }: PageProps) {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);

  if (!episode) {
    notFound();
  }

  const relatedEpisodes = getRelatedEpisodes(episode.id, episode.relatedEpisodes);

  return (
    <MediaDetailTemplate
      media={episode}
      relatedItems={relatedEpisodes}
      showVideo={true}
      mediaType="video"
      relatedLabel="Related Videos"
      relatedBasePath="/channel"
    />
  );
}
