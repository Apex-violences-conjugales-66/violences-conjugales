import { FunctionComponent } from "react";
import { Section } from "../../lib/data";
import Header from "./sections/Header";
import Projet from "./sections/Projet";

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
    default:
      return null;
  }
};

export default SectionRenderer;
