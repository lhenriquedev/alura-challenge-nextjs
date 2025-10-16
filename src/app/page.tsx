import { getPosts } from "@/services/get-posts";
import { Hero } from "@/ui/components/hero";
import { HomeFilter } from "@/ui/components/home-filter";
import { Footer } from "@/ui/components/layout/footer";
import { PostList } from "@/ui/components/post-list";

export default async function Home() {
  const posts = await getPosts({ category: "devops" });

  return (
    <main>
      <Hero />

      <HomeFilter />

      <PostList initialData={posts} />

      <Footer />
    </main>
  );
}
