import { getSections } from "@/app/lib/data";
import PageTemplate from "@/app/ui/PageTemplate";

export default async function Page() {
  const sections = await getSections("home");
  return <PageTemplate sections={sections} />;
}
