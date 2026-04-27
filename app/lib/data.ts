"use server";

import postgres from "postgres";
import {
  Book,
  Bulletin,
  Catalogue,
  Certificat,
  DocumentResource,
  Formation,
  Member,
  Memoir,
  Movie,
  Partner,
} from "@/app/lib/definitions";
import { Section } from "@/app/lib/definitions.sections";

const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: "require",
  transform: postgres.camel,
});

export async function fetchMembers() {
  try {
    const members = await sql<
      Member[]
    >`SELECT * FROM members ORDER BY CASE type WHEN 'equipe' THEN 1 WHEN 'administration' THEN 2 ELSE 3 END, name ASC`;
    return members;
  } catch (error) {
    throw new Error("Failed to fetch members");
  }
}

export async function fetchMemberbyId(id: string): Promise<Member | null> {
  try {
    const data = await sql<Member[]>`
      SELECT * FROM members WHERE id = ${id}
    `;
    return data[0] ?? null;
  } catch {
    throw new Error("Failed to fetch member");
  }
}

export async function fetchCatalogues() {
  try {
    const data = await sql<
      Catalogue[]
    >`SELECT * FROM catalogues ORDER BY year DESC`;
    return data;
  } catch (error) {
    console.log("🚀 ~ fetchCatalogues ~ error:", error);
    throw new Error("Failed to fetch catalogues");
  }
}

export async function fetchCatalogueById(
  id: string,
): Promise<Catalogue | null> {
  try {
    const data = await sql<Catalogue[]>`
      SELECT * FROM catalogues WHERE id = ${id}
    `;
    return data[0] ?? null;
  } catch {
    throw new Error("Failed to fetch catalogue");
  }
}

export async function fetchBulletins() {
  try {
    const data = await sql<
      Bulletin[]
    >`SELECT * FROM bulletins ORDER BY year DESC`;
    return data;
  } catch (error) {
    console.log("🚀 ~ fetchBulletins ~ error:", error);
    throw new Error("Failed to fetch bulletins");
  }
}

export async function fetchBulletinById(id: string): Promise<Bulletin | null> {
  try {
    const data = await sql<Bulletin[]>`
      SELECT * FROM bulletins WHERE id = ${id}
    `;
    return data[0] ?? null;
  } catch {
    throw new Error("Failed to fetch bulletin");
  }
}

export async function fetchLatestCatalogue() {
  try {
    const data = await sql<
      Catalogue[]
    >`SELECT * FROM catalogues ORDER BY year DESC LIMIT 1`;
    return data[0] ?? null;
  } catch (error) {
    console.log("🚀 ~ fetchLatestCatalogue ~ error:", error);
    throw new Error("Failed to fetch latest catalogue");
  }
}

export async function fetchLatestBulletin() {
  try {
    const data = await sql<
      Bulletin[]
    >`SELECT * FROM bulletins ORDER BY year DESC LIMIT 1`;
    return data[0] ?? null;
  } catch (error) {
    console.log("🚀 ~ fetchLatestBulletin ~ error:", error);
    throw new Error("Failed to fetch latest bulletin");
  }
}

export async function fetchLatestCertificat() {
  try {
    const data = await sql<
      Certificat[]
    >`SELECT * FROM certificats ORDER BY year DESC LIMIT 1`;
    return data[0] ?? null;
  } catch (error) {
    console.log("🚀 ~ fetchLatestCertificat ~ error:", error);
    throw new Error("Failed to fetch latest certificat");
  }
}

export async function fetchCertificats() {
  try {
    const data = await sql<
      Certificat[]
    >`SELECT * FROM certificats ORDER BY year DESC`;
    return data;
  } catch (error) {
    console.log("🚀 ~ fetchCertificats ~ error:", error);
    throw new Error("Failed to fetch certificats");
  }
}

export async function fetchCertificatById(
  id: string,
): Promise<Certificat | null> {
  try {
    const data = await sql<Certificat[]>`
      SELECT * FROM certificats WHERE id = ${id}
    `;
    return data[0] ?? null;
  } catch {
    throw new Error("Failed to fetch certificat");
  }
}

export async function fetchFormations() {
  try {
    const data = await sql<
      Formation[]
    >`SELECT * FROM formations ORDER BY year DESC, name ASC`;
    return data;
  } catch (error) {
    throw new Error("Failed to fetch formations");
  }
}

export async function fetchFormationById(
  id: string,
): Promise<Formation | null> {
  try {
    const data = await sql<Formation[]>`
      SELECT * FROM formations WHERE id = ${id}
    `;
    return data[0] ?? null;
  } catch {
    throw new Error("Failed to fetch formation");
  }
}

export async function fetchDocuments() {
  try {
    const data = await sql<
      DocumentResource[]
    >`SELECT * FROM document_resources`;
    return data;
  } catch (error) {
    console.error("fetchDocuments error:", error);
    throw error;
  }
}

export async function fetchDocumentById(
  id: string,
): Promise<DocumentResource | null> {
  try {
    const data = await sql<DocumentResource[]>`
      SELECT * FROM document_resources WHERE id = ${id}
    `;
    return data[0] ?? null;
  } catch {
    throw new Error("Failed to fetch document");
  }
}

export async function fetchMovies() {
  try {
    const data = await sql<Movie[]>`SELECT * FROM movies`;
    return data;
  } catch (error) {
    throw new Error("Failed to fetch movies");
  }
}

export async function fetchBooks() {
  try {
    const data = await sql<Book[]>`SELECT * FROM books`;
    return data;
  } catch (error) {
    throw new Error("Failed to fetch books");
  }
}

export async function fetchMemoirs() {
  try {
    const data = await sql<Memoir[]>`SELECT * FROM memoirs`;
    return data;
  } catch (error) {
    throw new Error("Failed to fetch memoirs");
  }
}

export async function fetchBookById(id: string): Promise<Book | null> {
  try {
    const data = await sql<Book[]>`SELECT * FROM books WHERE id = ${id}`;
    return data[0] ?? null;
  } catch {
    throw new Error("Failed to fetch book");
  }
}

export async function fetchMovieById(id: string): Promise<Movie | null> {
  try {
    const data = await sql<Movie[]>`SELECT * FROM movies WHERE id = ${id}`;
    return data[0] ?? null;
  } catch {
    throw new Error("Failed to fetch movie");
  }
}

export async function fetchMemoirById(id: string): Promise<Memoir | null> {
  try {
    const data = await sql<Memoir[]>`SELECT * FROM memoirs WHERE id = ${id}`;
    return data[0] ?? null;
  } catch {
    throw new Error("Failed to fetch memoir");
  }
}

export async function fetchPartners() {
  try {
    const data = await sql<
      Partner[]
    >`SELECT * FROM partners ORDER BY CASE type WHEN 'institutionnel' THEN 1 ELSE 2 END, name ASC`;
    return data;
  } catch (error) {
    throw new Error("Failed to fetch partners");
  }
}

export async function fetchPartnerById(id: string): Promise<Partner | null> {
  try {
    const data = await sql<Partner[]>`
      SELECT * FROM partners WHERE id = ${id}
    `;
    return data[0] ?? null;
  } catch {
    throw new Error("Failed to fetch partner");
  }
}

export async function getSections(
  page: "home" | "donate" | "projet" | "formation" | "ressources",
): Promise<Section[]> {
  switch (page) {
    case "home": {
      const members = await fetchMembers();
      const partners = await fetchPartners();
      return [
        { name: "homeheader" },
        { name: "introduction" },
        { name: "actions" },
        { name: "team", members },
        { name: "partners", partners },
        { name: "formationShowcase" },
      ];
    }
    case "donate": {
      return [{ name: "donations" }];
    }
    case "projet": {
      return [{ name: "projet" }];
    }
    case "formation": {
      const catalogue = await fetchLatestCatalogue();
      const bulletin = await fetchLatestBulletin();
      const certificat = await fetchLatestCertificat();
      const formations = await fetchFormations();
      return [
        {
          name: "formationSection",
          catalogue,
          bulletin,
          certificat,
          formations,
        },
      ];
    }
    case "ressources": {
      const documents = await fetchDocuments();
      const movies = await fetchMovies();
      const books = await fetchBooks();
      const memoirs = await fetchMemoirs();
      return [
        { name: "documentsSection", documents },
        { name: "mediagraphie", movies, books },
        { name: "memoires", memoirs },
      ];
    }
    default:
      return [];
  }
}
