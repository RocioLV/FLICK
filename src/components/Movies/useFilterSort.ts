
import { useContext } from "react";
import { FilterSortContext } from "./filterSortStore";

export function useFilterSort() {
  const context = useContext(FilterSortContext);

  if (!context) {
    throw new Error(
      "useFilterSort must be used within a FilterSortProvider"
    );
  }

  return context;
}
