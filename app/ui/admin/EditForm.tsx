import { updateMember } from "@/app/lib/actions";
import {
  fetchMemberbyId,
  fetchPartnerById,
  fetchFormationById,
  fetchDocumentById,
} from "@/app/lib/data";
import { FormEntry } from "@/app/lib/definitions";
import EditMemberForm from "@/app/ui/admin/EditMemberForm";
import EditPartnerForm from "@/app/ui/admin/EditPartnerForm";
import EditFormationForm from "@/app/ui/admin/EditFormationForm";
import EditDocumentForm from "@/app/ui/admin/EditDocumentForm";
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
    case "formations":
      const formation = await fetchFormationById(id);
      if (!formation) {
        notFound();
      }
      return <EditFormationForm id={id} formation={formation} />;
    case "documents":
      const document = await fetchDocumentById(id);
      if (!document) {
        notFound();
      }
      return <EditDocumentForm id={id} document={document} />;
    default:
      return <p className="text-slate-500">Formulaire introuvable.</p>;
  }
}
