
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    setWeather({ temperature: 25, conditions: "Sunny" }); // Set default weather data
  }, []);

  return (
    <div>
      <h1>Weather Report</h1>
      <WeatherDisplay temperature={weather.temperature} conditions={weather.conditions} />
    </div>
  );
};

export default App;
