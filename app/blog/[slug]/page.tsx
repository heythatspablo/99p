import { loadPostBySlug, formatDate, type BlogPost } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

interface BlogPostPageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = await loadPostBySlug(slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-green">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                    <Link 
                        href="/blog" 
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Blog
                    </Link>

                    <article className="space-y-8">
                        <header className="space-y-6">
                            {post.cover_image && (
                                <div className="relative bg-neutral-800 rounded-lg overflow-hidden">
                                    <AspectRatio ratio={16 / 9}>
                                        <img
                                            src={post.cover_image}
                                            alt={post.title}
                                            className="object-cover"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </AspectRatio>
                                </div>
                            )}

                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                                    {post.icon || '📝'} {post.title}
                                </h1>
                                
                                <div className="flex items-center gap-4 text-white/60">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        {formatDate(post.created_at)}
                                    </div>
                                    <Badge variant="secondary" className="bg-neutral-800 text-white/80 border-neutral-700">
                                        Published
                                    </Badge>
                                </div>

                                {post.excerpt && (
                                    <p className="text-xl text-white/80 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                )}
                            </div>
                        </header>

                        <div className="bg-neutral-900 rounded-lg p-8 md:p-12">
                            <div className="prose prose-invert prose-lg max-w-none">
                                <ReactMarkdown
                                    components={{
                                        h1: ({ children }) => <h1 className="text-3xl font-bold text-white mb-6">{children}</h1>,
                                        h2: ({ children }) => <h2 className="text-2xl font-semibold text-white mb-4 mt-8">{children}</h2>,
                                        h3: ({ children }) => <h3 className="text-xl font-semibold text-white mb-3 mt-6">{children}</h3>,
                                        p: ({ children }) => <p className="text-white/80 leading-relaxed mb-4">{children}</p>,
                                        ul: ({ children }) => <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">{children}</ul>,
                                        ol: ({ children }) => <ol className="list-decimal list-inside text-white/80 mb-4 space-y-2">{children}</ol>,
                                        li: ({ children }) => <li>{children}</li>,
                                        blockquote: ({ children }) => (
                                            <blockquote className="border-l-4 border-primary/50 pl-4 italic text-white/70 my-4">
                                                {children}
                                            </blockquote>
                                        ),
                                        code: ({ inline, children }) => 
                                            inline ? (
                                                <code className="bg-neutral-800 text-primary px-2 py-1 rounded text-sm">
                                                    {children}
                                                </code>
                                            ) : (
                                                <code className="block bg-neutral-800 text-white p-4 rounded-lg overflow-x-auto text-sm">
                                                    {children}
                                                </code>
                                            ),
                                        img: ({ src, alt }) => (
                                            <img 
                                                src={src} 
                                                alt={alt || ''} 
                                                className="rounded-lg my-6 max-w-full h-auto"
                                            />
                                        ),
                                        a: ({ href, children }) => (
                                            <a 
                                                href={href} 
                                                className="text-primary hover:text-primary/80 underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {children}
                                            </a>
                                        ),
                                    }}
                                >
                                    {post.content || ''}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = await loadPostBySlug(slug)

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: `${post.title} | Blog`,
        description: post.excerpt || `Read ${post.title} on the blog`,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: post.cover_image ? [post.cover_image] : [],
        },
    }
}
