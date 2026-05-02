import PageTemplate from "@/app/ui/PageTemplate";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Donations",
};
export default function DonatePage() {
  return (
    <PageTemplate
      sections={[{ name: "donations" }]}
      stickyDonationButtonActive={false}
    />
  );
}
