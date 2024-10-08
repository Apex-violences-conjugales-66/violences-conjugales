import { Document } from "@/components/sections/Documents";
import { Formation } from "@/components/sections/Formation";
import { Book, Movie } from "@/components/sections/Mediagraphie";
import { Memoir } from "@/components/sections/Memoires";
import fs from "fs";
import path from "path";

export interface Section {
  name: string;
  title?: string;
  reverse?: boolean;
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
  const filePath = path.join(process.cwd(), "src/data/pages", `${pageId}.json`);
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const pageData = JSON.parse(jsonData);
  return pageData;
};
