import { DocumentResource } from "@/app/lib/definitions";
import DocumentsGallery from "@/app/ui/ressources/DocumentsGallery";
import SectionComponent from "@/app/ui/SectionComponent";
import Title from "@/app/ui/Title";

export default function DocumentsSection({
  documents,
}: {
  documents: DocumentResource[];
}) {
  return (
    <SectionComponent isFirst={true} withSideBorders={true} bgColor="orange">
      <div className="container w-full py-14 flex flex-col items-center">
        <Title id="documents">Doc. Institutions</Title>
        <DocumentsGallery documents={documents} />
      </div>
    </SectionComponent>
  );
}
