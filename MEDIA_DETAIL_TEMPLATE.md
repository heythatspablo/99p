# Media Detail Template Documentation

## Overview

The `MediaDetailTemplate` component is a reusable, SEO-optimized template for displaying both video episodes and blog articles with a consistent layout.

## Benefits

- **Better SEO**: Dedicated `/media-detail` route for search engine indexing
- **DRY Principle**: Single source of truth for media detail pages
- **Flexibility**: Conditional rendering based on content type
- **Consistency**: Identical layout across channel episodes and blog articles

## File Structure

```
components/templates/MediaDetailTemplate.tsx  # Reusable template component
app/media-detail/page.tsx                     # Standalone route for SEO
app/channel/[slug]/page.tsx                   # Episode detail (uses template)
app/blog/[slug]/page.tsx                      # Article detail (uses template) - TO BE CREATED
```

## Usage

### For Video Episodes (Channel)

```tsx
import { MediaDetailTemplate } from "@/components/templates/MediaDetailTemplate";

export default function EpisodePage() {
  return (
    <MediaDetailTemplate
      media={episodeData}
      relatedItems={relatedEpisodes}
      showVideo={true}              // Shows video player
      mediaType="video"
      relatedLabel="Related Videos"
      relatedBasePath="/channel"
    />
  );
}
```

### For Blog Articles (Future Implementation)

```tsx
import { MediaDetailTemplate } from "@/components/templates/MediaDetailTemplate";

export default function ArticlePage() {
  return (
    <MediaDetailTemplate
      media={articleData}
      relatedItems={relatedArticles}
      showVideo={false}             // Hides video player
      mediaType="article"
      relatedLabel="Related Articles"
      relatedBasePath="/blog"
    />
  );
}
```

## Props Interface

```typescript
interface MediaDetailTemplateProps {
  media: MediaItem;              // Main content data
  relatedItems?: RelatedItem[];  // Related content (optional)
  showVideo?: boolean;           // Show/hide video player (default: true)
  mediaType?: "video" | "article"; // Content type (default: "video")
  relatedLabel?: string;         // Label for related section (default: "Related Videos")
  relatedBasePath?: string;      // Base path for related links (default: "/channel")
}
```

## Data Structure

### MediaItem

```typescript
interface MediaItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;           // ISO date string
  duration?: string;             // Optional for articles
  views?: string;                // Optional for articles
  youtubeId?: string;            // Required only if showVideo=true
  keyTakeaways: string[];
  transcript: string;            // Markdown content
  thumbnail: string;
}
```

### RelatedItem

```typescript
interface RelatedItem {
  id: string;
  slug: string;
  title: string;
  thumbnail: string;
  duration?: string;             // Optional for articles
}
```

## Key Differences: Video vs Article

| Feature | Video (Channel) | Article (Blog) |
|---------|----------------|----------------|
| Video Player | ✅ Shown | ❌ Hidden |
| Duration | ✅ Shown | ❌ Hidden (optional) |
| Views Count | ✅ Shown | ❌ Hidden (optional) |
| Content Label | "Transcript & Notes" | "Article" |
| Related Label | "Related Videos" | "Related Articles" |
| Related Path | `/channel/[slug]` | `/blog/[slug]` |

## Creating Blog Article Pages

To implement blog articles using this template:

1. **Create blog data source** (similar to `lib/video-data.ts`):
   ```typescript
   // lib/blog-data.ts
   export const BLOG_ARTICLES = [
     {
       id: "1",
       slug: "article-slug",
       title: "Article Title",
       // ... rest of MediaItem fields
       // Note: omit youtubeId for articles
     }
   ];
   ```

2. **Create blog route**:
   ```typescript
   // app/blog/[slug]/page.tsx
   import { notFound } from "next/navigation";
   import { getArticleBySlug, getRelatedArticles } from "@/lib/blog-data";
   import { MediaDetailTemplate } from "@/components/templates/MediaDetailTemplate";

   export default async function ArticlePage({ params }) {
     const { slug } = await params;
     const article = getArticleBySlug(slug);

     if (!article) {
       notFound();
     }

     const relatedArticles = getRelatedArticles(article.id);

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
   ```

## SEO Benefits

- **Standalone Route**: `/media-detail` is crawlable and indexable
- **Semantic HTML**: Proper heading hierarchy and structure
- **Rich Metadata**: Category, publish date, duration/views
- **Related Content**: Internal linking for better crawlability
- **Markdown Support**: Properly formatted content with headings

## Customization

The template includes:
- Responsive layout (mobile-first)
- Dark theme with custom colors (`bg-green`, `text-white`, `bg-charcoal`)
- Sticky CTA sidebar for Clarity Sessions
- Hover effects and transitions
- Image optimization with Next.js Image component

## Notes

- Video player only renders if `showVideo={true}` AND `media.youtubeId` exists
- All markdown content is rendered with proper typography via `MarkdownRenderer`
- Related items grid is responsive: 1 column (mobile) → 2 columns (md) → 3 columns (lg)
- CTA card is sticky on desktop for better conversion
