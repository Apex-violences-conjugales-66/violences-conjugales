"use client";

import { createMember } from "@/app/lib/actions";
import { useAdminForm } from "@/app/lib/hooks";
import { SubmitButton } from "@/app/ui/admin/ActionButtons";
import Link from "next/link";

export default function MemberForm() {
  const { handleSubmit, isPending } = useAdminForm(createMember, "members");

  return (
    <form action={handleSubmit} className="flex flex-col">
      <h1 className="mb-4">Ajouter un membre de l&apos;équipe</h1>
      <div className="flex flex-col bg-slate-200 p-6 gap-4 rounded-md">
        <div className="mb-2">
          <label htmlFor="name" className="block font-medium mb-1">
            Nom
          </label>
          <input
            required
            id="name"
            name="name"
            placeholder="Nom de la personne"
            className="w-full p-2 border border-slate-300 rounded-md focus:outline-blue-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="title" className="block font-medium mb-1">
            Profession
          </label>
          <input
            required
            id="title"
            name="title"
            placeholder="Profession de la personne"
            className="w-full p-2 border border-slate-300 rounded-md focus:outline-blue-500"
          />
        </div>
        <fieldset>
          <legend className="mb-1 font-medium">Quel type ?</legend>
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="bureau"
                name="type"
                value="bureau"
                defaultChecked
                className="size-4"
              />
              <label
                htmlFor="bureau"
                className="cursor-pointer px-4 py-2 border bg-white rounded-full"
              >
                Bureau
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="administration"
                name="type"
                value="administration"
                className="size-4"
              />
              <label
                htmlFor="administration"
                className="cursor-pointer px-4 py-2 border bg-white rounded-full"
              >
                Administration
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="equipe"
                name="type"
                value="equipe"
                className="size-4"
              />
              <label
                htmlFor="equipe"
                className="cursor-pointer px-4 py-2 border bg-white rounded-full"
              >
                Équipe
              </label>
            </div>
          </div>
        </fieldset>
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
          Ajouter Membre
        </SubmitButton>
      </div>
    </form>
  );
}
