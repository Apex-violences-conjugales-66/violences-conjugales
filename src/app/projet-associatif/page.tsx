import SectionRenderer from "@/components/SectionRenderer";
import { FunctionComponent } from "react";
import { getPageData, PageData } from "../../../lib/data";

interface ProjetAssociatifProps {}

const ProjetAssociatif: FunctionComponent<ProjetAssociatifProps> = () => {
  const page: PageData = getPageData("projet-associatif");
  return (
    <>
      {page.sections.map((section, index) => (
        <SectionRenderer key={index} section={section} />
      ))}
    </>
  );
};

export default ProjetAssociatif;
