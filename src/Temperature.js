import React from "react";

import "./Temperature.css";

function Temperature(props) {
  return (
    <div className="Temperature">
      <span className="temp">{Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </div>
  );
}

export default Temperature;
