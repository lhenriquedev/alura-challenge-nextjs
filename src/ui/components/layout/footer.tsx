import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-10 md:mt-40 flex flex-col">
      <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="font-chakra-petch text-main leading-[150%]">
            Vamos conversar?
          </h3>
          <h2 className="font-chakra-petch text-secondary font-bold text-2xl md:text-6xl leading-[101%] dark:text-foreground">
            Entre em contato
          </h2>
        </div>

        <ul className="flex flex-col gap-3">
          <li>
            <a
              href=""
              className="text-tertiary leading-[150%] dark:text-foreground flex items-center gap-2 underline"
            >
              <Image
                src="mail.svg"
                alt="Icone do email"
                width={24}
                height={24}
              />{" "}
              fernandamascheti@gmail.com
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-tertiary leading-[150%] dark:text-foreground flex items-center gap-2 underline"
            >
              <Image
                src="linkedin.svg"
                alt="Icone do email"
                width={24}
                height={24}
              />{" "}
              /Fernanda Mascheti
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-tertiary leading-[150%] dark:text-foreground flex items-center gap-2 underline"
            >
              <Image
                src="github.svg"
                alt="Icone do email"
                width={24}
                height={24}
              />{" "}
              /fernandamascheti
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
