import { useState, useEffect } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import Recommendations from "./components/Recommendations";
import SafetyTips from "./components/SafetyTips";

function App() {
  const [weather, setWeather] = useState("Sunny");
  const [temperature, setTemperature] = useState(25);
  const [showDetails, setShowDetails] = useState(true);

  useEffect(() => {
    console.log(`Weather: ${weather}, Temp: ${temperature}`);
  }, [weather, temperature]);

  const changeWeather = () => {
    const options = ["Sunny", "Rainy", "Cloudy"];
    const next = options[(options.indexOf(weather) + 1) % options.length];
    setWeather(next);
  };

  const resetAll = () => {
    setWeather("Sunny");
    setTemperature(25);
    setShowDetails(true);
  };

  const getBackground = () => {
    if (weather === "Sunny") return "#FFD93D";
    if (weather === "Rainy") return "#74C0FC";
    if (weather === "Cloudy") return "#CED4DA";
  };

  return (
    <div style={{ background: getBackground(), minHeight: "100vh", padding: "20px" }}>
      <h1>🌦 Weather Advisory App</h1>

      <WeatherDisplay weather={weather} temperature={temperature} />

      <div style={{ marginTop: "10px" }}>
        <button onClick={changeWeather}>Change Weather</button>
        <button onClick={() => setTemperature(temperature + 1)}>+ Temp</button>
        <button onClick={() => setTemperature(temperature - 1)}>- Temp</button>
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide" : "Show"} Details
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>

      {showDetails && (
        <>
          <Recommendations weather={weather} />
          <SafetyTips temperature={temperature} />
        </>
      )}
    </div>
  );
}

export default App;