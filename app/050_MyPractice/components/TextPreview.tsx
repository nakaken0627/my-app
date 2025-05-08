"use client";
import React, { useState } from "react";

function TextPreview() {
  // useStateフックを使ってテキストの状態を管理しましょう。
  const [inputText, setInputText] = useState("");

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="mt-2">
      {/* ここにテキスト入力フォーム(inputタグ)を書いてください */}
      <input
        className="border border-white"
        type="text"
        placeholder="テキストを入力して下さい"
        onChange={handleText}
      />
      {/* ここに入力されたテキストをリアルタイムで表示するエリアを作成してください */}
      {inputText ? (
        <div>{inputText}</div>
      ) : (
        <div className="text-amber-200">入力を開始してください</div>
      )}
    </div>
  );
}

export default TextPreview;
