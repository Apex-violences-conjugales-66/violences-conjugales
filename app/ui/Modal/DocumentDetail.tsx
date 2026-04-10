"use client";

import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";

interface DocumentDetailProps {
  id: number;
  documents: any[];
}

const DocumentDetail: FunctionComponent<DocumentDetailProps> = ({
  id,
  documents,
}) => {
  const [document, setDocument] = useState<any>(null);

  useEffect(() => {
    const foundDocument = documents.find(
      (doc) => doc.id === parseInt(String(id))
    );
    setDocument(foundDocument);
  }, [id, documents]);

  if (!document) {
    return <div>Document not found</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-10 h-full w-full">
        <div className="relative w-full h-full">
          <Image
            src={document.imagePath}
            alt={document.title}
            style={{ objectFit: "contain" }}
            fill
          />
        </div>
        {document.docPath && (
          <div className="flex gap-4">
            Voir le document :
            <Link
              href={document.docPath}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {document.docPath}
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default DocumentDetail;
