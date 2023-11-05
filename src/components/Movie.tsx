import React, { useEffect, useState } from "react";

const Movie: React.FC = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=cf0e1952324b9e21971b9172680a665f"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieList);

  return (
    <div>
      {movieList.map((movie) => (
        <img style={{width:"300px", height:"250px", marginLeft:"10px", marginTop:"30px"}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      ))}
    </div>
  );
};

export default Movie;