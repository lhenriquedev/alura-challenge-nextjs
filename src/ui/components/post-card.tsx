import Image from "next/image";
import Link from "next/link";

type PostCardProps = {
  to: string;
  imageUrl: string;
  title: string;
  content: string;
  category: {
    slug: string;
    name: string;
    description: string;
  };
};

export function PostCard({
  to,
  content,
  title,
  imageUrl,
  category,
}: PostCardProps) {
  return (
    <Link
      href={to}
      className="flex flex-col flex-1 min-w-80 gap-7 border border-main rounded-md p-6 dark:bg-cardBackground transition-all 
     hover:shadow-[0_0_20px_rgba(28,167,200,0.3)] duration-300"
    >
      <div className="relative h-[196px] w-full">
        <Image
          src={imageUrl}
          alt={`image-${content}`}
          loading="lazy"
          className="rounded-md"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="bg-main absolute right-0 bottom-0 py-1 px-6">
          <p>{category.name}</p>
        </div>
      </div>
      <h2 className="font-chakra-petch text-lg md:text-xl text-secondary font-bold line-clamp-2 dark:text-foreground">
        {title}
      </h2>
      <p className="text-tertiary line-clamp-3 text-sm md:text-base">
        {content}
      </p>

      <span className="font-bold text-main">Ler mais</span>
    </Link>
  );
}
