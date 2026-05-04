import { getSections } from "@/app/lib/data";
import PageTemplate from "@/app/ui/PageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Ressources",
  description:
    "Découvrez les ressources d'APEX, incluant guides, mémoires et médias pour mieux comprendre et lutter contre les violences conjugales.",
};

export default async function RessourcesPage() {
  const sections = await getSections("ressources");
  return <PageTemplate sections={sections} />;
}
