export function PostCardSkeleton() {
  return (
    <div className="flex flex-col gap-7 border border-main rounded-md p-6 animate-pulse">
      <div className="w-full h-[196px] bg-gray-200 rounded-md" />

      <div className="h-6 bg-gray-200 rounded-md w-3/4" />

      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded-md w-full" />
        <div className="h-4 bg-gray-200 rounded-md w-5/6" />
        <div className="h-4 bg-gray-200 rounded-md w-2/3" />
      </div>

      <div className="h-5 bg-gray-200 rounded-md w-1/4" />
    </div>
  );
}
