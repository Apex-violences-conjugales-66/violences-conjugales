import { FunctionComponent } from "react";
import DocumentCard from "../ui/DocumentModal/DocumentCard";
import Swiper from "../ui/Swiper/Swiper";
import Title from "../ui/Title";

export interface Document {
  id: number;
  title: string;
  imagePath: string;
  docPath: string;
}

interface DocumentsProps {
  documents: Document[];
}

const Documents: FunctionComponent<DocumentsProps> = ({ documents }) => {
  const chunckArray = (array: Document[], size: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const xsChunkedDocuments = chunckArray(documents, 2);
  const smChunkedDocuments = chunckArray(documents, 4);
  const chunkedDocuments = chunckArray(documents, 9);

  return (
    <div className="Documents mt-14">
      <div className="container flex flex-col gap-2 items-center">
        <Title id="documents">Doc. Institutions</Title>
        <div className="w-full md:hidden">
          <Swiper>
            {xsChunkedDocuments.map((chunk, chunkIndex) => (
              <div
                key={`Chunk${chunkIndex}`}
                className="px-10 flex justify-center"
              >
                <div className="flex flex-wrap gap-6 justify-center xl:justify-start xl:w-[912px] ">
                  {chunk.map((document, documentIndex) => (
                    <div key={`Document${documentIndex}`}>
                      <DocumentCard
                        id={document.id}
                        title={document.title}
                        imagePath={document.imagePath}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Swiper>
        </div>
        <div className="w-full hidden md:block xl:hidden">
          <Swiper>
            {smChunkedDocuments.map((chunk, chunkIndex) => (
              <div
                key={`Chunk${chunkIndex}`}
                className="px-10 flex justify-center"
              >
                <div className="flex flex-wrap gap-6 justify-center xl:justify-start xl:w-[912px] ">
                  {chunk.map((document, documentIndex) => (
                    <div key={`Document${documentIndex}`}>
                      <DocumentCard
                        id={document.id}
                        title={document.title}
                        imagePath={document.imagePath}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Swiper>
        </div>
        <div className="w-full hidden xl:block">
          <Swiper>
            {chunkedDocuments.map((chunk, chunkIndex) => (
              <div
                key={`Chunk${chunkIndex}`}
                className="px-10 flex justify-center"
              >
                <div className="flex flex-wrap gap-6 justify-center xl:justify-start xl:w-[912px] ">
                  {chunk.map((document, documentIndex) => (
                    <div key={`Document${documentIndex}`}>
                      <DocumentCard
                        id={document.id}
                        title={document.title}
                        imagePath={document.imagePath}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Documents;
