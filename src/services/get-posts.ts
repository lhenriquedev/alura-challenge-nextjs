import { PostsResponse } from "@/types/posts"
import { httpClient } from "../lib/httpClient"


export async function getPosts({ category }: { category: string }) {
  const { data } = await httpClient.get<PostsResponse>(`/posts/category/${category}?limit=6`)
  return data
}