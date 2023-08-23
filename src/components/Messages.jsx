// src/components/Messages.js
import React from "react";

export default function Messages({ messages }) {
  return (
    <div className="messages-container">
      <ul className="messages-list">
        {messages.map((message, index) => (
          <li key={index}>
            <span style={{ color: message.color }}>{message.username}: </span>
            {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
