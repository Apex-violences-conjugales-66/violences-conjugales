import { Formation } from "@/app/ui/sections/Formation";
import { Book, Movie } from "@/app/ui/sections/Mediagraphie";
import { Memoir } from "@/app/ui/sections/Memoires";
import { Membre } from "@/app/ui/sections/Team";
import fs from "fs";
import path from "path";

export interface Section {
  name: string;
  title?: string;
  reverse?: boolean;
  personnel: Membre[];
  conseil: Membre[];
  administrateurs: Membre[];
  memoirs: Memoir[];
  books: Book[];
  movies: Movie[];
  documents: Document[];
  formations: Formation[];
}

export interface PageData {
  sections: Section[];
}

export const getPageData = (pageId: string): PageData => {
  const filePath = path.join(process.cwd(), "app/data/pages", `${pageId}.json`);
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const pageData = JSON.parse(jsonData);
  return pageData;
};
