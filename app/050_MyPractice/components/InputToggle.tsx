"use client";

import React, { useState } from "react";

function InputToggle() {
  //# useStateを使用して入力の有効/無効を管理する状態を作成してください。
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="my-3">
      {/* ここに切り替え用のトグルボタンと入力フォームを追加してください */}
      <button
        className="border border-amber-50 rounded-sm mx-1 px-1 "
        onClick={() => setIsDisabled(!isDisabled)}
      >
        切替ボタン：{isDisabled ? <span>有効化</span> : <span>無効化</span>}
      </button>
      {/* 入力フォームは状態によって有効・無効を切り替えられるようにしましょう */}
      <input
        type="text"
        placeholder="入力してみましょう"
        disabled={isDisabled}
        className="border border-amber-50 rounded-sm"
      />
    </div>
  );
}

export default InputToggle;
