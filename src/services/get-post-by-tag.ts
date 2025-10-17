import { Meta, Post } from "@/types/posts"

type PostResponse = {
  posts: Post[]
  meta: Meta
}

export async function getPostByTag({ tag }: { tag: string }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/tags/${tag}?limit=3`, {
    next: { revalidate: 3600 }
  })

  if (!response.ok) throw new Error('Failed to fetch posts')

  return await response.json() as PostResponse
}