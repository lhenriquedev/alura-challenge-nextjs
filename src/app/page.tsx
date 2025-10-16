import { getPosts } from "@/services/get-posts";
import { Hero } from "@/ui/components/hero";
import { HomeFilter } from "@/ui/components/home-filter";
import { HomeFilterSkeleton } from "@/ui/components/home-filter-skeleton";
import { Footer } from "@/ui/components/layout/footer";
import { PostCardSkeleton } from "@/ui/components/post-card-skeleton";
import { PostList } from "@/ui/components/post-list";
import { Suspense } from "react";

export default async function Home() {
  const posts = await getPosts({ category: "devops" });

  return (
    <main>
      <Hero />

      <Suspense fallback={<HomeFilterSkeleton />}>
        <HomeFilter />
      </Suspense>

      <Suspense fallback={<PostCardSkeleton />}>
        <PostList initialData={posts} />
      </Suspense>

      <Footer />
    </main>
  );
}
