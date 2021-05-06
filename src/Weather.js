import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

import "./Weather.css";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
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
            <div className="city-buttons">
              <button className="recent-cities">Tokyo</button>
              <button className="recent-cities">San Francisco</button>
              <button className="recent-cities">Cape Town</button>
              <button className="recent-cities">Melbourne</button>
              <button className="recent-cities">São Paulo</button>
              <button className="recent-cities">London</button>
            </div>
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
            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default Weather;
