import React, { createContext, useContext, useState, ReactNode } from 'react';

type FilterSortContextType = {
  filterByValue: string;
  setFilterByValue: React.Dispatch<React.SetStateAction<string>>;
  sortByValue: string;
  setSortByValue: React.Dispatch<React.SetStateAction<string>>;
};

const FilterSortContext = createContext<FilterSortContextType | null>(null);

export const useFilterSort = () => {
    //Esta función se utilizará para acceder al contexto en otros componentes. Utiliza useContext para obtener el valor actual del contexto FilterSortContext
  const context = useContext(FilterSortContext);
  if (!context) {
    throw new Error('useFilterSort must be used within a FilterSortProvider');
  }
  return context;
};

type FilterSortProviderProps = { /*Define un tipo FilterSortProviderProps que describe las propiedades que se esperan para el componente FilterSortProvider. 
    En este caso, el único propósito esperado es children, que es de tipo ReactNode. children se utiliza para envolver otros componentes anidados dentro de FilterSortProvider.*/
  children: ReactNode;
};

//Proveedor del contexto
export const FilterSortProvider: React.FC<FilterSortProviderProps> = ({ children }) => {
    //se utiliza el hook useState para definir dos estados: filterByValue y sortByValue, que se inicializan con valores predeterminados. 
  const [filterByValue, setFilterByValue] = useState<string>('');
  const [sortByValue, setSortByValue] = useState<string>('popularity.desc');
  

  return (
    
    <FilterSortContext.Provider value={{ filterByValue, setFilterByValue, sortByValue, setSortByValue }}> 
    {/*El componente devuelve el contexto FilterSortContext.Provider con los valores actuales de filterByValue y sortByValue, 
    junto con las funciones para actualizar estos valores (setFilterByValue y setSortByValue*/}
      {children}
    </FilterSortContext.Provider>
  );
};
