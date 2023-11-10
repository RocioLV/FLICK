// PaginationComponent.tsx

import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Movies from './Movies';
// import './Pagination.css';

const PaginationComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalMovies = 1000;
  const totalPages = Math.ceil(totalMovies / 20);
  const pagesToShow = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getVisiblePages = () => {
    const lastPage = Math.min(currentPage + pagesToShow - 1, totalPages);
    return Array.from({ length: pagesToShow }, (_, index) => lastPage - index).reverse();
  };

  return (
    <div className="pagination-container">
      <Movies page={currentPage} />

      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        />

        {getVisiblePages().map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Pagination.Item>
        ))}

        <Pagination.Next
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} />
      </Pagination>
    </div>
  );
};

export default PaginationComponent;






// import React, { useState } from 'react';
// import Pagination from 'react-bootstrap/Pagination';

// const PaginationComponent: React.FC = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   // Utiliza estado currentPage para realizar seguimiento de pag. actual y setCurrentPage para actualizarla.
//   const perPage = 20; // Cantidad de elementos por página
//   const totalMovies = 1000; // Cantidad total de películas

//   const totalPages = Math.ceil(totalMovies / perPage);
//   // calcula el número total de páginas dividiendo totalMovies por perPage

//   const handlePageChange = (page: number) => {
//     // al hacer clic en los botones de paginación, se llama a la fx handlePageChange para cambiar página actual
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       <Pagination>
//         <Pagination.First onClick={() => handlePageChange(1)} />
//         {/* hacer clic en el botón "First" llama a la fx handlePageChange con el valor 1 como argumento */}
//         <Pagination.Prev
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         />

//         {[...Array(10)].map((_, index) => (
//           <Pagination.Item
//             key={index + 1}
//             active={index + 1 === currentPage}
//             onClick={() => handlePageChange(index + 1)}
//           >
//             {index + 1}
//           </Pagination.Item>
//         ))}

//         <Pagination.Next
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         />
//         <Pagination.Last onClick={() => handlePageChange(totalPages)} />
//       </Pagination>
//     </div>
//   );
// };

// export default PaginationComponent;
