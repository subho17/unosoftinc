import Herosection from "@/components/Aboutuspage/Herosection";
import AboutUnoSoft from "@/components/Aboutuspage/AboutUnoSoft";
import Introduction from "@/components/Aboutuspage/Introduction";
import MissionVision from "@/components/Aboutuspage/MissionVision";
import CoreExpertise from "@/components/Aboutuspage/CoreExpertise";
import WhyChooseUs from "@/components/Aboutuspage/WhyChooseUs";
import OurApproach from "@/components/Aboutuspage/OurApproach";
import LeadershipTeam from "@/components/Aboutuspage/LeadershipTeam";

import ClosingCTA from "@/components/Aboutuspage/ClosingCTA";
import Footersection from "@/components/global/Footersection";

export const metadata = {
  title: "About UnoSoft | Enterprise Technical Consulting & Digital Engineering",
  description:
    "Learn about UnoSoft's mission, leadership, core engineering capabilities, and methodology for driving digital business transformation.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#141414]">
      {/* 1. Hero – Who We Are */}
      <Herosection />

      <div className="relative z-10">
        {/* 2. About UnoSoft – Company introduction */}
        <AboutUnoSoft />

        {/* Studio Introduction Showcase */}
        <Introduction />

        {/* 3. Mission & Vision – Long-term direction */}
        <MissionVision />

        {/* 4. Core Expertise – Technical capabilities */}
        <CoreExpertise />

        {/* 5. Why Choose Us – Build differentiation */}
        <WhyChooseUs />

        {/* 6. Our Approach – Demonstrate professionalism */}
        <OurApproach />

        {/* 7. Leadership & Team – Human connection */}
        <LeadershipTeam />



        {/* 9. Closing CTA – Generate enquiries */}
        <ClosingCTA />

        {/* Global Footer (sticky bottom-0 locks flush to the viewport bottom) */}
        <Footersection />
      </div>
    </main>
  );
}
