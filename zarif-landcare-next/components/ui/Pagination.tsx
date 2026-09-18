"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: Math.min(totalPages, 10) }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`
            w-9 h-9 rounded-full text-sm font-medium transition-all
            ${
              currentPage === p
                ? "bg-brand-500 text-white shadow-md"
                : "border border-border text-text-secondary hover:bg-gray-50"
            }
          `}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-secondary hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
