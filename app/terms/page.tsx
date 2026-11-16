import LegalPlaceholder from "@/components/legal/LegalPlaceholder";

export const metadata = {
  title: "Terms of Service | UnoSoft",
  description: "Terms governing the use of the UnoSoft website.",
  robots: { index: false, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <LegalPlaceholder
      eyebrow="Terms of Service"
      title="Terms of Service"
      summary="This page will set out the terms that apply when you use this website, including permitted use of its content, limitations of liability, and the law that governs any dispute."
    />
  );
}
