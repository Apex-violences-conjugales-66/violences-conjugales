import { FormEntry } from "@/app/lib/definitions";
import EditForm from "@/app/ui/admin/EditForm";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams?: { entry?: string };
}) {
  const id = (await params).id;
  console.log("🚀 ~ Page ~ id:", id);
  const entry = searchParams?.entry as FormEntry | undefined;
  console.log("🚀 ~ Page ~ entry:", entry);
  return <EditForm entry={entry} id={id} />;
}
