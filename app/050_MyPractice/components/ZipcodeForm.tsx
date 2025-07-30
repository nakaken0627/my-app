"use client";

import React, { useState } from "react";

// const endpoint = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";

const ZipcodeForm = () => {
  // ここに、都道府県、市町村、郵便番号を管理するstateを追加

  const [zipcode, setZipcode] = useState("");
  const [prefecture, setPrefecture] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    // ここに、郵便番号から住所を取得する処理を追加
    try {
      const res = await fetch(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`,
        {
          method: "GET",
        }
      );
      const result = await res.json();
      setPrefecture(result.results[0].address1);
      setCity(result.results[0].address2);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-md space-y-6 rounded-xl bg-white p-6 shadow-md">
      <h2 className="text-xl font-bold text-gray-800">
        郵便番号から住所自動入力
      </h2>

      {/* 郵便番号入力フォームと「自動入力」ボタンを追加 */}
      <input
        type="text"
        value={zipcode}
        placeholder="郵便番号"
        onChange={(e) => setZipcode(e.target.value)}
        className="border border-gray-800 text-gray-800"
      />
      <button
        onClick={handleSearch}
        className="border border-gray-800 text-gray-800"
      >
        検索ボタン
      </button>

      {/* 都道府県名の入力inputを追加 */}
      <input
        type="text"
        value={prefecture}
        placeholder="都道府県"
        onChange={(e) => setPrefecture(e.target.value)}
        className="border border-gray-800 text-gray-800"
      />

      {/* 市町村名の入力inputを追加 */}
      <input
        type="text"
        value={city}
        placeholder="市町村名"
        onChange={(e) => setCity(e.target.value)}
        className="border border-gray-800 text-gray-800"
      />
    </div>
  );
};

export default ZipcodeForm;

const yourObject = {
  // 中に含まれるプロパティを記述
  user: {
    info: {
      name: "Taro",
      location: "Tokyo",
    },
  },
};

// user.locationを取得しconsole.logで出力
console.log(yourObject.user.info.location);

export const createNum = (inputStr: string) => {
  return parseInt(inputStr);
};
