import React from "react";

const DynamicCheckbox = () => {
  // 選択されたアイテムを管理するstateをここに作成します

  // チェックボックスの状態が変化したときの処理をここに記述します

  return (
    <div>
      <label>
        <input type="checkbox" />
        ポテト🍟
      </label>
      <label>
        <input type="checkbox" />
        ハンバーガー🍔
      </label>
      <label>
        <input type="checkbox" />
        ピザ🍕
      </label>
      <div>{/* ここに選択されたアイテムを表示します */}</div>
    </div>
  );
};

export default DynamicCheckbox;
