"use client";

import Link from "next/link";
import { useState } from "react";

interface FaqItem {
  number: number;
  question: string;
  answers: string[];
}

const faqs: FaqItem[] = [
  {
    number: 1,
    question: "What industries do you work with?",
    answers: [
      "We partner with startups, SaaS companies, e-commerce brands, healthcare providers, fintech teams, and service businesses looking to modernize operations.",
    ],
  },
  {
    number: 2,
    question: "How long does implementation take?",
    answers: [
      "Project timelines typically range from 2 to 6 weeks, depending on complexity.",
      "Smaller automation systems — such as AI chatbots with CRM integration — can often be deployed within 2–3 weeks.",
      "More advanced projects involving multi-platform integrations, custom AI logic, internal workflow automation, and reporting dashboards may take 4–6 weeks or longer.",
    ],
  },
  {
    number: 3,
    question: "Do we need technical knowledge to work with you?",
    answers: [
      "Not at all. We handle architecture, implementation, testing, and onboarding end to end, and provide clear documentation for your team.",
    ],
  },
  {
    number: 4,
    question: "Is AI automation secure?",
    answers: [
      "Yes. We follow strict access controls, encrypted data pipelines, and enterprise-grade API practices so your proprietary data remains protected.",
    ],
  },
  {
    number: 5,
    question: "What kind of ROI can we expect?",
    answers: [
      "Most clients see measurable time savings and faster response cycles within the first 30 days through reduced manual overhead and higher conversion rates.",
    ],
  },
];

export default function Faqsection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative z-40 w-full min-h-screen bg-[#141414] rounded-t-3xl py-16 md:py-24 px-6 md:px-14 shadow-[0_-24px_60px_rgba(0,0,0,0.28)] flex flex-col justify-center">
      <div className="max-w-3xl mx-auto">
        {/* Top pill + Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#262626] border border-white/15 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-wider text-gray-300 uppercase">
            <span>010</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0083d1]" />
            <span>FAQS</span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Common <span className="text-[#0083d1]">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.number}
                className={`rounded-2xl transition-all duration-200 ${
                  isOpen
                    ? "bg-[#262626] border border-[#0083d1]/80 shadow-[0_0_30px_rgba(0,131,209,0.12)]"
                    : "bg-[#262626] border border-white/15 hover:border-white/25"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span
                      className={`w-7 h-7 rounded-full text-xs font-semibold flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#0083d1] text-white"
                          : "bg-[#141414] border border-white/15 text-gray-300"
                      }`}
                    >
                      {faq.number}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-white">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#0083d1] text-white"
                        : "bg-[#141414] border border-white/15 text-white"
                    }`}
                  >
                    {isOpen ? (
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
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
                          d="M12 5v14m-7-7h14"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-16 sm:pl-[66px] space-y-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {faq.answers.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Prompt */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            Have any other questions?
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#0083d1] transition-colors"
          >
            <span className="underline underline-offset-4">Contact Us</span>
            <span className="w-5 h-5 rounded-full bg-[#0083d1] text-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-6-6l6 6-6 6"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

