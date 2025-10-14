import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <Image src="logo.svg" alt="Logo's page" width={316} height={46} />

      <nav>
        <ul className="flex gap-8">
          <li>
            <Link
              href="/"
              className="text-main text-2xl font-bold leading-[100%]"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href={`/blog/1234`}
              className="text-main text-2xl font-bold leading-[100%]"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
