"use server";

import postgres from "postgres";
import {
  Book,
  Bulletin,
  Catalogue,
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
    const members = await sql<Member[]>`SELECT * FROM members`;
    return members;
  } catch (error) {
    throw new Error("Failed to fetch members");
  }
}

export async function fetchLatestCatalogueAndBulletin() {
  try {
    const [catalogue, bulletin] = await Promise.all([
      sql<
        Catalogue[]
      >`SELECT catalogue_url FROM catalogues ORDER BY year DESC LIMIT 1`,
      sql<
        Bulletin[]
      >`SELECT bulletin_url FROM bulletins ORDER BY year DESC LIMIT 1`,
    ]);

    return {
      catalogueUrl: catalogue[0]?.catalogueUrl ?? null,
      bulletinUrl: bulletin[0]?.bulletinUrl ?? null,
    };
  } catch (error) {
    throw new Error("Failed to fetch latest catalogue and bulletin");
  }
}

export async function fetchFormations() {
  try {
    const data = await sql<Formation[]>`SELECT * FROM formations`;
    return data;
  } catch (error) {
    throw new Error("Failed to fetch formations");
  }
}

export async function fetchDocuments() {
  try {
    const data = await sql<
      DocumentResource[]
    >`SELECT * FROM document_resources`;
    return data;
  } catch (error) {
    throw new Error("Failed to fetch documents");
  }
}

export async function fetchDocumentById(
  id: number,
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

export async function fetchPartners() {
  try {
    const data = await sql<Partner[]>`SELECT * FROM partners`;
    return data;
  } catch (error) {
    throw new Error("Failed to fetch partners");
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
      const data = await fetchLatestCatalogueAndBulletin();
      const catalogueUrl = data.catalogueUrl;
      const bulletinUrl = data.bulletinUrl;
      const formations = await fetchFormations();
      return [
        { name: "formationSection", catalogueUrl, bulletinUrl, formations },
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
