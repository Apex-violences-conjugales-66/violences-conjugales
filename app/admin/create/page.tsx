import { FormEntry } from "@/app/lib/definitions";
import CreateForm from "@/app/ui/admin/CreateForm";

export default function Page({
  searchParams,
}: {
  searchParams?: { entry?: string };
}) {
  const entry = searchParams?.entry as FormEntry | undefined;
  return <CreateForm entry={entry} />;
}
