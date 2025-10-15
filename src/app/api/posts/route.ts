import { httpClient } from '@/lib/httpClient';
import { NextResponse } from 'next/server';
import { PostsResponse } from '@/types/posts';

export async function GET(request: Request) {
  const url = new URL(request.url)
  const category = url.searchParams.get('category') || 'frontend'
  const page = url.searchParams.get('page') || 1

  const { data } = await httpClient.get<PostsResponse>(`/posts/category/${category}?limit=6&page=${page}`)

  return NextResponse.json(data)
}