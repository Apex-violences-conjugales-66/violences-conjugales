import { getSections } from "@/app/lib/data";
import PageTemplate from "@/app/ui/PageTemplate";

export default async function ProjetPage() {
  const sections = await getSections("projet");
  return <PageTemplate sections={sections} />;
}
