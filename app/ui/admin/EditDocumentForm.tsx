"use client";

import { updateDocument } from "@/app/lib/actions";
import { useAdminForm } from "@/app/lib/hooks";
import { DocumentResource } from "@/app/lib/definitions";
import { SubmitButton } from "@/app/ui/admin/ActionButtons";
import Link from "next/link";

export default function EditDocumentForm({
  id,
  document,
}: {
  id: string;
  document: DocumentResource;
}) {
  const { handleSubmit, isPending } = useAdminForm(
    updateDocument.bind(null, id),
    "documents",
  );

  return (
    <form action={handleSubmit} className="flex flex-col">
      <h1 className="mb-4">Modifier un document</h1>
      <div className="flex flex-col bg-slate-200 p-6 gap-4 rounded-md">
        <div className="mb-2">
          <label htmlFor="name" className="block font-medium mb-1">
            Nom
          </label>
          <input
            required
            id="name"
            name="name"
            defaultValue={document.name}
            placeholder="Nom du document"
            className="w-full p-2 border border-slate-300 rounded-md focus:outline-blue-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="document" className="block font-medium mb-1">
            Fichier
            <span className="ml-2 text-sm font-normal text-slate-500">
              (laisser vide pour conserver le fichier actuel)
            </span>
          </label>
          <input
            id="document"
            name="document"
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full p-2 border border-slate-300 rounded-md bg-white focus:outline-blue-500"
          />
        </div>
      </div>
      <div className="flex gap-4 self-end mt-4">
        <Link
          href="/admin"
          className="rounded-full bg-red-500 text-white font-medium px-4 py-2"
        >
          Annuler
        </Link>
        <SubmitButton
          isPending={isPending}
          className="rounded-full bg-green-500 text-white font-medium px-4 py-2"
        >
          Mettre à jour
        </SubmitButton>
      </div>
    </form>
  );
}
