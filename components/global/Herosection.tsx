"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Herosection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="sticky top-0 z-0 w-full min-h-screen bg-white overflow-hidden flex items-end">
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
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.35;
          }
          50% {
            transform: translateY(-24px) translateX(12px);
            opacity: 0.8;
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

      {/* Decorative Parallax Background Waves & Subtle Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glowing Orbs with Parallax */}
        <div
          className="absolute -top-32 -right-32 w-[540px] h-[540px] rounded-full bg-[#ff4d00]/10 blur-3xl transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px, 0)`,
          }}
        />
        <div
          className="absolute top-1/3 -left-20 w-[420px] h-[420px] rounded-full bg-[#ff8c5a]/8 blur-3xl transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${-mousePos.x}px, ${-mousePos.y}px, 0)`,
          }}
        />

        {/* Floating Subtle Particles */}
        {[
          { top: "18%", left: "15%", size: 6, delay: "0s", duration: "7s" },
          { top: "32%", left: "75%", size: 8, delay: "1.2s", duration: "9s" },
          { top: "65%", left: "85%", size: 5, delay: "2.4s", duration: "8s" },
          { top: "25%", left: "45%", size: 7, delay: "0.8s", duration: "10s" },
          { top: "72%", left: "28%", size: 6, delay: "3s", duration: "7.5s" },
          { top: "45%", left: "62%", size: 9, delay: "1.6s", duration: "8.5s" },
        ].map((pt, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#ff4d00]"
            style={{
              top: pt.top,
              left: pt.left,
              width: `${pt.size}px`,
              height: `${pt.size}px`,
              animation: `float-particle ${pt.duration} ease-in-out infinite ${pt.delay}`,
            }}
          />
        ))}

        {/* Parallax SVG Background Waves */}
        <svg
          className="absolute top-0 right-0 w-[75%] h-full transition-transform duration-700 ease-out"
          viewBox="0 0 800 600"
          fill="none"
          preserveAspectRatio="xMaxYMin slice"
          style={{
            transform: `translate3d(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px, 0)`,
          }}
        >
          <path
            d="M400 0C300 100 350 250 500 300C650 350 700 200 800 150V0H400Z"
            fill="#f3f4f6"
            opacity="0.9"
          />
          <path
            d="M500 0C400 80 420 200 550 260C680 320 750 180 800 100V0H500Z"
            fill="#fff3ed"
            opacity="0.85"
          />
          <path
            d="M550 0C480 60 500 150 600 200C700 250 770 150 800 80V0H550Z"
            fill="#ff4d00"
            opacity="0.08"
          />
        </svg>
      </div>

      {/* Content with Text Reveal Animations */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-16">
        <div className="w-full">
          {/* Heading strictly in 2 lines with staggered text reveal */}
          <h1 className="text-[clamp(1.2rem,4.2vw,3.75rem)] font-bold leading-tight text-[#0b1324] tracking-tight">
            <span className="block whitespace-nowrap overflow-hidden">
              <span className="block hero-reveal-1">
                Technical consulting that
              </span>
            </span>
            <span className="block whitespace-nowrap overflow-hidden">
              <span className="block hero-reveal-2">
                drives{" "}
                <span className="text-[#ff4d00]">business transformation.</span>
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-sm md:text-base text-gray-600 leading-relaxed max-w-lg hero-reveal-3">
            We are strategic business technology advisors committed to driving
            meaningful business transformation.
          </p>

          {/* CTA Button */}
          <div className="mt-8 hero-reveal-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#ff4d00] hover:bg-[#e04300] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Schedule a Free Consultation</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom row: Explore + Downward Arrow + Dots */}
        <div className="mt-16 flex items-center justify-between">
          {/* Explore indicator */}
          <div className="flex items-center gap-2">
            <span className="block w-2 h-2 rounded-full bg-[#ff4d00] animate-bounce" />
            <span className="text-xs text-[#ff4d00] font-medium tracking-wide">
              Explore
            </span>
          </div>

          {/* Downward arrow button */}
          <button
            type="button"
            onClick={scrollToNext}
            aria-label="Scroll down"
            title="Scroll down"
            className="w-10 h-10 rounded-full border border-[#ff4d00]/30 bg-[#ff4d00]/10 hover:bg-[#ff4d00] text-[#ff4d00] hover:text-white flex items-center justify-center transition-all animate-bounce cursor-pointer shadow-sm"
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

          {/* Pagination dots */}
          <div className="flex items-center gap-2">
            <span className="block w-2 h-2 rounded-full bg-[#ff4d00]" />
            <span className="block w-2 h-2 rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

