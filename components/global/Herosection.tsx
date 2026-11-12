"use client";

import Link from "next/link";

export default function Herosection() {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="sticky top-0 z-0 w-full min-h-screen bg-white overflow-hidden flex items-end">
      {/* Decorative background waves on white matching orange theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#ff4d00]/8 blur-3xl" />
        <svg
          className="absolute top-0 right-0 w-[75%] h-full"
          viewBox="0 0 800 600"
          fill="none"
          preserveAspectRatio="xMaxYMin slice"
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

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-16">
        <div className="w-full">
          {/* Heading strictly in 2 lines */}
          <h1 className="text-[clamp(1.2rem,4.2vw,3.75rem)] font-bold leading-tight text-[#0b1324] tracking-tight">
            <span className="block whitespace-nowrap">
              Technical consulting that
            </span>
            <span className="block whitespace-nowrap">
              drives{" "}
              <span className="text-[#ff4d00]">business transformation.</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-sm md:text-base text-gray-600 leading-relaxed max-w-lg">
            We are strategic business technology advisors committed to driving
            meaningful business transformation.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#ff4d00] hover:bg-[#e04300] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Schedule a Free Consultation
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
