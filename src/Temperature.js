import React from "react";

import "./Temperature.css";

function Temperature(props) {
  function convertToFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function fahrenheitTemperature() {
    return Math.round((props.celsiusTemperature * 9) / 5 + 32);
  }

  if (props.unit === "celsius") {
    return (
      <li className="Temperature">
        <span className="temp">{Math.round(props.celsiusTemperature)}</span>
        <span className="units">
          <span className="active">°C</span>
          <a href="#0" onClick={convertToFahrenheit}>
            {" "}
            / °F
          </a>
        </span>
      </li>
    );
  } else {
    return (
      <li className="Temperature">
        <span className="temp">{fahrenheitTemperature()}</span>
        <span className="units">
          <span className="active">°F</span>
          <a href="#0" onClick={convertToCelsius}>
            {" "}
            / °C
          </a>
        </span>
      </li>
    );
  }
}

export default Temperature;
