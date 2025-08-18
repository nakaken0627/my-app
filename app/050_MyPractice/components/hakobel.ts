//ハコベルの技術課題

//ひらがなのみを対象とする正規表現
export const hiraganaRegex = /^\p{scx=Hiragana}+$/u;

//与えられた文字列が回文(ひらがな)かどうかを判定するメソッド
export const isKaibun = (str: string): boolean => {
  const trimmedStr = str.trim();

  //ひらがな以外が存在している場合は、falseとする
  if (!hiraganaRegex.test(trimmedStr)) return false;

  //文字列の両端から順に処理するため、中央のIndexを取得する
  const strLength = trimmedStr.length;
  const midIndex = Math.floor(strLength / 2);

  //文字列の両端から中央向けて順番に比較し、不一致の場合にfalseとする
  //strLengthは文字数であるためindexとして処理するためにstrLength-1にしている
  for (let i = 0; i < midIndex; i++) {
    const isMatch = trimmedStr[i] === trimmedStr[strLength - 1 - i];
    if (!isMatch) return false;
  }

  return true;
};
