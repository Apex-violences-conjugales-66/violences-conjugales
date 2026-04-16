import LoginForm from "@/app/ui/login/LoginForm";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Suspense>
        <LoginForm />
      </Suspense>
    </main>
  );
}
