export interface Post {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
  likes: number
  category: Category
  tags: Tag[]
  imageUrl: string
}

export interface Category {
  slug: string
  name: string
  description: string
}

export interface Tag {
  slug: string
  name: string
}

export interface Pagination {
  currentPage: number
  totalPages: number
  totalPosts: number
  postsPerPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface Meta {
  generatedAt: string
  seed: string
  category?: string
}

export interface PostsResponse {
  posts: Post[]
  pagination: Pagination
  meta: Meta
}
