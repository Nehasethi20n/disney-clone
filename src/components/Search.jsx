/* eslint-disable react/prop-types */
import { useState } from "react";

const SearchComponent = ({ movies, setFilteredMovies }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = movies.filter((movie) => movie.title.toLowerCase().includes(term.toLowerCase()));

    setFilteredMovies(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a movie name"
        value={searchTerm}
        onChange={handleChange}
        className="text-black rounded-lg mt-2 text-xs p-1"
      />
    </div>
  );
};

export default SearchComponent;
