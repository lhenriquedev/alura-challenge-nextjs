import { PostsResponse } from "@/types/posts"

type PostsParams = {
  category: string
  page?: number
}

export async function getPostsByCategory({ category, page = 1 }: PostsParams) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/category/${category}?page=${page}&limit=6`, {
    next: { revalidate: 3600, tags: ["posts"] }
  })

  if (!response.ok) throw new Error('Failed to fetch posts')

  return await response.json() as PostsResponse
}