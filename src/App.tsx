import React, { useState } from "react";
import Header from "./components/Home/Header";
import NavigationBar from "./components/Movies/NavigationBar";
import Movies from "./components/Movies/Movies";
import Footer from "./components/Home/Footer";
import PaginationComponent from "./components/Movies/Pagination";
import SortBy from "./components/Movies/SortBy";

// componente App que renderiza una página web con una estructura básica.
// utiliza el estado del hook useState para almacenar la página web actual 
// y la función setCurrentPage para actualizarla.

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1); // estado de la página actual, inicia en 1.
  // currentPage es una variable que almacena el número de la página actual en la aplicación.
  // setCurrentPage es una función que actualiza el estado de la página actual en la aplicación.
  const totalMovies = 1000; // total de películas de tu fuente de datos
  const moviesPerPage = 20; // Número de películas por página
  const totalPages = Math.ceil(totalMovies / moviesPerPage);
  // pasa la página actual a los componentes "Movies" y "PaginationComponent" como propiedades

  const handlePageChange = (page: number) => {
    // fx flecha que recibe el parámetro page de tipo número.
    // se utiliza para actualizar el estado de la página actual mediante la llamada a la fx "setCurrentePage"
    setCurrentPage(page);
  };

  return (
    // finalmente renderiza los componentes "Header", "NavigationBar", "Movies", "PaginationComponent" y "Footer."
    <div>
      <Header />
      <NavigationBar />
      <Movies page={currentPage} />
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Footer />
    </div>
  );
};

export default App;