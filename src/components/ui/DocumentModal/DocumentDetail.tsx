"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

interface DocumentDetailProps {
  id: string;
  documents: any[];
}

const DocumentDetail: FunctionComponent<DocumentDetailProps> = ({
  id,
  documents,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const show = searchParams.get("show");
  const [document, setDocument] = useState<any>(null);

  useEffect(() => {
    const foundDocument = documents.find((doc) => doc.id === parseInt(id));
    setDocument(foundDocument);
  }, [id, documents]);

  const handleClose = () => {
    router.push("/ressources/#documents"); // Redirect back to the gallery
  };

  if (!document) {
    return <div>Document not found</div>;
  }

  return (
    <>
      {show === "true" && (
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="rounded-lg shadow-xl p-6 flex flex-col gap-10 w-full max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
            <div className="flex justify-between items-center">
              <h2>{document.title}</h2>
              <button
                onClick={handleClose}
                className="hover:rotate-180 transition duration-700"
              >
                <RxCross2 size={32} />
              </button>
            </div>
            <div className="w-full h-[400px] xl:h-[600px] relative">
              <Image
                src={document.imagePath}
                alt={document.title}
                style={{ objectFit: "contain" }}
                fill
              />
            </div>
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
          </div>
        </div>
      )}
    </>
  );
};

export default DocumentDetail;
