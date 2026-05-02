import { getSections } from "@/app/lib/data";
import PageTemplate from "@/app/ui/PageTemplate";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Formations",
};
export default async function FormationPage() {
  const sections = await getSections("formation");
  return <PageTemplate sections={sections} />;
}
