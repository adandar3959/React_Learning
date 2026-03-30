function SafetyTips({ temperature }) {
  let tips;

  if (temperature > 35) tips = "🔥 Stay hydrated!";
  else if (temperature < 10) tips = "❄️ Wear warm clothes!";
  else tips = "😊 Comfortable weather";

  return (
    <div>
      <h3>Safety Tips</h3>
      <p>{tips}</p>
    </div>
  );
}

export default SafetyTips;