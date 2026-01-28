# Supabase Blog Migration Guide - Complete Implementation

**Project:** Portfolio Blog Migration  
**Date:** January 27, 2026  
**Status:** Ready for Implementation

---

## 🔐 Credentials & Configuration

### Supabase Connection
```javascript
const SUPABASE_URL = 'https://cvaujkhxgzrqwqjofgls.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2YXVqa2h4Z3pycXdxam9mZ2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTM3NDYsImV4cCI6MjA4MDM2OTc0Nn0.qbmIu3luDquk734FXko7I2m1qaY6MPA0r6quFJlEmSw';
```

### Admin Access
```javascript
const ADMIN_PASSWORD = 'mainchance1970';
```

### Storage
```javascript
const STORAGE_BUCKET = 'blog-images';
```

### Build Hook (Optional)
```javascript
const NETLIFY_BUILD_HOOK = 'https://api.netlify.com/build_hooks/69448f9f279d9e25dbb186a4';
```

---

## 📊 Database Schema

### `posts` Table Structure
```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  icon TEXT DEFAULT '📝',
  cover_image TEXT,
  excerpt TEXT,
  content TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Storage Bucket
- **Name:** `blog-images`
- **Public Access:** Enabled
- **File Types:** Images (jpg, png, gif, webp, etc.)

---

## 🚀 Implementation Code

### 1. Install Dependencies

**For NPM/Node Projects:**
```bash
npm install @supabase/supabase-js marked
```

**For CDN/HTML Projects:**
```html
<!-- Supabase Client -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<!-- Marked (for Markdown rendering) -->
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
```

---

### 2. Backend Blog Manager (Admin Panel)

**Complete HTML File: `blog-admin.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Admin</title>
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <style>
        :root {
            --bg: #FFFFFF;
            --fg: #37352F;
            --border: #E9E9E7;
            --primary: #2383E2;
        }
        
        body.dark-mode {
            --bg: #191919;
            --fg: rgba(255,255,255,0.9);
            --border: rgba(255,255,255,0.1);
        }
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            background: var(--bg);
            color: var(--fg);
            line-height: 1.6;
        }
        
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        
        .login-screen {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
        
        .login-box {
            background: var(--bg);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 40px;
            width: 100%;
            max-width: 400px;
        }
        
        .login-box h1 { margin-bottom: 24px; }
        
        input, textarea, select {
            width: 100%;
            padding: 12px;
            border: 1px solid var(--border);
            border-radius: 4px;
            background: var(--bg);
            color: var(--fg);
            font-size: 14px;
            margin-bottom: 16px;
        }
        
        textarea { min-height: 200px; font-family: monospace; }
        
        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
        }
        
        .btn-primary {
            background: var(--primary);
            color: white;
        }
        
        .btn-secondary {
            background: var(--border);
            color: var(--fg);
        }
        
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
            padding-bottom: 16px;
            border-bottom: 1px solid var(--border);
        }
        
        .tabs {
            display: flex;
            gap: 8px;
            margin-bottom: 16px;
        }
        
        .tab {
            padding: 8px 16px;
            border: 1px solid var(--border);
            border-radius: 4px;
            cursor: pointer;
            background: transparent;
            color: var(--fg);
        }
        
        .tab.active {
            background: var(--primary);
            color: white;
            border-color: var(--primary);
        }
        
        .post-item {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px;
            border: 1px solid var(--border);
            border-radius: 4px;
            margin-bottom: 12px;
        }
        
        .post-item img {
            width: 80px;
            height: 50px;
            object-fit: cover;
            border-radius: 4px;
        }
        
        .post-info { flex: 1; }
        .post-title { font-weight: 600; margin-bottom: 4px; }
        .post-meta { font-size: 12px; color: rgba(128,128,128,0.8); }
        
        .post-status {
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 500;
        }
        
        .post-status.published {
            background: rgba(46,170,220,0.2);
            color: #2EAADC;
        }
        
        .post-status.draft {
            background: rgba(255,193,7,0.2);
            color: #FFC107;
        }
        
        .post-actions {
            display: flex;
            gap: 8px;
        }
        
        .editor-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
        }
        
        .form-group { margin-bottom: 16px; }
        .form-group label {
            display: block;
            margin-bottom: 4px;
            font-weight: 500;
            font-size: 14px;
        }
        
        .upload-area {
            border: 2px dashed var(--border);
            border-radius: 4px;
            padding: 24px;
            text-align: center;
            cursor: pointer;
            margin-bottom: 16px;
        }
        
        .upload-area.dragover { border-color: var(--primary); }
        
        .uploaded-image {
            position: relative;
            display: inline-block;
            margin: 8px;
        }
        
        .uploaded-image img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 4px;
        }
        
        .uploaded-image button {
            position: absolute;
            top: -8px;
            right: -8px;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: red;
            color: white;
            border: none;
            cursor: pointer;
        }
        
        .toast {
            position: fixed;
            bottom: 24px;
            right: 24px;
            background: #333;
            color: white;
            padding: 16px 24px;
            border-radius: 4px;
            opacity: 0;
            transition: opacity 0.3s;
            z-index: 1000;
        }
        
        .toast.show { opacity: 1; }
        .toast.error { background: #dc3545; }
        
        .preview-pane {
            border: 1px solid var(--border);
            border-radius: 4px;
            padding: 24px;
            min-height: 400px;
            overflow-y: auto;
        }
    </style>
</head>
<body class="dark-mode">
    <!-- Login Screen -->
    <div id="login-screen" class="login-screen">
        <div class="login-box">
            <h1>🔐 Blog Admin</h1>
            <input type="password" id="password-input" placeholder="Enter password" onkeypress="if(event.key==='Enter') attemptLogin()">
            <button class="btn btn-primary" style="width: 100%;" onclick="attemptLogin()">Login</button>
            <p id="login-error" style="color: red; margin-top: 12px; font-size: 14px;"></p>
        </div>
    </div>

    <!-- Admin Panel -->
    <div id="admin-panel" style="display: none;">
        <!-- List View -->
        <div id="list-view">
            <div class="container">
                <div class="header">
                    <h1>📝 Blog Posts</h1>
                    <div>
                        <button class="btn btn-primary" onclick="showEditor()">+ New Post</button>
                        <button class="btn btn-secondary" onclick="logout()">Logout</button>
                    </div>
                </div>
                
                <div class="tabs">
                    <button class="tab active" onclick="filterPosts('all', this)">All</button>
                    <button class="tab" onclick="filterPosts('published', this)">Published</button>
                    <button class="tab" onclick="filterPosts('draft', this)">Drafts</button>
                </div>
                
                <div id="posts-list"></div>
            </div>
        </div>

        <!-- Editor View -->
        <div id="editor-view" style="display: none;">
            <div class="container">
                <div class="header">
                    <h1 id="editor-title">New Post</h1>
                    <div>
                        <button class="btn btn-secondary" onclick="hideEditor()">← Back</button>
                        <button class="btn btn-primary" type="submit" form="post-form">Save</button>
                        <button id="delete-btn" class="btn" style="background: #dc3545; color: white; display: none;" onclick="deletePost()">Delete</button>
                    </div>
                </div>
                
                <form id="post-form">
                    <input type="hidden" id="post-id">
                    
                    <div class="editor-layout">
                        <div>
                            <div class="form-group">
                                <label>Title</label>
                                <input type="text" id="post-title" required>
                            </div>
                            
                            <div class="form-group">
                                <label>Slug</label>
                                <input type="text" id="post-slug" required>
                            </div>
                            
                            <div class="form-group">
                                <label>Icon (emoji)</label>
                                <input type="text" id="post-icon" placeholder="📝">
                            </div>
                            
                            <div class="form-group">
                                <label>Cover Image</label>
                                <div class="upload-area" id="cover-upload-area" onclick="document.getElementById('cover-file-input').click()">
                                    <p>📷 Drop cover image or click to upload</p>
                                </div>
                                <input type="file" id="cover-file-input" accept="image/*" style="display: none;" onchange="handleCoverUpload(event)">
                                <input type="text" id="post-cover" placeholder="Or paste image URL">
                                <div id="cover-preview"></div>
                            </div>
                            
                            <div class="form-group">
                                <label>Excerpt</label>
                                <textarea id="post-excerpt" rows="3"></textarea>
                            </div>
                            
                            <div class="form-group">
                                <label>Status</label>
                                <select id="post-published">
                                    <option value="false">Draft</option>
                                    <option value="true">Published</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label>Content Images</label>
                                <div class="upload-area" id="upload-area" onclick="document.getElementById('file-input').click()">
                                    <p>🖼️ Drop images or click to upload</p>
                                </div>
                                <input type="file" id="file-input" multiple accept="image/*" style="display: none;" onchange="handleFileSelect(event)">
                                <div id="uploaded-images"></div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="form-group">
                                <label>Content (Markdown)</label>
                                <textarea id="post-content" oninput="updatePreview()"></textarea>
                            </div>
                            
                            <div class="form-group">
                                <label>Preview</label>
                                <div id="preview-pane" class="preview-pane"></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Toast -->
    <div id="toast" class="toast"></div>

    <script>
        // --- CONFIG ---
        const SUPABASE_URL = 'https://cvaujkhxgzrqwqjofgls.supabase.co';
        const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2YXVqa2h4Z3pycXdxam9mZ2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTM3NDYsImV4cCI6MjA4MDM2OTc0Nn0.qbmIu3luDquk734FXko7I2m1qaY6MPA0r6quFJlEmSw';
        const ADMIN_PASSWORD = 'mainchance1970';
        const STORAGE_BUCKET = 'blog-images';
        const NETLIFY_BUILD_HOOK = 'https://api.netlify.com/build_hooks/69448f9f279d9e25dbb186a4';

        const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        let allPosts = [];
        let currentFilter = 'all';

        // --- AUTH ---
        function attemptLogin() {
            const password = document.getElementById('password-input').value;
            if (password === ADMIN_PASSWORD) {
                sessionStorage.setItem('admin_auth', 'true');
                showAdminPanel();
            } else {
                document.getElementById('login-error').textContent = 'Incorrect password';
            }
        }

        function logout() {
            sessionStorage.removeItem('admin_auth');
            location.reload();
        }

        function checkAuth() {
            if (sessionStorage.getItem('admin_auth') === 'true') {
                showAdminPanel();
            }
        }

        function showAdminPanel() {
            document.getElementById('login-screen').style.display = 'none';
            document.getElementById('admin-panel').style.display = 'block';
            loadPosts();
        }

        // --- POSTS ---
        async function loadPosts() {
            const { data, error } = await supabaseClient
                .from('posts')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                showToast('Error loading posts: ' + error.message, true);
                return;
            }

            allPosts = data || [];
            renderPosts();
        }

        function filterPosts(filter, btn) {
            currentFilter = filter;
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            renderPosts();
        }

        function renderPosts() {
            const list = document.getElementById('posts-list');
            let posts = allPosts;

            if (currentFilter === 'published') {
                posts = allPosts.filter(p => p.published);
            } else if (currentFilter === 'draft') {
                posts = allPosts.filter(p => !p.published);
            }

            if (posts.length === 0) {
                list.innerHTML = '<div style="text-align: center; padding: 40px; color: rgba(128,128,128,0.8);">No posts found</div>';
                return;
            }

            list.innerHTML = posts.map(post => `
                <div class="post-item">
                    <img src="${post.cover_image || 'https://via.placeholder.com/80x50?text=No+Image'}" alt="">
                    <div class="post-info">
                        <div class="post-title">${post.icon || '📝'} ${post.title}</div>
                        <div class="post-meta">${formatDate(post.created_at)} · /${post.slug}</div>
                    </div>
                    <span class="post-status ${post.published ? 'published' : 'draft'}">
                        ${post.published ? 'Published' : 'Draft'}
                    </span>
                    <div class="post-actions">
                        <button class="btn btn-secondary" onclick="editPost('${post.id}')">Edit</button>
                    </div>
                </div>
            `).join('');
        }

        function formatDate(isoString) {
            const date = new Date(isoString);
            const day = String(date.getDate()).padStart(2, '0');
            const month = date.toLocaleString('en-US', { month: 'short' });
            const year = date.getFullYear();
            return `${day} ${month}, ${year}`;
        }

        // --- EDITOR ---
        function showEditor(post = null) {
            document.getElementById('list-view').style.display = 'none';
            document.getElementById('editor-view').style.display = 'block';
            document.getElementById('uploaded-images').innerHTML = '';
            document.getElementById('cover-preview').innerHTML = '';

            if (post) {
                document.getElementById('editor-title').textContent = 'Edit Post';
                document.getElementById('post-id').value = post.id;
                document.getElementById('post-title').value = post.title;
                document.getElementById('post-slug').value = post.slug;
                document.getElementById('post-icon').value = post.icon || '';
                document.getElementById('post-cover').value = post.cover_image || '';
                document.getElementById('post-excerpt').value = post.excerpt || '';
                document.getElementById('post-content').value = post.content || '';
                document.getElementById('post-published').value = post.published ? 'true' : 'false';
                document.getElementById('delete-btn').style.display = 'block';
                
                if (post.cover_image) {
                    document.getElementById('cover-preview').innerHTML = `
                        <img src="${post.cover_image}" style="max-width: 100%; max-height: 200px; border-radius: 4px;">
                        <button type="button" class="btn btn-secondary" style="margin-top: 8px;" onclick="removeCoverImage()">Remove</button>
                    `;
                }
            } else {
                document.getElementById('editor-title').textContent = 'New Post';
                document.getElementById('post-form').reset();
                document.getElementById('post-id').value = '';
                document.getElementById('delete-btn').style.display = 'none';
            }

            updatePreview();
        }

        function hideEditor() {
            document.getElementById('list-view').style.display = 'block';
            document.getElementById('editor-view').style.display = 'none';
        }

        function editPost(id) {
            const post = allPosts.find(p => p.id === id);
            if (post) showEditor(post);
        }

        function updatePreview() {
            const content = document.getElementById('post-content').value;
            document.getElementById('preview-pane').innerHTML = marked.parse(content);
        }

        // Auto-generate slug from title
        document.getElementById('post-title').addEventListener('input', (e) => {
            const slugField = document.getElementById('post-slug');
            if (!document.getElementById('post-id').value) {
                slugField.value = e.target.value
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-|-$/g, '');
            }
        });

        // --- SAVE POST ---
        document.getElementById('post-form').addEventListener('submit', async (e) => {
            e.preventDefault();

            const id = document.getElementById('post-id').value;
            const postData = {
                title: document.getElementById('post-title').value,
                slug: document.getElementById('post-slug').value,
                icon: document.getElementById('post-icon').value || '📝',
                cover_image: document.getElementById('post-cover').value || null,
                excerpt: document.getElementById('post-excerpt').value || null,
                content: document.getElementById('post-content').value,
                published: document.getElementById('post-published').value === 'true',
                updated_at: new Date().toISOString()
            };

            let result;
            if (id) {
                result = await supabaseClient.from('posts').update(postData).eq('id', id);
            } else {
                result = await supabaseClient.from('posts').insert([postData]);
            }

            if (result.error) {
                showToast('Error saving: ' + result.error.message, true);
            } else {
                if (postData.published) {
                    showToast('Post saved! Deploying...');
                    try {
                        await fetch(NETLIFY_BUILD_HOOK, { method: 'POST' });
                        showToast('Post published & deploy triggered!');
                    } catch (err) {
                        showToast('Post saved but deploy failed.', true);
                    }
                } else {
                    showToast('Draft saved!');
                }
                hideEditor();
                loadPosts();
            }
        });

        // --- DELETE POST ---
        async function deletePost() {
            const id = document.getElementById('post-id').value;
            if (!id) return;

            if (!confirm('Are you sure you want to delete this post?')) return;

            const { error } = await supabaseClient.from('posts').delete().eq('id', id);

            if (error) {
                showToast('Error deleting: ' + error.message, true);
            } else {
                showToast('Post deleted');
                hideEditor();
                loadPosts();
            }
        }

        // --- IMAGE UPLOAD ---
        async function uploadImage(file) {
            const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
            
            const { data, error } = await supabaseClient.storage
                .from(STORAGE_BUCKET)
                .upload(fileName, file, { cacheControl: '3600', upsert: false });

            if (error) throw new Error(error.message);

            const { data: urlData } = supabaseClient.storage
                .from(STORAGE_BUCKET)
                .getPublicUrl(fileName);

            return urlData.publicUrl;
        }

        // --- COVER IMAGE UPLOAD ---
        const coverUploadArea = document.getElementById('cover-upload-area');

        coverUploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            coverUploadArea.classList.add('dragover');
        });

        coverUploadArea.addEventListener('dragleave', () => {
            coverUploadArea.classList.remove('dragover');
        });

        coverUploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            coverUploadArea.classList.remove('dragover');
            if (e.dataTransfer.files.length > 0) {
                handleCoverFile(e.dataTransfer.files[0]);
            }
        });

        function handleCoverUpload(e) {
            if (e.target.files.length > 0) {
                handleCoverFile(e.target.files[0]);
            }
        }

        async function handleCoverFile(file) {
            if (!file.type.startsWith('image/')) {
                showToast('Please select an image file', true);
                return;
            }

            showToast('Uploading cover image...');

            try {
                const url = await uploadImage(file);
                document.getElementById('post-cover').value = url;
                document.getElementById('cover-preview').innerHTML = `
                    <img src="${url}" style="max-width: 100%; max-height: 200px; border-radius: 4px;">
                    <button type="button" class="btn btn-secondary" style="margin-top: 8px;" onclick="removeCoverImage()">Remove</button>
                `;
                showToast('Cover image uploaded!');
            } catch (err) {
                showToast('Upload failed: ' + err.message, true);
            }
        }

        function removeCoverImage() {
            document.getElementById('post-cover').value = '';
            document.getElementById('cover-preview').innerHTML = '';
        }

        // --- CONTENT IMAGES UPLOAD ---
        const uploadArea = document.getElementById('upload-area');

        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            handleFiles(e.dataTransfer.files);
        });

        function handleFileSelect(e) {
            handleFiles(e.target.files);
        }

        async function handleFiles(files) {
            for (const file of files) {
                if (!file.type.startsWith('image/')) continue;

                showToast('Uploading ' + file.name + '...');

                try {
                    const url = await uploadImage(file);
                    addUploadedImage(url, file.name);
                    showToast('Uploaded: ' + file.name);
                } catch (err) {
                    showToast('Upload failed: ' + err.message, true);
                }
            }
        }

        function addUploadedImage(url, fileName) {
            const container = document.getElementById('uploaded-images');
            const div = document.createElement('div');
            div.className = 'uploaded-image';
            const markdown = `![${fileName}](${url})`;
            div.innerHTML = `
                <img src="${url}" alt="">
                <button type="button" onclick="this.parentElement.remove()">×</button>
                <span style="display: block; margin-top: 4px; font-size: 12px; cursor: pointer;" onclick="copyMarkdown('${markdown}')" title="Click to copy">📋 Copy Markdown</span>
            `;
            container.appendChild(div);
        }

        function copyMarkdown(text) {
            navigator.clipboard.writeText(text);
            showToast('Markdown copied!');
        }

        // --- TOAST ---
        function showToast(message, isError = false) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.className = 'toast show' + (isError ? ' error' : '');
            setTimeout(() => toast.classList.remove('show'), 3000);
        }

        // --- INIT ---
        checkAuth();
    </script>
</body>
</html>
```

---

### 3. Frontend Blog Display

**JavaScript Module: `blog.js`**

```javascript
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
```

**HTML Usage Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog</title>
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <style>
        .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 24px;
            padding: 24px;
        }
        
        .blog-card {
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.2s;
        }
        
        .blog-card:hover {
            transform: translateY(-4px);
        }
        
        .blog-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        
        .blog-card-content {
            padding: 16px;
        }
        
        .blog-card h3 {
            margin-bottom: 8px;
        }
        
        .date {
            font-size: 12px;
            color: #666;
            margin-bottom: 8px;
        }
        
        .excerpt {
            font-size: 14px;
            color: #333;
        }
    </style>
</head>
<body>
    <h1>Blog</h1>
    <div id="blog-posts" class="blog-grid"></div>

    <script src="blog.js"></script>
    <script>
        // Render blog posts on page load
        renderBlogPosts('blog-posts');
    </script>
</body>
</html>
```

---

### 4. Build Script (Node.js - Optional for SSG)

**File: `build-blog.js`**

```javascript
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Supabase Configuration
const SUPABASE_URL = 'https://cvaujkhxgzrqwqjofgls.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2YXVqa2h4Z3pycXdxam9mZ2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTM3NDYsImV4cCI6MjA4MDM2OTc0Nn0.qbmIu3luDquk734FXko7I2m1qaY6MPA0r6quFJlEmSw';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const BLOG_DIR = path.join(__dirname, 'blog');
const BASE_URL = 'https://yoursite.com'; // Update this

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
        }
        
        h1 { font-size: 2.5em; margin-bottom: 16px; }
        .meta { color: #666; margin-bottom: 32px; }
        .content img { max-width: 100%; height: auto; }
        .content pre { background: #f5f5f5; padding: 16px; border-radius: 4px; overflow-x: auto; }
        .content code { background: #f5f5f5; padding: 2px 6px; border-radius: 3px; }
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
    <a href="/blog">← Back to Blog</a>
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
```

**Usage:**
```bash
node build-blog.js
```

---

### 5. Environment Variables (Recommended)

**`.env` file:**
```env
VITE_SUPABASE_URL=https://cvaujkhxgzrqwqjofgls.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2YXVqa2h4Z3pycXdxam9mZ2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTM3NDYsImV4cCI6MjA4MDM2OTc0Nn0.qbmIu3luDquk734FXko7I2m1qaY6MPA0r6quFJlEmSw
ADMIN_PASSWORD=mainchance1970
STORAGE_BUCKET=blog-images
NETLIFY_BUILD_HOOK=https://api.netlify.com/build_hooks/69448f9f279d9e25dbb186a4
```

**Access in code:**
```javascript
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
```

---

## 🧪 Testing Checklist

### Backend (Admin Panel)
- [ ] Login with password `mainchance1970`
- [ ] View all posts (published + drafts)
- [ ] Filter by published/draft status
- [ ] Create new post
- [ ] Edit existing post
- [ ] Delete post
- [ ] Upload cover image
- [ ] Upload content images
- [ ] Copy markdown for images
- [ ] Save as draft
- [ ] Publish post
- [ ] Trigger Netlify rebuild (if configured)

### Frontend
- [ ] Display all published posts
- [ ] Display recent posts (homepage)
- [ ] Load single post by slug
- [ ] Render markdown content
- [ ] Display cover images
- [ ] Display post metadata (date, icon, excerpt)
- [ ] Navigate between posts

### Storage
- [ ] Images upload to `blog-images` bucket
- [ ] Images are publicly accessible
- [ ] Image URLs are correct in posts

---

## 🚨 Important Notes

1. **Anon Key Security:** The anon key is safe for client-side use. It's already public in your HTML files.

2. **Admin Password:** Consider replacing with Supabase Auth for better security:
   ```javascript
   const { data, error } = await supabase.auth.signInWithPassword({
     email: 'admin@example.com',
     password: 'your-password'
   });
   ```

3. **Row Level Security (RLS):** Enable RLS on the `posts` table:
   ```sql
   -- Allow public read access to published posts
   CREATE POLICY "Public read published posts"
   ON posts FOR SELECT
   USING (published = true);
   
   -- Restrict write access (configure based on your auth)
   CREATE POLICY "Admin write access"
   ON posts FOR ALL
   USING (auth.role() = 'authenticated');
   ```

4. **Storage Bucket:** Ensure `blog-images` bucket has public access enabled in Supabase dashboard.

5. **CORS:** If you encounter CORS issues, check Supabase project settings.

---

## 📦 Quick Start Commands

```bash
# Install dependencies
npm install @supabase/supabase-js marked

# Test connection
node -e "const {createClient}=require('@supabase/supabase-js');const s=createClient('https://cvaujkhxgzrqwqjofgls.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2YXVqa2h4Z3pycXdxam9mZ2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTM3NDYsImV4cCI6MjA4MDM2OTc0Nn0.qbmIu3luDquk734FXko7I2m1qaY6MPA0r6quFJlEmSw');s.from('posts').select('count').then(console.log)"

# Build static posts (if using SSG)
node build-blog.js
```

---

## 🎯 Migration Summary

**What's Migrating:**
✅ Supabase connection (URL + Anon Key)  
✅ `posts` table queries  
✅ `blog-images` storage bucket  
✅ Admin panel functionality  
✅ Frontend blog display  
✅ Build script (optional)  

**What's NOT Migrating:**
❌ Newsletter functionality  
❌ Page content/structure  
❌ Any non-blog features  

---

## 🔗 Useful Links

- **Supabase Dashboard:** https://app.supabase.com/project/cvaujkhxgzrqwqjofgls
- **Storage Bucket:** https://app.supabase.com/project/cvaujkhxgzrqwqjofgls/storage/buckets/blog-images
- **Table Editor:** https://app.supabase.com/project/cvaujkhxgzrqwqjofgls/editor
- **API Docs:** https://app.supabase.com/project/cvaujkhxgzrqwqjofgls/api

---

**Migration Status:** ✅ Ready to implement  
**Estimated Time:** 1-2 hours  
**Last Updated:** January 27, 2026
