// カードのデータを型定義します。
export type Card = [number, number, number]; // [cardId, rowIndex, colIndex]

// 移動のデータを型定義します。
export type Move = [number, number, number, number, number]; // [cardId, fromRow, fromCol, toRow, toCol]

/**
 * 与えられたカードと移動履歴から、特定のカードの最終的な位置を特定します。
 * ボードのサイズは与えられたデータから動的に判断します。
 *
 * @param {Card[]} cards - カンバンボード上の初期カードのリスト。
 * @param {Move[]} moves - カードの移動履歴のリスト。
 * @param {number} query - 位置を特定したいカードのID。
 * @returns {[number, number]|null} - 最終的なカードの位置を [rowIndex, colIndex] の形式で返します。見つからない場合は null を返します。
 */
export const searchLocation = (
  cards: Card[],
  moves: Move[],
  query: number
): [number, number] | null => {
  // 処理中にカードの現在の位置を追跡するためのマップを作成
  const cardLocations = new Map<number, [number, number]>();

  // 各列のカードを管理するためのオブジェクトを動的に作成
  const columns: Record<number, number[]> = {};

  // 初期状態のボードを構築し、カードの位置を追跡
  cards.forEach((card) => {
    const [cardId, rowIndex, colIndex] = card;

    // マップに初期位置を格納
    cardLocations.set(cardId, [rowIndex, colIndex]);

    // 列がまだ存在しなければ作成
    if (!columns[colIndex]) {
      columns[colIndex] = [];
    }
    columns[colIndex].push(cardId);
  });

  // 各列の初期状態のカードを行インデックスでソート
  for (const colIndex in columns) {
    columns[colIndex].sort((a, b) => {
      const aLoc = cardLocations.get(a);
      const bLoc = cardLocations.get(b);
      if (aLoc && bLoc) {
        return aLoc[0] - bLoc[0];
      }
      return 0;
    });
  }

  // 移動履歴を順番に適用
  moves.forEach((move) => {
    const [cardId, , fromCol, toRow, toCol] = move;

    // 移動元の列からカードを削除
    const fromColumn = columns[fromCol];
    if (fromColumn) {
      const cardIndex = fromColumn.indexOf(cardId);
      if (cardIndex !== -1) {
        fromColumn.splice(cardIndex, 1);
      }
    }

    // 移動先の列がまだ存在しなければ作成
    if (!columns[toCol]) {
      columns[toCol] = [];
    }
    const toColumn = columns[toCol];

    // 移動先にカードを挿入
    if (toColumn.length > toRow) {
      toColumn.splice(toRow, 0, cardId);
    } else {
      toColumn.push(cardId);
    }
  });

  // 移動後の最終的なカードの位置を更新
  cardLocations.clear();
  for (const colIndex in columns) {
    columns[colIndex].forEach((cardId, rowIndex) => {
      cardLocations.set(cardId, [rowIndex, parseInt(colIndex)]);
    });
  }

  // queryで指定されたカードの位置を返す
  if (cardLocations.has(query)) {
    return cardLocations.get(query) as [number, number];
  } else {
    return null;
  }
};

// -------------------------
// 関数のテスト
// -------------------------

// const cards: Card[] = [
//   [6, 0, 0],
//   [7, 1, 0],
//   [5, 2, 0],
//   [2, 1, 0],
//   [1, 1, 1],
//   [3, 2, 0],
//   [4, 2, 1],
// ];
// const moves: Move[] = [
//   [6, 0, 0, 1, 1],
//   [4, 2, 1, 2, 0],
// ];
// const query = 6;

// const result = searchLocation(cards, moves, query);
// console.log(
//   `カードID ${query} の最終的な位置: ${
//     result ? `[${result}]` : "見つかりませんでした"
//   }`
// );
