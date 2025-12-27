<<<<<<< HEAD
import React from "react";

export default function WeatherInfo({
  city,
  temperature,
  description,
  lastUpdated,
  humidity,
  wind,
}) {
  return (
    <div className="weather-main">
      <div className="weather-left">
        <h1 className="city-name">{city}</h1>

        <ul className="weather-details">
          <li>Last updated: {lastUpdated}</li>
          <li>{description}</li>
        </ul>

        <div className="weather-bottom">
          <div className="weather-icon" />
          <div className="weather-temp">
            <span className="temperature">{temperature}</span>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>
      </div>

      <div className="weather-right">
        <ul className="weather-stats">
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
=======
import React from "react";

export default function WeatherInfo({
  city,
  temperature,
  description,
  lastUpdated,
  humidity,
  wind,
}) {
  return (
    <div className="weather-main">
      <div className="weather-left">
        <h1 className="city-name">{city}</h1>

        <ul className="weather-details">
          <li>Last updated: {lastUpdated}</li>
          <li>{description}</li>
        </ul>

        <div className="weather-bottom">
          <div className="weather-icon" />
          <div className="weather-temp">
            <span className="temperature">{temperature}</span>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>
      </div>

      <div className="weather-right">
        <ul className="weather-stats">
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
>>>>>>> 5521a09 (Final version with GitHub link)
