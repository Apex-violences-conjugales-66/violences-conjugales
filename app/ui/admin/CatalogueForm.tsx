"use client";

import {
  createCatalogue,
  createBulletin,
  createCertificat,
} from "@/app/lib/actions";
import { useAdminForm } from "@/app/lib/hooks";
import { SubmitButton } from "@/app/ui/admin/ActionButtons";
import Link from "next/link";

export default function CatalogueForm({
  type,
}: {
  type: "catalogue" | "bulletin" | "certificat";
}) {
  const isCatalogue = type === "catalogue";
  const label = isCatalogue
    ? "Catalogue"
    : type === "bulletin"
      ? "Bulletin"
      : "Certificat";
  const action = isCatalogue
    ? createCatalogue
    : type === "bulletin"
      ? createBulletin
      : createCertificat;
  const redirectHash = isCatalogue
    ? "catalogues"
    : type === "bulletin"
      ? "bulletins"
      : "certificats";

  const { handleSubmit, isPending } = useAdminForm(action, redirectHash);

  return (
    <form action={handleSubmit} className="flex flex-col">
      <h1 className="mb-4">Ajouter un {label.toLowerCase()}</h1>
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
            placeholder={String(new Date().getFullYear())}
            className="w-full p-2 border border-slate-300 rounded-md focus:outline-blue-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="file" className="block font-medium mb-1">
            Fichier ({label})
          </label>
          <input
            required
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
          Ajouter {label}
        </SubmitButton>
      </div>
    </form>
  );
}
