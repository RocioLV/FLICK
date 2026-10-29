
import { getMovieDetails } from "../../service/movieApi";
import { useEffect, useRef, useState } from "react";
import type { MovieInfo } from "../../service/movieTypes";
import "./MovieModal.css";

interface MovieModalProps {
  movieId: number;
  onClose: () => void;
}

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieModal({
  movieId,
  onClose,
}: MovieModalProps) {
  const [movie, setMovie] = useState<MovieInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovieDetails() {
      setLoading(true);
      setError(null);
      setMovie(null);

      try {
        const data = await getMovieDetails(
        movieId,
        controller.signal
       );

        if (!controller.signal.aborted) {
          setMovie(data);
        }
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

    fetchMovieDetails();

    return () => controller.abort();
  }, [movieId]);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements =
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [onClose]);

  const releaseYear = movie?.release_date
    ? movie.release_date.slice(0, 4)
    : "Unknown";

  const rating = movie?.vote_average
    ? movie.vote_average.toFixed(1)
    : "N/A";

  const runtime = movie?.runtime
    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
    : "Unknown";

  return (
    <div
      className="movie-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="movie-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="movie-modal-title"
        aria-describedby="movie-modal-description"
        aria-label={!movie ? "Movie details" : undefined}
      >
        <button
          ref={closeButtonRef}
          className="movie-modal-close"
          onClick={onClose}
          aria-label="Close movie details"
          type="button"
        >
          &times;
        </button>

        {loading && (
          <p role="status" className="movie-modal-message">
            Loading movie details...
          </p>
        )}

        {error && (
          <p role="alert" className="movie-modal-message">
            {error}
          </p>
        )}

        {!loading && !error && movie && (
          <div className="movie-modal-content">
            <div className="movie-modal-poster">
              {movie.poster_path ? (
                <img
                  src={`${IMAGE_URL}${movie.poster_path}`}
                  alt={`Poster of ${movie.title}`}
                />
              ) : (
                <div className="movie-modal-placeholder">
                  No poster available
                </div>
              )}
            </div>

            <div className="movie-modal-info">
              <h2 id="movie-modal-title">{movie.title}</h2>

              {movie.tagline && (
                <p className="movie-modal-tagline">
                  {movie.tagline}
                </p>
              )}

              <div className="movie-modal-metadata">
                <span>{releaseYear}</span>
                <span>{runtime}</span>
                <span>★ {rating}/10</span>
              </div>

              <div className="movie-modal-genres">
                {movie.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </div>

              <h3>Overview</h3>

              <p id="movie-modal-description">
                {movie.overview || "No overview available."}
              </p>

              <p className="movie-modal-votes">
                Based on {movie.vote_count.toLocaleString()} votes
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
