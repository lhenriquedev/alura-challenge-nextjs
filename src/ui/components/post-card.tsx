import Image from "next/image";
import Link from "next/link";

type PostCardProps = {
  to: string;
  imageUrl: string;
  title: string;
  description: string;
};

export function PostCard({ to, description, title, imageUrl }: PostCardProps) {
  return (
    <Link
      href={to}
      className="flex flex-col flex-1 min-w-60 gap-7 border border-main rounded-md p-6 dark:bg-cardBackground"
    >
      <div className="relative h-[196px] w-full">
        <Image
          src={imageUrl}
          alt={`image-${description}`}
          loading="lazy"
          className="rounded-md"
          objectFit="cover"
          fill
        />
      </div>
      <h2 className="font-chakra-petch text-lg md:text-xl text-secondary font-bold line-clamp-2 dark:text-foreground">
        {title}
      </h2>
      <p className="text-tertiary line-clamp-3 text-sm md:text-base">
        {description}
      </p>

      <span className="font-bold text-main">Ler mais</span>
    </Link>
  );
}
