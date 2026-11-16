"use client";

import Image from "next/image";
import { useState } from "react";

export default function Introduction() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12">
      <div className="w-full max-w-6xl mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 sm:gap-10">
          {/* Left: Pill & Heading */}
          <div className="lg:max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#e8f4fc] border border-[#0083d1]/20 text-[#0083d1] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0083d1]" />
              <span className="tracking-widest uppercase text-[11px] font-bold">
                ABOUT US
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0083d1]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0b1324] leading-[1.2]">
              <span className="text-[#0083d1]">Introduction</span> To Best
              <br />
              Digital Agency!
            </h2>
          </div>

          {/* Right: Two Descriptive Paragraphs */}
          <div className="lg:max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-500 leading-relaxed pt-2">
            <p>
              Harum quisquam amet debitis pariatur quas? Nemo excepturi duis minim
              nostrud officiis dolorem fugit itaque, fugiat excepturi modi,
              porta.
            </p>
            <p>
              Odio velit, odit, est, euismod aliquid luctus pharetra vero,
              condimentum, nostrum mi venenatis, mollit odio mi, unde semper
              adipiscing aut.
            </p>
          </div>
        </div>

        {/* Feature Cards Row */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Best Price Guaranteed */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#0083d1] text-white flex items-center justify-center shrink-0 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.9}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#0b1324]">
                Best Price Guaranteed
              </h3>
              <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Card 2: Finance Analysis */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#0b1324] text-white flex items-center justify-center shrink-0 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.9}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#0b1324]">
                Finance Analysis
              </h3>
              <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Card 3: Professional Team */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#0083d1] text-white flex items-center justify-center shrink-0 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.9}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#0b1324]">
                Professional Team
              </h3>
              <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Showcase: Overlapping Dual Images with Video Play Button */}
        <div className="mt-16 sm:mt-20 relative pb-10 md:pb-16">
          {/* Main Large Image (Left Background) */}
          <div className="relative w-full md:w-[72%] h-[320px] sm:h-[420px] md:h-[480px] rounded-3xl overflow-hidden shadow-xl bg-gray-100">
            <Image
              src="/about-intro-main.jpg"
              alt="Digital Agency Team Strategy & Collaboration"
              fill
              sizes="(max-width: 768px) 100vw, 72vw"
              className="object-cover"
            />
          </div>

          {/* Overlapping Video Card (Right Foreground) */}
          <div className="relative md:absolute md:right-0 md:bottom-0 w-full md:w-[48%] h-[240px] sm:h-[300px] md:h-[340px] rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-[6px] border-white mt-6 md:mt-0 bg-gray-100 group">
            <Image
              src="/about-intro-video.jpg"
              alt="Agency Culture and Office Atmosphere"
              fill
              sizes="(max-width: 768px) 100vw, 48vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors" />

            {/* Play Button Trigger */}
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label="Play Introduction Video"
              className="absolute inset-0 flex items-center justify-center cursor-pointer focus:outline-none"
            >
              <div className="relative flex items-center justify-center">
                {/* Ping wave */}
                <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0083d1]/30 animate-ping" />
                {/* Main button */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0083d1] hover:bg-[#006eb0] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7 sm:w-8 sm:h-8 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Video Modal (when play button clicked) */}
        {isPlaying && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsPlaying(false)}
          >
            <div
              className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Agency Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                type="button"
                onClick={() => setIsPlaying(false)}
                aria-label="Close Video"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-[#0083d1] text-white flex items-center justify-center text-sm transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

