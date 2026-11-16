import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleDetail from "@/components/Blogpage/ArticleDetail";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/lib/blog-posts";

// Only the slugs declared in lib/blog-posts.ts are valid at build time.
export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Article not found | UnoSoft" };
  }

  return {
    title: `${post.title} | UnoSoft Journal`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.isoDate,
      authors: [post.author.name],
      images: [{ url: post.imageSrc, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <ArticleDetail post={post} related={getRelatedPosts(post.slug)} />;
}
