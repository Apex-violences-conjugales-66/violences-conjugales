import PageTemplate from "@/app/ui/PageTemplate";

export default function DonatePage() {
  return (
    <PageTemplate
      sections={[{ name: "donations" }]}
      stickyDonationButtonActive={false}
    />
  );
}
