import React, { useState } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const style = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
    padding: "20px",
    minHeight: "100px"
  };

  return (
    <div style={style}>
      <h2>{darkMode ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default DarkModeToggle;