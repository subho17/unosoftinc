"use client";

import { FormEvent, useState } from "react";

const highlights = [
  "1-3 Hours Response",
  "100% Working Solution",
  "Trusted Product Designer",
];

const ribbonTopics = [
  "Design",
  "App Design",
  "Dashboard",
  "Wireframe",
  "User Research",
];

export default function Discuss() {
  const [idea, setIdea] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!idea.trim()) return;
    setSubmitted(true);
    setIdea("");
  };

  return (
    <section className="relative z-30 w-full bg-white py-10 md:py-14 overflow-hidden">
      {/* Main Content */}
      <div className="w-full max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b1324] leading-[1.2] tracking-tight">
          Have An Awesome Project
          <br />
          Idea?{" "}
          <span className="relative inline-block text-[#ff4d00]">
            Let&apos;s Discuss
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 240 14"
              fill="none"
              className="absolute -bottom-2 left-0 w-full h-3 text-[#ff4d00]"
              aria-hidden="true"
            >
              <path
                d="M3 9C65 3.5 160 2 237 5.5"
                stroke="currentColor"
                strokeWidth={3.5}
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        {/* Idea Input Bar */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-2xl mx-auto bg-white border border-gray-200 rounded-full p-1.5 sm:p-2 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center gap-2 sm:gap-3"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#ff4d00]/15 text-[#ff4d00] flex items-center justify-center shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 3h16a2 2 0 012 2v11a2 2 0 01-2 2H8l-4 4V5a2 2 0 012-2zm3 5v2h10V8H7zm0 4v2h7v-2H7z" />
            </svg>
          </div>

          <input
            type="text"
            value={idea}
            onChange={(e) => {
              setIdea(e.target.value);
              if (submitted) setSubmitted(false);
            }}
            placeholder="Enter Your Idea..."
            aria-label="Enter Your Idea"
            className="flex-1 min-w-0 bg-transparent text-sm sm:text-base text-[#0b1324] placeholder:text-gray-400 focus:outline-none px-1"
          />

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-[#ff4d00] hover:bg-[#e04300] text-white text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors shrink-0 cursor-pointer"
          >
            <span>Send</span>
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
                d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
              />
            </svg>
          </button>
        </form>

        {submitted && (
          <p className="mt-3 text-xs sm:text-sm font-medium text-[#ff4d00]">
            Thanks! Your project idea has been received — we&apos;ll reply in
            1–3 hours.
          </p>
        )}

        {/* Trust Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-[#0b1324] font-medium">
          {highlights.map((item, idx) => (
            <div key={item} className="flex items-center gap-2">
              {idx > 0 && (
                <span className="hidden sm:inline text-gray-300 mr-3">|</span>
              )}
              <span className="w-5 h-5 rounded-full bg-[#ff4d00]/15 text-[#ff4d00] flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Crossed Diagonal Ribbons */}
      <div className="relative mt-14 sm:mt-16 h-24 sm:h-28 w-full max-w-6xl mx-auto px-4 flex items-center justify-center">
        {/* Orange back ribbon */}
        <div
          aria-hidden="true"
          className="absolute inset-x-4 sm:inset-x-6 h-14 sm:h-16 bg-gradient-to-r from-[#ff6a00] to-[#ff4d00] rounded-2xl rotate-[2deg] shadow-md"
        />

        {/* White front ribbon */}
        <div className="relative z-10 w-full bg-white rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] -rotate-[2deg] px-6 py-3.5 sm:py-4 overflow-x-auto">
          <div className="flex items-center justify-between sm:justify-center gap-4 sm:gap-7 whitespace-nowrap min-w-max mx-auto">
            {ribbonTopics.map((topic, idx) => (
              <div key={topic} className="flex items-center gap-4 sm:gap-7">
                {idx > 0 && (
                  <span className="text-[#ff4d00] text-xl sm:text-2xl font-medium leading-none">
                    +
                  </span>
                )}
                <span className="text-base sm:text-xl md:text-2xl font-medium text-[#0b1324] tracking-tight">
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

