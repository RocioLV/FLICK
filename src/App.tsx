
import { useEffect, useState } from "react";

import Header from "./components/Home/Header";
import NavigationBar from "./components/Movies/NavigationBar";
import Movies from "./components/Movies/Movies";
import Footer from "./components/Home/Footer";
import PaginationComponent from "./components/Movies/Pagination";

import {
  FilterSortProvider,
  useFilterSort,
} from "./components/Movies/FilterSortContext";

// Catálogo principal de películas
function MovieCatalog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { filterByValue, sortByValue } = useFilterSort();

  // Reiniciar la paginación cuando cambian los filtros
  useEffect(() => {
    setCurrentPage(1);
    setTotalPages(0);
  }, [filterByValue, sortByValue]);

  // Cambiar de página únicamente dentro del rango válido
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
  };

  return (
    <div>
      <Header />

      <main>
        <NavigationBar />

        <Movies
          page={currentPage}
          onTotalPagesChange={setTotalPages}
        />

        {totalPages > 1 && (
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

// Proveedor del contexto compartido
export default function App() {
  return (
    <FilterSortProvider>
      <MovieCatalog />
    </FilterSortProvider>
  );
}
