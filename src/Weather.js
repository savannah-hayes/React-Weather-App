import React, { useState } from "react";
import Description from "./Description";
import Forecast from "./Forecast";
import Footer from "./Footer";
import axios from "axios";

import "./Weather.css";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);
  const [localData, setLocalData] = useState(new Date());
  const [unit, setUnit] = useState("celsius");

  function getLocalTime(response) {
    setLocalData(new Date(response.data.formatted));
  }

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      maxTemperature: response.data.main.temp_max,
      minTemperature: response.data.main.temp_min,
      fullcity: response.data.name + ", " + response.data.sys.country,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      feels: response.data.main.feels_like,
    });
    let lat = response.data.coord.lat;
    let lon = response.data.coord.lon;
    let timeDbKey = "03FEFHUAPR4I";
    let timeDbUrl = `https://api.timezonedb.com/v2.1/get-time-zone?key=${timeDbKey}&format=json&by=position&lat=${lat}&lng=${lon}`;
    axios.get(`${timeDbUrl}`).then(getLocalTime);
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
            <Description
              data={weatherData}
              time={localData}
              unit={unit}
              setUnit={setUnit}
            />
            <Forecast
              coordinates={weatherData.coordinates}
              data={weatherData}
              unit={unit}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default Weather;
