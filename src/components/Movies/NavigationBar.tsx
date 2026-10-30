
import { useFilterSort } from "./useFilterSort";

const genres = [
  { id: "", name: "All genres" },
  { id: "28", name: "Action" },
  { id: "12", name: "Adventure" },
  { id: "16", name: "Animation" },
  { id: "35", name: "Comedy" },
  { id: "80", name: "Crime" },
  { id: "99", name: "Documentary" },
  { id: "18", name: "Drama" },
  { id: "14", name: "Fantasy" },
  { id: "27", name: "Horror" },
  { id: "9648", name: "Mystery" },
  { id: "878", name: "Science Fiction" },
  { id: "53", name: "Thriller" },
];

const sortOptions = [
  { value: "popularity.desc", label: "Most popular" },
  { value: "popularity.asc", label: "Least popular" },
  { value: "primary_release_date.desc", label: "Newest first" },
  { value: "primary_release_date.asc", label: "Oldest first" },
  { value: "vote_average.desc", label: "Highest rated" },
  { value: "vote_average.asc", label: "Lowest rated" },
];

export default function NavigationBar() {
  const {
    filterByValue,
    setFilterByValue,
    sortByValue,
    setSortByValue,
  } = useFilterSort();

  return (
    <nav className="flick-filters px-4 py-3">
      <div className="d-flex flex-wrap gap-3">

        <div>
          <label
            htmlFor="genre-filter"
            className="text-white d-block mb-1"
          >
            Genre
          </label>

          <select
            id="genre-filter"
            className="form-select"
            value={filterByValue}
            onChange={(event) =>
              setFilterByValue(event.target.value)
            }
          >
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="sort-filter"
            className="text-white d-block mb-1"
          >
            Sort by
          </label>

          <select
            id="sort-filter"
            className="form-select"
            value={sortByValue}
            onChange={(event) =>
              setSortByValue(event.target.value)
            }
          >
            {sortOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

      </div>
    </nav>
  );
}
