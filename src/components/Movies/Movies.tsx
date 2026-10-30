
import { useEffect, useState } from "react";
import "./Movies.css";
import { useFilterSort } from "./useFilterSort";
import MovieModal from "./MovieModal";

interface Movie {
  id: number;
  poster_path: string | null;
  title: string;
  release_date: string;
}

interface MoviesResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

interface MoviesProps {
  page: number;
  onTotalPagesChange: (totalPages: number) => void;
}

const API_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w342";

export default function Movies({
  page,
  onTotalPagesChange,
}: MoviesProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Película seleccionada para mostrar en el modal
  const [selectedMovieId, setSelectedMovieId] =
    useState<number | null>(null);

  const { filterByValue, sortByValue } = useFilterSort();

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      setMovies([]);
      onTotalPagesChange(0);

      try {
        if (!apiKey) {
          throw new Error("TMDB API key is not configured.");
        }

        const params = new URLSearchParams({
          api_key: apiKey,
          page: String(page),
          sort_by: sortByValue,
          language: "en-US",
        });

        if (filterByValue) {
          params.set("with_genres", filterByValue);
        }

        const response = await fetch(
          `${API_URL}/discover/movie?${params.toString()}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch movies (${response.status}).`
          );
        }

        const data: MoviesResponse = await response.json();

        if (controller.signal.aborted) return;

        setMovies(data.results);
        onTotalPagesChange(data.total_pages);
      } catch (err) {
        if (controller.signal.aborted) return;

        setError(
          err instanceof Error
            ? err.message
            : "An unexpected error occurred."
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchMovies();

    return () => controller.abort();
  }, [
    page,
    filterByValue,
    sortByValue,
    apiKey,
    onTotalPagesChange,
  ]);

  return (
    <>
      <section
        className="movies-container"
        aria-label="Movie catalog"
        aria-busy={loading}
      >
        {loading && (
          <p role="status">Loading movies...</p>
        )}

        {error && (
          <p role="alert">{error}</p>
        )}

        {!loading && !error && movies.length === 0 && (
          <p>No movies found for the selected filters.</p>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="movie-grid">
            {movies.map((movie) => (
              <article key={movie.id} className="movie-item">
                <button
                  type="button"
                  className="movie-card-button"
                  onClick={() => setSelectedMovieId(movie.id)}
                  aria-label={`View details of ${movie.title}`}
                >
                  {movie.poster_path ? (
                    <img
                      src={`${IMAGE_URL}${movie.poster_path}`}
                      alt={`Poster of ${movie.title}`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="movie-placeholder">
                      No poster available
                    </div>
                  )}

                  <h2>{movie.title}</h2>

                  <p>
                    {movie.release_date
                      ? movie.release_date.slice(0, 4)
                      : "Release date unavailable"}
                  </p>
                </button>
              </article>
            ))}
          </div>
        )}
      </section>

      {selectedMovieId !== null && (
        <MovieModal
          movieId={selectedMovieId}
          onClose={() => setSelectedMovieId(null)}
        />
      )}
    </>
  );
}
