import { useState } from "react";

// Interfaz para definir las Props que utilizará el filtro: la función que maneja el estado y cambia el valor del filter
interface MovieFilterProps {
  onChangeFilterBy: (filter: string) => void; // Se agrega el void para decirle que no devuelve nada
}

const MovieFilter: React.FC<MovieFilterProps> = ({ onChangeFilterBy }) => {
  const [filterByValue, setFilterByValue] = useState(""); // Declara un estado local filterByValue con un valor inicial de cadena vacía.

  // Declara una función handleFilterByChange que se ejecuta cuando cambia el valor del select (Manejador de eventos).
  const handleFilterByChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedFilterValue = event.target.value; //Toma el valor del option seleccionado

    //setFIlterByValue actualiza el estado local de filterByValue con el valor seleccionado
    setFilterByValue(selectedFilterValue);
    //Llama a la función que cambia el estado pasandole el valor seleccionado
    onChangeFilterBy(selectedFilterValue);
  };
  return (
    <>
      <section className="date-filter-wrapper">
        <select
          className="sort-by"
          name="filter-by"
          data-testid="filter"
          onChange={handleFilterByChange}
          value={filterByValue}
        >
          <option value="">Filter By Release Date</option>
          <option value="primary_release_date.gte=2019-12-31&primary_release_date.lte=2023-12-31">
            Latest Releases
          </option>
          <option value="primary_release_date.gte=2010-12-31&primary_release_date.lte=2020-12-31">
            Last Decade
          </option>
          <option value="primary_release_date.gte=2000-12-31&primary_release_date.lte=2009-12-31">
            2000s
          </option>
          <option value="primary_release_date.gte=1990-12-31&primary_release_date.lte=1999-12-31">
            90s
          </option>
          <option value="primary_release_date.gte=1900-01-01&primary_release_date.lte=1989-12-31">
            80s And Older
          </option>
        </select>
      </section>
    </>
  );
};

export default MovieFilter;
