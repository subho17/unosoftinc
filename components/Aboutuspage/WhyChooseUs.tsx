export default function WhyChooseUs() {
  const differentiators = [
    {
      title: "Senior-Only Squads",
      subtitle: "No junior delegation",
      description:
        "Your project is planned, designed, and coded exclusively by seasoned veterans with 7+ years of hands-on production experience.",
      icon: "⚡",
    },
    {
      title: "Direct Founder & Architect Access",
      subtitle: "Zero communication friction",
      description:
        "Speak directly with the engineers and leads building your system in shared Slack/Teams channels. No bureaucratic account managers in between.",
      icon: "🤝",
    },
    {
      title: "Obsession with Code Quality",
      subtitle: "Zero debt engineering",
      description:
        "Strict code reviews, type safety, 90%+ automated test coverage, and documentation that empowers your internal team to take over easily.",
      icon: "🛡️",
    },
    {
      title: "Predictable, Agile Delivery",
      subtitle: "No surprise delays",
      description:
        "Two-week sprint cadences with demonstrable staging builds at every step. You see working software early and often.",
      icon: "⏱️",
    },
    {
      title: "Transparent Fixed or Retainer Models",
      subtitle: "No hidden fees",
      description:
        "Clear scoping, transparent hourly rates, or fixed milestones. We align our success with your budgetary certainty.",
      icon: "📊",
    },
    {
      title: "Post-Launch Growth & Support",
      subtitle: "Long-term partnership",
      description:
        "We don’t abandon you upon launch. We monitor performance, optimize metrics, and help you scale as user adoption explodes.",
      icon: "🚀",
    },
  ];

  return (
    <section className="w-full bg-[#fbfbfe] py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 border-b border-gray-100">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#fff1ec] border border-[#ff4d00]/20 text-[#ff4d00] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
            <span className="tracking-widest uppercase text-[11px] font-bold">
              THE UNOSOFT ADVANTAGE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0b1324]">
            Why Forward-Thinking Brands <span className="text-[#ff4d00]">Choose Us</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed">
            We are not a bloated legacy agency or an uncoordinated freelance marketplace.
            We are a lean, elite engineering strike team built for velocity.
          </p>
        </div>

        {/* 6 Difference Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentiators.map((diff) => (
            <div
              key={diff.title}
              className="bg-white border border-gray-100 rounded-3xl p-7 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-[#ff4d00]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#fff1ec] text-2xl flex items-center justify-center mb-5">
                  {diff.icon}
                </div>
                <span className="text-[11px] font-bold text-[#ff4d00] uppercase tracking-wider">
                  {diff.subtitle}
                </span>
                <h3 className="text-lg font-bold text-[#0b1324] mt-1 mb-3">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#0b1324]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
                <span>Enterprise Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

