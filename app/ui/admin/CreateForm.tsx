import { FormEntry } from "@/app/lib/definitions";
import MemberForm from "./MemberForm";
import PartnerForm from "./PartnerForm";
import FormationForm from "./FormationForm";
import DocumentForm from "./DocumentForm";
import BookForm from "./BookForm";
import MovieForm from "./MovieForm";
import MemoirForm from "./MemoirForm";
import CatalogueForm from "./CatalogueForm";
import { notFound } from "next/navigation";

export default function CreateForm({ entry }: { entry?: FormEntry }) {
  switch (entry) {
    case "members":
      return <MemberForm />;
    case "partners":
      return <PartnerForm />;
    case "formations":
      return <FormationForm />;
    case "document_resources":
      return <DocumentForm />;
    case "books":
      return <BookForm />;
    case "movies":
      return <MovieForm />;
    case "memoirs":
      return <MemoirForm />;
    case "catalogues":
      return <CatalogueForm type="catalogue" />;
    case "bulletins":
      return <CatalogueForm type="bulletin" />;
    case "certificats":
      return <CatalogueForm type="certificat" />;
    default:
      return notFound();
  }
}
