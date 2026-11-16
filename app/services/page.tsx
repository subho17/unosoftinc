import Heroservice from "@/components/services/Heroservice";
import Servicepage from "@/components/services/servicepage";
import ServiceCTA from "@/components/services/ServiceCTA";
import Footersection from "@/components/global/Footersection";

export const metadata = {
  title: "Services | UnoSoft Digital Engineering & Product Design",
  description:
    "Explore our complete suite of UI/UX design, custom web applications, mobile platforms, and enterprise cloud solutions.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#141414]">
      {/* 1. Hero Section (matching the About Us page aesthetic) */}
      <Heroservice />

      {/* 2. Interactive Service Showcase Section */}
      <div className="relative z-10 -mt-6">
        <Servicepage />
      </div>

      {/* 3. Sticky CTA Section (z-40) */}
      <ServiceCTA />

      {/* 4. Footer Section (z-[45]) sliding over the CTA on scroll */}
      <Footersection />
    </main>
  );
}
