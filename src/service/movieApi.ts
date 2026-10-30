import type { MovieInfo } from "./movieTypes";

export async function getMovieDetails(
  movieId: number,
  signal?: AbortSignal
): Promise<MovieInfo> {
  const params = new URLSearchParams({
    action: "details",
    movieId: String(movieId),
  });

  const response = await fetch(
    `/api/movies?${params.toString()}`,
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
