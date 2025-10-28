// ① 判定したい配列を用意しよ〜
const arr = [3, 7, 10, 5];

// ② お題の関数定義
// 関数名: hasAnyEven
// 仕様: 数値配列arrに「偶数が1つでもあるならtrue、なければfalse」を返す
// 条件: 必ず arr.some(n => 条件) を使うこと
// ここに関数定義を書いてね👇
export const hasAnyEven = (arr: number[]) => {
  return arr.some((n) => n % 2 === 0);
};

// ③ 関数を実行して結果を表示
// ここに console.log(...) を書いて、判定結果を出力してね！
console.log(hasAnyEven(arr));
