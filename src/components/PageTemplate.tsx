import { FunctionComponent } from "react";
import { getPageData, PageData } from "../../lib/data";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SectionRenderer from "./SectionRenderer";

interface PageTemplateProps {
  name: string;
}

const PageTemplate: FunctionComponent<PageTemplateProps> = ({ name }) => {
  const page: PageData = getPageData(name);
  return (
    <>
      <Navbar />
      {page.sections.map((section, index) => (
        <SectionRenderer key={index} section={section} />
      ))}
      <Footer />
    </>
  );
};

export default PageTemplate;
