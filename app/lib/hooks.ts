"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export function useAdminForm(
  action: (formData: FormData) => Promise<void>,
  redirectHash: string,
) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      await action(formData);
      router.push(`/admin#${redirectHash}`);
    });
  }

  return { handleSubmit, isPending };
}
