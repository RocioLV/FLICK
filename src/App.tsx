import { useEffect, useState } from "react";

import Header from "./components/Home/Header";
import Hero from "./components/Home/Hero";
import Footer from "./components/Home/Footer";

import NavigationBar from "./components/Movies/NavigationBar";
import MovieSearch from "./components/Movies/MovieSearch";
import Movies from "./components/Movies/Movies";
import PaginationComponent from "./components/Movies/Pagination";

import { FilterSortProvider } from "./components/Movies/FilterSortProvider";
import { useFilterSort } from "./components/Movies/useFilterSort";

function MovieCatalog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const { filterByValue, sortByValue } = useFilterSort();

  useEffect(() => {
    setCurrentPage(1);
    setTotalPages(0);
  }, [filterByValue, sortByValue]);

  const handleSearch = (query: string) => {
    setCurrentPage(1);
    setTotalPages(0);
    setSearchQuery(query);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div>
      <Header />

      <main>
        <Hero />

        <section id="movie-catalog">
          <MovieSearch
            searchQuery={searchQuery}
            onSearch={handleSearch}
          />

          {!searchQuery && <NavigationBar />}

          {searchQuery && (
            <p className="flick-search-summary">
              Search results for: <strong>{searchQuery}</strong>
            </p>
          )}

          <Movies
            page={currentPage}
            searchQuery={searchQuery}
            onTotalPagesChange={setTotalPages}
          />

          {totalPages > 1 && (
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <FilterSortProvider>
      <MovieCatalog />
    </FilterSortProvider>
  );
}
