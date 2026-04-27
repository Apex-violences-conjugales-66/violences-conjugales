"use client";

import { updateMovie } from "@/app/lib/actions";
import { useAdminForm } from "@/app/lib/hooks";
import { Movie } from "@/app/lib/definitions";
import { SubmitButton } from "@/app/ui/admin/ActionButtons";
import Link from "next/link";

export default function EditMovieForm({
  id,
  movie,
}: {
  id: string;
  movie: Movie;
}) {
  const { handleSubmit, isPending } = useAdminForm(
    updateMovie.bind(null, id),
    "movies",
  );

  return (
    <form action={handleSubmit} className="flex flex-col">
      <h1 className="mb-4">Modifier un film</h1>
      <div className="flex flex-col bg-slate-200 p-6 gap-4 rounded-md">
        <div className="mb-2">
          <label htmlFor="title" className="block font-medium mb-1">
            Titre
          </label>
          <input
            required
            id="title"
            name="title"
            defaultValue={movie.title}
            placeholder="Titre du film"
            className="w-full p-2 border border-slate-300 rounded-md focus:outline-blue-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            required
            id="description"
            name="description"
            defaultValue={movie.description}
            placeholder="Description du film"
            rows={4}
            className="w-full p-2 border border-slate-300 rounded-md focus:outline-blue-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="movieUrl" className="block font-medium mb-1">
            URL du film
          </label>
          <input
            required
            id="movieUrl"
            name="movieUrl"
            type="url"
            defaultValue={movie.movieUrl}
            placeholder="https://..."
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
          Modifier Film
        </SubmitButton>
      </div>
    </form>
  );
}
