// // movieService.ts

// import { Movie } from './movieTypes'; 

// const apiKey = 'cf0e1952324b9e21971b9172680a665f';

// export const fetchMovies = async (page: number, sortBy: string): Promise<Movie[]> => {
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/discover/movie?with_genres=Animation&api_key=${apiKey}&page=${page}&sort_by=${sortBy}`
//     );
//     if (!response.ok) {
//       throw new Error('Error getting movies');
//     }
//     const data = await response.json();
//     return data.results;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };