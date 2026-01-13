import React, { useState } from "react";

export default function Search(props) {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.onSearch(city);
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
