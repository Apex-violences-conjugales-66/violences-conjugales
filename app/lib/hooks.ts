"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

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
