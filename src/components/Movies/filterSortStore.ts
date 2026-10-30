
import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export interface FilterSortContextType {
  filterByValue: string;
  setFilterByValue: Dispatch<SetStateAction<string>>;
  sortByValue: string;
  setSortByValue: Dispatch<SetStateAction<string>>;
}

export const FilterSortContext =
  createContext<FilterSortContextType | null>(null);
