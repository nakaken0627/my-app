"use client";

import React, { useState } from "react";

function DoubleNumber() {
  const [number, setNumber] = useState("0");

  // 入力した数値を2倍してリアルタイム表示する機能をここに書いてね
  const handleInputNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const double = Number(e.target.value) * 2;
    setNumber(String(double));
  };

  return (
    <div className="p-4 border-white">
      <input
        type="number"
        value={number}
        className="p-4 border border-white"
        onChange={handleInputNum}
      />
      <h2>{number}</h2>
    </div>
  );
}

export default DoubleNumber;
