import React, { useEffect, useState } from 'react';
import './Movies.css'; // Importa tu archivo CSS

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1); // Página actual
  const apiKey = 'cf0e1952324b9e21971b9172680a665f';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`)
      .then((response) => response.json())
      .then((data: { results: Movie[] }) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error('Error al obtener las películas', error);
      });
  }, [page]); // Escucha cambios en 'page'

  return (
    <div className="movies-container">
      <h2>Lista de películas</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
            <p>Año de lanzamiento: {movie.release_date.split('-')[0]}</p>
          </div>
        ))}
      </div>
      <button onClick={() => setPage(page + 1)}>Cargar más películas</button>
    </div>
  );
};

export default Movies;




// import React, { useEffect, useState } from 'react';

// const Movies: React.FC = () => {
//   const [movies, setMovies] = useState([]);
//   const apiKey = 'cf0e1952324b9e21971b9172680a665f'; 

//   useEffect(() => {
//     // fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&primary_release_date.gte=1970-01-01&primary_release_date.lte=1990-12-3`)
//     fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setMovies(data.results);
//       })
//       .catch((error) => {
//         console.error('Error al obtener las películas', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Lista de películas</h1>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>
//             <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
//             <p>{movie.title}</p>
//             <p>Año de lanzamiento: {movie.release_date.split('-')[0]}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Movies;
