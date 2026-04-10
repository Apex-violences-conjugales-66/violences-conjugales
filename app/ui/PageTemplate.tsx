import { getPageData, PageData } from "@/app/lib/data";
import Footer from "@/app/ui/Footer";
import Navbar from "@/app/ui/Navbar";
import SectionRenderer from "@/app/ui/SectionRenderer";
import { FunctionComponent } from "react";
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
