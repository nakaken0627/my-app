interface Post {
  id: number;
  title: string;
  createdAt: string;
}

// 1) 入力データ（そのまま使ってOK）
const posts = [
  { id: 1, title: "Hello World!", createdAt: "2024-01-02T10:00:00Z" },
  { id: 2, title: "Hello   world", createdAt: "2024-02-10T10:00:00Z" },
  { id: 3, title: "  Tips & Tricks  ", createdAt: "2024-03-01T09:00:00Z" },
  { id: 4, title: "Tips—Tricks", createdAt: "2024-03-02T09:00:00Z" },
  { id: 5, title: "   ", createdAt: "2024-03-05T00:00:00Z" },
];

// 2) お題の関数：generateSitemap を定義
//    - スラッグ化（lowercase, 非英数はハイフン、連続ハイフン圧縮、前後ハイフン除去、空は 'post'）
//    - 同一スラッグが出たら -2, -3... と連番を付与（入力順ベース）
//    - 最後に slug の昇順で toSorted し、配列を返す（破壊的 sort 禁止）
//    - console.log で最終結果を表示
// 【注意】下の初期コードにはバグが埋まってる。直してクリアしてね！

export function generateSitemap(posts: Post[]) {
  // バグ例: カウント管理を object でやってるけどOK。Map でも可。
  const counts: Record<string, number> = {};
  const newPosts: Post[] = [...posts];

  const items = newPosts.map((p) => {
    // バグ1: 1回しか置換してない。小文字化・連続ハイフン圧縮・前後ハイフン除去なし。
    // バグ2: 空タイトルのフォールバックなし。
    const base = p.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    // バグ3: カウントOKっぽいけど、スラッグ連番の付け方がオフバイワン。
    const n = (counts[base] ?? 0) + 1;
    counts[base] = n;

    const displayBase = base || "post";
    const slug = n === 1 ? displayBase : `${displayBase}-${n}`; // ← +1 が余計

    // 返す形自体はこれでOK
    return { id: p.id, slug, createdAt: p.createdAt };
  });

  // バグ4: sort() は破壊的＋比較関数未指定で不安定。toSorted を使って slug 昇順に。
  const newItems = items.toSorted((a, b) => a.slug.localeCompare(b.slug, "en"));

  // バグ5: 関数が値を return してない。
  return newItems;
}

// 3) 実行
// generateSitemap を呼び出して、結果を console.log で表示してね！
// 期待する出力は問題の outputCode を参考に。

console.log(generateSitemap(posts));
