"use client";

import { updateFormation } from "@/app/lib/actions";
import { useAdminForm } from "@/app/lib/hooks";
import { Formation } from "@/app/lib/definitions";
import { SubmitButton } from "@/app/ui/admin/ActionButtons";
import Link from "next/link";

export default function EditFormationForm({
  id,
  formation,
}: {
  id: string;
  formation: Formation;
}) {
  const { handleSubmit, isPending } = useAdminForm(
    updateFormation.bind(null, id),
    "formations",
  );

  return (
    <form action={handleSubmit} className="flex flex-col">
      <h1 className="mb-4">Modifier une formation</h1>
      <div className="flex flex-col bg-slate-200 p-6 gap-4 rounded-md">
        <div className="mb-2">
          <label htmlFor="name" className="block font-medium mb-1">
            Nom
          </label>
          <input
            required
            id="name"
            name="name"
            defaultValue={formation.name}
            placeholder="Nom de la formation"
            className="w-full p-2 border border-slate-300 rounded-md focus:outline-blue-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="date" className="block font-medium mb-1">
            Date
          </label>
          <input
            required
            id="date"
            name="date"
            defaultValue={formation.date}
            placeholder="ex : 8, 9, 10 octobre 2025"
            className="w-full p-2 border border-slate-300 rounded-md focus:outline-blue-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="year" className="block font-medium mb-1">
            Année
          </label>
          <input
            required
            id="year"
            name="year"
            type="number"
            defaultValue={formation.year}
            placeholder="2025"
            className="w-full p-2 border border-slate-300 rounded-md focus:outline-blue-500"
          />
        </div>
        <fieldset>
          <legend className="mb-1 font-medium">Statut</legend>
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="available"
                name="status"
                value="available"
                defaultChecked={formation.status === "available"}
                className="size-4"
              />
              <label
                htmlFor="available"
                className="cursor-pointer px-4 py-2 border bg-white rounded-full"
              >
                Disponible
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="full"
                name="status"
                value="full"
                defaultChecked={formation.status === "full"}
                className="size-4"
              />
              <label
                htmlFor="full"
                className="cursor-pointer px-4 py-2 border bg-white rounded-full"
              >
                Complet
              </label>
            </div>
          </div>
        </fieldset>
        <div className="mb-2">
          <label htmlFor="target" className="block font-medium mb-1">
            Public cible
          </label>
          <input
            required
            id="target"
            name="target"
            defaultValue={formation.target}
            placeholder="Public visé par la formation"
            className="w-full p-2 border border-slate-300 rounded-md focus:outline-blue-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="instructor" className="block font-medium mb-1">
            Formateur·trice(s)
          </label>
          <input
            required
            id="instructor"
            name="instructor"
            defaultValue={formation.instructor}
            placeholder="Nom du/de la formateur·trice"
            className="w-full p-2 border border-slate-300 rounded-md focus:outline-blue-500"
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
