"use client";

import React, { useState } from "react";

const colorList = [
  "gray",
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "pink",
  "orange",
];

function ColorChangerButton() {
  const [color, setColor] = useState("gray");

  const handleClick = () => {
    console.log(color);

    // 色のリストから現在の色の次の色を取得。初期表示をindex＝０は除外されてループが適用される
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
