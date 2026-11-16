import LegalPlaceholder from "@/components/legal/LegalPlaceholder";

export const metadata = {
  title: "Privacy Policy | UnoSoft",
  description:
    "How UnoSoft handles personal data submitted through this website.",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPlaceholder
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      summary="This page will describe what personal data UnoSoft collects through this website, why it is collected, how long it is retained, and how you can request access to or deletion of your information."
    />
  );
}
