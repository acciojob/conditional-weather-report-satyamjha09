import React from "react";

const WeatherDisplay = ({ temperature, conditions }) => {
  const tempColor = temperature > 20 ? "rgb(255, 0, 0)" : "rgb(0, 0, 255)";

  return (
    <div>
      <p>
        Temperature: <span style={{ color: tempColor }}>{temperature}</span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
