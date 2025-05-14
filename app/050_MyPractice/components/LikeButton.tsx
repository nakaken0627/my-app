"use client";

import React, { useState } from "react";

function LikeButton() {
  // いいねのカウントを管理するためのstateを作成してください
  const [likeNum, setLikeNum] = useState(0);

  // ボタンクリック時にカウントを増やす関数を作成してください
  const handleClick = () => setLikeNum((prev) => prev + 1);
  return (
    <div className="my-2">
      {/* いいねの数を表示し、「いいね！」と書かれたボタンを作成してください */}
      <div>いいね数：{likeNum}</div>
      <button
        onClick={handleClick}
        className="size-16 bg-blue-300 text-blue-50 rounded-full"
      >
        いいね！
      </button>
      <button onClick={() => setLikeNum(0)}>初期化</button>
    </div>
  );
}

export default LikeButton;
