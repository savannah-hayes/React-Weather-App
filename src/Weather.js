import React, { useState } from "react";
import Description from "./Description";
import Forecast from "./Forecast";
import axios from "axios";

import "./Weather.css";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      feels: response.data.main.feels_like,
    });
  }

  function search() {
    const apiKey = "97a509323a282fbb09c0bc8556148a31";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form className="search-form" onSubmit={handleSubmit}>
              <div className="form">
                <div className="input-group">
                  <div className="form-outline">
                    <input
                      type="search"
                      placeholder="Enter a city..."
                      className="form-control city-input"
                      autoComplete="off"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div>
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-secondary search-button"
                    />
                  </div>
                </div>
              </div>
            </form>
            <Description data={weatherData} />
            <Forecast coordinates={weatherData.coordinates} />
          </div>
        </div>
        <footer className="github-link" id="github-link">
          <small>
            Open-source{" "}
            <a
              href="https://github.com/savannah-hayes/React-Weather-App"
              target="_blank"
              rel="noreferrer"
            >
              on github
            </a>
            , by{" "}
            <a
              href="http://linkedin.com/in/savannah-hayes-128b0418a"
              target="_blank"
              rel="noreferrer"
            >
              Savannah Hayes
            </a>
          </small>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default Weather;
