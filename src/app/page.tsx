import { getPosts } from "@/services/get-posts";
import { Hero } from "@/ui/components/hero";
import { Footer } from "@/ui/components/layout/footer";
import { PostList } from "@/ui/components/post-list";

export default async function Home() {
  const posts = await getPosts({ category: "devops" });

  return (
    <main>
      <Hero />

      <PostList initialData={posts} />

      <Footer />
    </main>
  );
}
