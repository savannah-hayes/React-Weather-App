import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./ForecastDay.css";

function ForecastDay(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }

  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function fahrenheitMaxTemperature() {
    return Math.round((props.data.temp.max * 9) / 5 + 32);
  }

  function fahrenheitMinTemperature() {
    return Math.round((props.data.temp.min * 9) / 5 + 32);
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  if (props.unit === "celsius") {
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
            <span className="Forecast-temperature-max">{maxTemp()}</span>
            <span className="Forecast-temperature-min">{minTemp()}</span>
          </div>
        </div>
      </div>
    );
  } else {
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
            <span className="Forecast-temperature-max">
              {fahrenheitMaxTemperature()}
            </span>
            <span className="Forecast-temperature-min">
              {fahrenheitMinTemperature()}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ForecastDay;
