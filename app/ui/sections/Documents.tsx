"use client";

import DocumentCard from "@/app/ui/DocumentCard";
import DocumentDetail from "@/app/ui/Modal/DocumentDetail";
import DocumentModal from "@/app/ui/Modal/DocumentModal";
import Swiper from "@/app/ui/Swiper/Swiper";
import Title from "@/app/ui/Title";
import { FunctionComponent, useState } from "react";

export interface Document {
  id: number;
  title: string;
  imagePath: string;
  docPath: string;
}

interface DocumentsProps {
  documents: Document[];
}
const chunckArray = (array: Document[], size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const Documents: FunctionComponent<DocumentsProps> = ({ documents }) => {
  const xsChunkedDocuments = chunckArray(documents, 2);
  const smChunkedDocuments = chunckArray(documents, 4);
  const chunkedDocuments = chunckArray(documents, 9);

  const [documentModalOpen, setDocumentModalOpen] = useState(false);
  const [documentId, setDocumentId] = useState(0);
  const [documentTitle, setDocumentTitle] = useState("");

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
                        onClick={() => {
                          setDocumentModalOpen(true);
                          setDocumentId(document.id);
                        }}
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
                        onClick={() => {
                          setDocumentModalOpen(true);
                          setDocumentId(document.id);
                        }}
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
                        onClick={() => {
                          setDocumentModalOpen(true);
                          setDocumentId(document.id);
                          setDocumentTitle(document.title);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Swiper>
          {documentModalOpen && (
            <DocumentModal
              isOpen={documentModalOpen}
              handleClose={() => setDocumentModalOpen(!documentModalOpen)}
              title={documentTitle}
            >
              <DocumentDetail id={documentId} documents={documents} />
            </DocumentModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Documents;
