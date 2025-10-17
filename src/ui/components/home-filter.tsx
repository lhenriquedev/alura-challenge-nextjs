"use client";

import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { startTransition } from "react";

const categories = [
  {
    value: "mobile",
    name: "Mobile",
  },
  {
    value: "frontend",
    name: "Front-end",
  },
  {
    value: "programacao",
    name: "Programação",
  },
  {
    value: "devops",
    name: "Devops",
  },
] as const;

export function HomeFilter() {
  const [search, setSearch] = useQueryState("search", parseAsString);
  const [category, setCategory] = useQueryState("category", parseAsString);
  const [, setPage] = useQueryState("page", parseAsInteger);

  const handleClickCategory = (value: string) => {
    startTransition(() => {
      setCategory(value, { history: "push", shallow: false });
      setPage(1);
    });
  };

  return (
    <div className="mt-6 md:mt-10 lg:mt-20 flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
      <div className="flex flex-col md:flex-row gap-4 w-full md:gap-8 md:items-center">
        <h2 className="text-2xl text-secondary font-bold font-chakra-petch dark:text-foreground">
          Minhas postagens
        </h2>
        {/* adicionar icone de pesquisa */}
        <label className="flex-1">
          <input
            placeholder="Buscar ..."
            className="border border-main h-10 rounded-md w-full lg:w-80 placeholder:text-[#9AA6B5] text-black font-inter py-2 px-3.5 focus:outline-2 focus:outline-offset-2 focus:outline-main dark:text-foreground"
            value={search || ""}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      <div className="flex flex-col w-full items-start md:flex-row md:items-center md:justify-end gap-4">
        <h2 className="text-secondary font-bold dark:text-foreground">
          Categorias:
        </h2>
        <div className="flex gap-4 w-full md:w-fit">
          {categories.map((_category, index) => {
            return (
              <button
                data-active={_category.value === category}
                key={index}
                className="bg-main py-2 px-3 w-full md:w-fit rounded-sm hover:brightness-110 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-main active:bg-main data-[active=true]:bg-secondary data-[active=true]:outline-2 data-[active=true]:outline-offset-2 data-[active=true]:outline-secondary"
                onClick={() => handleClickCategory(_category.value)}
              >
                {_category.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
