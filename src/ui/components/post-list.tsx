"use client";

import { PaginationNumbers } from "@/ui/components/pagination";
import { PostCard } from "@/ui/components/post-card";
import { PostsResponse } from "@/types/posts";
import { usePosts } from "@/hooks/usePosts";
import { PostCardSkeleton } from "./post-card-skeleton";

type PostListProps = {
  initialData: PostsResponse;
};

export function PostList({ initialData }: PostListProps) {
  const { data, isLoading, isFetching, setPage } = usePosts(initialData);

  if (isLoading || isFetching) {
    return <PostCardSkeleton />;
  }

  return (
    <>
      <ul className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 flex overflow-x-auto overflow-visible">
        {data.posts.map((post) => (
          <PostCard key={post.id} to={`/blog/${post.id}`} {...post} />
        ))}
      </ul>

      <PaginationNumbers
        currentPage={data.pagination.currentPage}
        totalPages={data.pagination.totalPages}
        onPageChange={setPage}
      />
    </>
  );
}
