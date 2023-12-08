// movieService.ts

import { Movie } from './movieTypes'; // Ajusta la ruta según la estructura de tu proyecto

const apiKey = 'cf0e1952324b9e21971b9172680a665f';

export const fetchMovies = async (page: number, sortBy: string): Promise<Movie[]> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=Animation&api_key=${apiKey}&page=${page}&sort_by=${sortBy}`
    );
    if (!response.ok) {
      throw new Error('Error getting movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};



/* movieService.ts */
// const apiKey = 'cf0e1952324b9e21971b9172680a665f';

// export const fetchMovies = async (page: number): Promise<Movie[]> => {
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/discover/movie?with_genres=Animation&api_key=${apiKey}&page=${page}`
//     );
//     if (!response.ok) {
//       throw new Error('Error al obtener las películas');
//     }
//     const data = await response.json();
//     return data.results;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };



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
