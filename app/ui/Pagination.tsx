import { cn } from "@/app/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function getPageNumbers(
  currentPage: number,
  totalPages: number,
): (number | "...")[] {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i);
  if (currentPage < 4) return [0, 1, 2, 3, 4, "...", totalPages - 1];
  if (currentPage > totalPages - 5)
    return [
      0,
      "...",
      totalPages - 5,
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
    ];
  return [
    0,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages - 1,
  ];
}

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;
  const pages = getPageNumbers(currentPage, totalPages);
  return (
    <div className="flex justify-center items-center gap-2">
      {/* Prev arrow */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
        className="w-8 h-8 flex items-center justify-center disabled:opacity-30 hover:bg-gray-100"
      >
        <ChevronLeftIcon className="w-4 h-4" />
      </button>

      {/* Page numbers */}
      {pages.map((page, i) =>
        page === "..." ? (
          <span
            key={`dots-${i}`}
            className="w-8 h-8 flex items-center justify-center text-gray-400"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "w-8 h-8 ",
              currentPage === page
                ? "text-orange-600 font-bold"
                : "hover:bg-gray-100",
            )}
          >
            {page + 1}
          </button>
        ),
      )}

      {/* Next arrow */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
        className="w-8 h-8 flex items-center justify-center disabled:opacity-30 hover:bg-gray-100"
      >
        <ChevronRightIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
