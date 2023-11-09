import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const perPage = 20; // Cantidad de elementos por página
  const totalMovies = 1000; // Cantidad total de películas

  const totalPages = Math.ceil(totalMovies / perPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Lista de películas de la página actual */}
      {/* ... Renderiza las películas ... */}

      {/* Componente de paginación de Bootstrap */}
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />

        {/* Renderiza los números de página */}
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}

        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} />
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
