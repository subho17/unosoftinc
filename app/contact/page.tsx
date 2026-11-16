import Contactform from "@/components/contactus/Contactform";
import Mapform from "@/components/contactus/Mapform";
import Footersection from "@/components/global/Footersection";

export const metadata = {
  title: "Contact Us - StudioDemo",
  description:
    "Get in touch with our team for in-person meetings, consulting, and digital solutions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Contactform />
      <Mapform />
      <Footersection />
    </main>
  );
}
