"use client";

import React, { useState } from "react";

function ColorDisplay() {
  const [inputColor, setInputColor] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="例:#ffffff"
        onChange={(e) => setInputColor(e.target.value)}
      />
      <input
        type="text"
        placeholder="例:#ffffff"
        onChange={(e) => setInputColor(e.target.value)}
      />
      <div
        className="my-3 w-10 h-10"
        style={{ backgroundColor: inputColor }}
      ></div>
    </div>
  );
}

export default ColorDisplay;
