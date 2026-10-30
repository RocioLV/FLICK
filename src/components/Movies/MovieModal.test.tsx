import type { MovieInfo } from "../../service/movieTypes";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MovieModal from "./MovieModal";
import { getMovieDetails } from "../../service/movieApi";

jest.mock("../../service/movieApi", () => ({
  getMovieDetails: jest.fn(),
}));

const mockedGetMovieDetails = jest.mocked(getMovieDetails);


const mockMovie: MovieInfo = {
  adult: false,
  backdrop_path: "/backdrop.jpg",
  belongs_to_collection: undefined,
  budget: 1000000,
  genres: [{ id: 28, name: "Action" }],
  homepage: "https://example.com",
  id: 123,
  imdb_id: "tt1234567",
  original_language: "en",
  original_title: "Test Movie",
  overview: "This is a test movie.",
  popularity: 150,
  poster_path: "/poster.jpg",
  production_companies: [],
  production_countries: [],
  release_date: "2026-01-15",
  revenue: 2000000,
  runtime: 125,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "A test adventure",
  title: "Test Movie",
  video: false,
  vote_average: 8.5,
  vote_count: 1200,
};

describe("MovieModal", () => {
  const onClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockedGetMovieDetails.mockResolvedValue(mockMovie);
  });

  it("shows a loading state", () => {
    mockedGetMovieDetails.mockReturnValue(
      new Promise(() => {})
    );

    render(<MovieModal movieId={123} onClose={onClose} />);

    expect(
      screen.getByText("Loading movie details...")
    ).toBeInTheDocument();
  });

  it("displays movie details", async () => {
    render(<MovieModal movieId={123} onClose={onClose} />);

    expect(
      await screen.findByRole("heading", { name: "Test Movie" })
    ).toBeInTheDocument();

    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(
      screen.getByText("This is a test movie.")
    ).toBeInTheDocument();
    expect(screen.getByText("★ 8.5/10")).toBeInTheDocument();
  });

  it("closes when clicking the close button", async () => {
  render(<MovieModal movieId={123} onClose={onClose} />);

  await screen.findByRole("heading", {
    name: "Test Movie",
  });

  fireEvent.click(
    screen.getByRole("button", {
      name: "Close movie details",
    })
  );

  expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("closes when pressing Escape", async () => {
  render(<MovieModal movieId={123} onClose={onClose} />);

  await screen.findByRole("heading", {
    name: "Test Movie",
  });

  fireEvent.keyDown(document, { key: "Escape" });

  expect(onClose).toHaveBeenCalledTimes(1);
 });

  it("displays an error when the API fails", async () => {
    mockedGetMovieDetails.mockRejectedValue(
      new Error("API unavailable")
    );

    render(<MovieModal movieId={123} onClose={onClose} />);

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent(
        "API unavailable"
      );
    });
  });

  it("closes when clicking outside the modal", async () => {
  const { container } = render(
    <MovieModal movieId={123} onClose={onClose} />
  );

  await screen.findByRole("heading", {
    name: "Test Movie",
  });

  const overlay = container.querySelector(
    ".movie-modal-overlay"
  );

  expect(overlay).not.toBeNull();

  fireEvent.mouseDown(overlay!);

  expect(onClose).toHaveBeenCalledTimes(1);
  });

it("restores focus when the modal is unmounted", async () => {
  const trigger = document.createElement("button");
  trigger.textContent = "Open movie";
  document.body.appendChild(trigger);
  trigger.focus();

  try {
    const { unmount } = render(
      <MovieModal movieId={123} onClose={onClose} />
    );

    await screen.findByRole("heading", {
      name: "Test Movie",
    });

    expect(
      screen.getByRole("button", {
        name: "Close movie details",
      })
    ).toHaveFocus();

    unmount();

    expect(trigger).toHaveFocus();
    } finally {
    trigger.remove();
    }
    });
});
