import Herosection from "@/components/global/Herosection";
import Servicepage from "@/components/services/servicepage";
import Experincepage from "@/components/global/experincepage";
import Testimonial from "@/components/global/Testimonial";
import Foundersection from "@/components/global/foundersection";
import Discuss from "@/components/global/Discuss";
import Blogsection, {
  type BlogCard,
} from "@/components/global/Blogsection";
import Faqsection from "@/components/global/Faqsection";
import Teamsection from "@/components/global/Teamsection";
import Footersection from "@/components/global/Footersection";
import { blogPosts } from "@/lib/blog-posts";

const blogCards: BlogCard[] = blogPosts.map((post, index) => ({
  id: post.slug,
  tag: post.tag,
  title: post.title,
  date: post.date,
  views: post.views,
  href: `/blog/${post.slug}`,
  buttonBg:
    index % 2 === 0
      ? "bg-[#1f1f1f] group-hover:bg-[#0083d1]"
      : "bg-[#0083d1] group-hover:bg-[#006eb0]",
  imageSrc: post.imageSrc,
  imageAlt: post.imageAlt,
}));

export default function Home() {
  return (
    <>
      <Herosection />
      <div className="relative z-10">
        <Servicepage />
        <Experincepage />
        <Testimonial />
        <Foundersection />
        <Discuss />
        <Blogsection posts={blogCards} />
        <Faqsection />
        <Teamsection />
        <Footersection />
      </div>
    </>
  );
}
