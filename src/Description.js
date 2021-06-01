import React from "react";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

import "./Description.css";
import FormattedDate from "./FormattedDate";

function Description(props) {
  return (
    <div className="Description">
      <div className="city-date">
        <h1 className="city">{props.data.fullcity}</h1>
        <h6>
          <FormattedDate date={props.time} />
        </h6>
      </div>
      <div className="row">
        <div className="col-4 temperature">
          <h2>
            <Temperature celsius={props.data.temperature} />
          </h2>
        </div>
        <div className="col-4 icon">
          <ul>
            <li className="icon-image">
              <WeatherIcon code={props.data.icon} size={65} color={"#4f4cb2"} />
            </li>
            <li className="icon-description">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-4 conditions">
          <ul>
            <li className="weather-description">
              Wind: {Math.round(props.data.wind)} m/s{" "}
            </li>
            <li className="weather-description">
              Humidity: {props.data.humidity} %
            </li>
            <li className="weather-description">
              Feels like: {Math.round(props.data.feels)} °C
            </li>
            <li className="weather-description">
              Pressure: {props.data.pressure} hPa
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Description;