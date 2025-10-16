"use client";
import { useState } from "react";

export const UuidGenerator = () => {
  // 1) UUID文字列を保持するstateを用意しましょう（初期値は空文字）
  const [uuid, setUuid] = useState("");

  // 2) ボタンクリック時に crypto.randomUUID() で新しいUUIDを作り、stateを更新してください。
  //    ※ 未対応環境では簡易なランダム文字列でもOKです。
  const fallbackUUID = () => {
    return "xxxx-xxxx-xxxx-xxxx-xxxx".replace(/[xy]/g, () => {
      return Math.floor(Math.random() * 16).toString(16);
    });
  };

  const generateUUID = () => {
    return typeof crypto !== "undefined" &&
      typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : fallbackUUID();
  };

  const makeUuid = () => {
    setUuid(generateUUID());
  };
  // 3) 画面には「UUID: 生成結果」。未生成なら「UUID: 未生成」と表示してください。
  // 4) 見た目はTailwindCSSで簡潔に整えてOKです。

  return (
    <div className="flex justify-center">
      <div className="border-2 border-solid border-white text-left font-mono p-4 w-150">
        <h1 className="text-xl mb-4">安全なUUIDを生成</h1>
        <p>UUID: {uuid ? uuid : "未生成"}</p>
        <button
          type="button"
          onClick={makeUuid}
          aria-label="UUIDを生成する"
          className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          新しいUUIDを生成
        </button>
      </div>
    </div>
  );
};
