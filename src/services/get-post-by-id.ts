import { httpClient } from "@/lib/httpClient"
import { Meta, Post } from "@/types/posts"

type PostResponse = {
  post: Post
  meta: Meta
}

export async function getPostById({ id }: { id: string }) {
  const { data } = await httpClient.get<PostResponse>(`/posts/id/${id}`)
  return data
}