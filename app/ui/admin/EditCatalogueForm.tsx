"use client";

import { updateCatalogue, updateBulletin } from "@/app/lib/actions";
import { useAdminForm } from "@/app/lib/hooks";
import { Catalogue, Bulletin } from "@/app/lib/definitions";
import { SubmitButton } from "@/app/ui/admin/ActionButtons";
import Link from "next/link";

export default function EditCatalogueForm({
  id,
  type,
  data,
}: {
  id: string;
  type: "catalogue" | "bulletin";
  data: Catalogue | Bulletin;
}) {
  const isCatalogue = type === "catalogue";
  const label = isCatalogue ? "Catalogue" : "Bulletin";
  const action = isCatalogue ? updateCatalogue : updateBulletin;
  const redirectHash = isCatalogue ? "catalogues" : "bulletins";

  const { handleSubmit, isPending } = useAdminForm(
    action.bind(null, id),
    redirectHash,
  );

  return (
    <form action={handleSubmit} className="flex flex-col">
      <h1 className="mb-4">Modifier un {label.toLowerCase()}</h1>
      <div className="flex flex-col bg-slate-200 p-6 gap-4 rounded-md">
        <div className="mb-2">
          <label htmlFor="year" className="block font-medium mb-1">
            Année
          </label>
          <input
            required
            id="year"
            name="year"
            type="number"
            min={1900}
            max={2100}
            defaultValue={data.year}
            className="w-full p-2 border border-slate-300 rounded-md focus:outline-blue-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="file" className="block font-medium mb-1">
            Fichier ({label})
            <span className="ml-2 text-sm font-normal text-slate-500">
              (laisser vide pour conserver le fichier actuel)
            </span>
          </label>
          <input
            id="file"
            name="file"
            type="file"
            accept=".pdf"
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
