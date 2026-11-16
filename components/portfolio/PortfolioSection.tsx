"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "ApexPay Global FinTech Infrastructure",
    category: "Web Application • FinTech",
    client: "Apex Financial UK",
    year: "2024",
    description:
      "Enterprise payment orchestration platform processing $40M+ monthly across 18 currencies with 99.999% uptime.",
    image: "/blog-3.jpg",
    tags: ["Next.js", "TypeScript", "Go", "AWS", "PostgreSQL"],
  },
  {
    id: "project-2",
    title: "Verve Health Telemedicine Ecosystem",
    category: "Mobile App • Healthcare",
    client: "Verve Health US",
    year: "2024",
    description:
      "Cross-platform HIPAA-compliant mobile application with encrypted video consultations and wearable device syncing.",
    image: "/blog-2.jpg",
    tags: ["React Native", "WebRTC", "Node.js", "GraphQL", "Tailwind"],
  },
  {
    id: "project-3",
    title: "OmniAI Enterprise Copilot Suite",
    category: "AI Platform • Enterprise",
    client: "OmniTech Solutions",
    year: "2023",
    description:
      "Autonomous workflow orchestrator powered by vector search and custom LLM agents, cutting report generation by 80%.",
    image: "/blog-4.jpg",
    tags: ["Python", "LangChain", "Vector DB", "FastAPI", "React"],
  },
  {
    id: "project-4",
    title: "Lumina Studio Design System",
    category: "Design System • Branding",
    client: "Lumina Creative",
    year: "2023",
    description:
      "Multi-brand atomic design system with 200+ accessible components, automated token synchronization, and Figma integration.",
    image: "/blog-5.jpg",
    tags: ["Design Tokens", "Figma", "Storybook", "WCAG AAA"],
  },
];

export default function PortfolioSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web Application", "Mobile App", "AI Platform", "Design System"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -460, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 460, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#111] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-[#ff4d00] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00] animate-pulse" />
              <span className="text-white tracking-widest uppercase text-[11px] font-bold">
                FEATURED WORK
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Selected <span className="text-[#ff4d00]">Portfolio</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Scroll left"
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[#ff4d00] bg-white/5 hover:bg-[#ff4d00] text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
            >
              ←
            </button>
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Scroll right"
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[#ff4d00] bg-white/5 hover:bg-[#ff4d00] text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
            >
              →
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all cursor-pointer ${
                activeFilter === cat
                  ? "bg-[#ff4d00] text-white shadow-md"
                  : "bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Scrolling Track with Image Transitions */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-none py-4 snap-x snap-mandatory"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-[320px] sm:w-[420px] md:w-[480px] lg:w-[520px] shrink-0 snap-start group"
            >
              {/* Image Container with Zoom & Transition */}
              <div className="relative h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden bg-gray-900 border border-white/10 shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 320px, 520px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:via-black/40 transition-colors" />

                {/* Top Badge */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[#ff4d00]">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-white/80 bg-black/40 px-2.5 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>

                {/* Bottom Card Info Overlay */}
                <div className="absolute bottom-5 left-5 right-5 z-10 space-y-2">
                  <span className="text-[11px] text-gray-400 font-medium block">
                    Client: {project.client}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug group-hover:text-[#ff4d00] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Tags & Description */}
              <div className="mt-4 space-y-3 px-1">
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium bg-white/5 border border-white/10 text-gray-300 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

