import {
  Book,
  DocumentResource,
  Formation,
  Member,
  Memoir,
  Movie,
} from "@/app/lib/definitions";

export interface SectionBase {
  name: string;
}

export interface ISectionSimple extends SectionBase {
  name:
    | "homeheader"
    | "introduction"
    | "donations"
    | "actions"
    | "partners"
    | "formationShowcase"
    | "projet";
}

export interface ISectionTeam extends SectionBase {
  name: "team";
  members: Member[];
}

export interface ISectionFormation extends SectionBase {
  name: "formationSection";
  bulletinUrl: string;
  catalogueUrl: string;
  formations: Formation[];
}

export interface ISectionDocumentsSection extends SectionBase {
  name: "documentsSection";
  documents: DocumentResource[];
}

export interface ISectionMediagraphie extends SectionBase {
  name: "mediagraphie";
  movies: Movie[];
  books: Book[];
}

export interface ISectionMemoires extends SectionBase {
  name: "memoires";
  memoirs: Memoir[];
}

export type Section =
  | ISectionSimple
  | ISectionTeam
  | ISectionFormation
  | ISectionDocumentsSection
  | ISectionMediagraphie
  | ISectionMemoires;
