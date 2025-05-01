"use client";

import { ChangeEvent, useState } from "react";

function TextForm() {
  // ここに文字数カウンターのstateを追加しましょう
  const [countStr, setCountStr] = useState(0);

  const handleCountStr = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const strLength = e.target.value.length;
    setCountStr(strLength);
  };

  return (
    <div>
      <textarea
        placeholder="入力してください"
        onChange={handleCountStr}
      ></textarea>
      <p>文字数: {countStr}</p>
    </div>
  );
}

export default TextForm;
