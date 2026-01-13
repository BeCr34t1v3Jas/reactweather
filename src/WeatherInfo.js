import React from "react";

export default function WeatherInfo({ data }) {
  return (
    <div className="weather-card">
      <div className="weather-main">
        <div>
          <h1>{data.city}</h1>
          <ul>
            <li>
              {data.date.toLocaleString("en-US", {
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit"
              })}
            </li>
            <li className="text-capitalize">{data.description}</li>
          </ul>
        </div>

        <div className="weather-details">
          <ul>
            <li>Humidity: <strong>{data.humidity}%</strong></li>
            <li>Wind: <strong>{Math.round(data.wind)} km/h</strong></li>
          </ul>
        </div>
      </div>

      <div className="weather-temperature">
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt={data.description}
        />
        <span className="temp">{data.temperature}</span>
        <span className="unit">°C</span>
      </div>
    </div>
  );
}

