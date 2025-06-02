"use client";

import React, { useState } from "react";

function TextCounter() {
  // ここで入力テキストを管理しよう

  const [inputText, setInputText] = useState("");

  const remainCharacters = 50 - inputText.length;

  return (
    <div>
      {/* textareaを用意しよう */}
      <textarea
        value={inputText}
        className="border border-amber-50 mt-3"
        placeholder="ここに入力して下さい"
        maxLength={50}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>
      {/* 残り文字数を表示しよう */}
      <div>残り文字数：{remainCharacters}</div>
    </div>
  );
}

export default TextCounter;
