import { updateMember } from "@/app/lib/actions";
import { fetchMemberbyId, fetchPartnerById } from "@/app/lib/data";
import { FormEntry } from "@/app/lib/definitions";
import EditMemberForm from "@/app/ui/admin/EditMemberForm";
import EditPartnerForm from "@/app/ui/admin/EditPartnerForm";
import { notFound } from "next/navigation";

export default async function EditForm({
  entry,
  id,
}: {
  entry?: FormEntry;
  id: string;
}) {
  switch (entry) {
    case "members":
      const member = await fetchMemberbyId(id);
      if (!member) {
        notFound();
      }
      return <EditMemberForm id={id} member={member} />;
    case "partners":
      const partner = await fetchPartnerById(id);
      if (!partner) {
        notFound();
      }
      return <EditPartnerForm id={id} partner={partner} />;
    default:
      return <p className="text-slate-500">Formulaire introuvable.</p>;
  }
}
