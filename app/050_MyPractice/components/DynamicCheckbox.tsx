"use client";

// import React from "react";
import React, { useState } from "react";

const DynamicCheckbox = () => {
  // 選択されたアイテムを管理するstateをここに作成します
  const [checkedItem, setCheckedItem] = useState<string[]>([]);
  // チェックボックスの状態が変化したときの処理をここに記述します

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedItem = e.target.value;

    if (e.target.checked) {
      setCheckedItem((prev) => [...prev, checkedItem]);
    } else {
      setCheckedItem((prev) => prev.filter((i) => i != checkedItem));
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="item"
          value="ポテト🍟"
          onChange={handleChecked}
          checked={checkedItem.includes("ポテト🍟")}
        />
        ポテト🍟
      </label>
      <label>
        <input
          type="checkbox"
          name="item"
          value="ハンバーガー🍔"
          onChange={handleChecked}
          checked={checkedItem.includes("ハンバーガー🍔")}
        />
        ハンバーガー🍔
      </label>
      <label>
        <input
          type="checkbox"
          name="item"
          value="ピザ🍕"
          onChange={handleChecked}
          checked={checkedItem.includes("ピザ🍕")}
        />
        ピザ🍕
      </label>
      <div>
        {checkedItem.length === 0
          ? "「何も選択されていません」"
          : checkedItem.map((item) => item).join(", ")}
      </div>
    </div>
  );
};

export default DynamicCheckbox;
