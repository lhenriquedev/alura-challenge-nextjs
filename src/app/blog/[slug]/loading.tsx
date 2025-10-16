import { PostCardSkeleton } from "@/ui/components/post-card-skeleton";

export default function Loading() {
  return (
    <section className="mt-12 md:mt-24 animate-pulse">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 mb-8 md:mb-16">
        <div className="flex flex-col gap-6 max-w-[556px] w-full">
          <div className="h-8 md:h-12 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4" />

          <div className="flex flex-col items-start gap-5">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-32" />
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-sm w-24" />
          </div>

          {/* Tags */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-20" />
            <ul className="flex gap-3.5">
              {Array.from({ length: 3 }).map((_, i) => (
                <li
                  key={i}
                  className="py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-sm"
                >
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-16" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full md:w-[500px] h-[220px] md:h-[320px] bg-gray-200 dark:bg-gray-700 rounded-md" />
      </div>

      <div className="space-y-3 mb-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-full"
          />
        ))}
      </div>

      <div className="space-y-10">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-md w-1/3" />

        <PostCardSkeleton />
      </div>
    </section>
  );
}
