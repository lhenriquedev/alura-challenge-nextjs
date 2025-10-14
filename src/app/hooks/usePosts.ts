import { useQuery } from "@tanstack/react-query";
import { getPosts, PostsResponse } from "../services/get-posts";

export function usePosts(initialData: PostsResponse) {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await getPosts()
      return response
    },
    initialData,
    staleTime: 5 * 60 * 1000
  })
}