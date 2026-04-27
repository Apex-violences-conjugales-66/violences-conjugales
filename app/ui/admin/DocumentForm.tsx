"use client";

import { createDocument } from "@/app/lib/actions";
import { useAdminForm } from "@/app/lib/hooks";
import { SubmitButton } from "@/app/ui/admin/ActionButtons";
import Link from "next/link";

export default function DocumentForm() {
  const { handleSubmit, isPending } = useAdminForm(createDocument, "documents");

  return (
    <form action={handleSubmit} className="flex flex-col">
      <h1 className="mb-4">Ajouter un document</h1>
      <div className="flex flex-col bg-slate-200 p-6 gap-4 rounded-md">
        <div className="mb-2">
          <label htmlFor="name" className="block font-medium mb-1">
            Nom
          </label>
          <input
            required
            id="name"
            name="name"
            placeholder="Nom du document"
            className="w-full p-2 border border-slate-300 rounded-md focus:outline-blue-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="document" className="block font-medium mb-1">
            Fichier
          </label>
          <input
            required
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
        <SubmitButton isPending={isPending} className="rounded-full bg-green-500 text-white font-medium px-4 py-2">
          Ajouter Document
        </SubmitButton>
      </div>
    </form>
  );
}
