import { PostsResponse } from "@/types/posts"

type PostsParams = {
  category: string
}

export async function getPostsByCategory({ category }: PostsParams) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/category/${category}?limit=6`, {
    next: { revalidate: 3600, tags: ["posts", category] }
  })

  if (!response.ok) throw new Error('Failed to fetch posts')

  return await response.json() as PostsResponse
}