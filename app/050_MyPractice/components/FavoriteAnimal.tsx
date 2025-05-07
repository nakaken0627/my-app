"use client";
import React, { useState } from "react";

const Animals = ["「犬🐶」", "「猫🐱」", "「うさぎ🐰」"];

function FavoriteAnimal() {
  // 状態管理のためのuseStateをここに書こう。
  const [display, setDisplay] = useState("好きな動物を選ぼう！");

  // 状態を更新する関数をここに書こう。

  const handleDisplay = (index: number) => {
    setDisplay(Animals[index]);
  };

  return (
    <div className="mt-2">
      <button className="border mr-2" onClick={() => handleDisplay(0)}>
        犬
      </button>
      <button className="border mr-2" onClick={() => handleDisplay(1)}>
        猫
      </button>
      <button className="border mr-2" onClick={() => handleDisplay(2)}>
        うさぎ
      </button>
      {/* 選択された動物の名前を表示する場所 */}

      <div>{display}</div>
    </div>
  );
}

export default FavoriteAnimal;
