import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      day: "Sunday 10:15",
      date: "April 30, 2021",
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
    });
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
            <form className="search-form">
              <div className="form">
                <div className="input-group">
                  <div className="form-outline">
                    <input
                      type="search"
                      placeholder="Enter a city..."
                      className="form-control city-input"
                      autoComplete="off"
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
            <div className="row">
              <div className="col-sm-4 city-date">
                <h1 className="city">{weatherData.city}</h1>
                <ul>
                  <li className="date-format">Local time:</li>
                  <li className="date-format">{weatherData.day}</li>
                  <li className="date-format">{weatherData.date}</li>
                </ul>
              </div>
              <div className="col-sm-4 weather-temperature">
                <ul>
                  <li className="temperature-unit">
                    <strong className="temperature">
                      {Math.round(weatherData.temperature)}
                    </strong>
                    <span className="units">
                      <a href="/" className="active celsius-link">
                        °C |{" "}
                      </a>
                      <a href="/" className="fahrenheit-link">
                        °F
                      </a>
                    </span>
                  </li>
                  <li className="text-capitalize temperature-description">
                    {weatherData.description}
                  </li>
                  <li className="temperature-description">
                    <img src={weatherData.icon} alt={weatherData.description} />
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 weather-conditions">
                <h2>Feels like: 15°C</h2>
                <ul>
                  <li className="weather-description">
                    Wind: {Math.round(weatherData.wind)} m/s{" "}
                  </li>
                  <li className="weather-description">
                    Humidity: {weatherData.humidity} %
                  </li>
                  <li className="weather-description">
                    Pressure: {weatherData.pressure} hPa
                  </li>
                </ul>
              </div>
            </div>
            <div className="hour-forecast">Daily Forecast:</div>
            <div className="row weather-forecast">
              <ul>
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "97a509323a282fbb09c0bc8556148a31";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

export default Weather;
