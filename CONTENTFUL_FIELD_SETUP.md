# Contentful Blog Fields Setup

Your Contentful space has a content type called "Blog" (API ID: `blog`), but it needs the following fields to work properly with the blog module.

## Required Fields to Add

Go to your Contentful space → **Content model** → **Blog** → **Add field** and add these fields:

### 1. Title (Short text)
- **Field ID**: `title`
- **Required**: Yes
- **Name**: Title

### 2. Slug (Short text)
- **Field ID**: `slug`
- **Required**: Yes
- **Name**: Slug
- **Help text**: URL-friendly version (e.g., "my-first-post")
- **Validation**: Unique

### 3. Excerpt (Long text)
- **Field ID**: `excerpt`
- **Required**: Yes
- **Name**: Excerpt
- **Help text**: Short description/summary

### 4. Content (Rich text)
- **Field ID**: `content`
- **Required**: Yes
- **Name**: Content
- **Help text**: Main blog post content

### 5. Author (Short text)
- **Field ID**: `author`
- **Required**: Yes
- **Name**: Author

### 6. Published Date (Date & time)
- **Field ID**: `publishedDate`
- **Required**: Yes
- **Name**: Published Date

### Optional Fields

### 7. Featured Image (Media - Images only)
- **Field ID**: `featuredImage`
- **Required**: No
- **Name**: Featured Image

### 8. Tags (Short text, multiple values)
- **Field ID**: `tags`
- **Required**: No
- **Name**: Tags

## After Adding Fields

1. **Save** the content type
2. **Publish** the content type (important!)
3. Create your first blog post entry
4. **Publish** the blog post entry

The blog should now work correctly!
