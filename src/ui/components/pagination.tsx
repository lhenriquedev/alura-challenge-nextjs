"use client";

import { Pagination } from "@/types/posts";
import { parseAsInteger, useQueryState } from "nuqs";
import { startTransition } from "react";

type PaginationNumbers = {
  pagination: Pagination;
};

export function PaginationNumbers({ pagination }: PaginationNumbers) {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  const pages = [];

  const start = Math.max(1, page - 2);
  const end = Math.min(pagination.totalPages, page + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  const handleClickPage = (p: number) => {
    startTransition(() => {
      setPage(p, { history: "push", shallow: false });
    });
  };

  return (
    <div className="flex items-center justify-center mt-8 gap-4">
      {pages.map((pageNum) => (
        <button
          data-active={pageNum === page}
          key={pageNum}
          className="bg-[#9D9D9D] py-2 px-3 w-8 h-10 rounded-sm data-[active=true]:bg-secondary cursor-pointer hover:brightness-110"
          onClick={() => handleClickPage(pageNum)}
        >
          {pageNum}
        </button>
      ))}
    </div>
  );
}
