import { Section } from "@/app/lib/definitions.sections";
import Footer from "@/app/ui/Footer";
import Navbar from "@/app/ui/Navbar";
import SectionRenderer from "@/app/ui/SectionRenderer";
import StickyDonationButton from "@/app/ui/StickyDonationButton";

export default function PageTemplate({
  sections,
  stickyDonationButtonActive = true,
}: {
  sections: Section[];
  stickyDonationButtonActive?: boolean;
}) {
  return (
    <main>
      <Navbar />
      {sections.map((section, index) => {
        return (
          <SectionRenderer key={`${section.name}-${index}`} section={section} />
        );
      })}
      {stickyDonationButtonActive && <StickyDonationButton />}
      <Footer />
    </main>
  );
}
