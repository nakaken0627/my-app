"use client";
import React, { useState } from "react";

function LanguageSelectBasic() {
  // 1) useStateで選択値（string）を管理します。初期値は ''（未選択）にしてください。
  const [lang, setLang] = useState("");

  // 2) 表示用の選択肢配列を用意します（value/label）。
  const options = [
    { value: "ja", label: "日本語" },
    { value: "en", label: "英語" },
    { value: "fr", label: "フランス語" },
  ];

  // 3) <select> を“制御コンポーネント”として実装します（value と onChange）。
  //    先頭に value="" の <option> を置き、disabled なプレースホルダー（例: 「選択してください」）にします。

  // 4) 下部に「選択中: X」を表示します。未選択のときは灰色で「未選択」と表示してください。

  // 5) 「クリア」ボタンを用意し、クリックで選択値を '' に戻します。未選択時は disabled にしてください。

  return (
    <div className="p-4 border rounded-md max-w-sm space-y-3">
      {/* ラベルとselect。selectはvalue/onChangeを設定してください */}
      <label htmlFor="lang" className="block text-sm font-medium text-gray-700">
        言語を選択
      </label>
      <select
        id="lang"
        className="w-full border rounded px-3 py-2" /* value と onChange を実装 */
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        {/* 先頭にプレースホルダー（value=""/disabled）を置く */}
        <option value="" disabled>
          選択してください
        </option>
        {/* options配列をmapして<option>を並べる */}
        {options.map((o) => {
          return (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          );
        })}
      </select>

      {/* 選択中表示（未選択は灰色で「未選択」） */}
      <div className="text-sm">選択中: {lang ? lang : "未選択"}</div>

      {/* クリアボタン（未選択時はdisabled） */}
      <button
        type="button"
        className="px-3 py-1.5 text-sm rounded bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700"
        disabled={!lang}
        onClick={() => setLang("")}
      >
        クリア
      </button>
    </div>
  );
}

export default LanguageSelectBasic;
