import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stockholm" />
        <footer className="github-link" id="github-link">
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
      </div>
    </div>
  );
}

export default App;
