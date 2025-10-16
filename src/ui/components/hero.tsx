import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[700px] md:h-[500px] bg-[url('/gradient.svg')] bg-no-repeat bg-contain bg-center opacity-40 blur-3xl"></div>

      <div className="relative flex flex-1 flex-col items-center justify-center gap-6">
        <Image
          className="w-[180px] h-[180px] sm:w-[224px] sm:h-[224px]"
          src="hero.svg"
          alt="Hero's page"
          width={224}
          height={224}
          style={{
            width: "auto",
            height: "auto",
          }}
        />
        <h1 className="text-main font-bold font-chakra-petch">
          Olá, meu nome é Fernanda_
        </h1>

        <h2 className="text-secondary font-bold text-3xl lg:text-6xl text-center leading-[101%] font-chakra-petch dark:text-foreground">
          Eu ensino{" "}
          <span className="bg-gradient-to-r from-gradient to-main  bg-clip-text text-transparent">
            Programação
          </span>
        </h2>

        <p className="text-tertiary text-sm md:text-base text-center leading-[150%] font-inter max-w-[581px]">
          Sou Engenheira de Computação e Pedagoga. Ensino pensamento
          computacional para estudantes do Ensino Fundamental e Médio. Ensino
          sobre pensamento computacional usando HTML, CSS e JavaScript. Veja os
          projetos que já desenvolvi!
        </p>
      </div>

      <Image
        className="mt-auto pt-12 md:pt-28"
        src="hero-line.svg"
        alt="Hero lines"
        width={686}
        height={28}
      />
    </section>
  );
}
