# Contentful Blog Setup Guide

This guide will help you set up Contentful as your headless CMS for the blog module.

## Step 1: Create a Contentful Account

1. Go to [https://www.contentful.com](https://www.contentful.com)
2. Sign up for a free account (free tier includes 25,000 API requests/month)
3. Create a new space or use an existing one

## Step 2: Create Content Model

1. In your Contentful space, go to **Content model** in the top navigation
2. Click **Add content type**
3. Name it `Blog Post` (the API ID will be `blogPost`)

## Step 3: Add Fields to Blog Post Content Type

Add the following fields to your `Blog Post` content type:

### Required Fields:

1. **Title** (Short text)
   - Field ID: `title`
   - Required: Yes
   - Help text: "The title of the blog post"

2. **Slug** (Short text)
   - Field ID: `slug`
   - Required: Yes
   - Help text: "URL-friendly version of the title (e.g., 'my-first-post')"
   - Validation: Unique

3. **Excerpt** (Long text)
   - Field ID: `excerpt`
   - Required: Yes
   - Help text: "Short description/summary of the post"

4. **Content** (Rich text)
   - Field ID: `content`
   - Required: Yes
   - Help text: "Main blog post content"

5. **Author** (Short text)
   - Field ID: `author`
   - Required: Yes
   - Help text: "Author name"

6. **Published Date** (Date & time)
   - Field ID: `publishedDate`
   - Required: Yes
   - Help text: "When the post was published"

### Optional Fields:

7. **Featured Image** (Media - Images only)
   - Field ID: `featuredImage`
   - Required: No
   - Help text: "Main image for the blog post"

8. **Tags** (Short text, multiple values)
   - Field ID: `tags`
   - Required: No
   - Help text: "Tags for categorizing posts"

## Step 4: Get API Credentials

1. Go to **Settings** → **API keys**
2. Click **Add API key**
3. Copy the following:
   - **Space ID** (visible at the top of the API keys page)
   - **Content Delivery API - access token** (use this one, not the Preview API token)

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the following variables:

```env
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

3. Replace `your_space_id_here` and `your_access_token_here` with your actual values from Step 4

## Step 6: Create Your First Blog Post

1. Go to **Content** in the top navigation
2. Click **Add entry**
3. Select **Blog Post**
4. Fill in all the required fields:
   - **Title**: e.g., "Welcome to Our Blog"
   - **Slug**: e.g., "welcome-to-our-blog"
   - **Excerpt**: A short description
   - **Content**: Your blog post content (use the rich text editor)
   - **Author**: Your name
   - **Published Date**: Today's date
   - **Featured Image** (optional): Upload an image
   - **Tags** (optional): Add relevant tags
5. Click **Publish**

## Step 7: Test Your Blog

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/blog`
3. You should see your blog post listed
4. Click on it to view the full post

## Troubleshooting

### Error: "unknownContentType" or "Content type does not exist"

This means the `blogPost` content type hasn't been created yet. Here's how to fix it:

1. **Check what content types exist in your space:**
   - Visit `http://localhost:3000/api/debug-contentful` in your browser
   - This will show you all available content types in your Contentful space

2. **Create the Blog Post content type:**
   - Follow Step 2 and Step 3 in this guide
   - Make sure the API ID is exactly `blogPost` (case-sensitive)

3. **If you want to use a different content type name:**
   - Add to your `.env.local`: `CONTENTFUL_BLOG_CONTENT_TYPE=yourContentTypeName`
   - Make sure the API ID matches exactly

### No posts showing up?
- Verify your environment variables are set correctly
- Check that your blog posts are **Published** (not just saved as drafts)
- Ensure the content type is named exactly `Blog Post` (API ID: `blogPost`)
- Check the browser console and server logs for errors
- Visit `/api/debug-contentful` to see available content types

### Images not loading?
- Make sure images are uploaded to Contentful and published
- Check that the `featuredImage` field is properly linked

### Rich text not rendering correctly?
- The current implementation converts rich text to basic HTML
- For more advanced formatting, you may want to use `@contentful/rich-text-react-renderer`

## Next Steps

- Customize the blog post styling to match your brand
- Add more content types (e.g., Authors, Categories)
- Implement search functionality
- Add pagination for the blog listing page
- Set up webhooks for automatic rebuilds when content changes

## Resources

- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Contentful JavaScript SDK](https://www.contentful.com/developers/docs/javascript/)
- [Contentful Rich Text](https://www.contentful.com/developers/docs/concepts/rich-text/)
