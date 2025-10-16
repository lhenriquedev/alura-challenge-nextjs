import Image from "next/image";
import { getPostById } from "@/services/get-post-by-id";
import { Metadata } from "next";
import { getPostByTag } from "@/services/get-post-by-tag";
import { PostCard } from "@/ui/components/post-card";
import { Suspense } from "react";
import { PostCardSkeleton } from "@/ui/components/post-card-skeleton";

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { post } = await getPostById({ id: slug });

  return {
    title: `${post.title} | Alura Blog`,
    description: post.content,
    keywords: post.tags.map((tag) => tag.name),
  };
}

export default async function Page({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;

  const { post } = await getPostById({ id: slug });
  const { posts } = await getPostByTag({ tag: post.tags[0].slug });

  return (
    <section className="mt-12 md:mt-24">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 mb-8 md:mb-16">
        <div className="flex flex-col gap-6 max-w-[556px]">
          <h1 className="text-3xl md:text-5xl text-secondary font-bold leading-[101%] font-chakra-petch dark:text-foreground">
            {post.title}
          </h1>

          <div className="flex flex-col items-start gap-5">
            <h3 className="text-tertiary font-bold leading-[150%] dark:text-foreground">
              Categoria:
            </h3>
            <div className="bg-main p-2 px-3 rounded-sm dark:text-foreground">
              <h4>{post?.category?.name}</h4>
            </div>
          </div>

          <div>
            <h3 className="text-tertiary font-bold leading-[150%] mb-5 dark:text-foreground">
              Tags:
            </h3>

            <ul className="flex gap-3.5">
              {post.tags.map((tag) => (
                <li
                  key={tag.slug}
                  className="py-2 px-3 border border-main rounded-sm"
                >
                  <h4 className="font-bold text-main leading-[150%] dark:text-main">
                    {tag.name}
                  </h4>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Image
          src={post.imageUrl}
          alt={`${post.title}`}
          width={500}
          height={320}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>

      <p className="text-tertiary text-sm md:text-base leading-[150%] mb-8">
        {post.content}
      </p>

      <Suspense fallback={<PostCardSkeleton />}>
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
      </Suspense>
    </section>
  );
}
