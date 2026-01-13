import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="weather-card">
      <div className="weather-header">
        <div>
          <h1>{props.city}</h1>
          <ul>
            <li>{props.description}</li>
          </ul>
        </div>

        <div className="weather-details">
          <ul>
            <li>Humidity: <strong>{props.humidity}%</strong></li>
            <li>Wind: <strong>{props.wind} km/h</strong></li>
          </ul>
        </div>
      </div>

      <div className="weather-temperature">
        <img src={props.icon} alt={props.description} />
        <span className="temp">{props.temperature}</span>
        <span className="unit">°C</span>
      </div>
    </div>
  );
}

