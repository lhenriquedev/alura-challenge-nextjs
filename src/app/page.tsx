import { Hero } from "./components/hero";
import { PostList } from "./components/post-list";
import { getPosts } from "./services/get-posts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <Hero />

      <PostList initialData={posts} />
    </main>
  );
}
