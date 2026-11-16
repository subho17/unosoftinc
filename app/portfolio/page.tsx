import PortfolioSection from "@/components/portfolio/PortfolioSection";
import Footersection from "@/components/global/Footersection";

export const metadata = {
  title: "Portfolio | UnoSoft Digital Engineering & Products",
  description:
    "Explore UnoSoft's portfolio of enterprise software, mobile platforms, design systems, and cloud architectures.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#111]">
      <div className="pt-20">
        <PortfolioSection />
      </div>
      <Footersection />
    </main>
  );
}

