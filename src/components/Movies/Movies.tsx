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
  searchQuery: string;
  onTotalPagesChange: (totalPages: number) => void;
}

const IMAGE_URL = "https://image.tmdb.org/t/p/w342";

export default function Movies({
  page,
  searchQuery,
  onTotalPagesChange,
}: MoviesProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMovieId, setSelectedMovieId] =
    useState<number | null>(null);

  const { filterByValue, sortByValue } = useFilterSort();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      setLoading(true);
      setError(null);
      setMovies([]);
      onTotalPagesChange(0);

      try {
        const isSearching = searchQuery.trim().length > 0;

        const params = new URLSearchParams({
          action: isSearching ? "search" : "discover",
          page: String(page),
        });

        if (isSearching) {
          params.set("query", searchQuery.trim());
        } else {
          params.set("sort_by", sortByValue);

          if (filterByValue) {
            params.set("with_genres", filterByValue);
          }
        }

        const response = await fetch(
          `/api/movies?${params.toString()}`,
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
    }

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [
    page,
    searchQuery,
    filterByValue,
    sortByValue,
    onTotalPagesChange,
  ]);

  return (
    <>
      <section
        className="movies-container"
        aria-label="Movie catalog"
        aria-busy={loading}
      >
        {loading && <p role="status">Loading movies...</p>}

        {error && <p role="alert">{error}</p>}

        {!loading && !error && movies.length === 0 && (
          <p>
            {searchQuery
              ? `No movies found for "${searchQuery}".`
              : "No movies found for the selected filters."}
          </p>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="movie-grid">
            {movies.map((movie) => (
              <article
                key={movie.id}
                className="movie-item"
              >
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
