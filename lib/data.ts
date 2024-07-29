import fs from "fs";
import path from "path";

export interface Memoir {
  author: string;
  title: string;
  description: string;
}

export interface Section {
  name: string;
  title?: string;
  reverse?: boolean;
  memoirs?: Memoir[];
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
