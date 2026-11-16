export default function CoreExpertise() {
  const capabilities = [
    {
      number: "01",
      title: "Enterprise Web Applications",
      description:
        "High-performance, fault-tolerant platforms engineered with modern TypeScript, Next.js, React, and modular full-stack microservices.",
      tags: ["Next.js", "React", "TypeScript", "Node.js", "GraphQL"],
    },
    {
      number: "02",
      title: "Mobile App Engineering",
      description:
        "Native and cross-platform mobile solutions with fluid 60fps animations, robust offline capabilities, and seamless hardware integration.",
      tags: ["iOS", "Android", "React Native", "Swift", "Kotlin"],
    },
    {
      number: "03",
      title: "Cloud & DevOps Architecture",
      description:
        "Automated CI/CD pipelines, containerized orchestration, infrastructure-as-code, and cloud scalability designed for 99.99% uptime.",
      tags: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    },
    {
      number: "04",
      title: "UI/UX & Design Systems",
      description:
        "Human-centric interaction design, comprehensive design tokens, accessible components, and conversion-focused customer journeys.",
      tags: ["Figma", "Design Tokens", "WCAG 2.1", "Prototyping"],
    },
    {
      number: "05",
      title: "API & Data Infrastructure",
      description:
        "High-throughput transactional APIs, message streaming pipelines, and secure database clustering built for scale.",
      tags: ["PostgreSQL", "Redis", "Kafka", "REST", "gRPC"],
    },
    {
      number: "06",
      title: "AI Integration & Automation",
      description:
        "Pragmatic AI features, bespoke autonomous workflows, vector embeddings, and intelligent assistant interfaces that add real value.",
      tags: ["LLMs", "Vector DBs", "RAG", "Automation", "Python"],
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 border-b border-gray-100">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#fff1ec] border border-[#ff4d00]/20 text-[#ff4d00] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
              <span className="tracking-widest uppercase text-[11px] font-bold">
                TECHNICAL CAPABILITIES
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0b1324]">
              Our Core <span className="text-[#ff4d00]">Expertise</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 max-w-md leading-relaxed">
            From modern frontend craft to resilient cloud backends, we master
            the entire technology spectrum to bring complex digital visions to life.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((cap) => (
            <div
              key={cap.number}
              className="bg-white border border-gray-200/80 hover:border-[#ff4d00]/50 rounded-3xl p-7 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-[#ff4d00] tracking-widest bg-[#fff1ec] px-3 py-1 rounded-full">
                    {cap.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-[#ff4d00] transition-colors" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0b1324] group-hover:text-[#ff4d00] transition-colors mb-3">
                  {cap.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              {/* Stacks Chips */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

