export function PostCardSkeleton() {
  return (
    <ul className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 flex overflow-x-auto overflow-visible">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-7 border border-cardBackground rounded-md p-6 animate-pulse"
        >
          <div className="w-full h-[200px] dark:bg-cardBackground bg-gray-200 rounded-md" />

          <div className="h-6 bg-gray-200 dark:bg-cardBackground rounded-md w-3/4" />

          <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-cardBackground rounded-md w-full" />
            <div className="h-4 bg-gray-200 dark:bg-cardBackground rounded-md w-5/6" />
            <div className="h-4 bg-gray-200 dark:bg-cardBackground rounded-md w-2/3" />
          </div>

          <div className="h-5 bg-gray-200 rounded-md w-1/4 dark:bg-cardBackground " />
        </div>
      ))}
    </ul>
  );
}
