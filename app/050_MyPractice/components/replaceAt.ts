// ① 入力データの用意（好きに変えてOK）
const arr = [10, 20, 30];
const index = 1;
const value = 99;

// ② お題を満たす関数の定義
// 関数名は replaceAt。
// 必ず arr.with(index, value) を使って“新しい配列”を返してね（元配列は書き換えない）。
// ここに関数定義のコードを書いてください。

export const replaceAt = (arr: number[], index: number, value: number) => {
  return arr.with(index, value);
};

// ③ 関数の実行
// 新しい配列と、元の配列の両方を console.log で表示して、非破壊更新を確認しよう。
// ここに関数実行のコードを書いてください。
console.log(replaceAt(arr, index, value));
