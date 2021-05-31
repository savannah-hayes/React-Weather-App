import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./ForecastDay.css";

function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="Forecast-day">{day()}</div>
        <WeatherIcon
          code={props.data.weather[0].icon}
          size={35}
          color={"#4f4cb2"}
        />
        <div className="Forecast-temperatures">
          <span className="Forecast-temperature-max">{maxTemperature()}</span>
          <span className="Forecast-temperature-min">{minTemperature()}</span>
        </div>
      </div>
    </div>
  );
}

export default ForecastDay;
