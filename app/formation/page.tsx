import { getSections } from "@/app/lib/data";
import PageTemplate from "@/app/ui/PageTemplate";

export default async function FormationPage() {
  const sections = await getSections("formation");
  return <PageTemplate sections={sections} />;
}
