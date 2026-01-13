import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        
        <footer>
          This project was coded by Jasmin Mikolay and is{" "}
          <a
            href="https://github.com/BeCr34t1v3Jas/reactweather"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

