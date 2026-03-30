function Recommendations({ weather }) {
  let items;

  if (weather === "Sunny") items = "😎 Sunglasses, Hat, Water";
  else if (weather === "Rainy") items = "☂️ Umbrella, Raincoat";
  else items = "🧥 Light Jacket";

  return (
    <div>
      <h3>Recommended Items</h3>
      <p>{items}</p>
    </div>
  );
}

export default Recommendations;