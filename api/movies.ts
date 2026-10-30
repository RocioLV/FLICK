
const TMDB_URL = "https://api.themoviedb.org/3";

const allowedSortOptions = new Set([
  "popularity.desc",
  "popularity.asc",
  "primary_release_date.desc",
  "primary_release_date.asc",
  "vote_average.desc",
  "vote_average.asc",
  "revenue.desc",
  "revenue.asc",
  "original_title.asc",
  "original_title.desc",
]);

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const params = url.searchParams;

  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "TMDB configuration is missing." },
      { status: 500 }
    );
  }

  const action = params.get("action") ?? "discover";
  const page = Number(params.get("page") ?? "1");

  if (
    !Number.isInteger(page) ||
    page < 1 ||
    page > 500
  ) {
    return Response.json(
      { error: "Invalid page number." },
      { status: 400 }
    );
  }

  const tmdbParams = new URLSearchParams({
    api_key: apiKey,
    language: "en-US",
    page: String(page),
  });

  let endpoint: string;

  if (action === "search") {
    const query = params.get("query")?.trim() ?? "";

    if (!query || query.length > 120) {
      return Response.json(
        { error: "Invalid search query." },
        { status: 400 }
      );
    }

    endpoint = "/search/movie";
    tmdbParams.set("query", query);

  } else if (action === "details") {
    const movieId = params.get("movieId") ?? "";

    if (!/^[1-9]\d{0,9}$/.test(movieId)) {
      return Response.json(
        { error: "Invalid movie ID." },
        { status: 400 }
      );
    }

    endpoint = `/movie/${movieId}`;

  } else if (action === "discover") {
    endpoint = "/discover/movie";

    const sortBy =
      params.get("sort_by") ?? "popularity.desc";

    if (!allowedSortOptions.has(sortBy)) {
      return Response.json(
        { error: "Invalid sorting option." },
        { status: 400 }
      );
    }

    tmdbParams.set("sort_by", sortBy);

    const genre = params.get("with_genres");

    if (genre) {
      if (!/^\d{1,4}$/.test(genre)) {
        return Response.json(
          { error: "Invalid genre." },
          { status: 400 }
        );
      }

      tmdbParams.set("with_genres", genre);
    }

  } else {
    return Response.json(
      { error: "Unknown action." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `${TMDB_URL}${endpoint}?${tmdbParams.toString()}`,
      {
        headers: {
          Accept: "application/json",
        },
        signal: AbortSignal.timeout(10000),
      }
    );

    if (!response.ok) {
      return Response.json(
        { error: "Unable to retrieve movie data." },
        { status: response.status === 429 ? 429 : 502 }
      );
    }

    const data = await response.json();

    return Response.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=60",
      },
    });

  } catch {
    return Response.json(
      { error: "Movie service temporarily unavailable." },
      { status: 502 }
    );
  }
}
