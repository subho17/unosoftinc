"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "/about-hero.jpg",
    alt: "UnoSoft Technical Consulting Team Collaboration",
  },
  {
    src: "/services-hero.jpg",
    alt: "Enterprise Digital Engineering & Modern Tech Stacks",
  },
  {
    src: "/about-intro-main.jpg",
    alt: "Digital Product Architecture and UI/UX Design Systems",
  },
  {
    src: "/blog-4.jpg",
    alt: "High-Performance Cloud & Software Development Workspace",
  },
];

export default function Herosection() {
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Parallax mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Automatic slideshow rotation across the 4 images
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="sticky top-0 z-0 w-full min-h-screen bg-[#0a0a0a] overflow-hidden flex items-end text-white"
    >
      <style>{`
        @keyframes hero-text-reveal {
          0% {
            opacity: 0;
            transform: translateY(28px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-reveal-1 {
          animation: hero-text-reveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero-reveal-2 {
          animation: hero-text-reveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.18s forwards;
          opacity: 0;
        }
        .hero-reveal-3 {
          animation: hero-text-reveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.35s forwards;
          opacity: 0;
        }
      `}</style>

      {/* 3-4 Background Images Layer with Smooth Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {heroImages.map((img, index) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              transitionProperty: "opacity, transform",
              transitionDuration: "1200ms",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center brightness-100"
            />
          </div>
        ))}

        {/* Black Cover Over the Images: Reduced Opacity for Clear Background Visibility */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/85 via-black/25 to-black/35 z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-[2]" />

        {/* Ambient Subtle Brand Glow Orbs */}
        <div
          className="absolute -top-32 -right-32 w-[540px] h-[540px] rounded-full bg-[#0083d1]/10 blur-3xl transition-transform duration-700 ease-out z-[3]"
          style={{
            transform: `translate3d(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px, 0)`,
          }}
        />
        <div
          className="absolute top-1/3 -left-20 w-[420px] h-[420px] rounded-full bg-[#0083d1]/10 blur-3xl transition-transform duration-700 ease-out z-[3]"
          style={{
            transform: `translate3d(${-mousePos.x}px, ${-mousePos.y}px, 0)`,
          }}
        />
      </div>

      {/* Hero Foreground Content - Aligned further towards the left */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 pb-16 pt-32">
        <div className="w-full max-w-4xl lg:max-w-5xl">
          {/* Eyebrow Badge */}
          <div className="hero-reveal-1 inline-flex items-center bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 shadow-md">
            <span className="tracking-widest uppercase text-[11px] font-bold text-gray-200">
              STRATEGIC TECHNOLOGY ADVISORY
            </span>
          </div>

          {/* Heading strictly in 2 lines with staggered text reveal */}
          <h1 className="text-[clamp(1.75rem,4.5vw,4.25rem)] font-extrabold leading-[1.12] text-white tracking-tight drop-shadow-md">
            <span className="block">
              <span className="block hero-reveal-1">
                Technical consulting that
              </span>
            </span>
            <span className="block">
              <span className="block hero-reveal-2">
                drives{" "}
                <span className="text-[#0083d1]">business transformation.</span>
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl hero-reveal-3 drop-shadow-sm">
            We are strategic business technology advisors committed to driving
            meaningful digital business transformation through UI/UX design,
            cloud architecture, and full-stack software engineering.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4 hero-reveal-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0083d1] hover:bg-[#006eb0] text-white text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg hover:shadow-[#0083d1]/30 hover:-translate-y-0.5"
            >
              <span>Schedule a Free Consultation</span>
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
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full backdrop-blur-md transition-colors"
            >
              <span>View Case Studies</span>
              <span className="text-xs">↗</span>
            </Link>
          </div>
        </div>

        {/* Bottom row: Explore + Downward Arrow + Interactive Slide Dots */}
        <div className="mt-14 sm:mt-18 flex items-center justify-between pt-6 border-t border-white/15">
          {/* Explore indicator */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-300 font-medium tracking-wide">
              Explore UnoSoft
            </span>
          </div>

          {/* Downward arrow button */}
          <button
            type="button"
            onClick={scrollToNext}
            aria-label="Scroll down"
            title="Scroll down"
            className="w-11 h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-[#0083d1] hover:border-[#0083d1] text-white flex items-center justify-center transition-all animate-bounce cursor-pointer shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Interactive Pagination Dots (4 Images) */}
          <div className="flex items-center gap-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(idx)}
                aria-label={`Switch to hero background ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeImage
                    ? "w-6 bg-[#0083d1]"
                    : "w-2 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
