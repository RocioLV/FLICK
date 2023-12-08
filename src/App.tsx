import React, { useState } from "react";
import Header from "./components/Home/Header";
import NavigationBar from "./components/Movies/NavigationBar";
import Movies from "./components/Movies/Movies";
import Footer from "./components/Home/Footer";
import PaginationComponent from "./components/Movies/Pagination";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalMovies = 1000; // Aquí deberías obtener el total de películas de tu fuente de datos
  const moviesPerPage = 20; // Número de películas por página
  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
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

// App.tsx

// import React from 'react';
// import Movies from './components/Movies';
// import './components/Movies.css';

// const App: React.FC = () => {
//   return (
//     <div>
//       <Movies page={1} /> {/* Llama a Movies y pasa la página */}
//     </div>
//   );
// };

// export default App;

// import Movies from './components/Movies';
// import PaginationComponent from './components/Pagination';

// function App() {
//   return (
//     <div>
//       <Movies />
//       <PaginationComponent />
//     </div>
//   );
// }

// export default App;

// import flickLogo from "./assets/FLICKthis.gif";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <div>
//         <a target="_blank">
//           <img src={flickLogo} className="flickLogo" alt="Flick logo" />
//         </a>
//       </div>
//       <h4 className="slogan">Toda la magia del cine a un clic de distancia</h4>
//       <a className="btn" href="../components/Movies">
//         <h2>¡Vamos! 🎯</h2>
//       </a>
//       <footer className="developed">Developed with ♥️ by Ro LV.</footer>
//     </>
//   );
// }

// export default App;
