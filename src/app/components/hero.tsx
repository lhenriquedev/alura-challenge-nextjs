import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-10">
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <Image
          className=""
          src="hero.svg"
          alt="Hero's page"
          width={224}
          height={224}
        />
        <p className="text-main font-bold font-chakra-petch">
          Olá, meu nome é Fernanda_
        </p>

        <p className="text-secondary font-bold text-6xl text-center leading-[101%] font-chakra-petch">
          Eu ensino{" "}
          <span className="bg-gradient-to-r from-gradient to-main  bg-clip-text text-transparent">
            Programação
          </span>
        </p>

        <p className="text-tertiary text-center leading-[150%] font-inter max-w-[581px]">
          Sou Engenheira de Computação e Pedagoga. Ensino pensamento
          computacional para estudantes do Ensino Fundamental e Médio. Ensino
          sobre pensamento computacional usando HTML, CSS e JavaScript. Veja os
          projetos que já desenvolvi!
        </p>
      </div>

      <Image
        className="mt-auto pt-28"
        src="hero-line.svg"
        alt="Hero lines"
        width={686}
        height={28}
      />
    </section>
  );
}
