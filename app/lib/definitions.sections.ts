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

export interface SectionBase {
  name: string;
}

export interface ISectionSimple extends SectionBase {
  name:
    | "homeheader"
    | "introduction"
    | "donations"
    | "actions"
    | "formationShowcase";
}

export interface ISectionProjet extends SectionBase {
  name: "projet";
  members: Member[];
}

export interface ISectionPartners extends SectionBase {
  name: "partners";
  partners: Partner[];
}

export interface ISectionTeam extends SectionBase {
  name: "team";
  members: Member[];
}

export interface ISectionFormation extends SectionBase {
  name: "formationSection";
  catalogue: Catalogue;
  bulletin: Bulletin;
  certificat: Certificat;
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
  | ISectionProjet
  | ISectionFormation
  | ISectionDocumentsSection
  | ISectionMediagraphie
  | ISectionMemoires
  | ISectionPartners;
