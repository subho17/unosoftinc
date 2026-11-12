import Herosection from "@/components/global/Herosection";
import Servicepage from "@/components/services/servicepage";
import Experincepage from "@/components/global/experincepage";
import Testimonial from "@/components/global/Testimonial";
import Foundersection from "@/components/global/foundersection";
import Discuss from "@/components/global/Discuss";
import Blogsection from "@/components/global/Blogsection";
import Faqsection from "@/components/global/Faqsection";
import Teamsection from "@/components/global/Teamsection";
import Footersection from "@/components/global/Footersection";

export default function Home() {
  return (
    <>
      <Herosection />
      <div className="relative z-10">
        <Servicepage />
        <Experincepage />
        <Testimonial />
        <Foundersection />
        <Discuss />
        <Blogsection />
        <Faqsection />
        <Teamsection />
        <Footersection />
      </div>
    </>
  );
}
