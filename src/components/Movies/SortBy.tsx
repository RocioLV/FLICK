import { useState } from 'react';

// Props que utilizará el sort: la función que maneja el estado y cambia el valor del sort
interface sortByProps {
  onChangeSortBy: (sortBy: string) => void;
}

const SortBy: React.FC<sortByProps> = ({ onChangeSortBy }) => { // Renderiza selector de opciones
  const [sortByValue, setSortByValue] = useState('popularity.desc'); // valor inicial
  //  El valor seleccionado se almacena en el estado sortByValue y se actualiza mediante la función setSortByValue

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value; //Toma el valor del option seleccionado
    setSortByValue(selectedValue);
    onChangeSortBy(selectedValue);
    //  Cuando cambia la selección, se llama a la fx onChangeSortBy pasando el nuevo valor seleccionado como argumento
}

return (
  <>
  <section className='sort-by-wrapper'>
  <select className='sort-by' data-tedid='sort' onChange={handleSortByChange} value={sortByValue}>
    <option value='popularity.desc'>Popularity</option>
    <option value='release_date.desc'>Release date</option>
    <option value='vote_average.desc'>Vote average</option>
    <option value='revenue.desc'>Revenue</option>
  </select> 
  </section>
  </>
);
};

export default SortBy;
