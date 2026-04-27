// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.

export type FormEntry =
  | "members"
  | "partners"
  | "formations"
  | "books"
  | "movies"
  | "documentResources"
  | "memoirs";

export type Partner = {
  id: string;
  name: string;
  type: "associatif" | "institutionnel";
  imageUrl: string;
};

export type Member = {
  id: string;
  name: string;
  title: string;
  type: "bureau" | "administration" | "equipe";
};

export type Catalogue = {
  id: string;
  year: number;
  catalogueUrl: string;
  uploadedAt: Date;
};

export type Bulletin = {
  id: string;
  year: number;
  bulletinUrl: string;
  uploadedAt: Date;
};

export type Formation = {
  id: string;
  name: string;
  date: string;
  year: number;
  status: "available" | "full";
  target: string;
  instructor: string;
};

export type DocumentResource = {
  id: number;
  name: string;
  documentUrl: string;
};

export type Memoir = {
  id: string;
  author: string;
  title: string;
  description: string;
  documentUrl: string;
};

export type Book = {
  id: string;
  author: string;
  title: string;
  description: string;
};

export type Movie = {
  id: string;
  title: string;
  description: string;
  movieUrl: string;
};

export type DocumentCardProps = {
  id: string;
  name: string;
  documentUrl: string;
  onClick: () => void;
};
