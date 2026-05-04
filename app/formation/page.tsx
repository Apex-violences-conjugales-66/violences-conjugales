import { getSections } from "@/app/lib/data";
import PageTemplate from "@/app/ui/PageTemplate";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nos Formations",
  description:
    "Découvrez les formations d'APEX, retrouvez notre catalogue de formations et inscrivez vous en remplissant le bulletin d'inscription.",
};
export default async function FormationPage() {
  const sections = await getSections("formation");
  return <PageTemplate sections={sections} />;
}
