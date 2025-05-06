"use client";

// import React, { useState } from "react";

function DynamicTags() {
  // const [tags, setTags] = useState([]);

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.currentTarget);
    // if (e.key === "Enter" && e.target.value) {
    //   // ここに、タグ追加の処理を実装してください。
    //   setTags([...tags, e.target.value]);
    //   e.target.value = "";
    // }
  };

  return (
    <div>
      <input type="text" placeholder="タグを入力してEnter" onKeyDown={addTag} />
      {/* ここに動的にタグを表示するためのコードを書いてください。 */}
      {/* {tags.map((tag, index) => ( */}
      {/* <span key={index}>#{tag}</span> */}
      {/* ))} */}
    </div>
  );
}

export default DynamicTags;
