"use client";

import Link from "next/link";

export default function ServiceCTA() {
  return (
    <section className="sticky top-0 z-40 w-full min-h-screen bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 flex flex-col justify-center overflow-hidden border-t border-gray-100">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[400px] bg-gradient-to-tr from-[#ff4d00]/12 via-[#ff8c5a]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#fff1ec] border border-[#ff4d00]/25 text-[#ff4d00] text-xs font-semibold px-4 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#ff4d00] animate-pulse" />
          <span className="tracking-widest uppercase text-[11px] font-bold">
            START YOUR PROJECT
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0b1324] leading-tight">
          Have a Project in Mind?{" "}
          <br className="hidden sm:block" />
          <span className="text-[#ff4d00]">Let&apos;s Build It Together.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
          From intuitive UI/UX design and high-performance web applications to
          scalable cloud architectures, our senior engineering team is ready to
          turn your vision into reality.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#ff4d00] hover:bg-[#e04300] text-white text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-[#ff4d00]/25 hover:-translate-y-0.5"
          >
            <span>Get a Free Proposal</span>
            <span className="text-base">→</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#0b1324] text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-colors"
          >
            <span>Schedule a Free Consultation</span>
            <span className="text-base">↗</span>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-gray-500">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="text-emerald-500 font-bold">✓</span> 1–3 Hours Response Time
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="text-emerald-500 font-bold">✓</span> 100% Code &amp; IP Ownership
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="text-emerald-500 font-bold">✓</span> Strict NDA Confidentiality
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="text-emerald-500 font-bold">✓</span> Senior Engineers Only
          </span>
        </div>
      </div>
    </section>
  );
}

