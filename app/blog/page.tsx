import Herosection from "@/components/Blogpage/Herosection";
import RecentBlogs, {
  type RecentPostCard,
} from "@/components/Blogpage/RecentBlogs";
import Footersection from "@/components/global/Footersection";
import { blogPosts } from "@/lib/blog-posts";

export const metadata = {
  title: "Blog & Insights | UnoSoft Engineering & Product Design",
  description:
    "Explore in-depth articles, founder interviews, design system breakdowns, and modern engineering practices from the UnoSoft technical team.",
};

const avatarPalette = [
  "bg-emerald-600",
  "bg-amber-600",
  "bg-indigo-600",
  "bg-blue-600",
  "bg-rose-600",
  "bg-teal-600",
  "bg-purple-600",
  "bg-sky-600",
  "bg-slate-700",
];

// Display the 9 recent blog posts below the featured hero
const recentPosts: RecentPostCard[] = blogPosts
  .filter((post) => post.slug !== "breaking-into-product-design")
  .map((post, index) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    authorName: post.author.name,
    authorInitials: post.author.name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2),
    avatarBg: avatarPalette[index % avatarPalette.length],
    imageSrc: post.imageSrc,
    imageAlt: post.imageAlt,
    href: `/blog/${post.slug}`,
    tag: post.tag,
  }));

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Featured Hero Article Banner */}
      <Herosection />

      {/* 2. Recent Blog Posts 3x3 Grid */}
      <div className="relative z-10 bg-white">
        <RecentBlogs posts={recentPosts} />
      </div>

      {/* 3. Global Footer */}
      <Footersection />
    </main>
  );
}
