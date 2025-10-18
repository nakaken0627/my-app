import React, { useState } from "react";

function NumberOnlyInput() {
  // 1) useStateをimportして、入力値（文字列）を管理するstateを作る
  const [num, setNum] = useState("");
  // 2) onChangeハンドラを用意して、入力から数字以外を除去し、最大5桁に制限してstate更新する
  //    例: const next = e.target.value.replace(/\D/g, '').slice(0, 5)
  const handleNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum(e.target.value.replace(/\D/g, "").slice(0, 5));
  };
  // 3) label + input(type="text") を置く（inputMode="numeric" と pattern="[0-9]*" を付ける）
  // 4) 下に「現在の数値: X」を表示。空のときは「未入力」を表示
  return (
    <div>
      <label htmlFor="num">
        <p>数字入力（最大５桁）</p>
        <input
          type="text"
          name="num"
          id="num"
          value={num}
          pattern="[0-9]*"
          inputMode="numeric"
          placeholder="数字のみ入力（最大5桁）"
          onChange={handleNum}
        />
      </label>
      <p>現在の数値：{num ? Number(num) : "未入力"}</p>
    </div>
  );
}

export default NumberOnlyInput;
