import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useFilterSort } from './FilterSortContext';

// Definición de las opciones de ordenamiento y filtrado como constantes
const sortOptions = [
  { value: 'popularity.desc', label: 'Popularity' },
  { value: 'release_date.asc', label: 'Release Date - Ascending' },
  { value: 'vote_average.desc', label: 'Vote Average' },
  { value: 'revenue.desc', label: 'Revenue' },
];

const genreOptions = [
  { value: 'Action', label: 'Action' },
  { value: 'Comedy', label: 'Comedy' },
  { value: 'Drama', label: 'Drama' },
  { value: 'Suspense', label: 'Suspense' },
  // Agrega más géneros si es necesario
];

const NavigationBar: React.FC = () => {
  const { sortByValue, setSortByValue, setFilterByValue } = useFilterSort();

  // Función genérica para manejar cambios en las opciones
  const handleDropdownChange = (selectedValue: string, type: 'sort' | 'filter') => {
    if (type === 'sort') {
      setSortByValue(selectedValue === sortByValue ? `${sortByValue}.desc` : selectedValue);
    } else {
      setFilterByValue(selectedValue);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        {/* Dropdown para ordenamiento */}
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="sort-dropdown">
            Sort By
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {sortOptions.map((option) => (
              <Dropdown.Item key={option.value} onClick={() => handleDropdownChange(option.value, 'sort')}>
                {option.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        {/* Dropdown para filtrado por género */}
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="filter-dropdown">
            Filter By Genre
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {genreOptions.map((option) => (
              <Dropdown.Item key={option.value} onClick={() => handleDropdownChange(option.value, 'filter')}>
                {option.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default NavigationBar;
