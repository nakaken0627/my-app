"use client";

import React, { useState } from "react";

export default function SearchFilter() {
  const items = [
    "ベンチプレス",
    "スクワット",
    "デッドリフト",
    "ダンベルフライ",
    "プルアップ",
  ];
  const [searchTerm, setSearchTerm] = useState("");
  // フィルター処理のコードをこの下に書いてください

  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        placeholder="トレーニングを検索..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-1 rounded"
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <li key={item}>{item}</li>)
        ) : (
          <li>該当するトレーニングが見つかりません</li>
        )}
      </ul>
    </div>
  );
}
