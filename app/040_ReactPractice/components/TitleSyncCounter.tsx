"use client";

import React, { useEffect, useState } from "react";

function TitleSyncCounter() {
  // 1) 未読数のstateを用意しよう（初期値は0）
  // 2) 「未読を増やす」「リセット」用の関数を用意しよう
  // 3) useEffectで未読数が変わるたびに document.title を `未読: X件` に更新しよう
  // 4) 未読数の表示と2つのボタンを描画しよう
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount((prev) => prev + 1);
  };

  const resetHandler = () => {
    setCount(0);
  };

  useEffect(() => {
    document.title = `未読：${count}件`;
  }, [count]);

  return (
    <div>
      <h1>未読カウンター</h1>
      <p>未読：{count}件</p>
      <button onClick={clickHandler}>未読を増やす</button>
      <button onClick={resetHandler}>リセット</button>
    </div>
  );

  // 完成したら適切なJSXを返してね！
}

export default TitleSyncCounter;
