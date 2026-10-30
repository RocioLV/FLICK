
import { useState } from "react";
import type { FormEvent } from "react";
import "./MovieSearch.css";

interface MovieSearchProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

export default function MovieSearch({
  searchQuery,
  onSearch,
}: MovieSearchProps) {
  const [inputValue, setInputValue] = useState(searchQuery);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(inputValue.trim());
  };

  const handleClear = () => {
    setInputValue("");
    onSearch("");
  };

  return (
    <form
      className="movie-search"
      role="search"
      onSubmit={handleSubmit}
    >
      <label htmlFor="movie-search-input">
        Search movies
      </label>

      <div className="movie-search-controls">
        <input
          id="movie-search-input"
          type="search"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Search by movie title..."
        />

        {searchQuery && (
          <button
            type="button"
            className="movie-search-clear"
            onClick={handleClear}
          >
            Clear
          </button>
        )}

        <button type="submit" className="movie-search-submit">
          Search
        </button>
      </div>
    </form>
  );
}
