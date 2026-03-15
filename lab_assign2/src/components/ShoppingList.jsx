import React, { useState } from "react";

function ShoppingList() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (item.trim() !== "") {
      setItems([...items, item]);
      setItem("");
    }
  };

  return (
    <div>
      <h2>Shopping List</h2>

      <input
        type="text"
        placeholder="Enter item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;