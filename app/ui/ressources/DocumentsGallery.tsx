// DocumentsGallery.tsx
"use client";

import { DocumentResource } from "@/app/lib/definitions";
import Pagination from "@/app/ui/Pagination";
import { useState } from "react";

export default function DocumentsGallery({
  documents,
}: {
  documents: DocumentResource[];
}) {
  const [page, setPage] = useState(0);
  const ITEMS_PER_PAGE = 9;

  const totalPages = Math.ceil(documents.length / ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col gap-6">
      {/* Gallery */}
      <div className="flex-1 flex flex-col gap-4 transition-all md:grid grid-cols-3">
        {documents.map((doc, index) => (
          <a
            key={doc.id}
            href={doc.documentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 border rounded p-2"
            style={{
              display:
                Math.floor(index / ITEMS_PER_PAGE) === page
                  ? undefined
                  : "none",
            }}
          >
            <div className="w-full ">
              <iframe
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(doc.documentUrl)}&embedded=true`}
                className="w-full pointer-events-none"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-center line-clamp-2 w-full p-1 bg-white z-20">
              {doc.name}
            </p>
          </a>
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
}
