// DocumentsGallery.tsx
"use client";

import { DocumentResource } from "@/app/lib/definitions";
import Pagination from "@/app/ui/Pagination";
import DocumentPanel from "@/app/ui/ressources/DocumentPanel";
import Link from "next/link";
import { useRef, useState } from "react";

export default function DocumentsGallery({
  documents,
}: {
  documents: DocumentResource[];
}) {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState<DocumentResource | null>(null);
  const pageBeforeSelect = useRef(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const itemsPerPage = isMobile ? 1 : selected ? 3 : 9;

  const totalPages = Math.ceil(documents.length / itemsPerPage);
  const paginated = documents.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage,
  );
  function handleSelect(doc: DocumentResource) {
    !selected && (pageBeforeSelect.current = page);
    setSelected(doc);
  }
  function handleClose() {
    setSelected(null);
    setPage(pageBeforeSelect.current);
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Side panel — desktop only */}
      {selected && <DocumentPanel doc={selected} onClose={handleClose} />}
      {/* Gallery */}
      <div className="flex-1 flex flex-col gap-4 transition-all md:grid grid-cols-3">
        {paginated.map((doc) => (
          <div key={doc.id} className="relative">
            {/* Mobile — link to full page */}
            <a
              href={`${doc.documentUrl}#navpanes=0`}
              className="md:hidden flex flex-col items-center gap-2 border rounded p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <iframe
                src={`${doc.documentUrl}#page=1&view=FitH&scrollbar=0&navpanes=0&toolbar=0`}
                className="w-full pointer-events-none"
              />
              <p className="text-sm text-center line-clamp-2">{doc.name}</p>
            </a>

            {/* Desktop — opens panel */}
            <button
              onClick={() => handleSelect(doc)}
              className="hidden md:flex flex-col h-full items-center gap-2 border rounded p-2 w-full"
            >
              <iframe
                src={`${doc.documentUrl}#page=1&view=FitH`}
                className="w-full pointer-events-none"
                scrolling="no"
              />
              <p className="text-sm text-center line-clamp-2">{doc.name}</p>
            </button>
          </div>
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
