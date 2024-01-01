import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log("Search Used");
  };

  return (
    <div className="Search-bar">
      <input
        type="text"
        placeholder="What are you looking for?"
        value={query}
        className="Search-bar-input"
        onChange={handleInputChange}
      />
      <span onClick={handleSearch}>
        <CiSearch className="Navbar-icon" />
      </span>
    </div>
  );
};

export default SearchBar;
