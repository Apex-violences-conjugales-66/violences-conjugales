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
    <SectionComponent isFirst={true}>
      <div className="container w-full flex flex-col items-center">
        <Title>Doc. Institutions</Title>
        <DocumentsGallery documents={documents} />
      </div>
    </SectionComponent>
  );
}
