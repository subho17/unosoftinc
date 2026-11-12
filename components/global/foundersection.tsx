import Image from "next/image";
import Link from "next/link";

export default function Foundersection() {
  return (
    <section className="relative z-30 w-full bg-[#f5f5f7] rounded-3xl py-12 md:py-16 px-6 md:px-14">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
        {/* Left: Circular portrait with subtle outer ring and black dash accents */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96">
            {/* Soft gray offset ring behind circle */}
            <div
              aria-hidden="true"
              className="absolute -top-4 -left-4 w-full h-full rounded-full bg-[#e6e7ea]"
            />

            {/* Main orange circle + portrait */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#ff4d00]">
              <Image
                src="/founder.jpg"
                alt="Founder portrait"
                fill
                sizes="(max-width: 640px) 288px, (max-width: 768px) 352px, 384px"
                className="object-cover object-top"
              />
            </div>

            {/* Decorative black confetti dashes at top-right */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 110 100"
              fill="none"
              className="absolute -top-2 -right-2 w-24 h-24 text-[#111111] z-20 pointer-events-none"
              aria-hidden="true"
            >
              <g stroke="currentColor" strokeWidth={4} strokeLinecap="round">
                <path d="M36 10L42 18" />
                <path d="M56 16L62 24" />
                <path d="M74 28L82 36" />
                <path d="M22 24L29 33" />
                <path d="M44 30L51 39" />
                <path d="M64 42L72 50" />
                <path d="M84 52L93 60" />
                <path d="M16 42L23 50" />
                <path d="M36 48L44 56" />
                <path d="M56 58L65 66" />
                <path d="M78 68L87 76" />
                <path d="M28 62L36 70" />
                <path d="M48 72L57 80" />
              </g>
            </svg>
          </div>
        </div>

        {/* Right: Content */}
        <div className="max-w-xl mx-auto lg:mx-0">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0b1324] leading-[1.15] tracking-tight">
            Why You <span className="text-[#ff4d00]">Hire Me</span> for
            <br />
            Your Next Projects?
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#475569] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
            ad mi.
          </p>

          {/* Stats */}
          <div className="mt-8 flex items-center gap-8 sm:gap-12">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#0b1324]">
                600+
              </div>
              <div className="text-xs sm:text-sm text-[#64748b] mt-1">
                Project Completed
              </div>
            </div>

            <div className="w-px h-12 bg-gray-300" />

            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#0b1324]">
                60+
              </div>
              <div className="text-xs sm:text-sm text-[#64748b] mt-1">
                Industry Served
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-9">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 border-[1.5px] border-[#ff4d00] text-[#ff4d00] hover:bg-[#ff4d00] hover:text-white text-sm sm:text-base font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Hire Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-6-6l6 6-6 6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

