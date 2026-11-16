"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface BlogPost {
  id: string;
  tag: string;
  title: string;
  date: string;
  views: string;
  href: string;
  buttonBg: string;
  imageSrc?: string;
  imageAlt?: string;
}

const posts: BlogPost[] = [
  {
    id: "post-1",
    tag: "UI/UX Design",
    title: "Design Unraveled: Defining the Essence of UI/UX Magic",
    date: "June 15, 2023",
    views: "21k Views",
    href: "/blog/design-unraveled",
    buttonBg: "bg-[#1f1f1f] group-hover:bg-[#ff4d00]",
  },
  {
    id: "post-2",
    tag: "User Experience",
    title: "Beyond Aesthetics: Crafting Intuitive UX",
    date: "June 10, 2023",
    views: "18k Views",
    href: "/blog/beyond-aesthetics",
    buttonBg: "bg-[#ff4d00] group-hover:bg-[#e04300]",
    imageSrc: "/blog-2.jpg",
    imageAlt: "Sketching mobile wireframes on tablet with stylus",
  },
  {
    id: "post-3",
    tag: "Design Systems",
    title: "Pixels & Insights: Unveiling the Art of UI/UX",
    date: "June 5, 2023",
    views: "17k Views",
    href: "/blog/pixels-and-insights",
    buttonBg: "bg-[#1f1f1f] group-hover:bg-[#ff4d00]",
    imageSrc: "/blog-3.jpg",
    imageAlt: "Laptop and smartphone displaying analytics dashboards",
  },
  {
    id: "post-4",
    tag: "Web Development",
    title: "Next-Gen Web: Accelerating Performance with Modern Stacks",
    date: "May 28, 2023",
    views: "19k Views",
    href: "/blog/next-gen-web",
    buttonBg: "bg-[#ff4d00] group-hover:bg-[#e04300]",
    imageSrc: "/blog-4.jpg",
    imageAlt: "Modern developer workstation with multiple code screens and warm ambient lighting",
  },
  {
    id: "post-5",
    tag: "Brand Identity",
    title: "Brand Mastery: Building Visual Identities that Endure",
    date: "May 20, 2023",
    views: "24k Views",
    href: "/blog/brand-mastery",
    buttonBg: "bg-[#1f1f1f] group-hover:bg-[#ff4d00]",
    imageSrc: "/blog-5.jpg",
    imageAlt: "Brand design materials, color swatches and typography specimen book",
  },
];

function DeskDesignIllustration() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#eef1f5] via-[#dfe5ec] to-[#cfd7e3] overflow-hidden flex items-center justify-center">
      {/* Subtle plant accent on left */}
      <div className="absolute -left-6 top-2 w-24 h-44 pointer-events-none">
        <div className="w-16 h-28 rounded-full bg-gradient-to-tr from-emerald-800 to-emerald-500 rotate-12 opacity-90" />
        <div className="w-12 h-24 rounded-full bg-gradient-to-tr from-emerald-700 to-lime-500 -mt-20 ml-4 rotate-45 opacity-85" />
      </div>

      {/* Laptop screen in background */}
      <div className="absolute right-3 top-4 w-[68%] h-[62%] bg-white rounded-xl shadow-lg border-4 border-[#1f2937] p-4 flex flex-col justify-center items-end text-right">
        <div className="text-sm sm:text-base font-bold text-[#0b1324] leading-tight">
          UI/UX Design
        </div>
        <div className="text-[9px] text-gray-500 mt-1">
          Create. Innovate. Inspire.
        </div>
      </div>

      {/* Laptop keyboard base */}
      <div className="absolute bottom-2 left-10 right-2 h-14 bg-gradient-to-b from-gray-300 to-gray-400 rounded-xl transform -skew-x-12 opacity-80" />

      {/* Silver stand + smartphone */}
      <div className="relative z-10 flex flex-col items-center translate-y-2 -translate-x-4">
        <div className="w-24 h-40 bg-white rounded-[18px] border-[4px] border-[#18181b] shadow-2xl overflow-hidden flex flex-col">
          <div className="bg-blue-600 h-11 px-2.5 py-2 flex flex-col justify-between text-white">
            <div className="w-6 h-1 bg-white/40 rounded-full mx-auto" />
            <div className="text-[7px] font-semibold">Dashboard</div>
          </div>
          <div className="p-2 space-y-1.5 flex-1 bg-slate-50">
            <div className="h-9 rounded-md bg-gradient-to-r from-blue-500 to-sky-400" />
            <div className="grid grid-cols-2 gap-1">
              <div className="h-7 rounded bg-white border border-gray-200" />
              <div className="h-7 rounded bg-white border border-gray-200" />
            </div>
          </div>
        </div>
        <div className="w-14 h-3 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-md shadow-md -mt-0.5" />
      </div>
    </div>
  );
}

export default function Blogsection() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Duplicate items for continuous seamless infinite marquee looping
  const marqueePosts = [...posts, ...posts];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -460, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 460, behavior: "smooth" });
    }
  };

  return (
    <section className="sticky top-0 z-30 w-full min-h-screen bg-white pt-10 pb-16 md:pt-14 md:pb-20 px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-start overflow-hidden">
      <style>{`
        @keyframes blog-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .blog-marquee-track {
          display: flex;
          width: max-content;
          animation: blog-marquee 38s linear infinite;
        }
        .blog-marquee-track:hover,
        .blog-marquee-track.is-paused {
          animation-play-state: paused;
        }
      `}</style>

      {/* Expanded Outer Container with Increased Width */}
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#fff1ec] border border-[#ff4d00]/20 text-[#ff4d00] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff4d00] animate-pulse" />
              <span>Articles &amp; Thought Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b1324] leading-[1.15] tracking-tight">
              From our
              <br />
              <span className="text-[#ff4d00]">blog posts</span>
            </h2>
            <div className="w-24 h-1 bg-[#ff4d00] rounded-full mt-3" />
          </div>

          {/* Controls: Auto-move status + Arrows + View All */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Auto status badge */}
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Resume auto scroll" : "Pause auto scroll"}
              className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-[#334155] text-xs font-medium px-4 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isPaused ? "bg-amber-500" : "bg-emerald-500 animate-pulse"
                }`}
              />
              <span>{isPaused ? "Auto: Paused (Click to Play)" : "Auto: Moving (Hover to Pause)"}</span>
            </button>

            {/* Left/Right manual nudge buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={scrollLeft}
                aria-label="Scroll blogs left"
                className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#ff4d00] bg-white hover:bg-[#ff4d00] text-gray-700 hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={scrollRight}
                aria-label="Scroll blogs right"
                className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#ff4d00] bg-white hover:bg-[#ff4d00] text-gray-700 hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* View All Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#ff4d00] hover:bg-[#e04300] text-white text-sm sm:text-base font-semibold px-7 py-2.5 rounded-full transition-colors"
            >
              <span>View All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-6-6l6 6-6 6"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Automatic Moving Carousel Track with Increased Card Width */}
        <div
          ref={scrollContainerRef}
          className="relative w-full overflow-x-auto scrollbar-none py-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`blog-marquee-track gap-8 ${isPaused ? "is-paused" : ""}`}>
            {marqueePosts.map((post, index) => (
              <div
                key={`${post.id}-${index}`}
                className="w-[340px] sm:w-[400px] md:w-[440px] lg:w-[460px] shrink-0"
              >
                <Link href={post.href} className="group block h-full">
                  {/* Thumbnail with Concave Bottom-Right Cutout */}
                  <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden bg-gray-100 shadow-md">
                    {post.imageSrc ? (
                      <Image
                        src={post.imageSrc}
                        alt={post.imageAlt ?? post.title}
                        fill
                        sizes="(max-width: 768px) 340px, 460px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <DeskDesignIllustration />
                    )}

                    {/* Concave bottom-right cutout matching white section background */}
                    <div className="pointer-events-none absolute bottom-0 right-0 w-[82px] h-[82px] bg-white rounded-tl-[42px] z-10" />
                    <div
                      className="pointer-events-none absolute bottom-[82px] right-0 w-7 h-7 z-10"
                      style={{
                        background:
                          "radial-gradient(circle at 0 0, transparent 28px, #ffffff 28.5px)",
                      }}
                    />
                    <div
                      className="pointer-events-none absolute bottom-0 right-[82px] w-7 h-7 z-10"
                      style={{
                        background:
                          "radial-gradient(circle at 0 0, transparent 28px, #ffffff 28.5px)",
                      }}
                    />

                    {/* Circular arrow button inside cutout */}
                    <div
                      className={`absolute bottom-1 right-1 w-[68px] h-[68px] rounded-full ${post.buttonBg} flex items-center justify-center shadow-md transition-colors duration-300 z-20`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7v10"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Tag Pill */}
                  <div className="mt-5">
                    <span className="inline-block bg-[#f1f2f4] text-[#334155] text-xs font-semibold px-4 py-1.5 rounded-full">
                      {post.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3.5 text-xl sm:text-2xl font-bold text-[#0b1324] leading-snug tracking-tight group-hover:text-[#ff4d00] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Metadata Row */}
                  <div className="mt-4 flex items-center gap-4 text-xs sm:text-sm text-[#475569]">
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

                    <span className="text-gray-300">|</span>

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
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
