import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogPostBySlug, getAllBlogPostSlugs } from "../../_util/contentful";
import { BlogPost } from "../../_types/blog";

export async function generateStaticParams() {
  const slugs = await getAllBlogPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Frontier Vista",
    };
  }

  return {
    title: `${post.title} | Frontier Vista Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage
        ? [post.featuredImage.url]
        : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);

  console.log(post);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="wrap mx-auto px-3 py-16">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center text-[#479DDE] hover:underline"
      >
        ← Back to Blog
      </Link>

      <article className="mx-auto max-w-4xl">
        <header className="mb-8">
          {post.tags && post.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-[#479DDE]/10 px-3 py-1 text-xs text-[#479DDE]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="mb-4 text-4xl font-bold text-[#011D31] md:text-5xl">
            {post.title}
          </h1>
          <div className="mb-6 flex items-center gap-4 text-gray-600">
            <span>{formattedDate}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>
          {post.featuredImage && (
            <div className="relative h-96 w-full overflow-hidden rounded-lg">
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt}
                fill
                className="object-cover"
              />
            </div>
          )}
        </header>

        <div
          className="prose prose-lg max-w-none prose-headings:text-[#011D31] prose-a:text-[#479DDE] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#011D31] prose-p:text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-lg bg-[#479DDE] px-6 py-3 text-white transition-colors hover:bg-[#3a8bc7]"
          >
            ← Back to All Posts
          </Link>
        </div>
      </article>
    </div>
  );
}
