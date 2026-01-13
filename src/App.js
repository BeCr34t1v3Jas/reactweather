import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function displayWeather(response) {
    setWeather({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // This is the correct SheCodes Weather API URL
    const apiKey = "o451tfe63da40fdab9f02fbc358bc697";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then(displayWeather)
      .catch((err) => {
        alert("City not found or API error");
        console.error(err);
      });
  }

  return (
    <div className="WeatherSearch">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {weather && (
        <ul>
          <li>
            <strong>Temperature:</strong> {Math.round(weather.temperature)}°C
          </li>
          <li>
            <strong>Description:</strong> {weather.description}
          </li>
          <li>
            <strong>Humidity:</strong> {weather.humidity}%
          </li>
          <li>
            <strong>Wind:</strong> {weather.wind}km/h
          </li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      )}
      <footer>
  This project was coded by Jasmin Mikolay and is{" "}
  <a
    href="https://github.com/BeCr34t1v3Jas/reactweather"
    target="_blank"
    rel="noopener noreferrer"
  >
    open-sourced on GitHub
  </a>
</footer>
    </div>
  );
}


