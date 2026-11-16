"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const ourServices = [
  { label: "UI/UX Design", href: "/services" },
  { label: "Web Development", href: "/services" },
  { label: "Mobile App Design", href: "/services" },
  { label: "Brand Identity", href: "/services" },
  { label: "E-Commerce Solutions", href: "/services" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/services" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Team", href: "/about" },
  { label: "Careers", href: "/contact" },
];

const otherLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/privacy" },
  { label: "Support Policy", href: "/privacy" },
  { label: "SLA & Guidelines", href: "/terms" },
];

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Behance", href: "#" },
];

const bottomLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/privacy" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/contact" },
];

export default function Footersection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-50 w-full bg-[#141414] rounded-t-3xl px-6 sm:px-10 md:px-14 pt-12 pb-8 text-white shadow-[0_-24px_60px_rgba(0,0,0,0.35)] flex flex-col justify-between">
      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between gap-10">
        {/* Top CTA Banner */}
        <div className="bg-[#1e1e1e] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#ff4d00]">
              START A PROJECT
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to build your{" "}
              <span className="text-[#ff4d00]">next digital product?</span>
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua for
              modern teams worldwide.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#ff4d00] hover:bg-[#e04300] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <span>Get a Free Proposal</span>
              <span>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#262626] hover:bg-[#303030] border border-white/15 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <span>Schedule a Call</span>
              <span>↗</span>
            </Link>
          </div>
        </div>

        {/* Main 5-Column Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.9fr_1fr_1.3fr] gap-8 lg:gap-6">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/logo-transparent.png"
                alt="UnoSoft Logo"
                width={140}
                height={50}
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>

            <ul className="space-y-1.5 text-xs text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
                <span>Product Strategy &amp; Consulting</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
                <span>UI/UX &amp; Brand Systems</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d00]" />
                <span>Full-Stack Engineering</span>
              </li>
            </ul>

            <div className="bg-[#1e1e1e] border border-white/10 rounded-xl p-3 text-xs text-gray-300 leading-relaxed flex items-start gap-2">
              <span className="text-[#ff4d00] mt-0.5 shrink-0">●</span>
              <span>
                123 Innovation Drive, Suite 400, San Francisco, CA 94105
              </span>
            </div>

            <p className="text-[11px] text-gray-400">
              FOUNDER &amp; DIRECTOR:{" "}
              <span className="text-white font-semibold">Alex Morgan</span>
            </p>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#ff4d00] mb-4">
              OUR SERVICES
            </h3>
            <ul className="space-y-2.5">
              {ourServices.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-start gap-2 text-xs text-gray-300 hover:text-white transition-colors leading-snug"
                  >
                    <span className="text-[#ff4d00]">→</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#ff4d00] mb-4">
              COMPANY
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="text-[#ff4d00]">→</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Other Useful Links */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#ff4d00] mb-4">
              OTHER USEFUL LINKS
            </h3>
            <ul className="space-y-2.5">
              {otherLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-start gap-2 text-xs text-gray-300 hover:text-white transition-colors leading-snug"
                  >
                    <span className="text-[#ff4d00]">→</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact & Offices + Stay Updated */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#ff4d00]">
              CONTACT &amp; OFFICES
            </h3>

            <div className="space-y-2.5 text-xs text-gray-300">
              <div>
                <div className="text-[10px] font-semibold text-gray-400 uppercase">
                  OFFICE ADDRESS:
                </div>
                <div className="mt-0.5 leading-snug">
                  123 Innovation Drive, Suite 400, San Francisco, CA 94105
                </div>
              </div>

              <div>
                <div className="text-[10px] font-semibold text-gray-400 uppercase">
                  GLOBAL LOCATIONS:
                </div>
                <div className="mt-0.5">
                  San Francisco, New York, London, Toronto, Sydney
                </div>
              </div>

              <div>
                <div className="text-[10px] font-semibold text-gray-400 uppercase">
                  EMAIL:
                </div>
                <a
                  href="mailto:hello@studiodemo.com"
                  className="hover:text-[#ff4d00] transition-colors"
                >
                  hello@studiodemo.com
                </a>
              </div>

              <div>
                <div className="text-[10px] font-semibold text-gray-400 uppercase">
                  PHONE:
                </div>
                <a
                  href="tel:+15550123456"
                  className="hover:text-[#ff4d00] transition-colors"
                >
                  +1 (555) 012-3456
                </a>
              </div>

              <div>
                <div className="text-[10px] font-semibold text-gray-400 uppercase">
                  TIME:
                </div>
                <div>24 × 7 (Monday to Sunday)</div>
              </div>
            </div>

            {/* Stay Updated Box */}
            <div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-white">
                STAY UPDATED
              </div>
              <p className="text-[11px] text-gray-400 mt-1">
                Insights on design systems, web engineering, and product growth.
              </p>

              <form onSubmit={handleSubscribe} className="mt-3 flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (subscribed) setSubscribed(false);
                  }}
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  className="flex-1 min-w-0 bg-[#262626] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-gray-400 focus:outline-none focus:border-[#ff4d00]"
                />
                <button
                  type="submit"
                  className="bg-[#ff4d00] hover:bg-[#e04300] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  Join
                </button>
              </form>

              {subscribed && (
                <p className="mt-2 text-[11px] text-[#ff4d00] font-medium">
                  Thanks for subscribing!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Social Connect Strip + Bottom Copyright */}
        <div className="space-y-5">
          {/* Social Connect Bar */}
          <div className="pt-5 border-t border-white/15 flex flex-wrap items-center justify-center gap-2.5">
            <span className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mr-2">
              CONNECT WITH US:
            </span>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="inline-flex items-center gap-1 bg-[#242424] hover:bg-[#ff4d00] text-gray-200 hover:text-white text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors"
              >
                <span>{social.label}</span>
                <span className="text-[10px]">↗</span>
              </a>
            ))}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#ff4d00] hover:text-white ml-2 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <span>↑</span>
            </button>
          </div>

          {/* Bottom Legal Bar */}
          <div className="pt-5 border-t border-white/15 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-xs text-gray-400">
            <p>© 2026 StudioDemo. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {bottomLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll to top"
                title="Back to top"
                className="w-10 h-10 rounded-full bg-[#ff4d00] hover:bg-[#e04300] text-white flex items-center justify-center shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
