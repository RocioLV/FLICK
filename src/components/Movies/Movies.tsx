// Importamos React y los hooks useEffect y useState
import React, { useEffect, useState } from 'react';

// Importamos el archivo CSS para estilizar el componente
import './Movies.css';

// Importamos el contexto useFilterSort para obtener los valores de filtrado y ordenamiento
import { useFilterSort } from './FilterSortContext';

// Definimos la interfaz Movie que representa una película
interface Movie { 
  id: number; // Identificador de la película
  poster_path: string; // Ruta del póster de la película
  title: string; // Título de la película
  release_date: string; // Fecha de lanzamiento de la película
}

// Definimos la interfaz MoviesProps que representa las propiedades del componente
interface MoviesProps {
  page: number; // Página actual
}

// Definimos el componente funcional Movies que recibe una propiedad page
const Movies: React.FC<MoviesProps> = ({ page }) => {
  // Creamos un estado local movies que es un arreglo vacío de películas
  const [movies, setMovies] = useState<Movie[]>([]);

  // Obtenemos los valores de filtrado y ordenamiento del contexto useFilterSort
  const { filterByValue, sortByValue } = useFilterSort();

  // Definimos la clave de API para acceder a la API de The Movie Database
  const apiKey = 'cf0e1952324b9e21971b9172680a665f';

  // Utilizamos el hook useEffect para ejecutar un efecto secundario cuando el componente se renderiza
  useEffect(() => {
    // Definimos una función asíncrona fetchMovies que se encarga de obtener las películas de la API
    const fetchMovies = async () => {
      try {
        // Hacemos una solicitud GET a la API de The Movie Database
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}&${filterByValue}&sort_by=${sortByValue}`
        );

        // Verificamos si la respuesta es exitosa
        if (!response.ok) {
          throw new Error('Error al obtener las películas');
        }

        // Parseamos la respuesta en un objeto JSON
        const data = await response.json();

        // Actualizamos el estado movies con los resultados obtenidos de la API
        setMovies(data.results);
      } catch (error) {
        // Manejamos errores que puedan ocurrir al obtener las películas de la API
        console.error(error);
      }
    };

    // Ejecutamos la función fetchMovies
    fetchMovies();
  }, [page, filterByValue, sortByValue]); // Escuchamos cambios en page, filterByValue y sortByValue

  // Devolvemos el JSX que se renderiza en el componente
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

// Exportamos el componente Movies por defecto
export default Movies;