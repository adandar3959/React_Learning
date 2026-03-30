function WeatherDisplay({ weather, temperature }) {
  const emoji =
    weather === "Sunny" ? "☀️" :
    weather === "Rainy" ? "🌧" :
    "☁️";

  return (
    <div>
      <h2>{weather} {emoji}</h2>
      <h3>{temperature}°C</h3>
    </div>
  );
}

export default WeatherDisplay;