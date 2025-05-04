"use client";

import React, { useState } from "react";

function EmojiRandomizer() {
  //# 絵文字の選択肢を配列で用意してね
  const emojis = ["😄", "😅", "🙂", "😙", "🤩", "🧐"];

  //# 選ばれた絵文字をstateで管理してね
  const [displayEmoji, setDisplayEmoji] = useState("");

  //# ランダム表示用のクリック関数を作成してね

  const handleClick = () => {
    const emojiIndex = Math.floor(Math.random() * 6);
    setDisplayEmoji(emojis[emojiIndex]);
  };

  return (
    <div>
      <button onClick={handleClick}>ランダム絵文字✨:{displayEmoji}</button>
      {/* 絵文字を表示する場所 */}
    </div>
  );
}

export default EmojiRandomizer;
