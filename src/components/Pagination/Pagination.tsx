import { Dispatch, SetStateAction } from 'react';
import nextImage from '../../assets/next-image.png';
import previousImage from '../../assets/previous-image.png';
import firstPage from '../../assets/first-page.png';
import lastPage from '../../assets/last-page.png';
import '../Home/Home.css';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, setCurrentPage }) => {
  // Acá usamos el Hook useState para establecer los estados de movies y de currentPage

  //Funcion para manejar el cambio de página
  const handleNextPage = () => {
    // Incrementa el número de página
    setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    // Incrementa el número de página
    setCurrentPage(currentPage - 1);
  };
  const handleLastPage = () => {
    setCurrentPage(500);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };


  // Renderizamos el componente
  return (
    <>
      <section className="centered-container">
        {/* Botón para avanzar a la siguiente página */}
        {currentPage > 1 && (
          <>
            <button className= 'button-next' onClick={handleFirstPage}>
              <img src = {firstPage} className= 'previousImage' alt = 'First Page' />
            </button>
            <button className= 'button-next' onClick={handlePreviousPage}>
              <img src = {previousImage} className= 'previousImage' alt = 'Arrow left' />Previous page
            </button> 
          </>
        )}
        {/* Se llama a la función handleNextPAge cada vez que se hace click */}
        <button className= 'button-next' onClick={handleNextPage}>Load More
          <img src = {nextImage} className= 'nextImage' alt = 'Arrow right' /></button>
        <button className= 'button-next' onClick={handleLastPage}>
          <img src = {lastPage} className= 'nextImage' alt = 'Last Page' /></button>
      </section>
    </>
  );
    
};


export default Pagination; 