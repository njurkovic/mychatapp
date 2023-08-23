// src/components/Input.js
import React from "react";

export default function Input({ sendMessage }) {
  const [message, setMessage] = React.useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
      />
    </div>
  );
}
