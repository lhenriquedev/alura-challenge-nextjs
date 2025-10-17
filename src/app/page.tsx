import { Hero } from "@/ui/components/hero";

import { Footer } from "@/ui/components/layout/footer";

import { Posts } from "@/ui/components/posts";

export default async function Home(props: PageProps<"/">) {
  const searchParams = await props.searchParams;

  const currentPage =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const category =
    typeof searchParams.category === "string" &&
    searchParams.category.trim() !== ""
      ? searchParams.category
      : undefined;

  return (
    <main>
      <Hero />
      <Posts currentPage={currentPage} category={category} />
      <Footer />
    </main>
  );
}
