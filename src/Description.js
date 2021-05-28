import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

import "./Description.css";

function Description(props) {
  return (
    <div className="Description">
      <div className="city-date">
        <h1 className="city">
          {props.data.city}, {props.data.country}
        </h1>
        <h5>
          <FormattedDate date={props.data.date} />
        </h5>
      </div>
      <div className="row">
        <div className="col-4 temperature">
          <ul>
            <li className="temperature-unit">
              <Temperature celsius={props.data.temperature} />
            </li>
            <li className="temperature-description">
              Feels like: {Math.round(props.data.feels)} °C
            </li>
          </ul>
        </div>
        <div className="col-4 icon">
          <ul>
            <li className="icon-image">
              <WeatherIcon code={props.data.icon} size={50} color={"#4F4CB2"} />
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
              Pressure: {props.data.pressure} hPa
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Description;
