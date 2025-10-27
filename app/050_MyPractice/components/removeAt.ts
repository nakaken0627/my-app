// ① 入力となる配列と削除したいインデックスを用意
const arr = [10, 20, 30, 40];
const index = 2; // 今回は要素 30 を削除したい例

// ② お題を満たす関数の定義（toSpliced を使って“非破壊”に削除）
// ヒント: Array.prototype.toSpliced(start, deleteCount) を使います。
// 関数名は removeAt とし、arr と index を受け取って新しい配列を返してください。

// ここに関数定義のコードを書いてください。

export const removeAt = (arr: number[], index: number) => {
  return arr.toSpliced(index, 1);
};

// ③ 関数の実行と結果表示
// 戻り値（削除後の新しい配列）と、元の配列が変更されていないことをそれぞれ console.log で確認しましょう。
// ここに実行コードを書いてください。
console.log(removeAt(arr, index));
console.log(arr);
