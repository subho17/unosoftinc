"use client";

import Link from "next/link";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  skin: string;
  hair: string;
  shirt: string;
  bgGradient: string;
  hasGlasses?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Olivia Martinez",
    role: "Payments Support",
    skin: "#e8beac",
    hair: "#2a211c",
    shirt: "#334155",
    bgGradient: "from-slate-200 via-gray-100 to-slate-300",
    hasGlasses: true,
  },
  {
    name: "Richard Mills",
    role: "Payments Support",
    skin: "#7a4b36",
    hair: "#1a1716",
    shirt: "#1e293b",
    bgGradient: "from-zinc-200 via-stone-100 to-zinc-300",
  },
  {
    name: "Layla Evans",
    role: "Head of CX",
    skin: "#e4b299",
    hair: "#2c1e16",
    shirt: "#f59e0b",
    bgGradient: "from-amber-100 via-orange-100 to-purple-200",
  },
  {
    name: "Viola Bassett",
    role: "Specialized Support",
    skin: "#6b422f",
    hair: "#171412",
    shirt: "#111827",
    bgGradient: "from-neutral-200 via-gray-100 to-neutral-300",
  },
  {
    name: "Erik Anders",
    role: "VP of Customer Success",
    skin: "#ecc5b0",
    hair: "#4a3728",
    shirt: "#f8fafc",
    bgGradient: "from-slate-100 via-zinc-100 to-slate-200",
  },
  {
    name: "Natalie Carter",
    role: "Customer Success",
    skin: "#e5b8a4",
    hair: "#5c4033",
    shirt: "#475569",
    bgGradient: "from-gray-100 via-slate-100 to-gray-200",
    hasGlasses: true,
  },
];

const partnerLogos = [
  "PLAID",
  "RIPPLING",
  "Notion",
  "descript",
  "LaunchDarkly",
  "Square",
  "Basecamp",
  "TESLA",
];

function MemberAvatar({ member }: { member: TeamMember }) {
  return (
    <svg
      viewBox="0 0 200 260"
      className="w-full h-full object-cover"
      aria-hidden="true"
    >
      {/* Hair back */}
      <ellipse cx="100" cy="95" rx="50" ry="60" fill={member.hair} />
      {/* Shoulders / shirt */}
      <path
        d="M28 260 C32 198, 60 176, 100 176 C140 176, 168 198, 172 260 Z"
        fill={member.shirt}
      />
      {/* Neck */}
      <rect x="86" y="142" width="28" height="42" rx="12" fill={member.skin} />
      {/* Face */}
      <ellipse cx="100" cy="106" rx="36" ry="44" fill={member.skin} />
      {/* Hair top */}
      <path
        d="M62 96 C62 60, 138 60, 138 96 C126 78, 74 78, 62 96 Z"
        fill={member.hair}
      />
      {/* Eyes */}
      <circle cx="85" cy="106" r="3" fill="#1e293b" />
      <circle cx="115" cy="106" r="3" fill="#1e293b" />
      {/* Optional glasses */}
      {member.hasGlasses && (
        <g stroke="#1e293b" strokeWidth="2.5" fill="none">
          <circle cx="85" cy="106" r="10" />
          <circle cx="115" cy="106" r="10" />
          <path d="M95 106 L105 106" />
        </g>
      )}
      {/* Smile */}
      <path
        d="M88 124 Q100 134 112 124"
        stroke="#7c2d12"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function Teamsection() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="sticky top-0 z-40 w-full min-h-screen bg-white py-16 md:py-24 overflow-hidden flex flex-col justify-center">
      {/* Subtle dot grid pattern accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 left-8 w-52 h-52 opacity-30 hidden lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 right-8 w-52 h-52 opacity-30 hidden lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fed7aa 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Header */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Remote & Hiring Pill */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-3.5 py-1 text-xs text-gray-600 shadow-2xs hover:border-[#ff4d00]/50 transition-colors"
        >
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ff4d00]" />
            We&apos;re 100% remote and hiring
          </span>
          <span className="text-gray-300">|</span>
          <span className="font-medium text-[#0b1324]">Careers →</span>
        </Link>

        {/* Heading */}
        <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b1324] tracking-tight">
          Meet <span className="text-[#ff4d00]">our</span> beautiful team
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg mx-auto">
          Our philosophy is simple; hire great people and give them the
          resources and support to do their best work.
        </p>

        {/* Action Buttons */}
        <div className="mt-7 flex items-center justify-center gap-3">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-[#0b1324] text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            <span className="text-[10px]">▶</span>
            <span>View demo</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#111111] hover:bg-[#ff4d00] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Get started
          </Link>
        </div>
      </div>

      {/* Team Cards Strip */}
      <div className="relative z-10 mt-14 w-full px-4 sm:px-8 overflow-x-auto">
        <div className="flex items-end justify-start lg:justify-center gap-4 sm:gap-5 py-6 min-w-max mx-auto">
          {teamMembers.map((member, idx) => {
            const isActive = activeIndex === idx;

            return (
              <button
                key={member.name}
                type="button"
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`group relative w-44 sm:w-52 h-64 sm:h-72 rounded-2xl overflow-hidden text-left transition-all duration-300 cursor-pointer shrink-0 bg-gradient-to-b ${
                  member.bgGradient
                } ${
                  isActive
                    ? "-translate-y-4 scale-[1.04] shadow-[0_24px_48px_rgba(255,77,0,0.18)] ring-1 ring-[#ff4d00]/30 grayscale-0"
                    : "grayscale opacity-90 hover:opacity-100 border border-gray-200/80"
                }`}
              >
                <MemberAvatar member={member} />

                {/* Bottom Glass Nameplate */}
                <div className="absolute inset-x-2.5 bottom-2.5 bg-black/45 backdrop-blur-md border border-white/20 rounded-xl px-3.5 py-2.5 text-white">
                  <div className="text-xs sm:text-sm font-semibold leading-tight">
                    {member.name}
                  </div>
                  <div className="text-[11px] text-white/85 mt-0.5">
                    {member.role}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Partner Logos */}
      <div className="relative z-10 mt-10 max-w-5xl mx-auto w-full px-6 text-center">
        <p className="text-xs text-gray-500 font-medium mb-5">
          You&apos;re in good company
        </p>
        <div className="relative flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-gray-500">
          {partnerLogos.map((logo) => (
            <span
              key={logo}
              className="text-sm sm:text-base font-bold tracking-tight opacity-75 hover:opacity-100 hover:text-[#0b1324] transition-all"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

