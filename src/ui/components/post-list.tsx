import { PostCard } from "@/ui/components/post-card";
import { Post } from "@/types/posts";

type PostListProps = {
  posts: Post[];
};

export function PostList({ posts }: PostListProps) {
  return (
    <ul className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 flex overflow-x-auto overflow-visible">
      {posts.map((post) => (
        <PostCard key={post.id} to={`/blog/${post.id}`} {...post} />
      ))}
    </ul>
  );
}
