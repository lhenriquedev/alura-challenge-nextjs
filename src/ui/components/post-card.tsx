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
      className="flex flex-col gap-7 border border-main rounded-md p-6 dark:bg-cardBackground"
    >
      <Image
        src={imageUrl}
        alt={`image-${description}`}
        loading="lazy"
        width={300}
        height={196}
        className="rounded-md"
      />

      <h2 className="font-chakra-petch text-xl text-secondary font-bold line-clamp-2 dark:text-foreground">
        {title}
      </h2>
      <p className="text-tertiary line-clamp-3">{description}</p>

      <span className="font-bold text-main">Ler mais</span>
    </Link>
  );
}
