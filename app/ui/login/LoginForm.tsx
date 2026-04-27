"use client";

import { authenticate } from "@/app/lib/actions";
import Button from "@/app/ui/Button";
import LogoApex from "@/app/ui/LogoApex";
import Link from "next/link";

import { useFormState } from "react-dom";

export default function LoginForm() {
  const [errorMessage, formAction] = useFormState(authenticate, undefined);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-6 justify-center items-center"
    >
      <Link href="/" className="hover:opacity-70 transition-opacity">
        <LogoApex size={128} className="mb-10" />
      </Link>
      <h3>Connexion administrateur</h3>
      <div className="flex flex-col gap-2 min-w-[200px] md:min-w-[300px]">
        <div className="flex flex-col rounded-sm border p-1">
          <label htmlFor="email">Email</label>
          <input
            className="outline-none"
            id="email"
            name="email"
            type="email"
            placeholder="John@example.com"
            required
          />
        </div>
        <div className="flex flex-col rounded-sm border p-1">
          <label htmlFor="password">Mot de passe</label>
          <input
            className="outline-none "
            id="password"
            name="password"
            type="password"
            placeholder="Votre mot de passe"
            required
          />
        </div>
      </div>
      <Button className="bg-orange-500 text-3xl py-2">Connexion</Button>
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
      </div>
    </form>
  );
}
