import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Search from "./Search";

export default function Weather() {
  const [weather, setWeather] = useState({ ready: false });
  const apiKey = "YOUR_API_KEY";

  function handleResponse(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000)
    });
  }

  function search(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <div className="weather-app">
        <Search onSearch={search} />
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search("New York");
    return "Loading...";
  }
}
