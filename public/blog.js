// Supabase Configuration
const SUPABASE_URL = 'https://cvaujkhxgzrqwqjofgls.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2YXVqa2h4Z3pycXdxam9mZ2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTM3NDYsImV4cCI6MjA4MDM2OTc0Nn0.qbmIu3luDquk734FXko7I2m1qaY6MPA0r6quFJlEmSw';

// Initialize Supabase Client
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Date Formatting
function formatDate(isoString) {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
}

// Load All Blog Posts
async function loadBlogPosts() {
    const { data: posts, error } = await supabaseClient
        .from('posts')
        .select('slug, title, excerpt, cover_image, icon, created_at')
        .eq('published', true)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error loading posts:', error);
        return [];
    }

    return posts;
}

// Load Recent Blog Posts (limit 3)
async function loadRecentBlogPosts() {
    const { data: posts, error } = await supabaseClient
        .from('posts')
        .select('slug, title, excerpt, cover_image, icon, created_at')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(3);

    if (error) {
        console.error('Error loading recent posts:', error);
        return [];
    }

    return posts;
}

// Load Single Post by Slug
async function loadPostBySlug(slug) {
    const { data, error } = await supabaseClient
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

    if (error) {
        console.error('Error loading post:', error);
        return null;
    }

    return data;
}

// Render Blog Posts to Grid
async function renderBlogPosts(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const posts = await loadBlogPosts();

    if (posts.length === 0) {
        container.innerHTML = '<p>No posts yet. Check back soon!</p>';
        return;
    }

    container.innerHTML = posts.map(post => `
        <div class="blog-card" onclick="window.location.href='/blog/${post.slug}'">
            <img src="${post.cover_image || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800'}" alt="${post.title}">
            <div class="blog-card-content">
                <h3>${post.icon || '📝'} ${post.title}</h3>
                <p class="date">${formatDate(post.created_at)}</p>
                <p class="excerpt">${post.excerpt || ''}</p>
            </div>
        </div>
    `).join('');
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadBlogPosts,
        loadRecentBlogPosts,
        loadPostBySlug,
        renderBlogPosts,
        formatDate
    };
}
