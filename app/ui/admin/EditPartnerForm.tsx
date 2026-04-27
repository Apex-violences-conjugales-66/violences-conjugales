"use client";

import { updatePartner } from "@/app/lib/actions";
import { Partner } from "@/app/lib/definitions";
import { SubmitButton } from "@/app/ui/admin/ActionButtons";
import Link from "next/link";

export default function EditPartnerForm({
  id,
  partner,
}: {
  id: string;
  partner: Partner;
}) {
  const updatePartnerWithId = updatePartner.bind(null, id);
  return (
    <form action={updatePartnerWithId} className="flex flex-col">
      <h1 className="mb-4">Modifier un partenaire</h1>
      <div className="flex flex-col bg-slate-200 p-6 gap-4 rounded-md">
        <div className="mb-2">
          <label htmlFor="name" className="block font-medium mb-1">
            Nom
          </label>
          <input
            required
            id="name"
            name="name"
            defaultValue={partner.name}
            placeholder="Nom du partenaire"
            className="w-full p-2 border border-slate-300 rounded-md focus:outline-blue-500"
          />
        </div>
        <fieldset>
          <legend className="mb-1 font-medium">Quel type ?</legend>
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="associatif"
                name="type"
                value="associatif"
                defaultChecked={partner.type === "associatif"}
                className="size-4"
              />
              <label
                htmlFor="associatif"
                className="cursor-pointer px-4 py-2 border bg-white rounded-full"
              >
                Associatif
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="institutionnel"
                name="type"
                value="institutionnel"
                defaultChecked={partner.type === "institutionnel"}
                className="size-4"
              />
              <label
                htmlFor="institutionnel"
                className="cursor-pointer px-4 py-2 border bg-white rounded-full"
              >
                Institutionnel
              </label>
            </div>
          </div>
        </fieldset>
        <div className="mb-2">
          <label htmlFor="image" className="block font-medium mb-1">
            Logo
            <span className="ml-2 text-sm font-normal text-slate-500">
              (laisser vide pour conserver l&apos;image actuelle)
            </span>
          </label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
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
        <SubmitButton className="rounded-full bg-green-500 text-white font-medium px-4 py-2">
          Mettre à jour
        </SubmitButton>
      </div>
    </form>
  );
}
