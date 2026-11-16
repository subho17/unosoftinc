import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-posts";
import Footersection from "@/components/global/Footersection";

interface ArticleDetailProps {
  post: BlogPost;
  related: BlogPost[];
}

function MetaRow({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-[#475569]">
      <span className="inline-flex items-center gap-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-[#ff4d00]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        {post.date}
      </span>

      <span className="hidden sm:inline text-gray-300">|</span>

      <span className="inline-flex items-center gap-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-[#ff4d00]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {post.readTime}
      </span>

      <span className="hidden sm:inline text-gray-300">|</span>

      <span className="inline-flex items-center gap-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-[#ff4d00]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        {post.views}
      </span>
    </div>
  );
}

export default function ArticleDetail({ post, related }: ArticleDetailProps) {
  return (
    <main className="min-h-screen bg-white">
      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-16">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-[#475569] mb-6"
        >
          <Link href="/" className="hover:text-[#ff4d00] transition-colors">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <Link href="/blog" className="hover:text-[#ff4d00] transition-colors">
            Blog
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#0b1324] font-medium line-clamp-1">
            {post.tag}
          </span>
        </nav>

        {/* Tag + Title */}
        <div className="mb-6">
          <span className="inline-block bg-[#fff1ec] border border-[#ff4d00]/20 text-[#ff4d00] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            {post.tag}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0b1324] leading-[1.15]">
            {post.title}
          </h1>
        </div>

        {/* Author + Meta */}
        <div className="flex flex-wrap items-center gap-4 pb-8 border-b border-gray-200">
          <div className="w-11 h-11 rounded-full bg-[#ff4d00]/10 border border-[#ff4d00]/20 text-[#ff4d00] flex items-center justify-center font-bold text-sm shrink-0">
            {post.author.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)}
          </div>
          <div className="mr-2">
            <p className="text-sm font-semibold text-[#0b1324] leading-tight">
              {post.author.name}
            </p>
            <p className="text-xs text-[#475569]">{post.author.role}</p>
          </div>
          <div className="sm:ml-auto">
            <MetaRow post={post} />
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-gray-100 shadow-md mt-8">
          <Image
            src={post.imageSrc}
            alt={post.imageAlt}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Lead */}
        <p className="mt-10 text-lg sm:text-xl text-[#334155] leading-relaxed font-medium">
          {post.excerpt}
        </p>

        {/* Body */}
        <div className="mt-8 space-y-10">
          {post.sections.map((section, index) => (
            <section key={`${post.slug}-section-${index}`}>
              {section.heading && (
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b1324] tracking-tight mb-4">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs?.map((paragraph, pIndex) => (
                <p
                  key={`${post.slug}-p-${index}-${pIndex}`}
                  className="text-[15px] sm:text-base md:text-[17px] text-[#334155] leading-[1.8] mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}

              {section.bullets && (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((bullet, bIndex) => (
                    <li
                      key={`${post.slug}-b-${index}-${bIndex}`}
                      className="flex items-start gap-3 text-[15px] sm:text-base md:text-[17px] text-[#334155] leading-[1.7]"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff4d00] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.quote && (
                <blockquote className="my-6 border-l-4 border-[#ff4d00] bg-[#fff1ec]/60 rounded-r-2xl px-6 py-5">
                  <p className="text-base sm:text-lg md:text-xl font-semibold text-[#0b1324] leading-relaxed italic">
                    {section.quote}
                  </p>
                </blockquote>
              )}
            </section>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="mt-14 rounded-3xl bg-[#141414] p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Have a product problem worth solving?
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-md leading-relaxed">
              Talk to the team behind these articles about design systems,
              engineering velocity, or your next platform build.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#ff4d00] hover:bg-[#e04300] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors shrink-0"
          >
            <span>Start a conversation</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff4d00] hover:text-[#e04300] transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>Back to all articles</span>
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="w-full bg-[#f7f8fa] border-t border-gray-200 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1324] tracking-tight mb-8">
              Keep reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="relative h-44 bg-gray-100 overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-2 flex-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ff4d00]">
                      {item.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0b1324] leading-snug group-hover:text-[#ff4d00] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#475569] mt-auto pt-2">
                      {item.date} · {item.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footersection />
    </main>
  );
}
