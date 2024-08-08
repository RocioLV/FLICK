//Definimos el tipo de dato Movie que vamos a obtener de las peliculas
export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  vote_count: number;
  vote_average: number;
};

//Definimos la respuesta de la Api que nos dará un arreglo de objetos tipo Movie (definido anteriormente)
export type ApiResponse = {
  results: Movie[];
};

//Guardamos en una constate la Api Key que necesitaremos como autorizavión
export const API_KEY = 'cf0e1952324b9e21971b9172680a665f'; 

// TOKEN DE ACCESO: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjBlMTk1MjMyNGI5ZTIxOTcxYjkxNzI2ODBhNjY1ZiIsIm5iZiI6MTcyMzA4MzczMi4zMTc0MTQsInN1YiI6IjY1NDQwYjc5OWNjNjdiMDBhYjQ1YTNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QWRUatgfdfh00Ui-7Mq_j9LuuG4ZEfuCY_m87LaARyk

export const buildMovieApiUrl = (currentPage: number, filterByValue: string, sortByValue: string) => {
    return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&${filterByValue}&sort_by=${sortByValue}&with_genres=99`;
  }

//Creamos una promesa para hacer la solicitud HTTP con fetch y obtenerla manejando los errores
export const requestMovies = (url: string, options: RequestInit): Promise<ApiResponse>=> {
  // Utiliza la función fetch para realizar una solicitud HTTP con la URL y las opciones proporcionadas.
  return fetch(url, options)
    .then(async (response) => {
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Si la respuesta es exitosa, convierte el cuerpo de la respuesta a formato JSON (objeto Javascript) para ser leído por la aplicación
            const data = await response.json();
      //Indicamos que la data es la ApiResponse de las peliculas
      return data as ApiResponse;
    })
    .catch((error) => {
      console.error('Error:', error);
      // Relanza el error para que pueda ser manejado por el código que llamó a esta función.
      throw error;
    });
};