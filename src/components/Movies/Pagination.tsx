import React from 'react';
import Pagination from 'react-bootstrap/Pagination'; // Importa el componente de paginación de react-bootstrap.
import './Movies.css'; // Importa el archivo de estilos para la paginación.

interface PaginationProps {
  currentPage: number; // Página actual.
  totalPages: number; // Número total de páginas.
  onPageChange: (page: number) => void; // Función para manejar el cambio de página.
}

// Componente de paginación
const PaginationComponent: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pagesToShow = 10; // Número de páginas que se mostrarán en la paginación.

  // Función para obtener las páginas visibles según la página actual y el total de páginas.
  const getVisiblePages = () => {
    const lastPage = Math.min(currentPage + pagesToShow - 1, totalPages); // Calcula la última página visible.
    return Array.from({ length: pagesToShow }, (_, index) => lastPage - index).reverse(); // Genera un array de páginas visibles.
  };

  return (
    <div className="pagination-container">
      <Pagination>
        {/* Botón para ir a la primera página */}
        <Pagination.First onClick={() => onPageChange(1)} />
        
        {/* Botón para ir a la página anterior, se desactiva si estamos en la primera página */}
        <Pagination.Prev
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        />

        {/* Renderiza las páginas visibles */}
        {getVisiblePages().map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage} // Marca la página actual como activa.
            onClick={() => onPageChange(page)} // Cambia a la página seleccionada al hacer clic.
          >
            {page}
          </Pagination.Item>
        ))}

        {/* Botón para ir a la página siguiente, se desactiva si estamos en la última página */}
        <Pagination.Next
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        />

        {/* Botón para ir a la última página */}
        <Pagination.Last onClick={() => onPageChange(totalPages)} />
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
