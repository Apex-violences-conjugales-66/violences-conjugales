import { Section } from "@/app/lib/definitions.sections";
import PageTemplate from "@/app/ui/PageTemplate";

const sections: Section[] = [{ name: "donations" }];

export default function DonatePage() {
  return <PageTemplate sections={sections} />;
}
