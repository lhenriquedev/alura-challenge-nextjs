"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuMobile } from "../menu-mobile";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathName = usePathname();

  const handleMenuOpen = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center gap-5">
        <Image src="logo.svg" alt="Logo's page" width={46} height={46} />
        <h3 className="md:text-2xl text-sm font-bold font-chakra-petch text-secondary dark:text-foreground">
          FERNANDA MASCHETI
        </h3>
      </Link>

      <button
        className="dark:text-foreground md:hidden"
        onClick={handleMenuOpen}
      >
        <Menu size={28} className="dark:text-foreground" />
      </button>

      {isMenuOpen && <MenuMobile onOpenMenu={handleMenuOpen} />}

      <nav className="hidden md:flex">
        <ul className="flex gap-8">
          <li>
            <Link
              data-active={pathName === "/"}
              href="/"
              className="text-secondary text-xl font-bold leading-[100%] data-[active=true]:text-main dark:text-foreground"
            >
              Início
            </Link>
          </li>
          <li
            data-active={pathName.startsWith("/blog")}
            className="text-secondary text-xl font-bold leading-[100%] data-[active=true]:text-main dark:text-foreground"
          >
            Blog
          </li>
        </ul>
      </nav>
    </header>
  );
}
