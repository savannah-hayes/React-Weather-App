import React from "react";

import "./Weather.css";

function Weather() {
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
              <h1 className="city">Stockholm</h1>
              <ul>
                <li className="date-format">Local time:</li>
                <li className="date-format">Sunday 10:15</li>
                <li className="date-format">April 30, 2021</li>
              </ul>
            </div>
            <div className="col-sm-4 weather-temperature">
              <ul>
                <li className="temperature-unit">
                  <strong className="temperature">17 </strong>
                  <span className="units">
                    <a href="/" className="active celsius-link">
                      °C |
                    </a>
                    <a href="/" className="fahrenheit-link">
                      °F
                    </a>
                  </span>
                </li>
                <li className="temperature-description">Cloudy</li>
              </ul>
            </div>
            <div className="col-sm-4 weather-conditions">
              <h2>Feels like: 15°C</h2>
              <ul>
                <li className="weather-description">Wind: 3 m/s </li>
                <li className="weather-description">Humidity: 78 %</li>
                <li className="weather-description">Pressure: 992 hPa</li>
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
}

export default Weather;
