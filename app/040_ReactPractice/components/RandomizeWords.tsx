"use client";

import React, { useState } from "react";

function RandomizeWords() {
  // useStateを使って入力値とランダムな表示を管理します
  const [inputText, setInputText] = useState("");
  const [randomText, setRandomText] = useState("");

  // テキストをランダムに並べ替える関数を定義
  const randomizeText = () => {
    // ここにランダムに並び替えるコードを書いてみましょう
    const words = inputText
      .split(" ")
      .sort(() => 0.5 - Math.random())
      .join(" ");
    setRandomText(words);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="単語をスペースで区切って入力してください"
      />
      <button onClick={randomizeText}>ランダムに並び替え</button>
      <p>ランダム: {randomText}</p>
    </div>
  );
}

export default RandomizeWords;
