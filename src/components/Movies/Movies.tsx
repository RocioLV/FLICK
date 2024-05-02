// // Movies.tsx

import React, { useEffect, useState } from 'react';
import './Movies.css';
import { useFilterSort } from './FilterSortContext';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

interface MoviesProps {
  page: number;
}

const Movies: React.FC<MoviesProps> = ({ page }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { filterByValue, sortByValue } = useFilterSort(); // Obtener valores de filtrado y ordenamiento del contexto
  const apiKey = 'cf0e1952324b9e21971b9172680a665f';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}&${filterByValue}&sort_by=${sortByValue}`
        );
        if (!response.ok) {
          throw new Error('Error al obtener las películas');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [page, filterByValue, sortByValue]); // Escucha cambios en page, filterByValue y sortByValue

  return (
    <div className="movies-container">
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
            <p>{movie.release_date.split('-')[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;


// import React, { useEffect, useState } from 'react';
// import './Movies.css';

// interface Movie { // describe la estructura de un objeto de película, tiene 4 propiedades
//   id: number;
//   poster_path: string;
//   title: string;
//   release_date: string;
// }

// interface MoviesProps { // define la estructura de los props que se pueden pasar al componente Movies
//   page: number;
// }

// const Movies: React.FC<MoviesProps> = ({ page }) => {
//   const [movies, setMovies] = useState<Movie[]>([]); // crea un estado llamado "movies" que es un array de objetos de tipo "Movie".
//   // El estado se inicializa con un array vacío. La fx "setMovies" se utiliza para actualizar el valor del estado "movies".
//   const apiKey = 'cf0e1952324b9e21971b9172680a665f';

//   useEffect(() => { // se utiliza para ejecutar efectos secundarios en componentes funcionales
//     const fetchMovies = async () => { // fx asíncrona para obtener las películas
//       try {
//         const response = await fetch(
//           `https://api.themoviedb.org/3/discover/movie?with_genres=Animation&api_key=${apiKey}&page=${page}`
//           // `https://api.themoviedb.org/3/discover/movie?with_genres=Animation&api_key=${apiKey}&page=${page}'
//           // `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`
//         );
//         if (!response.ok) { // verifica si la respuesta de la solicitud HTTP no es existosa
//           throw new Error('Error al obtener las películas');
//         }
//         const data = await response.json(); // convertir los datos recibidos en la respuesta HTTP en formato JSON
//         setMovies(data.results); // actualizar el estado "movies" con los resultados obtenidos
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchMovies(); // se ejecuta una vez cuando el componente se monta y cada vez que cambien los valores de page
//   }, [page]); // [page] se pasa como segundo argumento a useEffect(), (el efecto solo se ejecuta nuevamente si el valor cambia

//   return (
//     <div className="movies-container">
//       <div className="movie-grid">
//         {movies.map((movie) => (
//           <div key={movie.id} className="movie-item">
//             <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
//             <p>{movie.title}</p>
//             <p>{movie.release_date.split('-')[0]}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Movies;


// ///////////FUNCIONA OK////////////////////////////////
// // import React, { useEffect, useState } from 'react';
// // import './Movies.css'; // Importa tu archivo CSS

// // interface Movie {
// //   id: number;
// //   poster_path: string;
// //   title: string;
// //   release_date: string;
// // }

// // const Movies: React.FC = () => {
// //   const [movies, setMovies] = useState<Movie[]>([]);
// //   const [page, setPage] = useState(1); // Página actual
// //   const apiKey = 'cf0e1952324b9e21971b9172680a665f';

// //   useEffect(() => {
// //     fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`)
// //       .then((response) => response.json())
// //       .then((data: { results: Movie[] }) => {
// //         setMovies(data.results);
// //       })
// //       .catch((error) => {
// //         console.error('Error al obtener las películas', error);
// //       });
// //   }, [page]); // Escucha cambios en 'page'

// //   return (
// //     <div className="movies-container">
// //       <h2>Lista de películas</h2>
// //       <div className="movie-grid">
// //         {movies.map((movie) => (
// //           <div key={movie.id} className="movie-item">
// //             <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
// //             <p>{movie.title}</p>
// //             <p>Año de lanzamiento: {movie.release_date.split('-')[0]}</p>
// //           </div>
// //         ))}
// //       </div>
// //       <button onClick={() => setPage(page + 1)}>Cargar más películas</button>
// //     </div>
// //   );
// // };

// // export default Movies;




// // import React, { useEffect, useState } from 'react';

// // const Movies: React.FC = () => {
// //   const [movies, setMovies] = useState([]);
// //   const apiKey = 'cf0e1952324b9e21971b9172680a665f'; 

// //   useEffect(() => {
// //     // fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&primary_release_date.gte=1970-01-01&primary_release_date.lte=1990-12-3`)
// //     fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setMovies(data.results);
// //       })
// //       .catch((error) => {
// //         console.error('Error al obtener las películas', error);
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Lista de películas</h1>
// //       <ul>
// //         {movies.map((movie) => (
// //           <li key={movie.id}>
// //             <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
// //             <p>{movie.title}</p>
// //             <p>Año de lanzamiento: {movie.release_date.split('-')[0]}</p>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Movies;
