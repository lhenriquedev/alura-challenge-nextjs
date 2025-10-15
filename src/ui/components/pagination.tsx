type PaginationNumbers = {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNum: number) => void;
};

export function PaginationNumbers({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationNumbers) {
  const pages = [];

  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center mt-8 gap-4">
      {pages.map((pageNum) => (
        <button
          data-active={pageNum === currentPage}
          key={pageNum}
          className="bg-[#9D9D9D] py-2 px-3 w-8 h-10 rounded-sm data-[active=true]:bg-secondary cursor-pointer hover:brightness-110"
          onClick={() => onPageChange(pageNum)}
        >
          {pageNum}
        </button>
      ))}
    </div>
  );
}
