import PageTemplate from "@/app/ui/PageTemplate";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Donations",
  description:
    "Soutenez APEX dans sa mission de lutte contre les violences conjugales. Découvrez comment faire un don et contribuer à notre cause.",
};
export default function DonatePage() {
  return (
    <PageTemplate
      sections={[{ name: "donations" }]}
      stickyDonationButtonActive={false}
    />
  );
}
