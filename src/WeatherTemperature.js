import React, { useState } from "react";

function WeatherTemperature(props) {
  const [units, setUnits] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  if (units === "celsius") {
    return (
      <div className="WeatherTemperature">
        <strong className="temperature">{Math.round(props.celsius)}</strong>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <strong className="temperature">{Math.round(fahrenheit)}</strong>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C |{" "}
          </a>
          °F
        </span>
      </div>
    );
  }
}

export default WeatherTemperature;
