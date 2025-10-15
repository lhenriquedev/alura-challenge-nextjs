"use client";

import { parseAsString, useQueryState } from "nuqs";

export function HomeFilter() {
  const [search, setSearch] = useQueryState("search", parseAsString);
  const [, setCategory] = useQueryState("category", parseAsString);

  const handleClickCategory = (category: string) => {
    setCategory(category);
  };

  return (
    <div className="mt-10 md:mt-20 flex flex-col gap-4 items-center justify-between mb-8">
      <div className="flex flex-col gap-4 md:gap-8 md:items-center">
        <h2 className="text-2xl text-secondary font-bold font-chakra-petch dark:text-foreground">
          Minhas postagens
        </h2>
        {/* adicionar icone de pesquisa */}
        <label htmlFor="">
          <input
            placeholder="Buscar ..."
            className="border border-main h-10 rounded-md w-80 placeholder:text-[#9AA6B5] text-black font-inter py-2 px-3.5 focus:outline-2 focus:outline-offset-2 focus:outline-main dark:text-foreground"
            value={search || ""}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      <div className="flex flexc items-center gap-4">
        <h2 className="text-secondary font-bold dark:text-foreground">
          Categorias:
        </h2>
        {/* <button className="bg-main py-2 px-3 rounded-sm hover:brightness-110 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-main active:bg-main"
        >
          IA
        </button> */}
        <button
          className="bg-main py-2 px-3 rounded-sm hover:brightness-110 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-main active:bg-main"
          onClick={() => handleClickCategory("devops")}
        >
          Devops
        </button>
        <button
          className="bg-main py-2 px-3 rounded-sm hover:brightness-110 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-main active:bg-main"
          onClick={() => handleClickCategory("frontend")}
        >
          Front-end
        </button>
      </div>
    </div>
  );
}
