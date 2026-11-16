import Image from "next/image";
import Link from "next/link";

export default function Heroservice() {
  return (
    <section className="relative w-full h-[58vh] min-h-[440px] sm:min-h-[500px] max-h-[640px] flex items-center justify-center overflow-hidden bg-[#111]">
      {/* Background Cinematic Monochrome Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/services-hero.jpg"
          alt="UnoSoft Enterprise Digital Services and Engineering"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center grayscale contrast-110 brightness-95"
        />
        {/* Dark Film Overlay for Contrast and Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
          Our Services
        </h1>

        {/* Breadcrumb Navigation */}
        <div className="mt-5 inline-flex items-center gap-2.5 bg-black/40 backdrop-blur-md border border-white/15 px-5 py-2 rounded-full text-xs sm:text-sm font-medium shadow-md">
          <Link
            href="/"
            className="text-gray-300 hover:text-[#ff4d00] transition-colors flex items-center gap-1.5"
          >
            <span>Home</span>
          </Link>
          <span className="text-gray-500">›</span>
          <span className="text-[#ff4d00] font-semibold">Services</span>
        </div>
      </div>

      {/* Bottom subtle edge border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
    </section>
  );
}
