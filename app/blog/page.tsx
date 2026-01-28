import { loadBlogPosts, formatDate, type BlogPostListItem } from '@/lib/blog'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Clock, Eye } from 'lucide-react'

export default async function BlogPage() {
    const posts = await loadBlogPosts()

    return (
        <div className="min-h-screen bg-green">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-7xl mx-auto space-y-16">
                    <section className="text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                            Articles & Insights
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
                            In-depth articles on product strategy, design systems, and career growth.
                        </p>
                    </section>

                    {posts.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-white/70">
                                No posts yet. Check back soon!
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post: BlogPostListItem) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group"
                                >
                                    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow bg-neutral-900 border-neutral-800">
                                        {post.cover_image && (
                                            <div className="relative bg-neutral-800">
                                                <AspectRatio ratio={16 / 9}>
                                                    <img
                                                        src={post.cover_image}
                                                        alt={post.title}
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    />
                                                </AspectRatio>
                                            </div>
                                        )}
                                        <CardHeader>
                                            <CardTitle className="text-lg line-clamp-2 text-white group-hover:text-primary transition-colors">
                                                {post.icon || '📝'} {post.title}
                                            </CardTitle>
                                            <CardDescription className="line-clamp-2 text-white/70">
                                                {post.excerpt}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center gap-4 text-sm text-white/60">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-3.5 w-3.5" />
                                                    {formatDate(post.created_at)}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
