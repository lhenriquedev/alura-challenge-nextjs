import axios from 'axios';
import { parseAsInteger, parseAsString, useQueryState } from 'nuqs';
import { PostsResponse } from '@/types/posts';
import { useQuery } from '@tanstack/react-query';

export function usePosts(initialData: PostsResponse) {
  const [category] = useQueryState('category', parseAsString.withDefault('frontend'))
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))

  const query = useQuery({
    queryKey: ['posts', category, page],
    queryFn: async () => {
      const { data } = await axios.get<PostsResponse>(`/api/posts?category=${category}&limit=6&page=${page}`)
      return data
    },
    initialData,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  })

  return { ...query, page, setPage }
}