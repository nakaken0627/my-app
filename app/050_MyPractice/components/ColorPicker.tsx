"use client";

import React, { useState } from "react";

function ColorPicker() {
  const [displayColor, setDisplayColor] = useState<string>("");

  // select要素のonChangeイベントで呼び出される関数を定義しよう
  // 選択された色に応じて、displayColorの状態を更新する
  const handleColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case "red":
        setDisplayColor("bg-red-500");
        break;
      case "green":
        setDisplayColor("bg-green-500");
        break;
      case "blue":
        setDisplayColor("bg-blue-500");
        break;
      case "pink":
        setDisplayColor("bg-pink-500");
        break;
      case "purple":
        setDisplayColor("bg-purple-500");
        break;
    }
  };

  return (
    <div>
      {/* select要素を作成し、色を選択できるようにしよう */}
      <select
        name=""
        id="color"
        className="border border-amber-50"
        onChange={handleColor}
      >
        <option value="red">赤色</option>
        <option value="blue">青色</option>
        <option value="green">緑色</option>
        <option value="pink">ピンク色</option>
      </select>
      {/* 色に応じて背景色が切り替わるdivを作ろう */}
      <div className={`w-10 h-10 ${displayColor || "bg-amber-50"} `}></div>
    </div>
  );
}

export default ColorPicker;
