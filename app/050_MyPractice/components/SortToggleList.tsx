"use client";
import { useState } from "react";

function SortToggleList() {
  // 1) 並べ替え対象の配列を定義（元データは不変に保つ）
  const items = ["React", "Vue", "Svelte", "Angular", "Solid"];

  // 2) 昇順/降順フラグのstateを用意（初期は昇順）
  const [isAsc, setIsAsc] = useState(true);

  // 3) 表示用の配列をソートして作成（元配列はスプレッドでコピー → sort）
  const sorted = [...items].sort((a, b) =>
    isAsc ? a.localeCompare(b) : b.localeCompare(a)
  );

  // 4) ボタンで並び順をトグルし、現在の順序とリストを表示
  const handleToggleState = () => {
    setIsAsc((prev) => !prev);
  };
  return (
    <div className="p-4 h-100 w-150 flex items-center justify-center flex-col  mx-auto">
      <div>
        <p>現在の順序：{isAsc ? "昇順" : "降順"}</p>
        <button onClick={handleToggleState}>
          {isAsc ? "降順にする" : "昇順にする"}
        </button>
      </div>
      <div className="h-70 w-100 border-2 border-solid border-gray-300 p-4 mt-4">
        {sorted.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default SortToggleList;
