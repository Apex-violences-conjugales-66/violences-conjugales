"use client";

import { deleteEntry } from "@/app/lib/actions";
import { FormEntry } from "@/app/lib/definitions";
import { cn } from "@/app/lib/utils";
import { Ban, Cross, Loader, Pen, Plus, Trash } from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useFormStatus } from "react-dom";

export function AddButton({
  entry,
  buttonLabel,
}: {
  entry: string;
  buttonLabel?: string;
}) {
  return (
    <Link
      href={`/admin/create?entry=${entry}`}
      className="flex gap-6 border bg-green-600 text-white items-center font-medium px-4 rounded-md hover:bg-green-500 transition-colors"
    >
      Ajouter {buttonLabel ? buttonLabel : entry.slice(0, -1)}
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
  blobUrl,
}: {
  table: FormEntry;
  id: string | number;
  blobUrl?: string;
}) {
  const [confirming, setConfirming] = useState(false);
  const [isPending, startTransition] = useTransition();

  if (confirming) {
    return (
      <div className="flex gap-2">
        <button
          onClick={() => startTransition(() => deleteEntry(table, id, blobUrl))}
          disabled={isPending}
          className="border border-red-400 bg-red-50 text-red-600 px-2 py-1 text-xs rounded-md hover:bg-red-100 transition-colors disabled:opacity-50"
        >
          {isPending ? (
            <Loader size={14} className="animate-spin" />
          ) : (
            <div className="flex items-center gap-1 font-medium">
              <p>Confirmer</p>
              <Trash size={14} />
            </div>
          )}
        </button>
        <button
          onClick={() => setConfirming(false)}
          disabled={isPending}
          className="border border-slate-300 px-2 py-1 text-xs rounded-md hover:bg-slate-200 transition-colors disabled:opacity-50"
        >
          <Ban size={14} />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="border border-slate-300 p-2 rounded-md hover:bg-slate-200 transition-colors"
    >
      <Trash size={16} />
    </button>
  );
}

export function SubmitButton({
  children,
  className,
  isPending: externalPending,
}: {
  children: React.ReactNode;
  className?: string;
  isPending?: boolean;
}) {
  const { pending } = useFormStatus();
  const isLoading = externalPending ?? pending;

  return (
    <button
      type="submit"
      disabled={isLoading}
      className={cn("flex items-center gap-2 disabled:opacity-50", className)}
    >
      {isLoading && <Loader size={16} className="animate-spin" />}
      {children}
    </button>
  );
}
