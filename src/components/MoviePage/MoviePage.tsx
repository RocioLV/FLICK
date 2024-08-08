import { useState, useEffect } from 'react';
import previousImage from '../../assets/previous-image.png';
import { useParams } from 'react-router-dom';
import { Movie, API_KEY } from '../../requests/moviesRequest';
import { Link } from 'react-router-dom';
import '../MoviePage/MoviePage.css';
// import docuPulseLogo from '../../assets/logo-web-docuPulse-noBackground.png';


const MoviePage = () => {
  const { movieId } = useParams(); // Usa el hook useParams para obtener el parámetro de la URL llamado "movieId"
  const [movie, setMovie] = useState<Movie | null>(null); // Inicializa un estado "movie" con valor inicial null
  
  useEffect(() => {

    const options: RequestInit = { // Opciones para la solicitud HTTP
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_KEY,
      },
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options) //Url utilizada para que tome el Id del documental
      .then((response) => response.json()) // Convierte la respuesta a JSON
      .then((data) => {
        setMovie(data); // Establece los detalles del documental en el estado
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [movieId]); // Este efecto se ejecutará cuando "movieId" cambie



  if (!movie) {
    console.log('no movie');
    return <section className='loading'><p>Cargando...</p></section>; // Si "movie" es null, muestra "Cargando..."
    
  }
  return (
    <>
    <section className='logo-container'>
    {/* <img src={docuPulseLogo} className='logo' /> */}
    </section>
    

      <section className='back-section'>
        <Link to={'/'} className='back'><img src={previousImage} alt='Back to catalog' className='previous-arrow' />Back to Catalogue</Link>{/* Usando el componente Link para que al hacer click navegue al Home */}
      </section>
      <section className= 'container'>
      <section className='card'>{/* Muestra datos de interés del documental seleccionado */}
        
        <h1 className='movie-title-detail'>{movie.original_title}</h1>
        <section className='inner-card'>
          
          <p className='score'>{((movie.vote_average)*10).toFixed(1)}{'%'}</p>
          <p className='date-detail'>{movie.release_date} | {movie.vote_count} {'votes'}</p>
        </section>

        <h2 className='overview-title'>Overview</h2>
        {movie.overview ? (
          <p className='overview'>{movie.overview}</p>
        ) : (
          <p className='overview'>No Overview provided</p>
        )}
        
      </section>

    

    <section className='poster-container'>
      <img className='movie-poster' 
      src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
      alt={movie.original_title}/> 
    </section>

    </section>
    </>
  );
};

export default MoviePage;