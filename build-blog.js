const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Supabase Configuration
const SUPABASE_URL = 'https://cvaujkhxgzrqwqjofgls.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2YXVqa2h4Z3pycXdxam9mZ2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTM3NDYsImV4cCI6MjA4MDM2OTc0Nn0.qbmIu3luDquk734FXko7I2m1qaY6MPA0r6quFJlEmSw';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const BLOG_DIR = path.join(__dirname, 'public', 'blog');
const BASE_URL = 'https://99pablos.fly.dev'; // Update this to your actual domain

// Fetch all published posts
async function fetchPosts() {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }

    return data;
}

// Format date
function formatDate(isoString) {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
}

// Generate HTML for a single post
function generatePostHtml(post) {
    const renderedContent = marked.parse(post.content || '');
    const postUrl = `${BASE_URL}/blog/${post.slug}`;

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${post.title}</title>
    <meta name="description" content="${(post.excerpt || '').replace(/"/g, '&quot;')}">
    <link rel="canonical" href="${postUrl}">
    
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            line-height: 1.6;
            background: #ffffff;
            color: #37352f;
        }
        
        h1 { font-size: 2.5em; margin-bottom: 16px; }
        .meta { color: #666; margin-bottom: 32px; }
        .content img { max-width: 100%; height: auto; }
        .content pre { background: #f5f5f5; padding: 16px; border-radius: 4px; overflow-x: auto; }
        .content code { background: #f5f5f5; padding: 2px 6px; border-radius: 3px; }
        .content h1, .content h2, .content h3 { margin-top: 2em; margin-bottom: 1em; }
        .content p { margin-bottom: 1em; }
        .content ul, .content ol { margin-bottom: 1em; padding-left: 2em; }
        .content blockquote { border-left: 4px solid #ddd; margin: 1em 0; padding-left: 1em; color: #666; }
        a { color: #2383E2; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .back-link { display: inline-block; margin-top: 2em; padding: 8px 16px; background: #f5f5f5; border-radius: 4px; color: #37352f; }
        .back-link:hover { background: #e9e9e7; }
    </style>
</head>
<body>
    <article>
        <h1>${post.icon || '📝'} ${post.title}</h1>
        <p class="meta">${formatDate(post.created_at)}</p>
        ${post.excerpt ? `<p><em>${post.excerpt}</em></p>` : ''}
        <div class="content">
            ${renderedContent}
        </div>
    </article>
    <a href="/blog" class="back-link">← Back to Blog</a>
</body>
</html>`;
}

// Build all posts
async function buildPosts() {
    console.log('Fetching posts from Supabase...');
    const posts = await fetchPosts();
    console.log(`Found ${posts.length} published posts`);

    // Create blog directory if it doesn't exist
    if (!fs.existsSync(BLOG_DIR)) {
        fs.mkdirSync(BLOG_DIR, { recursive: true });
    }

    // Generate HTML for each post
    for (const post of posts) {
        const html = generatePostHtml(post);
        const filePath = path.join(BLOG_DIR, `${post.slug}.html`);
        fs.writeFileSync(filePath, html);
        console.log(`✓ Generated ${post.slug}.html`);
    }

    console.log('Build complete!');
}

// Run build
buildPosts().catch(console.error);
