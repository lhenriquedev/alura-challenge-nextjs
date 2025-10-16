import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuMobileProps = {
  onOpenMenu: () => void;
};

export function MenuMobile({ onOpenMenu }: MenuMobileProps) {
  const pathName = usePathname();

  return (
    <nav className="absolute p-8 flex items-center gap-4 flex-col h-full inset-0 dark:bg-background z-10">
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-5">
          <Image src="logo.svg" alt="Logo's page" width={46} height={46} />
          <h3 className="md:text-2xl font-bold font-chakra-petch text-secondary dark:text-foreground">
            FERNANDA MASCHETI
          </h3>
        </Link>
        <button className="flex ml-auto" onClick={onOpenMenu}>
          <X size={28} />
        </button>
      </div>

      <ul className="flex flex-col gap-4 items-center mt-8">
        <li>
          <Link
            data-active={pathName === "/"}
            href="/"
            className="text-secondary text-xl font-bold leading-[100%] data-[active=true]:text-main dark:text-foreground"
            onClick={onOpenMenu}
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            data-active={pathName.startsWith("/blog")}
            href={`/blog/1234`}
            className="text-secondary text-xl font-bold leading-[100%] data-[active=true]:text-main dark:text-foreground"
            onClick={onOpenMenu}
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
