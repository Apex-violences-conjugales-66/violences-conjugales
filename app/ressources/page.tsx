import { getSections } from "@/app/lib/data";
import PageTemplate from "@/app/ui/PageTemplate";

export default async function RessourcesPage() {
  const sections = await getSections("ressources");
  return <PageTemplate sections={sections} />;
}
