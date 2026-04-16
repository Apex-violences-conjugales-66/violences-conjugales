"use client";

import { Section } from "@/app/lib/definitions.sections";
import Footer from "@/app/ui/Footer";
import Navbar from "@/app/ui/Navbar";
import SectionRenderer from "@/app/ui/SectionRenderer";
import StickyDonationButton from "@/app/ui/StickyDonationButton";
import { usePathname } from "next/navigation";

export default function PageTemplate({ sections }: { sections: Section[] }) {
  const pathname = usePathname();
  return (
    <main>
      <Navbar />
      {sections.map((section, index) => {
        return <SectionRenderer key={index} section={section} />;
      })}
      {pathname != "/donate" && <StickyDonationButton />}
      <Footer />
    </main>
  );
}
