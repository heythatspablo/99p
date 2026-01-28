import { notFound } from "next/navigation";
import { getArticleBySlug, getRelatedArticles } from "@/lib/blog-data";
import { MediaDetailTemplate } from "@/components/templates/MediaDetailTemplate";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.id, article.relatedArticles);

  return (
    <MediaDetailTemplate
      media={article}
      relatedItems={relatedArticles}
      showVideo={false}
      mediaType="article"
      relatedLabel="Related Articles"
      relatedBasePath="/blog"
    />
  );
}
