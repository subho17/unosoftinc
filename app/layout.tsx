import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Enquiry from "@/components/global/Enquiry";
import Chatbot from "@/components/global/Chatbot";
import ScrollProgressBar from "@/components/global/ScrollProgressBar";

// Absolute URL used for Open Graph images and canonical links.
// Priority: explicit site URL -> Vercel production domain -> hard-coded fallback.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://unosoftinc.com");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "unosoftinc | Technical Consulting & Digital Product Agency",
  description:
    "We are strategic business technology advisors committed to driving meaningful business transformation through UI/UX design and modern web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-black">
        <ScrollProgressBar />
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 pointer-events-none">
          <Navbar />
        </header>
        <main className="flex-1">{children}</main>
        <Enquiry />
        <Chatbot />
      </body>
    </html>
  );
}
