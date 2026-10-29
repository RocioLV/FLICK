
import type { MovieInfo } from "./movieTypes";

const API_URL = "https://api.themoviedb.org/3";

export async function getMovieDetails(
  movieId: number,
  signal?: AbortSignal
): Promise<MovieInfo> {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  if (!apiKey) {
    throw new Error("TMDB API key is not configured.");
  }

  const params = new URLSearchParams({
    api_key: apiKey,
    language: "en-US",
  });

  const response = await fetch(
    `${API_URL}/movie/${movieId}?${params.toString()}`,
    { signal }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to load movie details (${response.status}).`
    );
  }

  const data: MovieInfo = await response.json();

  return data;
}
