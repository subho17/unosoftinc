"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MissionVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const animFrameRef = useRef<number | null>(null);
  const currentProgressRef = useRef(0);
  const targetProgressRef = useRef(0);

  useEffect(() => {
    let isMounted = true;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

    const updateScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const maxScroll = containerRef.current.offsetHeight - window.innerHeight;
      if (maxScroll <= 0) {
        targetProgressRef.current = 1;
        return;
      }
      // Scrolled distance from top of container entering the top of viewport
      const scrolled = -rect.top;
      const rawProgress = Math.min(1, Math.max(0, scrolled / maxScroll));

      // Ease out: reach complete zero gap at 85% of scroll distance,
      // and keep them unified for the final 15% so user can inspect the joined result
      const normalized = Math.min(1, rawProgress / 0.85);
      targetProgressRef.current = normalized;
    };

    const loop = () => {
      if (!isMounted) return;
      // Smooth lerp for buttery, cinematic motion
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.001) {
        currentProgressRef.current += diff * 0.08;
        setProgress(currentProgressRef.current);
      } else if (currentProgressRef.current !== targetProgressRef.current) {
        currentProgressRef.current = targetProgressRef.current;
        setProgress(targetProgressRef.current);
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };

    updateScroll();
    animFrameRef.current = requestAnimationFrame(loop);

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", () => {
      checkMobile();
      updateScroll();
    });

    return () => {
      isMounted = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  const isClosed = progress >= 0.98;
  const progressPercent = Math.round(progress * 100);

  // Desktop horizontal offsets (each moves ~70px, total initial gap = 140px)
  const desktopLeftOffset = -(1 - progress) * 70;
  const desktopRightOffset = (1 - progress) * 70;

  // Mobile vertical offsets
  const mobileTopOffset = -(1 - progress) * 32;
  const mobileBottomOffset = (1 - progress) * 32;

  const values = [
    {
      title: "Engineering Rigor",
      description:
        "We build clean, test-driven, maintainable architectures that stand the test of time and scale effortlessly.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          className="w-6 h-6 text-[#ff4d00]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "User-First Obsession",
      description:
        "Every line of code and pixel we craft is designed to delight actual human users and drive real business outcomes.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          className="w-6 h-6 text-[#ff4d00]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Transparent Collaboration",
      description:
        "No black boxes. We communicate candidly, share progress openly, and act as an embedded extension of your team.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          className="w-6 h-6 text-[#ff4d00]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      title: "Sustainable Velocity",
      description:
        "Speed without technical debt. We deliver rapid milestones without compromising security, quality, or scalability.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          className="w-6 h-6 text-[#ff4d00]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#fbfbfe] border-b border-gray-100">
      {/* Extended Pinned Stage: Gives plenty of scroll travel so cards glide together slowly and noticeably */}
      <div
        ref={containerRef}
        className="relative w-full h-[190vh] sm:h-[210vh]"
      >
        <div className="sticky top-0 w-full h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 overflow-hidden">
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
            {/* Header Badge & Title */}
            <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 bg-[#fff1ec] border border-[#ff4d00]/20 text-[#ff4d00] text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
                <span className="tracking-widest uppercase text-[11px] font-bold">
                  OUR COMPASS
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0b1324]">
                Mission &amp;{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff4d00] via-[#ff7a3d] to-[#ff4d00]">
                  Vision
                </span>
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-gray-500 max-w-lg">
                Scroll slowly to watch our Vision and Mission cards converge into
                a single unified standard.
              </p>

              {/* Real-time convergence status pill + micro progress bar */}
              <div className="mt-3.5 flex flex-col items-center gap-1.5">
                <div className="inline-flex items-center gap-2 text-[11px] font-medium text-gray-600 bg-white border border-gray-200/90 px-3.5 py-1 rounded-full shadow-2xs">
                  <span
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      isClosed ? "bg-emerald-500 animate-pulse" : "bg-[#ff4d00]"
                    }`}
                  />
                  <span>
                    {isClosed
                      ? "Cards Converged (Zero Gap)"
                      : `Converging • ${progressPercent}%`}
                  </span>
                </div>
                <div className="w-32 h-1 bg-gray-200/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#ff4d00] rounded-full transition-all duration-75"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Dynamic Converging Twin Cards */}
            <div className="w-full">
              <div className="flex flex-col md:flex-row items-stretch justify-center w-full">
                {/* Left Card: Our Vision */}
                <div
                  className={`w-full md:w-1/2 bg-white border border-gray-200/90 shadow-lg overflow-hidden flex flex-col justify-between transition-[border-radius,box-shadow,border-color] duration-500 ${
                    isClosed
                      ? "rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl border-b-0 md:border-b md:border-r border-gray-200"
                      : "rounded-3xl mb-4 md:mb-0"
                  }`}
                  style={{
                    transform: isMobile
                      ? `translate3d(0, ${mobileTopOffset}px, 0)`
                      : `translate3d(${desktopLeftOffset}px, 0, 0)`,
                    willChange: "transform",
                  }}
                >
                  {/* Photo Banner */}
                  <div className="relative h-44 sm:h-48 md:h-52 w-full bg-gray-900 overflow-hidden">
                    <Image
                      src="/about-hero.jpg"
                      alt="Our Vision - Digital Leadership and Innovation"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center grayscale contrast-115 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                  </div>

                  {/* Text Content */}
                  <div className="p-6 sm:p-7 md:p-8 flex-1 flex flex-col justify-start bg-white">
                    {/* Orange triangle corner accent */}
                    <div
                      className="w-0 h-0 border-t-[30px] border-t-[#ff4d00] border-r-[30px] border-r-transparent mb-4"
                      aria-hidden="true"
                    />

                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0b1324] tracking-tight mb-2.5">
                      Our Vision
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Our vision is to make high-impact digital technologies
                      accessible to every forward-thinking enterprise by providing
                      unmatched reliability, human-centric design, and enduring
                      scalability—delivering long-term competitive advantage at every
                      touchpoint.
                    </p>
                  </div>
                </div>

                {/* Right Card: Our Mission */}
                <div
                  className={`w-full md:w-1/2 bg-white border border-gray-200/90 shadow-lg overflow-hidden flex flex-col justify-between transition-[border-radius,box-shadow,border-color] duration-500 ${
                    isClosed
                      ? "rounded-b-3xl md:rounded-bl-none md:rounded-r-3xl border-t-0 md:border-t md:border-l-0 border-gray-200"
                      : "rounded-3xl"
                  }`}
                  style={{
                    transform: isMobile
                      ? `translate3d(0, ${mobileBottomOffset}px, 0)`
                      : `translate3d(${desktopRightOffset}px, 0, 0)`,
                    willChange: "transform",
                  }}
                >
                  {/* Photo Banner */}
                  <div className="relative h-44 sm:h-48 md:h-52 w-full bg-gray-900 overflow-hidden">
                    <Image
                      src="/about-intro-main.jpg"
                      alt="Our Mission - Engineering Excellence & Craft"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center contrast-105 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                  </div>

                  {/* Text Content */}
                  <div className="p-6 sm:p-7 md:p-8 flex-1 flex flex-col justify-start bg-white">
                    {/* Orange triangle corner accent */}
                    <div
                      className="w-0 h-0 border-t-[30px] border-t-[#ff4d00] border-r-[30px] border-r-transparent mb-4"
                      aria-hidden="true"
                    />

                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0b1324] tracking-tight mb-2.5">
                      Our Mission
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      At UnoSoft, we are dedicated to engineering top-tier digital
                      products and custom architectures that cater to diverse
                      enterprise needs, providing robustly tested, sustainably
                      architected software that reflects modern craftsmanship, and
                      ensuring exceptional client partnership across every phase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values 4-Grid: Cleanly follows right after the pinned stage */}
      <div className="w-full max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-8 md:px-12">
        <div className="text-center mb-10">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0b1324]">
            Values That Define Our Culture
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
            The foundational principles that guide every architectural decision,
            interaction, and product release.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[#fff1ec] flex items-center justify-center mb-4">
                {v.icon}
              </div>
              <h4 className="text-base font-bold text-[#0b1324] mb-2">
                {v.title}
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
