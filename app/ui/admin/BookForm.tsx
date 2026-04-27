"use client";

import { createBook } from "@/app/lib/actions";
import { useAdminForm } from "@/app/lib/hooks";
import { SubmitButton } from "@/app/ui/admin/ActionButtons";
import Link from "next/link";

export default function BookForm() {
  const { handleSubmit, isPending } = useAdminForm(createBook, "books");

  return (
    <form action={handleSubmit} className="flex flex-col">
      <h1 className="mb-4">Ajouter un livre</h1>
      <div className="flex flex-col bg-slate-200 p-6 gap-4 rounded-md">
        <div className="mb-2">
          <label htmlFor="author" className="block font-medium mb-1">
            Auteur
          </label>
          <input
            required
            id="author"
            name="author"
            placeholder="Auteur du livre"
            className="w-full p-2 border border-slate-300 rounded-md focus:outline-blue-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="title" className="block font-medium mb-1">
            Titre
          </label>
          <input
            required
            id="title"
            name="title"
            placeholder="Titre du livre"
            className="w-full p-2 border border-slate-300 rounded-md focus:outline-blue-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Description du livre"
            rows={4}
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
          Ajouter Livre
        </SubmitButton>
      </div>
    </form>
  );
}
