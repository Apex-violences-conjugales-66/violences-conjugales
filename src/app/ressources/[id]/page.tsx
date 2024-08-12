import DocumentDetail from "@/components/ui/DocumentModal/DocumentDetail";
import React from "react";
import resources from "../../../data/pages/ressources.json";

interface DocumentPageProps {
  params: { id: string };
}

const DocumentPage: React.FC<DocumentPageProps> = ({ params }) => {
  const documentsSection = resources.sections.find(
    (section) => section.name === "documents"
  );
  const documents = documentsSection?.documents || [];
  return <DocumentDetail id={params.id} documents={documents} />;
};

export default DocumentPage;
