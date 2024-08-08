import { useState } from 'react';

// Define una interfaz para las propiedades (props) que recibirá el componente SortBy
interface sortByProps {
  onChangeSortBy: (sortBy: string) => void; // onChangeSortBy es una función que recibe un string como argumento y no devuelve nada.
}

const SortBy: React.FC<sortByProps> = ({ onChangeSortBy }) => { // Define el componente funcional SortBy, que recibe las props definidas en sortByProps
  // Usa el hook useState para crear una variable de estado sortByValue y una función setSortByValue
  const [sortByValue, setSortByValue] = useState('popularity.desc'); // Inicializa sortByValue con el valor 'popularity.desc'
  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => { // Define una función handleSortByChange que maneja el evento de cambio (onChange) en el <select>
    const selectedValue = event.target.value; // Obtiene el valor seleccionado del elemento <select>
    setSortByValue(selectedValue); // Actualiza el estado sortByValue con el nuevo valor seleccionado
    onChangeSortBy(selectedValue); // Llama a la función onChangeSortBy pasada como prop para notificar al componente padre sobre el cambio
  };

  return (
    <>
      {/* Envolver el select en una sección con una clase para estilizar */}
      <section className='sort-by-wrapper'>
        <select 
          className='sort-by' // Clase CSS para el estilo del select
          data-tedid='sort' // Atributo personalizado, útil para pruebas o tracking
          onChange={handleSortByChange} // Asigna la función handleSortByChange al evento onChange
          value={sortByValue} // Establece el valor del select según el estado sortByValue
        >
          {/* Define las opciones disponibles en el select */}
          <option value='popularity.desc'>Popularity</option>
          <option value='release_date.desc'>Release date</option>
          <option value='vote_average.desc'>Ratings ↓</option>
          <option value='vote_average.asc'>Ratings ↑</option>
        </select> 
      </section>
    </>
  );
};

export default SortBy;
