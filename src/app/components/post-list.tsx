"use client";

import { usePosts } from "../hooks/usePosts";
import { PostsResponse } from "../services/get-posts";
import { HomeFilter } from "./home-filter";
import { PostCard } from "./post-card";

type PostListProps = {
  initialData: PostsResponse;
};

export function PostList({ initialData }: PostListProps) {
  const { data, isLoading, error } = usePosts(initialData);

  console.log(data);

  if (isLoading) return null;
  if (error) return null;

  return (
    <>
      <HomeFilter />

      <div className="grid grid-cols-3 gap-6">
        {data.posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            description={post.content}
            imageUrl={post.imageUrl}
            to={`/blog/${post.id}`}
          />
        ))}
      </div>
    </>
  );
}
