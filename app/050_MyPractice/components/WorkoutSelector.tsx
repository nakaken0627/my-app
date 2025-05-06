"use client";
import React, { useState } from "react";

function WorkoutSelector() {
  const workoutOptions = ["10回", "20回", "30回"];

  // 以下に選択した回数を管理するuseStateを設定
  const [selectCount, setSelectCount] = useState("まだ選んでいません");

  const handleClick = (option: string) => {
    setSelectCount(option);
  };

  return (
    <div>
      <p>選んだ回数: {selectCount}</p>
      {workoutOptions.map((option) => (
        <button key={option} onClick={() => handleClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default WorkoutSelector;
