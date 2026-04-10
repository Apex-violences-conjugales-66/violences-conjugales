import { FunctionComponent } from "react";
import { Section } from "../lib/data";
import Header from "./sections/Header";
import Projet from "./sections/Projet";
import Documents from "./sections/Documents";
import Memoires from "./sections/Memoires";
import Mediagraphie from "./sections/Mediagraphie";
import Formation from "./sections/Formation";
import FormationShowcase from "./sections/FormationShowcase";
import HomeHeader from "@/app/ui/HomeHeader";
import Actions from "@/app/ui/sections/Actions";
import Donations from "@/app/ui/sections/Donations";
import Introduction from "@/app/ui/sections/Introduction";
import Partners from "@/app/ui/sections/Partners";
import Team from "@/app/ui/sections/Team";

interface SectionRendererProps {
  section: Section;
}

const SectionRenderer: FunctionComponent<SectionRendererProps> = ({
  section,
}: SectionRendererProps) => {
  switch (section.name) {
    case "header":
      return <Header title={section.title} reverse={section.reverse} />;
    case "projet":
      return <Projet />;
    case "home-header":
      return <HomeHeader />;
    case "actions":
      return <Actions />;
    case "donations":
      return <Donations />;
    case "introduction":
      return <Introduction />;
    case "partners":
      return <Partners />;
    case "team":
      return (
        <Team
          conseil={section.conseil}
          administrateurs={section.administrateurs}
          personnel={section.personnel}
        />
      );
    case "documents":
      return <Documents documents={section.documents} />;
    case "memoires":
      return <Memoires memoirs={section.memoirs} />;
    case "mediagraphie":
      return <Mediagraphie books={section.books} movies={section.movies} />;
    case "formation":
      return <Formation formations={section.formations} />;
    case "formationShowcase":
      return <FormationShowcase />;
    default:
      return null;
  }
};

export default SectionRenderer;
