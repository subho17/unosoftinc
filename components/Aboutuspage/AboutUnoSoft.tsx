import Link from "next/link";

export default function AboutUnoSoft() {
  const stats = [
    { value: "8+", label: "Years of Engineering Excellence" },
    { value: "120+", label: "Digital Products Shipped" },
    { value: "99.4%", label: "Client Retention Rate" },
    { value: "45+", label: "Senior Technical Specialists" },
  ];

  const chapters = [
    {
      step: "01",
      title: "The Genesis",
      headline: "Founded to bridge strategy and code.",
      body: "UnoSoft was established by engineers and product leaders who saw a persistent industry flaw: brilliant design agencies couldn't execute complex architectures, while traditional development shops lacked aesthetic intuition. We united both disciplines into a singular force.",
    },
    {
      step: "02",
      title: "The Craft",
      headline: "Zero-compromise technical discipline.",
      body: "We do not believe in temporary fixes or disposable code. Every digital system we architect is built with clean maintainability, rigorous automated testing, and comprehensive documentation that empowers internal teams to scale seamlessly.",
    },
    {
      step: "03",
      title: "The Expansion",
      headline: "Scaling global enterprise impact.",
      body: "Today, UnoSoft empowers high-growth tech ventures and Fortune 500 enterprises across North America, Europe, and Asia-Pacific, transforming critical product roadmaps into revenue-generating engines.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 border-b border-gray-100">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 bg-[#fff1ec] border border-[#ff4d00]/20 text-[#ff4d00] text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
          <span className="tracking-widest uppercase text-[11px] font-bold">
            WHO WE ARE • STORYTELLING
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
        </div>

        {/* 2-Column Layout with Sticky Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Sequential Scroll-Reveal Story Chapters */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0b1324] leading-[1.2]">
                Pioneering <span className="text-[#ff4d00]">Digital Solutions</span>{" "}
                for Forward-Thinking Enterprises.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                Scroll through the evolution of UnoSoft and see how our commitment
                to elite engineering reshapes digital products.
              </p>
            </div>

            {/* Chapters list */}
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-gradient-to-b before:from-[#ff4d00] before:via-gray-200 before:to-transparent pl-4">
              {chapters.map((ch) => (
                <div
                  key={ch.step}
                  className="relative pl-8 transition-all duration-300 group"
                >
                  <span className="absolute left-0 top-1.5 w-10 h-10 -ml-5 rounded-full bg-white border-2 border-[#ff4d00] text-[#ff4d00] font-extrabold text-xs flex items-center justify-center shadow-sm group-hover:bg-[#ff4d00] group-hover:text-white transition-colors">
                    {ch.step}
                  </span>

                  <span className="text-[11px] font-bold text-[#ff4d00] uppercase tracking-wider block">
                    {ch.title}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0b1324] mt-1 mb-2.5">
                    {ch.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {ch.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[#ff4d00] hover:bg-[#e04300] text-white text-xs sm:text-sm font-semibold px-7 py-3 rounded-full transition-all shadow-md hover:-translate-y-0.5"
              >
                <span>Explore Capabilities</span>
                <span>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#0b1324] text-xs sm:text-sm font-semibold px-7 py-3 rounded-full transition-colors"
              >
                <span>Talk with an Architect</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Sticky Impact Card */}
          <div className="lg:col-span-5 sticky top-28 bg-gradient-to-br from-[#0b1324] via-[#111a2e] to-[#0b1324] text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-white/10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff4d00]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div className="border-b border-white/10 pb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-[#ff4d00] uppercase tracking-wider">
                    Live Telemetry &amp; Impact
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                  Built on Trust &amp; Performance
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#ff4d00] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-300 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-gray-300">
                <span className="w-2 h-2 rounded-full bg-[#ff4d00]" />
                <span>Enterprise SLA • Continuous Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


