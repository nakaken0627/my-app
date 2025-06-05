"use client";

import React, { useState } from "react";
const QuoteList = [
  "なりたかった自分になるのに遅すぎるということはない。",
  "虹を見たければ、ちょっとやそっとの雨は我慢しなくちゃ。",
  "幸せになることに躊躇してはいけない。",
  "あなたの人生をかわりに生きてくれる人はいないわ。",
  "速度を上げるばかりが、人生ではない。",
];

function QuoteButton() {
  // 状態管理・クリック処理をここに書く
  const [Quote, setQuote] = useState("");

  const randomNum = () => {
    return Math.floor(Math.random() * 5);
  };
  const handleClick = () => {
    setQuote(QuoteList[randomNum()]);
    console.log(randomNum());
  };

  return (
    <div>
      {/* 名言を表示する場所 */}
      <div>{Quote}</div>
      <button onClick={handleClick}>名言表示</button>
    </div>
  );
}

export default QuoteButton;
