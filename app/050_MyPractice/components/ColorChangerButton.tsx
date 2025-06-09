"use client";

import React, { useState } from "react";

const colorList = ["gray", "red", "blue", "green", "yellow"];

function ColorChangerButton() {
  // ここにstateを作成して初期値を設定してください
  const [color, setColor] = useState("gray");

  // ここにクリックで色を切り替える関数を作成してください

  const handleClick = () => {
    console.log(color);
    const checkIndex = colorList.indexOf(color);
    let nextIndex = checkIndex + 1;
    if (nextIndex >= colorList.length) {
      nextIndex = 0;
    }

    setColor(colorList[nextIndex]);
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-${color}-300 hover:bg-${color}-200 text-black p-2 rounded-md m-3 border border-amber-50`}
    >
      色を変える
    </button>
  );
}

export default ColorChangerButton;
