"use client";

import React, { useState } from "react";

function TextProgress() {
  // 入力テキストの状態を管理するuseStateを設定しましょう
  const [inputString, setInputString] = useState("");

  // 文字数に応じてバーの長さを設定しましょう（最大文字数は100文字）
  const countString = inputString.length;
  const calcPercent = Math.round((countString / 100) * 100);

  return (
    <div className="flex justify-center">
      {/* 入力フィールドでテキストを入力できるようにしましょう */}
      <input
        className="border border-b-white"
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
      />
      {/* テキスト入力のプログレスを表すバーを表示しましょう */}
      <div className="w-2/4 bg-gray-300 rounded-full h-5 text-center">
        <div
          className={` bg-blue-600 h-5 rounded-full }`}
          style={{ width: `${calcPercent}%` }}
        ></div>
        進捗度：
        {calcPercent}%
      </div>
    </div>
  );
}

export default TextProgress;
