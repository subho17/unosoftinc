import Link from "next/link";
import Footersection from "@/components/global/Footersection";

interface LegalPlaceholderProps {
  eyebrow: string;
  title: string;
  summary: string;
}

/**
 * Temporary shell for legal pages that have not been written yet.
 * Replace the body copy with counsel-approved content before launch.
 */
export default function LegalPlaceholder({
  eyebrow,
  title,
  summary,
}: LegalPlaceholderProps) {
  return (
    <main className="min-h-screen bg-white">
      <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-20">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-[#475569] mb-6"
        >
          <Link href="/" className="hover:text-[#0083d1] transition-colors">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#0b1324] font-medium">{eyebrow}</span>
        </nav>

        <span className="inline-block bg-[#e8f4fc] border border-[#0083d1]/20 text-[#0083d1] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
          {eyebrow}
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0b1324] leading-[1.15]">
          {title}
        </h1>

        <p className="mt-6 text-[15px] sm:text-base md:text-[17px] text-[#334155] leading-[1.8]">
          {summary}
        </p>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
          <p className="text-sm text-amber-900 leading-relaxed">
            <span className="font-semibold">Status: in preparation.</span> This
            page is a placeholder so the site has no broken links. The final,
            counsel-reviewed text has not been published yet.
          </p>
        </div>

        <p className="mt-8 text-[15px] sm:text-base text-[#334155] leading-[1.8]">
          For any question about this document in the meantime, please{" "}
          <Link
            href="/contact"
            className="font-semibold text-[#0083d1] hover:text-[#006eb0] transition-colors"
          >
            contact us
          </Link>{" "}
          and we will respond directly.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0083d1] hover:text-[#006eb0] transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>Back to home</span>
          </Link>
        </div>
      </section>

      <Footersection />
    </main>
  );
}
