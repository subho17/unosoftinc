"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blog" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY <= 120);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`mx-auto max-w-6xl w-full bg-[#141414]/95 backdrop-blur-md border border-white/10 rounded-full px-5 sm:px-7 py-2.5 flex items-center justify-between shadow-2xl transition-all duration-500 ease-in-out pointer-events-auto ${visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-24 opacity-0 pointer-events-none"
        }`}
    >
      {/* Brand Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 shrink-0 group focus:outline-none"
      >
        <Image
          src="/logo-transparent.png"
          alt="UnoSoft Logo"
          width={130}
          height={47}
          priority
          className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-5 sm:gap-7 overflow-x-auto no-scrollbar">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${isActive
                  ? "text-[#0083d1] font-semibold border-b-2 border-[#0083d1] pb-0.5"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Right Action Button */}
      <div className="hidden lg:flex items-center gap-3 shrink-0">
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 bg-[#0083d1] hover:bg-[#006eb0] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-md hover:shadow-[#0083d1]/30 hover:-translate-y-0.5"
        >
          <span>Get a Quote</span>
          <span className="text-xs">→</span>
        </Link>
      </div>
    </nav>
  );
}
