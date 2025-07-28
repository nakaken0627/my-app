"use client";

import React, { useState } from "react";

function ClickMessage() {
  // ここにクリック回数を記録するstateを作成してください。
  const [clickCount, setClickCount] = useState(0);

  // クリック時の処理を作成してください。
  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <div>
      {/* メッセージをクリック回数に応じて条件付きレンダリングしてください。 */}
      <button onClick={handleClick}>クリックしてみよう！</button>
      {clickCount === 0 ? (
        <p>まだクリックされていません。</p>
      ) : clickCount < 5 ? (
        <p>{clickCount}回クリックされました ! </p>
      ) : (
        <p>5回クリックを超えました ! すごい！</p>
      )}
    </div>
  );
}

export default ClickMessage;
