import { FunctionComponent } from "react";
import Title from "../ui/Title";

export interface Document {
  title: string;
  imagePath: string;
  docPath: string;
}

interface DocumentsProps {
  documents: Document[];
}

const Documents: FunctionComponent<DocumentsProps> = ({ documents }) => {
  return (
    <div className="Documents">
      <div className="container flex flex-col gap-10">
        <Title>Doc. Institutions</Title>
        {documents.map((document, index) => (
          <div key={index}>
            <h2>{document.title}</h2>
            <img src={document.imagePath} />
            <a className="underline" href={document.docPath}>
              Lien vers le document
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
