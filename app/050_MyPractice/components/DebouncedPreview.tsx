"use client";

import React, { useEffect, useState } from "react";

function DebouncedPreview() {
  // 入力値のstateを用意しよう（初期値は空文字）
  // デバウンス後の“確定値”stateを用意しよう（初期値は空文字）
  const [text, setText] = useState("");
  const [debounced, setDebounced] = useState("");

  // useEffectでtextが変わるたびに500ms後に確定値へ反映するタイマーをセット
  // クリーンアップで前回のタイマーをclearTimeoutして重複実行を防ごう

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounced(text.trim());
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [text]);

  // 入力欄（onChangeで入力値を更新）と「入力中」「確定」の2つの表示を実装しよう
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="">
      <p>入力してみよう</p>
      <input
        type="text"
        name="text"
        id="text"
        value={text}
        placeholder="筋トレの目標を書け！"
        onChange={handleChange}
      />
      <p>入力中：{text}</p>
      <p>
        確定：{debounced ? debounced : "未入力"}
        <span>(停止から0.5秒後に更新)</span>
      </p>
    </div>
  );
}

export default DebouncedPreview;
