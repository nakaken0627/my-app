import React, { useState } from "react";

const DynamicCheckbox = () => {
  // 選択されたアイテムを管理するstateをここに作成します
  // const [checkedItem, setCheckedItem] = useState([]);
  // チェックボックスの状態が変化したときの処理をここに記述します

  const handleChecked = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="item"
          value="potato"
          onChange={handleChecked}
        />
        ポテト🍟
      </label>
      <label>
        <input type="checkbox" name="item" value="hamburger" />
        ハンバーガー🍔
      </label>
      <label>
        <input type="checkbox" name="item" value="pizza" />
        ピザ🍕
      </label>
      <div>{/* ここに選択されたアイテムを表示します */}</div>
    </div>
  );
};

export default DynamicCheckbox;
