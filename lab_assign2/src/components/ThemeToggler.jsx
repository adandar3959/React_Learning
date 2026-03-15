import React, { useState } from "react";

function ThemeToggler() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const style = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    padding: "20px",
    textAlign: "center"
  };

  return (
    <div style={style}>
      <h1>Current Theme: {theme}</h1>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggler;