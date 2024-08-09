import Image from "next/image";
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
  //get the 9 first elements
  const first_elements = [];
  if (!documents) {
  } else {
    for (let i = 0; i < (documents.length < 9 ? documents.length : 9); i++) {
      first_elements.push(documents[i]);
    }
  }

  return (
    <div className="Documents my-60">
      <div className="container flex flex-col gap-20 items-center">
        <Title>Doc. Institutions</Title>
        <div className="flex flex-wrap gap-6 justify-center ">
          {first_elements.map((document, index) => (
            <div
              key={`Document${index}`}
              className="w-72 h-80 relative shadow-sm"
            >
              {/* <h2>{document.title}</h2> */}
              <Image
                alt={`Image${index}`}
                src={document.imagePath}
                style={{ objectFit: "cover" }}
                fill
              />
              {/* <a className="underline" href={document.docPath}>
                Lien vers le document
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
