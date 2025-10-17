import { Post } from "@/types/posts"

export async function getPostById({ id }: { id: string }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/id/${id}`, {
    next: {
      revalidate: 60,
      tags: ["post-by-id", id]
    }
  });

  if (!response.ok) throw new Error("Failed to fetch post");

  return await response.json() as { post: Post }
}