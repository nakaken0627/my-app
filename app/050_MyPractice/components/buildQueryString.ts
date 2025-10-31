// ① クエリにしたいパラメータを定義（今回は文字列/数値のみ想定）
const params = { q: "React Hooks", page: 2, lang: "ja" };

// ② お題を満たす関数の定義
// ヒント: new URLSearchParams(params).toString() を使ってエンコードしよう。
// さらに、結果が空じゃなければ先頭に ? を付けて返すよ！
function buildQueryString(params: { [key: string]: string | number }): string {
  // ここに関数定義のコードを書いてね

  const stringParams: { [key: string]: string } = Object.fromEntries(
    Object.entries(params).map(([key, value]) => [key, String(value)])
  );
  const queryString = new URLSearchParams(stringParams).toString();
  return queryString ? `?${queryString}` : "";
}

// ③ 関数の実行と結果表示
// ここで関数を呼び出して、console.logで結果を表示してね
console.log(buildQueryString(params));
