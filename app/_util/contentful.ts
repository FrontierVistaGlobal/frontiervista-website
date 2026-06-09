import { createClient, type Entry } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BlogPost, BlogPostFields } from "../_types/blog";

interface ContentfulApiError {
  message?: string;
  details?: {
    errors?: Array<{ name?: string; path?: string[] }>;
  };
}

function asContentfulError(error: unknown): ContentfulApiError {
  return typeof error === "object" && error !== null
    ? (error as ContentfulApiError)
    : {};
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  const contentfulError = asContentfulError(error);
  return contentfulError.message || String(error);
}

// Contentful client configuration
// These will be set via environment variables
const getContentfulClient = () => {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  const environment = process.env.CONTENTFUL_ENVIRONMENT || "master";

  if (!spaceId || !accessToken) {
    console.warn(
      "Contentful credentials not found. Please set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in your .env.local file"
    );
  }

  return createClient({
    space: spaceId || "",
    accessToken: accessToken || "",
    environment: environment,
  });
};

const contentfulClient = getContentfulClient();

// Get the content type name from environment or use default
const BLOG_CONTENT_TYPE = process.env.CONTENTFUL_BLOG_CONTENT_TYPE || "blogPost";

// Utility function to list all available content types (for debugging)
export async function getAvailableContentTypes(): Promise<string[]> {
  try {
    const response = await contentfulClient.getContentTypes();
    return response.items.map((ct) => ct.sys.id);
  } catch (error) {
    console.error("Error fetching content types:", error);
    return [];
  }
}

// Transform Contentful entry to BlogPost
function transformEntry(entry: Entry): BlogPost {
  const fields = entry.fields as unknown as BlogPostFields;

  const content = fields.content
    ? documentToHtmlString(
        fields.content as Parameters<typeof documentToHtmlString>[0]
      )
    : "";

  // Handle missing fields gracefully
  return {
    slug: fields.slug || entry.sys.id || "untitled",
    title: fields.title || "Untitled Post",
    excerpt: fields.excerpt || "",
    content: content,
    author: fields.author || "Unknown Author",
    publishedDate: fields.publishedDate || entry.sys.createdAt || new Date().toISOString(),
    featuredImage: fields.featuredImage
      ? {
          url: `https:${fields.featuredImage.fields.file.url}`,
          alt: fields.featuredImage.fields.title || "",
        }
      : undefined,
    tags: fields.tags || [],
  };
}

// Get all blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    // Try with ordering first, fallback to no ordering if field doesn't exist
    let response;
    try {
      response = await contentfulClient.getEntries({
        content_type: BLOG_CONTENT_TYPE,
        order: ["-fields.publishedDate"],
      });
    } catch (orderError: unknown) {
      const contentfulError = asContentfulError(orderError);
      const errorMessage =
        contentfulError.message || JSON.stringify(orderError ?? {});
      if (
        errorMessage.includes("order") ||
        errorMessage.includes("publishedDate") ||
        errorMessage.includes("not applicable") ||
        contentfulError.details?.errors?.[0]?.name === "invalidOrder"
      ) {
        console.warn("⚠️  Could not order by publishedDate (field may not exist), fetching without ordering");
        response = await contentfulClient.getEntries({
          content_type: BLOG_CONTENT_TYPE,
        });
      } else {
        throw orderError;
      }
    }

    return response.items.map((item) => transformEntry(item));
  } catch (error: unknown) {
    const contentfulError = asContentfulError(error);
    if (contentfulError.details?.errors?.[0]?.name === "unknownContentType") {
      const availableTypes = await getAvailableContentTypes();
      console.error(
        `\n❌ Content type "${BLOG_CONTENT_TYPE}" not found in Contentful.\n` +
        `   Available content types: ${availableTypes.join(", ") || "none"}\n` +
        `   Please create a content type with API ID "${BLOG_CONTENT_TYPE}" or set CONTENTFUL_BLOG_CONTENT_TYPE in .env.local\n`
      );
    } else {
      console.error("Error fetching blog posts:", getErrorMessage(error));
    }
    return [];
  }
}

// Get a single blog post by slug or entry ID
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    let response;
    
    // First, try to get by entry ID (in case slug field doesn't exist)
    if (slug.length === 22) { // Contentful entry IDs are typically 22 characters
      try {
        const entry = await contentfulClient.getEntry(slug);
        if (entry.sys.contentType.sys.id === BLOG_CONTENT_TYPE) {
          return transformEntry(entry);
        }
      } catch {
        // Not an entry ID, continue to slug search
      }
    }
    
    // Try to get by slug field
    try {
      response = await contentfulClient.getEntries({
        content_type: BLOG_CONTENT_TYPE,
        "fields.slug": slug,
        limit: 1,
      });
      
      if (response.items.length > 0) {
        return transformEntry(response.items[0]);
      }
    } catch (slugError: unknown) {
      const contentfulError = asContentfulError(slugError);
      if (contentfulError.details?.errors?.[0]?.path?.includes("slug")) {
        console.warn("⚠️  Slug field not found, trying to fetch by entry ID");
        try {
          const entry = await contentfulClient.getEntry(slug);
          if (entry.sys.contentType.sys.id === BLOG_CONTENT_TYPE) {
            return transformEntry(entry);
          }
        } catch {
          // Entry not found
        }
      } else {
        throw slugError;
      }
    }

    return null;
  } catch (error: unknown) {
    const contentfulError = asContentfulError(error);
    if (contentfulError.details?.errors?.[0]?.name === "unknownContentType") {
      console.error(
        `Content type "${BLOG_CONTENT_TYPE}" not found. Please create it in Contentful.`
      );
    } else {
      console.error("Error fetching blog post:", getErrorMessage(error));
    }
    return null;
  }
}

// Get all blog post slugs (for static generation)
export async function getAllBlogPostSlugs(): Promise<string[]> {
  try {
    // Try to get slugs first
    try {
      const response = await contentfulClient.getEntries({
        content_type: BLOG_CONTENT_TYPE,
        select: ["fields.slug"],
      });

      return response.items.map(
        (item) => (item.fields as { slug?: string })?.slug || item.sys.id
      );
    } catch (slugError: unknown) {
      const contentfulError = asContentfulError(slugError);
      if (contentfulError.details?.errors?.[0]?.path?.includes("slug")) {
        console.warn("⚠️  Slug field not found, using entry IDs for static generation");
        const response = await contentfulClient.getEntries({
          content_type: BLOG_CONTENT_TYPE,
          select: ["sys.id"],
        });
        
        return response.items.map((item) => item.sys.id);
      } else {
        throw slugError;
      }
    }
  } catch (error: unknown) {
    const contentfulError = asContentfulError(error);
    if (contentfulError.details?.errors?.[0]?.name === "unknownContentType") {
      console.error(
        `Content type "${BLOG_CONTENT_TYPE}" not found. Please create it in Contentful.`
      );
    } else {
      console.error("Error fetching blog post slugs:", getErrorMessage(error));
    }
    return [];
  }
}
