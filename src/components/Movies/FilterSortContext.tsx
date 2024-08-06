import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Define un tipo de contexto que describe los valores y funciones que estarán disponibles.
type FilterSortContextType = {
  filterByValue: string; // Valor actual del filtro.
  setFilterByValue: Dispatch<SetStateAction<string>>; // Función para actualizar el filtro.
  sortByValue: string; // Valor actual del ordenamiento.
  setSortByValue: Dispatch<SetStateAction<string>>; // Función para actualizar el ordenamiento.
};

// Crea el contexto con un valor inicial de null.
const FilterSortContext = createContext<FilterSortContextType | null>(null);

// Hook personalizado para acceder al contexto de filtrado y ordenamiento.
export const useFilterSort = () => {
  const context = useContext(FilterSortContext); // Accede al contexto.
  if (!context) {
    // Si el contexto es null, lanza un error indicando que debe usarse dentro de un proveedor.
    throw new Error('useFilterSort must be used within a FilterSortProvider');
  }
  return context; // Devuelve el contexto si existe.
};

// Define las propiedades que el proveedor espera recibir, que en este caso solo es children.
type FilterSortProviderProps = {
  children: ReactNode; // Cualquier componente hijo que se renderizará dentro del proveedor.
};

// Define el componente proveedor del contexto.
export const FilterSortProvider: React.FC<FilterSortProviderProps> = ({ children }) => {
  const [filterByValue, setFilterByValue] = useState<string>(''); // Estado para el valor del filtro.
  const [sortByValue, setSortByValue] = useState<string>('popularity.desc'); // Estado para el valor del ordenamiento.

  // Funciones opcionales para manejar cambios en el filtro y ordenamiento (actualmente comentadas).
  // const handleFilterChange = (selectedFilter: string) => {
  //   setFilterByValue(selectedFilter);
  // };

  // const handleSortChange = (selectedSort: string) => {
  //   if (selectedSort === sortByValue) {
  //     setSortByValue(`${sortByValue}.desc`);
  //   } else {
  //     setSortByValue(selectedSort);
  //   }
  // };

  // Proporciona el contexto a cualquier componente hijo, pasando los valores y las funciones para actualizar esos valores.
  return (
    <FilterSortContext.Provider value={{ filterByValue, setFilterByValue, sortByValue, setSortByValue }}>
      {children}
    </FilterSortContext.Provider>
  );
};
