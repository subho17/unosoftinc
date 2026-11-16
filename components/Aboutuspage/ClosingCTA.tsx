import Link from "next/link";

export default function ClosingCTA() {
  return (
    <section className="sticky top-0 z-40 w-full min-h-screen bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-br from-[#0b1324] via-[#141d33] to-[#0b1324] text-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden border border-white/10">
          {/* Ambient Orange Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0083d1]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0083d1]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 text-[#0083d1] text-xs font-semibold px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#0083d1] animate-pulse" />
              <span className="text-white">START YOUR PROJECT WITH UNOSOFT</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Ready to build something{" "}
              <span className="text-[#0083d1]">extraordinary?</span>
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Whether you are architecting a new enterprise platform from scratch
              or modernizing an existing legacy product, our senior team is ready
              to deliver.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0083d1] hover:bg-[#006eb0] text-white text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-[#0083d1]/30 hover:-translate-y-0.5"
              >
                <span>Schedule a Free Consultation</span>
                <span className="text-base">→</span>
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                <span>View Case Studies</span>
                <span className="text-base">↗</span>
              </Link>
            </div>

            {/* Response Time guarantee pill */}
            <div className="pt-6 flex items-center justify-center gap-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span> No commitment required
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span> Response under 2 hours
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span> Full NDA protection
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

