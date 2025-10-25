"use client";
import React, { useState } from "react";

function SimpleTabs() {
  // 1) アクティブなタブ名を保持するstateを用意してください（'profile' | 'notifications'、初期値は 'profile'）
  const [tab, setTab] = useState<"profile" | "notifications">("profile");

  // 2) タブボタンを2つ表示し、クリックでアクティブなタブを切り替えてください
  // ボタンには role="tab"、コンテナには role="tablist" を付与し、aria-selected を適切に設定しましょう

  const handleTabClick = (selectedTab: "profile" | "notifications") => {
    setTab(selectedTab);
  };

  // 3) アクティブなタブに応じて下部の内容を条件付きで表示してください
  // 'profile' のとき: 「ようこそ、ユーザーさん」などの簡単な文言を表示
  // 'notifications' のとき: 「通知はありません」などの文言を表示

  // 4) 見た目はTailwindCSSで、アクティブなタブに下線や色を付けて分かりやすくしましょう

  return (
    <div className="max-w-md mx-auto p-4">
      <div
        role="tablist"
        aria-label="Sample Tabs"
        className="flex space-x-4 mb-4 border-b border-gray-700 "
      >
        <button
          role="tab"
          id="tab1"
          aria-selected={tab === "profile"}
          aria-controls="panel1"
          onClick={() => handleTabClick("profile")}
          className={
            tab === "profile"
              ? "border-b-2 border-blue-600 text-blue-600 "
              : "border-b border-gray-700 text-gray-500"
          }
        >
          プロフィール
        </button>
        <button
          role="tab"
          id="tab2"
          aria-selected={tab === "notifications"}
          aria-controls="panel2"
          onClick={() => handleTabClick("notifications")}
          className={
            tab === "notifications"
              ? "border-b-2 border-blue-600 text-blue-600 "
              : "border-b border-gray-700 text-gray-500"
          }
        >
          通知
        </button>
      </div>
      <div
        id="panel1"
        role="tabpanel"
        aria-labelledby="tab1"
        hidden={tab !== "profile"}
      >
        <p>ようこそ、ユーザーさん</p>
      </div>
      <div
        id="panel2"
        role="tabpanel"
        aria-labelledby="tab2"
        hidden={tab !== "notifications"}
      >
        <p>通知はありません</p>
      </div>
    </div>
  );
}

export default SimpleTabs;
