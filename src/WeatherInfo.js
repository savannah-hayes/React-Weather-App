import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm-4 city-date">
          <h1 className="city">{props.data.city}</h1>
          <ul>
            <li className="date-format">Local time:</li>
            <li className="date-format">
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>
        <div className="col-sm-4 weather-temperature">
          <ul>
            <li className="temperature-unit">
              <WeatherTemperature celsius={props.data.temperature} />
            </li>
            <li className="text-capitalize temperature-description">
              {props.data.description}
            </li>
            <li className="temperature-description">
              <WeatherIcon code={props.data.icon} size={50} color={"white"} />
            </li>
          </ul>
        </div>
        <div className="col-sm-4 weather-conditions">
          <h2>Feels like: 15°C</h2>
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

export default WeatherInfo;
