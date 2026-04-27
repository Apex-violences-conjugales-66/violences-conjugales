import { FormEntry } from "@/app/lib/definitions";
import MemberForm from "./MemberForm";
import PartnerForm from "./PartnerForm";
import FormationForm from "./FormationForm";
import DocumentForm from "./DocumentForm";
import { notFound } from "next/navigation";

export default function CreateForm({ entry }: { entry?: FormEntry }) {
  switch (entry) {
    case "members":
      return <MemberForm />;
    case "partners":
      return <PartnerForm />;
    case "formations":
      return <FormationForm />;
    case "documents":
      return <DocumentForm />;
    default:
      return notFound();
  }
}
