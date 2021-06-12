import React from "react";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import FormattedDate from "./FormattedDate";
import Conditions from "./Conditions";

import "./Description.css";

function Description(props) {
  return (
    <div className="Description">
      <div className="city-date">
        <h1 className="city">{props.data.fullcity}</h1>
        <h2>
          <FormattedDate date={props.time} />
        </h2>
      </div>
      <div className="row">
        <div className="col-4 temperature">
          <h3>
            <Temperature
              celsiusTemperature={props.data.temperature}
              unit={props.unit}
              setUnit={props.setUnit}
            />
          </h3>
        </div>
        <div className="col-4 icon">
          <ul>
            <li className="icon-image">
              <WeatherIcon code={props.data.icon} size={65} color={"#4f4cb2"} />
            </li>
            <li className="icon-description">{props.data.description}</li>
          </ul>
        </div>
        <Conditions
          wind={props.data.wind}
          humidity={props.data.humidity}
          feels={props.data.feels}
          pressure={props.data.pressure}
          unit={props.unit}
        />
      </div>
    </div>
  );
}

export default Description;
