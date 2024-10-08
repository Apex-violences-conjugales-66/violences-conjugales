import { FunctionComponent } from "react";
import { Section } from "../lib/data";
import Header from "./sections/Header";
import Projet from "./sections/Projet";
import HomeHeader from "@/components/HomeHeader";
import Actions from "@/components/sections/Actions";
import Donations from "@/components/sections/Donations";
import Introduction from "@/components/sections/Introduction";
import Partners from "@/components/sections/Partners";
import Team from "@/components/sections/Team";
import Documents from "./sections/Documents";
import Memoires from "./sections/Memoires";
import Mediagraphie from "./sections/Mediagraphie";
import Formation from "./sections/Formation";
import FormationShowcase from "./sections/FormationShowcase";

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
      return <Team />;
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
