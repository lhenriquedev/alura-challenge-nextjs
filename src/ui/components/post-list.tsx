"use client";

import { HomeFilter } from "@/ui/components/home-filter";
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

  return (
    <>
      <HomeFilter />

      <ul className="grid grid-cols-3 gap-6">
        {(isLoading || isFetching) &&
          Array.from({ length: 6 }).map((_, index) => (
            <PostCardSkeleton key={index} />
          ))}

        {!isLoading &&
          !isFetching &&
          data.posts.length > 0 &&
          data.posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              description={post.content}
              imageUrl={post.imageUrl}
              to={`/blog/${post.id}`}
            />
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
