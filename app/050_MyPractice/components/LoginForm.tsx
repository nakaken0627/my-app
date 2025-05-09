"use client";

import React, { useState } from "react";

function LoginForm() {
  //# ここにstateを定義してください（ユーザー名、パスワード）
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  //# ここにフォームを処理するhandleSubmit関数を定義してください
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`ユーザー名：${name} パスワード：${pass}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="ユーザー名"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="password"
          value={pass}
          placeholder="パスワード"
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default LoginForm;
