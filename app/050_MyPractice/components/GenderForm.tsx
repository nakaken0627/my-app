"use client";

import React, { useState } from "react";

function GenderForm() {
  // 性別を管理するためのstateをuseStateで追加しましょう。
  const [gender, setGender] = useState("未選択");

  // 性別を変更するための関数を作りましょう。
  const handleChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  return (
    <div>
      <p>選ばれた性別:{gender} </p>
      <label>
        <input
          type="radio"
          value="男性"
          name="gender"
          onChange={handleChangeGender}
        />{" "}
        男性
      </label>
      <label>
        <input
          type="radio"
          value="女性"
          name="gender"
          onChange={handleChangeGender}
        />{" "}
        女性
      </label>
    </div>
  );
}

export default GenderForm;
