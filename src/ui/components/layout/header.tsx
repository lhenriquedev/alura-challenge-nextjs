"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathName = usePathname();

  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="">
        <Image src="logo.svg" alt="Logo's page" width={316} height={46} />
      </Link>

      <nav>
        <ul className="flex gap-8">
          <li>
            <Link
              data-active={pathName === "/"}
              href="/"
              className="text-secondary text-xl font-bold leading-[100%] data-[active=true]:text-main"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              data-active={pathName.startsWith("/blog")}
              href={`/blog/1234`}
              className="text-secondary text-xl font-bold leading-[100%] data-[active=true]:text-main"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
