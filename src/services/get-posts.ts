import { PostsResponse } from "@/types/posts"

type PostsParams = {
  page?: number
}

export async function getPosts({ page }: PostsParams) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/?page=${page}&limit=6`, {
    next: { revalidate: 3600, tags: ["posts"] }
  })

  if (!response.ok) throw new Error('Failed to fetch posts')

  return await response.json() as PostsResponse
}