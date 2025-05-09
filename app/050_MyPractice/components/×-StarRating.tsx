"use client";

import React, { useState } from "react";

function StarRating() {
  // 星評価の数を管理するためにstateを使おう
  const [rating, setRating] = useState(0);

  // 星をクリックしたときの処理を実装しよう

  return (
    <div className="flex items-center">
      {/* 5つの星を表示させて、それぞれクリックしたら評価をセットしよう */}
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          onClick={() => {
            setRating(index + 1);
          }}
          className={`cursor-pointer text-2xl
             ${index < rating ? "text-yellow-400" : "text-gray-400"} `}
        >
          ☆
        </span>
      ))}
    </div>
  );
}

export default StarRating;
