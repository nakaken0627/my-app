"use client";
import React, { useState } from "react";

function ErrorDisplay() {
  // エラーの状態を管理するstateをここで定義しよう
  const [error, setError] = useState(false);

  // エラーを表示するための関数をここで作成しよう
  const handleError = () => {
    setError(!error);
  };

  return (
    <div>
      {/* エラー表示用のpタグを追加し、条件付きレンダリングを設定してね */}
      <button onClick={handleError}>エラーを起こす</button>

      {error && (
        <div className="text-red-400">なんらかエラーが発生しました。</div>
      )}
    </div>
  );
}

export default ErrorDisplay;
