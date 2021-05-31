import React from "react";

import "./Temperature.css";

function Temperature(props) {
  return (
    <li className="Temperature">
      <span className="temp">{Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </li>
  );
}

export default Temperature;
