import {
  fetchBooks,
  fetchBulletins,
  fetchCatalogues,
  fetchCertificats,
  fetchDocuments,
  fetchFormations,
  fetchMembers,
  fetchMemoirs,
  fetchMovies,
  fetchPartners,
} from "@/app/lib/data";
import LogoApex from "@/app/ui/LogoApex";
import Table from "@/app/ui/Table";
import { signOut } from "@/auth";
import { ArrowBigLeft, LogOut } from "lucide-react";
import Link from "next/link";

export default async function Dashboard() {
  const [
    members,
    partners,
    formations,
    documents,
    books,
    movies,
    memoirs,
    catalogues,
    bulletins,
    certificats,
  ] = await Promise.all([
    fetchMembers(),
    fetchPartners(),
    fetchFormations(),
    fetchDocuments(),
    fetchBooks(),
    fetchMovies(),
    fetchMemoirs(),
    fetchCatalogues(),
    fetchBulletins(),
    fetchCertificats(),
  ]);

  return (
    <div id="top" className="scroll-mt-12">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex text-orange-500 gap-4 items-center border-2 rounded-md px-6 py-4 w-fit border-orange-500 hover:bg-orange-50 transition-colors"
        >
          <ArrowBigLeft className="h-10" />
          <h1>Site</h1>
          <LogoApex className="w-10" />
        </Link>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            className="flex gap-4 items-center border-2 rounded-md px-6 py-4 w-fit border-red-500 hover:bg-red-50 transition-colors text-red-500"
          >
            <LogOut className="h-10" />
            <h1>Déconnexion</h1>
          </button>
        </form>
      </div>
      <h1 className="border border-slate-200 rounded-md px-6 py-4 w-fit mt-6">
        Tables administrateur
      </h1>
      <div className="flex flex-col gap-8 mt-8 smooth-scroll">
        <section id="catalogue" className="scroll-mt-6">
          <Table
            name="catalogues des formations"
            entry="catalogues"
            data={catalogues}
            buttonLabel="Catalogue"
          />
        </section>
        <section id="bulletin" className="scroll-mt-6">
          <Table
            name="bulletins d'inscription"
            entry="bulletins"
            data={bulletins}
            buttonLabel="Bulletin"
          />
        </section>
        <section id="certificats" className="scroll-mt-6">
          <Table
            name="certificats"
            entry="certificats"
            data={certificats}
            buttonLabel="Certificat"
          />
        </section>
        <section id="members" className="scroll-mt-6">
          <Table
            name="membres"
            entry="members"
            data={members}
            buttonLabel="Membre"
          />
        </section>
        <section id="partners" className="scroll-mt-6">
          <Table
            name="partenaires"
            entry="partners"
            data={partners}
            buttonLabel="Partenaire"
          />
        </section>
        <section id="formations" className="scroll-mt-6">
          <Table
            name="formations"
            entry="formations"
            data={formations}
            buttonLabel="Formation"
          />
        </section>
        <section id="documents" className="scroll-mt-6">
          <Table
            name="documents"
            entry="document_resources"
            data={documents}
            buttonLabel="Document"
          />
        </section>
        <section id="books" className="scroll-mt-6">
          <Table name="livres" entry="books" data={books} buttonLabel="Livre" />
        </section>
        <section id="movies" className="scroll-mt-6">
          <Table name="films" entry="movies" data={movies} buttonLabel="Film" />
        </section>
        <section id="memoirs" className="scroll-mt-6">
          <Table
            name="memoires"
            entry="memoirs"
            data={memoirs}
            buttonLabel="Mémoire"
          />
        </section>
      </div>
    </div>
  );
}
