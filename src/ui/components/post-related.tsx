import { getPostByTag } from "@/services/get-post-by-tag";
import { PostCard } from "./post-card";

type PostRelatedProps = {
  tag: string | null;
};

export async function PostRelated({ tag }: PostRelatedProps) {
  if (!tag) return null;

  const { posts } = await getPostByTag({ tag });

  return (
    <div className="space-y-10">
      <h3 className="text-secondary font-chakra-petch font-bold text-2xl dark:text-foreground">
        Postagens relacionadas
      </h3>

      <ul className="md:grid md:grid-cols-3 gap-6 flex overflow-x-auto overflow-visible">
        {posts?.map((post) => (
          <PostCard key={post.id} to={`/blog/${post.id}`} {...post} />
        ))}
      </ul>
    </div>
  );
}
