import { createClient } from '@supabase/supabase-js'

// Supabase Configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Date Formatting
export function formatDate(isoString: string) {
    const date = new Date(isoString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = date.toLocaleString('en-US', { month: 'long' })
    const year = date.getFullYear()
    return `${day} ${month}, ${year}`
}

// Blog Post Types
export interface BlogPost {
    id: string
    title: string
    slug: string
    icon?: string
    cover_image?: string
    excerpt?: string
    content?: string
    published: boolean
    created_at: string
    updated_at: string
}

export interface BlogPostListItem {
    slug: string
    title: string
    excerpt?: string
    cover_image?: string
    icon?: string
    created_at: string
}

// Load All Blog Posts
export async function loadBlogPosts(): Promise<BlogPostListItem[]> {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('slug, title, excerpt, cover_image, icon, created_at')
        .eq('published', true)
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error loading posts:', error)
        return []
    }

    return posts || []
}

// Load Recent Blog Posts (limit 3)
export async function loadRecentBlogPosts(): Promise<BlogPostListItem[]> {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('slug, title, excerpt, cover_image, icon, created_at')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(3)

    if (error) {
        console.error('Error loading recent posts:', error)
        return []
    }

    return posts || []
}

// Load Single Post by Slug
export async function loadPostBySlug(slug: string): Promise<BlogPost | null> {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single()

    if (error) {
        console.error('Error loading post:', error)
        return null
    }

    return data
}
