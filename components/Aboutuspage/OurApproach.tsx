export default function OurApproach() {
  const steps = [
    {
      step: "01",
      phase: "Phase 1: Discovery & Architecture",
      title: "Strategic Blueprint",
      duration: "Weeks 1–2",
      description:
        "We immerse ourselves in your business goals, target audience, and existing systems. We establish tech-stack specifications, database schemas, and UX user flows.",
      deliverables: ["Product Requirements Document", "Architecture Diagram", "Tech Stack Strategy"],
    },
    {
      step: "02",
      phase: "Phase 2: UI/UX & Design Tokens",
      title: "Interactive Prototyping",
      duration: "Weeks 2–4",
      description:
        "We craft high-fidelity Figma prototypes and design token libraries. You experience the look, feel, and interactions of your product before a single line of backend code is committed.",
      deliverables: ["Interactive Prototypes", "Design Token Library", "Component Spec Sheet"],
    },
    {
      step: "03",
      phase: "Phase 3: Agile Engineering",
      title: "Sprint-Based Build",
      duration: "Weeks 4–10",
      description:
        "Our engineers build in rapid 2-week sprints with continuous integration. Every sprint ends with a live demonstration and staging deployment you can test immediately.",
      deliverables: ["Bi-Weekly Staging Releases", "Automated Test Suites", "Clean, Documented Code"],
    },
    {
      step: "04",
      phase: "Phase 4: Launch & Scaling",
      title: "Hardening & Rollout",
      duration: "Weeks 10+",
      description:
        "We conduct rigorous penetration tests, load stress testing, and accessibility checks. We execute zero-downtime deployment and transition into 24/7 telemetry monitoring.",
      deliverables: ["Security & Performance Audit", "Zero-Downtime Deployment", "Post-Launch SLA"],
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 border-b border-gray-100">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Sticky Process Overview & Animated Timeline Tracker */}
          <div className="lg:col-span-5 sticky top-28 bg-[#fbfbfe] border border-gray-200/80 rounded-3xl p-8 sm:p-9 shadow-sm">
            <div className="inline-flex items-center gap-2 bg-[#fff1ec] border border-[#ff4d00]/20 text-[#ff4d00] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00] animate-pulse" />
              <span className="tracking-widest uppercase text-[11px] font-bold">
                STICKY PROCESS &amp; TIMELINE
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0b1324] leading-tight">
              Our Battle-Tested <span className="text-[#ff4d00]">Approach</span>
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
              A transparent, milestone-driven framework that eliminates ambiguity,
              mitigates risk, and turns complex engineering into predictable outcomes.
            </p>

            {/* Quick Process Indicator Checklist */}
            <div className="mt-8 space-y-3.5 pt-6 border-t border-gray-200/70">
              {steps.map((item) => (
                <div key={item.step} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#ff4d00] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    {item.step}
                  </span>
                  <span className="text-xs font-semibold text-[#0b1324]">
                    {item.title}
                  </span>
                  <span className="text-[10px] font-medium text-gray-400 ml-auto">
                    {item.duration}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-white border border-gray-200/80 text-xs text-gray-600 leading-relaxed shadow-xs">
              <span className="text-[#ff4d00] font-bold">100% Transparency:</span> Staging links, code commits, and PR reviews are updated live inside your dedicated client workspace.
            </div>
          </div>

          {/* Right Column: Animated Step Cards Timeline */}
          <div className="lg:col-span-7 space-y-6 relative before:absolute before:inset-0 before:left-7 before:w-0.5 before:bg-gradient-to-b before:from-[#ff4d00] via-[#ff4d00]/40 before:to-gray-200 pl-2">
            {steps.map((item) => (
              <div
                key={item.step}
                className="relative pl-10 group"
              >
                {/* Glowing Timeline Marker */}
                <span className="absolute left-0 top-6 w-9 h-9 -ml-4.5 rounded-full bg-white border-2 border-[#ff4d00] text-[#ff4d00] font-bold text-xs flex items-center justify-center shadow-md group-hover:bg-[#ff4d00] group-hover:text-white transition-all group-hover:scale-110">
                  {item.step}
                </span>

                <div className="bg-white border border-gray-200/90 rounded-3xl p-7 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#ff4d00]/50 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-[#ff4d00] uppercase tracking-wider">
                      {item.phase}
                    </span>
                    <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0b1324] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Deliverables pill list */}
                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    <span className="text-[11px] font-bold text-[#0b1324] uppercase tracking-wider block">
                      Key Deliverables:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.deliverables.map((deliv) => (
                        <span
                          key={deliv}
                          className="text-[11px] bg-[#fff1ec] text-[#0b1324] px-2.5 py-1 rounded-md border border-[#ff4d00]/15"
                        >
                          ✓ {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


