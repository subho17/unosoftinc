"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface ServiceItem {
  title: string;
  href: string;
  cardBg: string;
  cardBorder: string;
  layerBg: string;
  buttonBg: string;
  mockup: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    cardBg: "bg-[#262626]",
    cardBorder: "border border-white/15",
    layerBg: "bg-white/10",
    buttonBg: "bg-[#262626] group-hover:bg-[#ff4d00]",
    mockup: (
      <div className="relative w-full h-full bg-[#e6e8ec] flex items-center justify-center overflow-hidden p-4">
        {/* Top-left floating card */}
        <div className="absolute top-6 left-2 w-20 bg-white rounded-xl shadow-md p-2 -rotate-12 z-10 border border-gray-100">
          <div className="text-[7px] font-bold text-gray-800 leading-tight">
            Book Your
            <br />
            Dream Trip
          </div>
          <div className="mt-1.5 bg-[#ff4d00] text-white text-[5px] font-medium px-1.5 py-0.5 rounded-full w-fit">
            Explore Now
          </div>
        </div>

        {/* Top-right floating photo card */}
        <div className="absolute top-3 right-3 w-20 h-14 bg-gradient-to-br from-emerald-700 via-amber-700 to-stone-800 rounded-lg shadow-md rotate-12 overflow-hidden border-2 border-white">
          <div className="w-full h-1/2 bg-sky-200/40" />
        </div>

        {/* Center phone mockup */}
        <div className="relative z-20 w-36 h-60 bg-white rounded-[22px] shadow-2xl border-[3px] border-[#1f1f1f] overflow-hidden flex flex-col">
          {/* Status bar & notch */}
          <div className="pt-1.5 pb-1 px-3 flex items-center justify-between">
            <span className="text-[5px] font-semibold text-gray-700">9:41</span>
            <div className="w-8 h-1.5 bg-black rounded-full" />
            <span className="text-[5px] text-gray-700">•••</span>
          </div>
          {/* App header */}
          <div className="px-2.5 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-[#ff4d00] text-white text-[6px] flex items-center justify-center">
                ✈
              </span>
              <span className="text-[8px] font-bold text-gray-900">Travel</span>
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
          </div>
          {/* Search bar */}
          <div className="mx-2.5 mt-1.5 bg-gray-100 rounded-full px-2 py-1 text-[5px] text-gray-400">
            Search destination...
          </div>
          {/* Destination grid */}
          <div className="grid grid-cols-2 gap-1.5 px-2.5 mt-2 flex-1">
            <div>
              <div className="h-12 rounded-md bg-gradient-to-br from-emerald-500 to-teal-700" />
              <div className="text-[5px] text-gray-700 mt-0.5 font-medium">Bali</div>
            </div>
            <div>
              <div className="h-12 rounded-md bg-gradient-to-br from-sky-400 to-cyan-700" />
              <div className="text-[5px] text-gray-700 mt-0.5 font-medium">
                Emerald Isle
              </div>
            </div>
            <div>
              <div className="h-12 rounded-md bg-gradient-to-br from-amber-400 to-orange-600" />
              <div className="text-[5px] text-gray-700 mt-0.5 font-medium">
                Crystal Cove
              </div>
            </div>
            <div>
              <div className="h-12 rounded-md bg-gradient-to-br from-indigo-400 to-blue-700" />
              <div className="text-[5px] text-gray-700 mt-0.5 font-medium">
                Norway
              </div>
            </div>
          </div>
          {/* Bottom tab bar */}
          <div className="border-t border-gray-100 px-3 py-1 flex justify-between text-[5px] text-gray-400">
            <span className="text-[#ff4d00] font-semibold">Home</span>
            <span>Explore</span>
            <span>Saved</span>
            <span>Profile</span>
          </div>
        </div>

        {/* Bottom-left floating card */}
        <div className="absolute bottom-2 left-3 w-16 h-14 bg-gradient-to-tr from-stone-700 via-sky-600 to-amber-200 rounded-lg shadow-md -rotate-12 border-2 border-white z-10" />

        {/* Bottom-right floating card */}
        <div className="absolute bottom-16 right-3 w-16 bg-white rounded-xl shadow-md p-1.5 -rotate-12 z-10 border border-gray-100">
          <div className="text-[5px] font-semibold text-gray-600">Summer</div>
          <div className="mt-1 bg-[#ff4d00] text-white text-[5px] font-semibold px-1.5 py-0.5 rounded-full text-center">
            Best Deals
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Web Design",
    href: "/services/web-design",
    cardBg: "bg-[#ff4d00]",
    cardBorder: "border border-[#ff6a2b]/40",
    layerBg: "bg-white/25",
    buttonBg: "bg-[#ff4d00] group-hover:bg-[#e04300]",
    mockup: (
      <div className="relative w-full h-full bg-[#eceef2] overflow-hidden flex">
        {/* Main browser window */}
        <div className="w-[72%] h-full bg-white shadow-lg flex flex-col z-10">
          {/* Top nav */}
          <div className="px-3 py-2 flex items-center justify-between border-b border-gray-100">
            <span className="text-[7px] font-bold text-gray-800">Logo</span>
            <div className="flex gap-1.5 text-[5px] text-gray-500">
              <span>Home</span>
              <span>About</span>
              <span>Services</span>
              <span>Contact</span>
            </div>
          </div>
          {/* Hero block */}
          <div className="p-3 flex gap-2 items-center">
            <div className="flex-1">
              <div className="text-[9px] font-bold text-gray-900 leading-tight">
                Modern Business Solutions
              </div>
              <div className="mt-1.5 bg-[#ff4d00] text-white text-[5px] font-medium px-2 py-0.5 rounded-full w-fit">
                Get Started →
              </div>
            </div>
            <div className="w-14 h-14 rounded bg-gradient-to-br from-stone-300 to-stone-500 shrink-0" />
          </div>
          {/* 3 small feature cards */}
          <div className="px-2.5 grid grid-cols-3 gap-1.5 py-2 border-t border-gray-100">
            <div className="text-center p-1 rounded bg-gray-50">
              <div className="text-[7px]">💡</div>
              <div className="text-[5px] font-bold text-gray-800">Innovative</div>
              <div className="text-[4px] text-gray-400">Solutions</div>
            </div>
            <div className="text-center p-1 rounded bg-gray-50">
              <div className="text-[7px]">✏️</div>
              <div className="text-[5px] font-bold text-gray-800">Creative</div>
              <div className="text-[4px] text-gray-400">Design</div>
            </div>
            <div className="text-center p-1 rounded bg-gray-50">
              <div className="text-[7px]">👤</div>
              <div className="text-[5px] font-bold text-gray-800">24/7 Support</div>
              <div className="text-[4px] text-gray-400">Dedicated</div>
            </div>
          </div>
          {/* Dark footer */}
          <div className="mt-auto bg-[#1f1f1f] px-3 py-3 flex items-center justify-between">
            <div>
              <div className="text-[8px] font-bold text-white leading-tight">
                Build Something
                <br />
                Amazing
              </div>
              <div className="mt-1 text-[5px] text-gray-300 border border-white/30 rounded-full px-1.5 py-0.5 w-fit">
                Learn More →
              </div>
            </div>
            <div className="w-10 h-11 rounded bg-gradient-to-b from-sky-200 to-stone-400" />
          </div>
        </div>

        {/* Overlapping right browser window */}
        <div className="w-[34%] h-full bg-[#fafafa] border-l border-gray-200 flex flex-col p-2">
          <div className="text-[7px] font-bold text-gray-800 text-center mt-2">
            Our Projects
          </div>
          <div className="mt-2 h-14 rounded bg-gradient-to-br from-amber-100 to-stone-300" />
          <div className="grid grid-cols-2 gap-1 mt-2">
            <div className="h-8 rounded bg-gray-200" />
            <div className="h-8 rounded bg-gray-200" />
            <div className="h-8 rounded bg-gray-200" />
            <div className="h-8 rounded bg-gray-200" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Landing Page",
    href: "/services/landing-page",
    cardBg: "bg-[#262626]",
    cardBorder: "border border-white/15",
    layerBg: "bg-white/10",
    buttonBg: "bg-[#262626] group-hover:bg-[#ff4d00]",
    mockup: (
      <div className="w-full h-full bg-white flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="px-4 py-2.5 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center gap-1">
            <span className="w-3.5 h-3.5 rounded-full bg-blue-600 text-white text-[6px] flex items-center justify-center font-bold">
              T
            </span>
            <span className="text-[8px] font-bold text-gray-900">TechPro</span>
          </div>
          <div className="flex items-center gap-2.5 text-[6px] text-gray-600">
            <span>Home</span>
            <span>Features</span>
            <span>Pricing</span>
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-[5px] font-medium">
              Get Started
            </span>
          </div>
        </div>

        {/* Hero section */}
        <div className="px-4 pt-4 pb-3 flex items-center gap-3 flex-1">
          <div className="flex-1 space-y-2">
            <div className="text-[13px] font-extrabold text-gray-900 leading-[1.15]">
              Grow Your
              <br />
              Business <span className="text-blue-600">Faster</span>
            </div>
            <p className="text-[6px] text-gray-500 leading-relaxed">
              Powerful solutions to help you scale your business.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="bg-blue-600 text-white text-[6px] font-medium px-2.5 py-1 rounded-full">
                Get Started →
              </span>
              <span className="text-[6px] text-gray-700 font-medium flex items-center gap-1">
                <span className="w-3 h-3 rounded-full border border-gray-300 flex items-center justify-center text-[5px]">
                  ▶
                </span>
                Watch Demo
              </span>
            </div>
          </div>

          {/* Right graphic */}
          <div className="relative w-24 h-28 flex items-end justify-center shrink-0">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 opacity-90" />
            <div className="relative z-10 w-16 h-24 rounded-t-full bg-gradient-to-b from-sky-100 to-blue-200 border-2 border-white/60" />
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mx-4 mb-4 pt-3 border-t border-gray-100 grid grid-cols-3 gap-2">
          <div>
            <div className="text-[10px] font-bold text-gray-900">10K+</div>
            <div className="text-[5px] text-gray-500">Happy Clients</div>
          </div>
          <div>
            <div className="text-[10px] font-bold text-gray-900">98%</div>
            <div className="text-[5px] text-gray-500">Success Rate</div>
          </div>
          <div>
            <div className="text-[10px] font-bold text-gray-900">24/7</div>
            <div className="text-[5px] text-gray-500">Support</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Mobile App",
    href: "/services/mobile-app",
    cardBg: "bg-[#ff4d00]",
    cardBorder: "border border-[#ff6a2b]/40",
    layerBg: "bg-white/25",
    buttonBg: "bg-[#ff4d00] group-hover:bg-[#e04300]",
    mockup: (
      <div className="relative w-full h-full bg-[#e8ecf2] flex items-center justify-center gap-3 overflow-hidden p-4">
        {/* Left phone screen */}
        <div className="w-32 h-56 bg-[#14161a] rounded-[20px] shadow-xl border-2 border-gray-700 p-2.5 flex flex-col justify-between text-white -rotate-6">
          <div>
            <div className="flex items-center justify-between text-[5px] text-gray-400">
              <span>Wallet</span>
              <span>● ●</span>
            </div>
            <div className="mt-2 text-[11px] font-bold">$24,850.00</div>
            <div className="text-[5px] text-emerald-400 mt-0.5">+12.4% this month</div>
            <div className="mt-3 h-14 rounded-xl bg-gradient-to-r from-[#ff4d00] to-amber-500 p-2 flex flex-col justify-between">
              <span className="text-[5px] uppercase tracking-wider opacity-80">
                Virtual Card
              </span>
              <span className="text-[7px] font-semibold">•••• 4829</span>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between items-center bg-white/10 rounded-lg px-2 py-1 text-[5px]">
              <span>Cloud Hosting</span>
              <span className="text-red-300">-$49</span>
            </div>
            <div className="flex justify-between items-center bg-white/10 rounded-lg px-2 py-1 text-[5px]">
              <span>Client Payout</span>
              <span className="text-emerald-300">+$1,200</span>
            </div>
          </div>
        </div>

        {/* Right analytics phone */}
        <div className="w-32 h-56 bg-white rounded-[20px] shadow-xl border border-gray-200 p-2.5 flex flex-col justify-between rotate-6 translate-y-3">
          <div>
            <div className="text-[7px] font-bold text-gray-900">Activity</div>
            <div className="mt-2 flex items-end gap-1.5 h-20 pt-2">
              <div className="flex-1 bg-orange-200 rounded-t h-[45%]" />
              <div className="flex-1 bg-orange-300 rounded-t h-[65%]" />
              <div className="flex-1 bg-[#ff4d00] rounded-t h-[95%]" />
              <div className="flex-1 bg-orange-200 rounded-t h-[55%]" />
              <div className="flex-1 bg-orange-400 rounded-t h-[80%]" />
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-2 space-y-1">
            <div className="text-[5px] text-gray-400">Daily Active Users</div>
            <div className="text-[10px] font-bold text-gray-900">18.4K</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Brand Identity",
    href: "/services/brand-identity",
    cardBg: "bg-[#262626]",
    cardBorder: "border border-white/15",
    layerBg: "bg-white/10",
    buttonBg: "bg-[#262626] group-hover:bg-[#ff4d00]",
    mockup: (
      <div className="w-full h-full bg-[#f4f4f6] p-4 flex flex-col justify-between overflow-hidden">
        {/* Brand board header */}
        <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#141414] text-white font-bold text-xs flex items-center justify-center">
              U
            </div>
            <div>
              <div className="text-[8px] font-bold text-gray-900">Brand Guidelines</div>
              <div className="text-[5px] text-gray-400">Visual System v2.0</div>
            </div>
          </div>
          <span className="text-[5px] bg-orange-50 text-[#ff4d00] font-semibold px-2 py-0.5 rounded-full">
            Identity
          </span>
        </div>

        {/* Typography & Color swatches */}
        <div className="grid grid-cols-2 gap-2.5 my-2 flex-1">
          <div className="bg-[#181818] text-white rounded-xl p-3 flex flex-col justify-between">
            <div className="text-[5px] text-gray-400 uppercase tracking-wider">
              Typography
            </div>
            <div className="text-2xl font-bold tracking-tight">Aa</div>
            <div className="text-[6px] text-gray-300">Geist Sans • Bold</div>
          </div>
          <div className="bg-white rounded-xl p-3 border border-gray-100 flex flex-col justify-between">
            <div className="text-[5px] text-gray-400 uppercase tracking-wider">
              Palette
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="h-7 rounded-md bg-[#ff4d00]" />
              <div className="h-7 rounded-md bg-[#141414]" />
              <div className="h-7 rounded-md bg-[#f59e0b]" />
              <div className="h-7 rounded-md bg-[#e5e7eb]" />
            </div>
          </div>
        </div>

        {/* Bottom stationery bar */}
        <div className="bg-white rounded-xl px-3 py-2 border border-gray-100 flex items-center justify-between">
          <span className="text-[6px] font-semibold text-gray-700">
            Logo • Packaging • Collateral
          </span>
          <span className="text-[6px] text-[#ff4d00] font-bold">100% Vector</span>
        </div>
      </div>
    ),
  },
  {
    title: "E-Commerce",
    href: "/services/e-commerce",
    cardBg: "bg-[#ff4d00]",
    cardBorder: "border border-[#ff6a2b]/40",
    layerBg: "bg-white/25",
    buttonBg: "bg-[#ff4d00] group-hover:bg-[#e04300]",
    mockup: (
      <div className="w-full h-full bg-white flex flex-col overflow-hidden">
        {/* Store navbar */}
        <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
          <span className="text-[8px] font-extrabold tracking-tight text-gray-900">
            SHOP<span className="text-[#ff4d00]">.CO</span>
          </span>
          <div className="flex items-center gap-2 text-[6px] text-gray-500">
            <span>New</span>
            <span>Men</span>
            <span>Women</span>
            <span className="bg-black text-white px-2 py-0.5 rounded-full text-[5px]">
              Bag (2)
            </span>
          </div>
        </div>

        {/* Store hero banner */}
        <div className="mx-3 mt-2.5 rounded-xl bg-gradient-to-r from-[#181818] to-[#2e2e2e] p-3 text-white flex items-center justify-between">
          <div>
            <div className="text-[5px] text-[#ff4d00] uppercase font-bold">
              Season Drop
            </div>
            <div className="text-[10px] font-bold leading-tight mt-0.5">
              Minimalist Essentials
            </div>
            <div className="mt-1.5 bg-[#ff4d00] text-white text-[5px] px-2 py-0.5 rounded-full w-fit">
              Shop Now →
            </div>
          </div>
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-amber-200 shrink-0" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-3 gap-2 p-3 flex-1">
          <div className="bg-gray-50 rounded-lg p-1.5 flex flex-col justify-between">
            <div className="h-14 rounded bg-gradient-to-br from-stone-200 to-stone-400" />
            <div className="mt-1">
              <div className="text-[6px] font-bold text-gray-800">Sneaker</div>
              <div className="text-[5px] text-[#ff4d00] font-semibold">$129</div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-1.5 flex flex-col justify-between">
            <div className="h-14 rounded bg-gradient-to-br from-slate-200 to-slate-400" />
            <div className="mt-1">
              <div className="text-[6px] font-bold text-gray-800">Jacket</div>
              <div className="text-[5px] text-[#ff4d00] font-semibold">$189</div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-1.5 flex flex-col justify-between">
            <div className="h-14 rounded bg-gradient-to-br from-amber-100 to-amber-300" />
            <div className="mt-1">
              <div className="text-[6px] font-bold text-gray-800">Watch</div>
              <div className="text-[5px] text-[#ff4d00] font-semibold">$240</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <Link
      href={service.href}
      className="group relative block w-[320px] sm:w-[360px] lg:w-[400px] shrink-0 transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Card body */}
      <div
        className={`relative ${service.cardBg} ${service.cardBorder} rounded-3xl flex flex-col pt-7 overflow-hidden`}
      >
        {/* Card title + short horizontal divider */}
        <div className="px-7 pb-6">
          <h3 className="text-2xl font-semibold text-white tracking-tight">
            {service.title}
          </h3>
          <div className="w-14 h-[1.5px] bg-white/75 mt-5" />
        </div>

        {/* Stacked background preview layer + mockup */}
        <div className="relative mt-auto pt-2">
          <div className={`mx-5 h-5 rounded-t-3xl ${service.layerBg} -mb-2`} />
          <div className="h-72 md:h-80 rounded-3xl overflow-hidden">
            {service.mockup}
          </div>
        </div>

        {/* Concave bottom-right cutout matching section background (#141414) */}
        <div className="pointer-events-none absolute bottom-0 right-0 w-[86px] h-[86px] bg-[#141414] rounded-tl-[44px] z-20" />
        <div
          className="pointer-events-none absolute bottom-[86px] right-0 w-7 h-7 z-20"
          style={{
            background:
              "radial-gradient(circle at 0 0, transparent 28px, #141414 28.5px)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-[86px] w-7 h-7 z-20"
          style={{
            background:
              "radial-gradient(circle at 0 0, transparent 28px, #141414 28.5px)",
          }}
        />
      </div>

      {/* Circular arrow button inside the cutout */}
      <div
        className={`absolute bottom-1 right-1 w-[72px] h-[72px] rounded-full ${service.buttonBg} flex items-center justify-center shadow-lg transition-colors duration-300 z-30`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M17 7H7M17 7v10"
          />
        </svg>
      </div>
    </Link>
  );
}

export default function Servicepage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const firstSet = firstSetRef.current;
    if (!track || !firstSet) return;

    let setWidth = firstSet.getBoundingClientRect().width;
    let x = -setWidth;
    let lastTime = performance.now();
    let rafId = 0;
    const speed = 75; // px per second (left to right)

    const observer = new ResizeObserver(() => {
      setWidth = firstSet.getBoundingClientRect().width;
    });
    observer.observe(firstSet);

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (setWidth > 0) {
        x += speed * dt;
        if (x >= 0) {
          x -= setWidth;
        }
        track.style.transform = `translate3d(${x}px, 0, 0)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative z-10 w-full min-h-screen bg-[#141414] rounded-t-3xl px-8 py-12 md:px-14 md:py-16 flex flex-col justify-between overflow-hidden shadow-[0_-24px_60px_rgba(0,0,0,0.28)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-white/15">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          <span className="text-white">My </span>
          <span className="text-[#ff4d00]">Services</span>
        </h2>

        <div className="flex items-center gap-5">
          <div className="w-px h-11 bg-white/25 hidden md:block" />
          <p className="text-gray-200 text-sm leading-relaxed max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>

      {/* Auto-scrolling cards (left to right) */}
      <div className="relative my-auto py-8 -mx-8 md:-mx-14 overflow-hidden">
        <div ref={trackRef} className="flex w-max will-change-transform">
          <div ref={firstSetRef} className="flex shrink-0 gap-6 pr-6">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
          <div className="flex shrink-0 gap-6 pr-6" aria-hidden="true">
            {services.map((service) => (
              <ServiceCard key={`${service.title}-dup`} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
