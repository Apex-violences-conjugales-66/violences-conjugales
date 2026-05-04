import Dashboard from "@/app/ui/admin/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tableau Administrateur",
  description:
    "Tableaux de bord administrateur pour gérer les données du site.",
};

export default function AdminPage() {
  return (
    <main>
      <Dashboard />
    </main>
  );
}
