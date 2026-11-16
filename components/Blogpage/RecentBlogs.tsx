"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface RecentPostCard {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  authorName: string;
  authorInitials: string;
  avatarBg: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  tag: string;
}

interface RecentBlogsProps {
  posts: RecentPostCard[];
}

export default function RecentBlogs({ posts }: RecentBlogsProps) {
  const [visibleCount, setVisibleCount] = useState(9);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 3, posts.length));
      setIsLoadingMore(false);
    }, 500);
  };

  const displayedPosts = posts.slice(0, visibleCount);

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-100">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b1324]">
            Recent blog posts
          </h2>

          <span className="text-xs text-gray-400 font-medium hidden sm:inline-block">
            Showing {displayedPosts.length} of {posts.length} articles
          </span>
        </div>

        {/* 3x3 Responsive Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-x-8 sm:gap-y-12">
          {displayedPosts.map((post) => (
            <Link
              key={post.slug}
              href={post.href}
              className="group flex flex-col justify-between h-full focus:outline-none"
            >
              <div>
                {/* Article Image Banner */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-xs mb-5 border border-gray-100">
                  <Image
                    src={post.imageSrc}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Tag */}
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0083d1]">
                  {post.tag}
                </span>

                {/* Title */}
                <h3 className="mt-1.5 text-lg sm:text-xl font-bold text-[#0b1324] tracking-tight group-hover:text-[#0083d1] transition-colors leading-snug mb-2.5">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-5 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              {/* Author & Date Footer */}
              <div className="flex items-center gap-3 pt-2">
                <div
                  className={`w-8 h-8 rounded-full ${post.avatarBg} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs`}
                >
                  {post.authorInitials}
                </div>
                <div className="text-xs flex items-center gap-1.5 flex-wrap">
                  <span className="font-semibold text-[#0b1324]">
                    {post.authorName}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500">{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-14 sm:mt-18 text-center">
          <button
            type="button"
            onClick={handleLoadMore}
            disabled={isLoadingMore}
            className="inline-flex items-center gap-2 bg-[#0b1324] hover:bg-[#0083d1] active:scale-95 text-white text-xs sm:text-sm font-semibold px-7 py-3 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoadingMore ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Loading more...</span>
              </>
            ) : (
              <span>Loading more...</span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
