"use client";

import React, { useState } from "react";

function ColorDisplay() {
  // 状態を管理するコードを書いてください。
  const [inputColor, setInputColor] = useState("");
  // カラーコードの入力 / 表示を行うフォームと div要素を作成してください。
  return (
    <div>
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
