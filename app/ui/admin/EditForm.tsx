import { updateMember } from "@/app/lib/actions";
import {
  fetchMemberbyId,
  fetchPartnerById,
  fetchFormationById,
  fetchDocumentById,
  fetchBookById,
  fetchMovieById,
  fetchMemoirById,
  fetchCatalogueById,
  fetchBulletinById,
} from "@/app/lib/data";
import { FormEntry } from "@/app/lib/definitions";
import EditMemberForm from "@/app/ui/admin/EditMemberForm";
import EditPartnerForm from "@/app/ui/admin/EditPartnerForm";
import EditFormationForm from "@/app/ui/admin/EditFormationForm";
import EditDocumentForm from "@/app/ui/admin/EditDocumentForm";
import EditBookForm from "@/app/ui/admin/EditBookForm";
import EditMovieForm from "@/app/ui/admin/EditMovieForm";
import EditMemoirForm from "@/app/ui/admin/EditMemoirForm";
import EditCatalogueForm from "@/app/ui/admin/EditCatalogueForm";
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
    case "books":
      const book = await fetchBookById(id);
      if (!book) {
        notFound();
      }
      return <EditBookForm id={id} book={book} />;
    case "movies":
      const movie = await fetchMovieById(id);
      if (!movie) {
        notFound();
      }
      return <EditMovieForm id={id} movie={movie} />;
    case "memoirs":
      const memoir = await fetchMemoirById(id);
      if (!memoir) {
        notFound();
      }
      return <EditMemoirForm id={id} memoir={memoir} />;
    case "catalogues":
      const catalogue = await fetchCatalogueById(id);
      if (!catalogue) {
        notFound();
      }
      return <EditCatalogueForm id={id} type="catalogue" data={catalogue} />;
    case "bulletins":
      const bulletin = await fetchBulletinById(id);
      if (!bulletin) {
        notFound();
      }
      return <EditCatalogueForm id={id} type="bulletin" data={bulletin} />;
    default:
      return <p className="text-slate-500">Formulaire introuvable.</p>;
  }
}
