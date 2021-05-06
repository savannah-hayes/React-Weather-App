import React from "react";
import FormattedDate from "./FormattedDate";

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
              <strong className="temperature">
                {Math.round(props.data.temperature)}
              </strong>
              <span className="units">
                <a href="/" className="active celsius-link">
                  °C |{" "}
                </a>
                <a href="/" className="fahrenheit-link">
                  °F
                </a>
              </span>
            </li>
            <li className="text-capitalize temperature-description">
              {props.data.description}
            </li>
            <li className="temperature-description">
              <img src={props.data.icon} alt={props.data.description} />
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
      <div className="hour-forecast">Daily Forecast:</div>
      <div className="row weather-forecast">
        <ul>
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
      </div>
    </div>
  );
}

export default WeatherInfo;
