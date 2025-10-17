import { getPosts } from "@/services/get-posts";
import { HomeFilter } from "./home-filter";
import { PostList } from "./post-list";
import { Suspense } from "react";
import { PostCardSkeleton } from "./post-card-skeleton";
import { PaginationNumbers } from "./pagination";
import { getPostsByCategory } from "@/services/get-posts-by-category";

type PostsProps = {
  currentPage: number;
  category?: string;
};

export async function Posts({ currentPage, category }: PostsProps) {
  const hasCategory = !!category;

  const { posts, pagination } = hasCategory
    ? await getPostsByCategory({ category, page: currentPage })
    : await getPosts({ page: currentPage });

  return (
    <>
      <HomeFilter />

      <Suspense
        key={`${category ?? ""}-${currentPage}`}
        fallback={<PostCardSkeleton />}
      >
        <PostList posts={posts} />
      </Suspense>

      <PaginationNumbers pagination={pagination} />
    </>
  );
}
