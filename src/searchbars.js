<<<<<<< HEAD
import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [cityInput, setCityInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(cityInput);
    setCityInput("");
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Type a city.."
        className="search-input"
        value={cityInput}
        onChange={(event) => setCityInput(event.target.value)}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}
=======
import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [cityInput, setCityInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(cityInput);
    setCityInput("");
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Type a city.."
        className="search-input"
        value={cityInput}
        onChange={(event) => setCityInput(event.target.value)}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}
>>>>>>> 5521a09 (Final version with GitHub link)
