"use client";

import { useState } from "react";

export function ClickableStarRating() {
  // 1) 評価値のstateを用意しましょう（0〜5、初期値は0）
  const [rate, setRate] = useState(0);
  // 2) 配列 [1,2,3,4,5] を map して星ボタンを5つ描画します
  // 3) クリックした数値を評価値にセットし、評価以下の星は黄色、それ以外はグレーに
  // 4) 下に「評価: X/5」。0のときは「評価: 未評価」を表示しましょう
  return (
    <div>
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          onClick={() => setRate(num)}
          style={{
            color: num <= rate ? "yellow" : "gray",
            fontSize: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          ★
        </button>
      ))}
      <div>{rate === 0 ? "評価: 未評価" : `評価: ${rate}/5`}</div>
    </div>
  );
}
