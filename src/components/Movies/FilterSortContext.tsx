import { useState } from "react";
import type { ReactNode } from "react";
import { FilterSortContext } from "./filterSortStore";

interface FilterSortProviderProps {
  children: ReactNode;
}

export function FilterSortProvider({
  children,
}: FilterSortProviderProps) {
  const [filterByValue, setFilterByValue] = useState("");
  const [sortByValue, setSortByValue] =
    useState("popularity.desc");

  return (
    <FilterSortContext.Provider
      value={{
        filterByValue,
        setFilterByValue,
        sortByValue,
        setSortByValue,
      }}
    >
      {children}
    </FilterSortContext.Provider>
  );
}
