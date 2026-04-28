// DocumentsGallery.tsx
"use client";

import { useMediaQuery } from "@/app/lib/hooks";
import { DocumentResource } from "@/app/lib/definitions";
import Pagination from "@/app/ui/Pagination";
import { FileText } from "lucide-react";
import { useState } from "react";

export default function DocumentsGallery({
  documents,
}: {
  documents: DocumentResource[];
}) {
  const [page, setPage] = useState(0);
  const isMd = useMediaQuery("(min-width: 768px)");
  const ITEMS_PER_PAGE = isMd ? 12 : 4;

  function handlePageChange(newPage: number) {
    setPage(newPage);
  }

  // Reset to first page when items per page changes to avoid out-of-bounds
  const totalPages = Math.ceil(documents.length / ITEMS_PER_PAGE);
  const safePage = page >= totalPages ? 0 : page;
  const visible = documents.slice(
    safePage * ITEMS_PER_PAGE,
    (safePage + 1) * ITEMS_PER_PAGE,
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Gallery */}
      <div className="flex-1 flex flex-col gap-4 transition-all md:grid grid-cols-3">
        {visible.map((doc) => (
          <a
            key={doc.id}
            href={doc.documentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 border border-slate-200 rounded-lg p-6 bg-white hover:border-orange-300 hover:shadow-md transition-all"
          >
            <div className="p-4 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors">
              <FileText size={32} className="text-orange-500" />
            </div>
            <p className="text-sm text-center font-medium line-clamp-2 w-full text-slate-700">
              {doc.name}
            </p>
            <span className="text-xs text-slate-400 group-hover:text-orange-500 transition-colors">
              Télécharger →
            </span>
          </a>
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={safePage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
