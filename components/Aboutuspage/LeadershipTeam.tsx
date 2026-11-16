import Link from "next/link";

interface Leader {
  name: string;
  role: string;
  bio: string;
  specialty: string;
  imageBg: string;
  initials: string;
}

export default function LeadershipTeam() {
  const leaders: Leader[] = [
    {
      name: "Alex Morgan",
      role: "Founder & Chief Architect",
      bio: "Former enterprise systems lead with 14+ years designing high-throughput distributed applications and advising Fortune 500 tech transitions.",
      specialty: "Cloud Architecture • Distributed Systems",
      imageBg: "from-amber-600 to-orange-500",
      initials: "AM",
    },
    {
      name: "Elena Rostova",
      role: "VP of Product & Design",
      bio: "Award-winning design director who previously led UX transformations across top Silicon Valley fintech and SaaS unicorns.",
      specialty: "Design Systems • Enterprise UX",
      imageBg: "from-blue-600 to-indigo-500",
      initials: "ER",
    },
    {
      name: "Marcus Chen",
      role: "Head of Engineering",
      bio: "Open-source contributor and performance engineer obsessed with zero-downtime microservices and sub-100ms API response times.",
      specialty: "Next.js • Golang • Kubernetes",
      imageBg: "from-emerald-600 to-teal-500",
      initials: "MC",
    },
    {
      name: "Priya Patel",
      role: "Lead AI & Data Engineer",
      bio: "Applied ML specialist focused on enterprise LLM integrations, autonomous agent architectures, and secure data pipelines.",
      specialty: "Applied AI • Vector Databases • RAG",
      imageBg: "from-purple-600 to-pink-500",
      initials: "PP",
    },
  ];

  return (
    <section className="w-full bg-[#fbfbfe] py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 border-b border-gray-100">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#fff1ec] border border-[#ff4d00]/20 text-[#ff4d00] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
              <span className="tracking-widest uppercase text-[11px] font-bold">
                HUMAN LEADERSHIP
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0b1324]">
              Leadership &amp; <span className="text-[#ff4d00]">Makers</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 max-w-md leading-relaxed">
            Led by passionate technologists, designers, and systems architects
            who still write code, review PRs, and obsess over every detail.
          </p>
        </div>

        {/* 4 Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#ff4d00]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Avatar with dynamic gradient */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${leader.imageBg} text-white font-extrabold text-2xl flex items-center justify-center shadow-md mb-6 group-hover:scale-105 transition-transform`}
                >
                  {leader.initials}
                </div>

                <h3 className="text-lg font-bold text-[#0b1324] group-hover:text-[#ff4d00] transition-colors">
                  {leader.name}
                </h3>
                <p className="text-xs font-semibold text-[#ff4d00] mt-0.5 mb-3">
                  {leader.role}
                </p>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {leader.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Focus:
                </span>
                <span className="text-xs font-medium text-[#0b1324]">
                  {leader.specialty}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Join our team bar */}
        <div className="mt-12 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-[#0b1324]">
              Want to build the future with us?
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              We are constantly scouting for top 1% engineering and product design talent.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#ff4d00] hover:bg-[#e04300] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-colors shrink-0"
          >
            <span>View Open Roles</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
