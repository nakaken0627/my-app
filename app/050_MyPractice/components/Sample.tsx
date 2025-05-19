"use client";

// 商品型の定義
type Product = {
  id: string;
  name: string;
};

// サンプル商品データ（APIから取得する場合も同様）
const sampleProducts: Product[] = [
  { id: "1001", name: "りんご" },
  { id: "1002", name: "バナナ" },
  { id: "1003", name: "オレンジ" },
];

import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

export default function ProductSearch() {
  const [inputValue, setInputValue] = useState("");
  const [selectedProductId, setSelectedProductId] = useState("");

  return (
    <div>
      <Autocomplete
        options={sampleProducts}
        getOptionLabel={(option) => `${option.id} - ${option.name}`}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onChange={(event, newValue) => {
          if (newValue) {
            setSelectedProductId(newValue.id); // 商品IDを格納
            setInputValue(newValue.id); // 入力欄にも反映
          }
        }}
        renderInput={(params) => (
          <TextField {...params} label="商品IDを検索" variant="outlined" />
        )}
      />

      <p>選択された商品ID: {selectedProductId}</p>
    </div>
  );
}
