import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "../_util/contentful";
import { BlogPost } from "../_types/blog";

export const metadata = {
  title: "Blog | Frontier Vista",
  description: "Stay informed with the latest insights from Frontier Vista",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  console.log(posts);

  return (
    <div className="wrap mx-auto px-3 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-[#011D31] md:text-5xl">
          Our Blog
        </h1>
        <p className="text-lg text-gray-600">
          Stay informed with the latest insights, trends, and updates
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-lg text-gray-500">
            No blog posts available yet. Check back soon!
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Make sure your Contentful space is configured correctly.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.publishedDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl"
    >
      {post.featuredImage && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{post.author}</span>
        </div>
        <h2 className="mb-3 text-xl font-semibold text-[#011D31] group-hover:text-[#479DDE] transition-colors">
          {post.title}
        </h2>
        <p className="mb-4 flex-1 text-gray-600 line-clamp-3">{post.excerpt}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full bg-[#479DDE]/10 px-3 py-1 text-xs text-[#479DDE]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <span className="text-sm font-medium text-[#479DDE] group-hover:underline">
          Read more →
        </span>
      </div>
    </Link>
  );
}
