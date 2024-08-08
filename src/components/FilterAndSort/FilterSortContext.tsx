import React, { createContext, useContext, useState, ReactNode } from 'react';

type FilterSortContextType = {
  filterByValue: string;
  setFilterByValue: React.Dispatch<React.SetStateAction<string>>;
  sortByValue: string;
  setSortByValue: React.Dispatch<React.SetStateAction<string>>;
};

const FilterSortContext = createContext<FilterSortContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
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


// import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// type FilterSortContextType = { // Define un tipo de contexto que describe los valores y funciones que estarán disponibles.
//   filterByValue: string; // Valor actual del filtro.
//   setFilterByValue: Dispatch<SetStateAction<string>>; // Función para actualizar el filtro.
//   sortByValue: string; // Valor actual del ordenamiento.
//   setSortByValue: Dispatch<SetStateAction<string>>; // Función para actualizar el ordenamiento.
// };

// const FilterSortContext = createContext<FilterSortContextType | null>(null); // Crea el contexto con un valor inicial de null.

// export const useFilterSort = () => { // Hook personalizado para acceder al contexto de filtrado y ordenamiento.
//   const context = useContext(FilterSortContext); // Accede al contexto.
//   if (!context) { // Si el contexto es null, lanza un error indicando que debe usarse dentro de un proveedor.
//     throw new Error('useFilterSort must be used within a FilterSortProvider');
//   }
//   return context; // Devuelve el contexto si existe.
// };

// type FilterSortProviderProps = { // Define las propiedades que el proveedor espera recibir, que en este caso solo es children.
//   children: ReactNode; // Cualquier componente hijo que se renderizará dentro del proveedor.
// };

// export const FilterSortProvider: React.FC<FilterSortProviderProps> = ({ children }) => { // Define el componente proveedor del contexto.
//   const [filterByValue, setFilterByValue] = useState<string>(''); // Estado para el valor del filtro.
//   const [sortByValue, setSortByValue] = useState<string>('popularity.desc'); // Estado para el valor del ordenamiento.

//   return ( // Proporciona el contexto a cualquier componente hijo, pasando los valores y las funciones para actualizar esos valores.
//     <FilterSortContext.Provider value={{ filterByValue, setFilterByValue, sortByValue, setSortByValue }}>
//       {children}
//     </FilterSortContext.Provider>
//   );
// };