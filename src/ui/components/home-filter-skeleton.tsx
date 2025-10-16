export function HomeFilterSkeleton() {
  return (
    <div className="mt-6 md:mt-10 lg:mt-20 flex flex-col lg:flex-row gap-4 items-center justify-between mb-8 animate-pulse">
      <div className="flex flex-col md:flex-row gap-4 w-full md:gap-8 md:items-center">
        <div className="h-7 w-48 rounded-md bg-zinc-200 dark:bg-zinc-800" />
        <div className="flex-1">
          <div className="h-10 w-full lg:w-80 rounded-md bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>

      <div className="flex flex-col w-full items-start md:flex-row md:items-center md:justify-end gap-4">
        <div className="h-5 w-28 rounded-md bg-zinc-200 dark:bg-zinc-800" />
        <div className="flex gap-4 w-full md:w-fit">
          <div className="h-10 w-full md:w-24 rounded-sm bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-10 w-full md:w-24 rounded-sm bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-10 w-full md:w-32 rounded-sm bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-10 w-full md:w-24 rounded-sm bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>
    </div>
  );
}
