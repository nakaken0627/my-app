"use client";

import React, { useState } from "react";

function DarkModeToggle() {
  // ここにダークモードの状態をuseStateで管理してね😉
  const [darkMode, setDarkMode] = useState(false);

  const title = darkMode ? "通常" : "ダークモード";

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/*👇クリックでダークモードを切り替えるボタンを作ろう！*/}
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {`${title}に切り替え`}
      </button>
      <p>現在のモード：{darkMode ? "ダークモード" : "通常モード"}</p>
    </div>
  );
}

export default DarkModeToggle;
