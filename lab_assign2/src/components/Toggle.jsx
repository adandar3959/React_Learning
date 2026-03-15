import React, { useState } from "react";

function Toggle() {
  const [visible, setVisible] = useState(false);

  const toggleText = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={toggleText}>Toggle Text</button>

      {visible && (
        <p>This paragraph appears and disappears when the button is clicked.</p>
      )}
    </div>
  );
}

export default Toggle;