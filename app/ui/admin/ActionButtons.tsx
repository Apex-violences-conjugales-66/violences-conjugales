"use client";

import { deleteEntry } from "@/app/lib/actions";
import { cn } from "@/app/lib/utils";
import { Loader, Pen, Plus, Trash } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
import { useFormStatus } from "react-dom";

export function AddButton({ entry }: { entry: string }) {
  return (
    <Link
      href={`/admin/create?entry=${entry}`}
      className="flex gap-6 border bg-green-600 text-white items-center font-medium px-4 rounded-md hover:bg-green-500 transition-colors"
    >
      Ajouter {entry.slice(0, -1)}
      <Plus size={20} />
    </Link>
  );
}

export function EditButton({
  id,
  entry,
}: {
  id: string | number;
  entry: string;
}) {
  return (
    <Link
      href={`/admin/${id}/edit?entry=${entry}`}
      className="border border-slate-300 p-2 rounded-md hover:bg-slate-200 transition-colors"
    >
      <Pen size={16} />
    </Link>
  );
}

export function DeleteButton({
  table,
  id,
}: {
  table: string;
  id: string | number;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => deleteEntry(table, id))}
      disabled={isPending}
      className="border border-slate-300 p-2 rounded-md hover:bg-slate-200 transition-colors disabled:opacity-50"
    >
      {isPending ? (
        <Loader size={16} className="animate-spin" />
      ) : (
        <Trash size={16} />
      )}
    </button>
  );
}

export function SubmitButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={cn("flex items-center gap-2 disabled:opacity-50", className)}
    >
      {pending && <Loader size={16} className="animate-spin" />}
      {children}
    </button>
  );
}
