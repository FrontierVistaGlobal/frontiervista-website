export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  featuredImage?: {
    url: string;
    alt: string;
  };
  tags?: string[];
}

export interface BlogPostFields {
  title: string;
  slug: string;
  excerpt: string;
  content: unknown;
  author: string;
  publishedDate: string;
  featuredImage?: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
  tags?: string[];
}
