import Pagination from "react-bootstrap/Pagination";
import "./Movies.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PaginationComponent({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const maxVisiblePages = 5;

  // Evitar mostrar páginas fuera del rango válido
  const safeTotalPages = Math.max(1, totalPages);

  const safeCurrentPage = Math.min(
    Math.max(1, currentPage),
    safeTotalPages
  );

  // Calcular la cantidad de botones visibles
  const visibleCount = Math.min(
    maxVisiblePages,
    safeTotalPages
  );

  // Calcular la primera página visible
  const startPage = Math.max(
    1,
    Math.min(
      safeCurrentPage - Math.floor(visibleCount / 2),
      safeTotalPages - visibleCount + 1
    )
  );

  // Generar los números de página
  const visiblePages = Array.from(
    { length: visibleCount },
    (_, index) => startPage + index
  );

  const isFirstPage = safeCurrentPage === 1;
  const isLastPage = safeCurrentPage === safeTotalPages;

  const handleChange = (page: number) => {
    if (
      page < 1 ||
      page > safeTotalPages ||
      page === safeCurrentPage
    ) {
      return;
    }

    onPageChange(page);
  };

  if (totalPages <= 1) return null;

  return (
    <nav
      className="pagination-container"
      aria-label="Movie catalog pagination"
    >
      <Pagination>
        <Pagination.First
          disabled={isFirstPage}
          onClick={() => handleChange(1)}
        />

        <Pagination.Prev
          disabled={isFirstPage}
          onClick={() => handleChange(safeCurrentPage - 1)}
        />

        {visiblePages.map((page) => (
          <Pagination.Item
            key={page}
            active={page === safeCurrentPage}
            aria-label={`Page ${page}`}
            onClick={() => handleChange(page)}
          >
            {page}
          </Pagination.Item>
        ))}

        <Pagination.Next
          disabled={isLastPage}
          onClick={() => handleChange(safeCurrentPage + 1)}
        />

        <Pagination.Last
          disabled={isLastPage}
          onClick={() => handleChange(safeTotalPages)}
        />
      </Pagination>
    </nav>
  );
}
