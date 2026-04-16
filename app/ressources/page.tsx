import { getSections } from "@/app/lib/data";
import { Section } from "@/app/lib/definitions.sections";
import PageTemplate from "@/app/ui/PageTemplate";
import { FunctionComponent } from "react";

export default async function RessourcesPage() {
  const sections = await getSections("ressources");
  return <PageTemplate sections={sections} />;
}
