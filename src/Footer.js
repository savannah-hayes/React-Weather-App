import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <small>
        Open-source{" "}
        <a
          href="https://github.com/savannah-hayes/React-Weather-App"
          target="_blank"
          rel="noreferrer"
        >
          on github
        </a>
        , by{" "}
        <a
          href="http://linkedin.com/in/savannah-hayes-128b0418a"
          target="_blank"
          rel="noreferrer"
        >
          Savannah Hayes
        </a>
      </small>
    </footer>
  );
}

export default Footer;
