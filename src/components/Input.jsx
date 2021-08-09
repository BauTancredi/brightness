import React from "react";

import "./index.css";

const Input = () => {
  const body = document.querySelector("body");

  const handleChange = (value) => {
    body.style.backgroundColor = `hsl(248, 22%, ${value}%)`;
  };

  return (
    <input
      type="range"
      min="7"
      max="50"
      defaultValue="0"
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default Input;
