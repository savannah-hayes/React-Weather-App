import React from "react";

function Conditions(props) {
  function celsiusTemp() {
    let temp = Math.round(props.feels);
    return `${temp}`;
  }

  function fahrenheitTemp() {
    let temp = Math.round((props.feels * 9) / 5 + 32);
    return `${temp}`;
  }

  if (props.unit === "celsius") {
    return (
      <div className="col-4 conditions">
        <ul>
          <li className="weather-description">
            Wind: {Math.round(props.wind)} m/s{" "}
          </li>
          <li className="weather-description">Humidity: {props.humidity} %</li>
          <li className="weather-description">
            Feels like: {celsiusTemp()} °C
          </li>
          <li className="weather-description">
            Pressure: {props.pressure} hPa
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="col-4 conditions">
        <ul>
          <li className="weather-description">
            Wind: {Math.round(props.wind)} m/s{" "}
          </li>
          <li className="weather-description">Humidity: {props.humidity} %</li>
          <li className="weather-description">
            Feels like: {fahrenheitTemp()} °F
          </li>
          <li className="weather-description">
            Pressure: {props.pressure} hPa
          </li>
        </ul>
      </div>
    );
  }
}

export default Conditions;
