import { FunctionComponent } from "react";
import { getPageData, PageData } from "../../lib/data";
import SectionRenderer from "./SectionRenderer";

interface PageTemplateProps {
  name: string;
}

const PageTemplate: FunctionComponent<PageTemplateProps> = ({ name }) => {
  const page: PageData = getPageData(name);
  return (
    <>
      {page.sections.map((section, index) => (
        <SectionRenderer key={index} section={section} />
      ))}
    </>
  );
};

export default PageTemplate;
