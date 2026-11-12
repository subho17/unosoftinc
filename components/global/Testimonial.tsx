"use client";

import { useEffect, useRef } from "react";

interface TestimonialItem {
  rating: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
}

const testimonials: TestimonialItem[] = [
  {
    rating: "5.0",
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas",
    name: "Marcus Vance",
    role: "Founder, Horizon Labs",
    initials: "MV",
    avatarBg: "bg-sky-600",
  },
  {
    rating: "5.0",
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas",
    name: "Nicky Arthur",
    role: "CEO, FinxCore Inc",
    initials: "NA",
    avatarBg: "bg-amber-600",
  },
  {
    rating: "5.0",
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas",
    name: "Joshua Arthur",
    role: "CTO, UI Design",
    initials: "JA",
    avatarBg: "bg-emerald-600",
  },
  {
    rating: "5.0",
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas",
    name: "Elena Rostova",
    role: "VP Product, NovaTech",
    initials: "ER",
    avatarBg: "bg-indigo-600",
  },
];

function wrapOffset(value: number, width: number) {
  if (width <= 0) return 0;
  return ((value % width) - width) % width;
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="w-[320px] sm:w-[440px] lg:w-[540px] shrink-0 bg-[#2e2e2e] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[250px]">
      <div>
        {/* Rating */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1 text-[#ff4d00]">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-white text-sm font-semibold">{item.rating}</span>
        </div>

        {/* Quote text */}
        <p className="mt-4 text-gray-300 text-xs sm:text-sm leading-relaxed">
          {item.quote}
        </p>
      </div>

      {/* Footer: Author + Quote icon */}
      <div className="mt-6 flex items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full ${item.avatarBg} text-white text-xs font-bold flex items-center justify-center border border-white/20 shrink-0`}
          >
            {item.initials}
          </div>
          <div>
            <div className="text-white text-sm font-semibold leading-tight">
              {item.name}
            </div>
            <div className="text-gray-400 text-xs mt-0.5">{item.role}</div>
          </div>
        </div>

        {/* Subtle decorative double quote mark */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 36"
          fill="currentColor"
          className="w-11 h-9 text-white/10 shrink-0"
          aria-hidden="true"
        >
          <path d="M18 0H4C1.8 0 0 1.8 0 4v14c0 2.2 1.8 4 4 4h7.5c-.6 4.8-3.7 8.4-8.5 9.8V36c9.2-1.4 15-8.4 15-18V4c0-2.2-1.8-4-4-4zm26 0H30c-2.2 0-4 1.8-4 4v14c0 2.2 1.8 4 4 4h7.5c-.6 4.8-3.7 8.4-8.5 9.8V36c9.2-1.4 15-8.4 15-18V4c0-2.2-1.8-4-4-4z" />
        </svg>
      </div>
    </div>
  );
}

export default function Testimonial() {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const setWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    const firstSet = firstSetRef.current;
    if (!track || !firstSet) return;

    setWidthRef.current = firstSet.getBoundingClientRect().width;
    let lastTime = performance.now();
    let rafId = 0;
    const speed = 65; // px per second (right to left)

    const observer = new ResizeObserver(() => {
      setWidthRef.current = firstSet.getBoundingClientRect().width;
    });
    observer.observe(firstSet);

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const setWidth = setWidthRef.current;
      if (setWidth > 0) {
        xRef.current = wrapOffset(xRef.current - speed * dt, setWidth);
        track.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  const nudgeTrack = (delta: number) => {
    const setWidth = setWidthRef.current;
    const track = trackRef.current;
    if (!track || setWidth <= 0) return;

    xRef.current = wrapOffset(xRef.current + delta, setWidth);
    track.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
  };

  return (
    <section className="relative z-30 w-full min-h-screen bg-[#1c1c1c] rounded-t-3xl py-16 md:py-24 overflow-hidden shadow-[0_-24px_60px_rgba(0,0,0,0.28)] flex flex-col justify-center">
      {/* Header */}
      <div className="relative max-w-2xl mx-auto px-6 text-center">
        {/* Top-right burst doodle */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44 40"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          className="hidden sm:block absolute -top-5 right-14 w-9 h-9 text-white"
          aria-hidden="true"
        >
          <path d="M10 14L6 4" />
          <path d="M20 18L26 6" />
          <path d="M24 27L38 23" />
        </svg>

        {/* Bottom-left sparkle doodle */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          className="hidden sm:block absolute -bottom-1 left-2 w-7 h-7 text-white/80"
          aria-hidden="true"
        >
          <path d="M16 2C16 11 19 14 28 16C19 18 16 21 16 30C16 21 13 18 4 16C13 14 16 11 16 2Z" />
        </svg>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
          Testimonials that
          <br />
          Speak to <span className="text-[#ff4d00]">My Results</span>
        </h2>

        <p className="mt-4 text-xs sm:text-sm text-gray-300 leading-relaxed max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>
      </div>

      {/* Auto-scrolling cards (right to left) */}
      <div className="mt-12 w-full overflow-hidden">
        <div ref={trackRef} className="flex w-max will-change-transform">
          <div ref={firstSetRef} className="flex shrink-0 gap-6 pr-6">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
          <div className="flex shrink-0 gap-6 pr-6" aria-hidden="true">
            {testimonials.map((item) => (
              <TestimonialCard key={`${item.name}-dup`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Arrows */}
      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => nudgeTrack(400)}
          aria-label="Previous testimonial"
          className="w-11 h-11 rounded-full bg-[#3a3a3a] hover:bg-[#4a4a4a] text-white flex items-center justify-center transition-colors cursor-pointer"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => nudgeTrack(-400)}
          aria-label="Next testimonial"
          className="w-11 h-11 rounded-full bg-[#ff4d00] hover:bg-[#e04300] text-white flex items-center justify-center transition-colors cursor-pointer"
        >
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
