import { httpClient } from "@/lib/httpClient"
import { Meta, Post } from "@/types/posts"

type PostResponse = {
  posts: Post[]
  meta: Meta
}

export async function getPostByTag({ tag }: { tag: string }) {
  const { data } = await httpClient.get<PostResponse>(`/posts/tags/${tag}?limit=3`)
  return data
}