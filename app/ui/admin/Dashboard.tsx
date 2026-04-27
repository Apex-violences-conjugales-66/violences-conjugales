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
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function Dashboard() {
  const members = await fetchMembers();
  const partners = await fetchPartners();
  const formations = await fetchFormations();
  const documents = await fetchDocuments();
  const books = await fetchBooks();
  const movies = await fetchMovies();
  const memoirs = await fetchMemoirs();
  const catalogues = await fetchCatalogues();
  const bulletins = await fetchBulletins();
  const certificats = await fetchCertificats();

  return (
    <div id="top" className="scroll-mt-12">
      <div className="flex items-center justify-between">
        <h1 className="border border-slate-200 rounded-md px-6 py-4 w-fit">
          Dashboard tables
        </h1>
        <Link
          href="/"
          className="flex gap-4 items-center border border-slate-200 rounded-md px-6 py-4 w-fit"
        >
          <ChevronLeft className="h-10" />
          <h1>Retour au site</h1>
          <LogoApex className="w-10" />
        </Link>
      </div>
      <div className="flex flex-col gap-8 mt-8 smooth-scroll">
        <section id="catalogue" className="scroll-mt-6">
          <Table
            name="catalogues des formations"
            entry="catalogues"
            data={catalogues}
            buttonLabel="catalogue"
          />
        </section>
        <section id="bulletin" className="scroll-mt-6">
          <Table
            name="bulletins d'inscription"
            entry="bulletins"
            data={bulletins}
            buttonLabel="bulletin"
          />
        </section>
        <section id="certificats" className="scroll-mt-6">
          <Table name="certificats" entry="certificats" data={certificats} />
        </section>
        <section id="members" className="scroll-mt-6">
          <Table name="membres" entry="members" data={members} />
        </section>
        <section id="partners" className="scroll-mt-6">
          <Table name="partnenaires" entry="partners" data={partners} />
        </section>
        <section id="formations" className="scroll-mt-6">
          <Table name="formations" entry="formations" data={formations} />
        </section>
        <section id="documents" className="scroll-mt-6">
          <Table name="documents" entry="documents" data={documents} />
        </section>
        <section id="books" className="scroll-mt-6">
          <Table name="livres" entry="books" data={books} />
        </section>
        <section id="movies" className="scroll-mt-6">
          <Table name="films" entry="movies" data={movies} />
        </section>
        <section id="memoirs" className="scroll-mt-6">
          <Table name="memoires" entry="memoirs" data={memoirs} />
        </section>
      </div>
    </div>
  );
}
