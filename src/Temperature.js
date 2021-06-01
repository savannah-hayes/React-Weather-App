import React, { useState } from "react";

import "./Temperature.css";

function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheitTemperature() {
    return Math.round((props.temperature * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <li className="Temperature">
        <span className="temp">{Math.round(props.temperature)}</span>
        <span className="units">
          <span className="active">°C</span>
          <a onClick={convertToFahrenheit}> / °F</a>
        </span>
      </li>
    );
  } else {
    return (
      <li className="Temperature">
        <span className="temp">{fahrenheitTemperature()}</span>
        <span className="units">
          <span className="active">°F</span>
          <a onClick={convertToCelsius}> / °C</a>
        </span>
      </li>
    );
  }
}

export default Temperature;
