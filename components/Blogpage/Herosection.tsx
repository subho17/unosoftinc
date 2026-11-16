"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { blogPosts } from "@/lib/blog-posts";

export default function Herosection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Map all blog posts so they appear one-by-one in this hero showcase
  const slides = blogPosts.map((post) => ({
    slug: post.slug,
    tag: post.tag,
    title: post.title,
    excerpt: post.excerpt,
    readTime: post.readTime,
    author: post.author,
    href: `/blog/${post.slug}`,
    imageSrc:
      post.slug === "breaking-into-product-design"
        ? "/blog-hero-clean.jpg"
        : post.imageSrc,
    imageAlt: post.imageAlt,
  }));

  const currentSlide = slides[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides every 5.5s unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <section className="w-full bg-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Eyebrow & Category Label */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#e8f4fc] border border-[#0083d1]/20 text-[#0083d1] text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0083d1]" />
              <span className="tracking-widest uppercase text-[11px] font-bold">
                THE UNOSOFT JOURNAL
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0083d1]" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0b1324]">
              Stories, thinking &amp;{" "}
              <span className="text-[#0083d1]">insights</span>
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 max-w-md leading-relaxed">
            Interviews with industry founders, deep dives into modern design systems,
            and software engineering practices from the UnoSoft team.
          </p>
        </div>

        {/* Featured Interactive Hero Slider Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="group relative w-full h-[480px] sm:h-[540px] md:h-[600px] lg:h-[640px] rounded-3xl sm:rounded-[36px] overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.14)] border border-gray-200/80 transition-all duration-500 bg-[#0e0e0e]"
        >
          {/* Background Image with Smooth Crossfade */}
          <div className="absolute inset-0 z-0">
            {slides.map((slide, index) => (
              <div
                key={slide.slug}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100 z-1" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>
            ))}

            {/* Gradient Overlays for Readability and Zero Background Text Bleed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 via-45% to-black/25 z-[2] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/50 hidden sm:block z-[2] pointer-events-none" />
          </div>

          {/* Top Bar: Pill Meta & Slide Counter */}
          <div className="relative z-10 p-6 sm:p-8 md:p-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#0083d1] animate-pulse" />
              <span>Featured • {currentSlide.tag}</span>
            </span>

            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-white/90 bg-black/50 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full">
                {currentSlide.readTime}
              </span>
              <span className="text-xs font-semibold text-white/80 bg-black/50 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full tabular-nums">
                {currentIndex + 1} / {slides.length}
              </span>
            </div>
          </div>

          {/* Bottom Content Area */}
          <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-10 md:p-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
            {/* Title, Excerpt & Author */}
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <Link href={currentSlide.href} className="group/link block">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] drop-shadow-md group-hover/link:text-[#0083d1] transition-colors">
                  {currentSlide.title}
                </h2>
              </Link>

              <p className="text-xs sm:text-sm md:text-[15px] text-gray-200 leading-relaxed max-w-2xl line-clamp-3 sm:line-clamp-none font-normal drop-shadow-sm">
                {currentSlide.excerpt}
              </p>

              <div className="flex items-center gap-3 pt-1 text-xs text-gray-300 flex-wrap">
                <span>
                  By <strong className="text-white font-medium">{currentSlide.author.name}</strong> •{" "}
                  {currentSlide.author.role}
                </span>
                <span className="text-gray-500">•</span>
                <Link
                  href={currentSlide.href}
                  className="inline-flex items-center gap-1 text-[#0083d1] hover:text-[#2997dc] font-semibold transition-colors"
                >
                  <span>Read full story</span>
                  <span className="text-sm">→</span>
                </Link>
              </div>
            </div>

            {/* Slider Navigation Arrows & Dot Indicators */}
            <div className="shrink-0 flex flex-col items-start lg:items-end gap-3.5">
              {/* Previous / Next Arrow Controls */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous blog post"
                  className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 backdrop-blur-md border border-white/25 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next blog post"
                  className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#0083d1] hover:bg-[#006eb0] active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:shadow-[#0083d1]/30"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center gap-1.5 pt-1">
                {slides.map((slide, index) => (
                  <button
                    key={slide.slug}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentIndex
                        ? "w-6 bg-[#0083d1]"
                        : "w-2 bg-white/35 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
