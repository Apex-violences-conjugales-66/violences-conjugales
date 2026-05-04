import { getSections } from "@/app/lib/data";
import PageTemplate from "@/app/ui/PageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Projet Associatif",
  description:
    "Découvrez le projet associatif d'APEX, notre mission, nos valeurs et nos actions pour lutter contre les violences conjugales.",
};

export default async function ProjetPage() {
  const sections = await getSections("projet");
  return <PageTemplate sections={sections} />;
}
