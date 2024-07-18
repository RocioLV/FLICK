import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type FilterSortContextType = {
  filterByValue: string;
  setFilterByValue: Dispatch<SetStateAction<string>>;
  sortByValue: string;
  setSortByValue: Dispatch<SetStateAction<string>>;
};

const FilterSortContext = createContext<FilterSortContextType | null>(null);

export const useFilterSort = () => {
  const context = useContext(FilterSortContext);
  if (!context) {
    throw new Error('useFilterSort must be used within a FilterSortProvider');
  }
  return context;
};

type FilterSortProviderProps = {
  children: ReactNode;
};

export const FilterSortProvider: React.FC<FilterSortProviderProps> = ({ children }) => {
  const [filterByValue, setFilterByValue] = useState<string>('');
  const [sortByValue, setSortByValue] = useState<string>('popularity.desc');

  const handleFilterChange = (selectedFilter: string) => {
    setFilterByValue(selectedFilter);
  };

  const handleSortChange = (selectedSort: string) => {
    if (selectedSort === sortByValue) {
      setSortByValue(`${sortByValue}.desc`);
    } else {
      setSortByValue(selectedSort);
    }
  };

  return (
    <FilterSortContext.Provider value={{ filterByValue, setFilterByValue, sortByValue, setSortByValue }}>
      {children}
    </FilterSortContext.Provider>
  );
};
