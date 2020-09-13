import React from "react";

import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() { 
  return <div className="App">
    <WeatherEngine location='Paris, FR' />
    <WeatherEngine location='New York, US' />
    <WeatherEngine location='London, GB' />
  </div>
}
export default App;
