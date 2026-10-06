// ===== レッスンデータ =====
// 動画を追加するときは、lessons の中に1件ぶん { ... }, を足すだけです。
//   id       : 重複しない英数字(第2段階の提出・進行状況で使います。後から変えないこと)
//   style    : styles の id
//   variant  : スタイル内の分類(例 "S" "1")。無ければ省略
//   video    : GoogleドライブのURL(共有設定は「リンクを知っている全員が閲覧可」)。未完成なら ""
//   steps    : 手順テキスト(ナレーション原稿と同じ内容)
//   points   : 見てほしいポイント(手元・立ち位置など)

// grid は画面の3×3の並び順(左上→右下)。"base" は中央の赤いタイル。
window.STYLES = [
  { id: "bob", name: "BOB",  variants: ["S", "M", "L"],  desc: "S / M / L", define: "S / M / L はレングス(長さ)。" },
  { id: "ls",  name: "LS",   variants: [],               desc: "上が長く、下が短い", define: "上の方が長く、下の方が短いスタイル。" },
  { id: "ms",  name: "MS",   variants: ["1", "2"],       desc: "段差 1 / 2", define: "数字(1 / 2)で段差の付き方が変わる。" },
  { id: "ss",  name: "SS",   variants: ["1", "2"],       desc: "段差 1 / 2", define: "数字(1 / 2)で段差の付き方が変わる。" },
  { id: "base", name: "U2Cベーススタイルの把握", variants: [], desc: "最初に見る基本", base: true },
  { id: "ll",  name: "LL",   variants: ["M", "L"],       desc: "レングス M / L" },
  { id: "ml",  name: "ML",   variants: ["M", "L"],       desc: "レングス M / L" },
  { id: "sl",  name: "SL",   variants: ["M", "L"],       desc: "上が短く、下が長い", define: "上の方が短く、下の方が長いスタイル。カッコ内のM / Lはレングス(長さ)。" },
  { id: "two", name: "ツーブロック等 変形スタイル", variants: [], desc: "変形スタイル" },
];

// 用語の定義(ホームの「用語の定義」に表示)。増やすときは1行足すだけ。
window.GLOSSARY = [
  { term: "LS", text: "上の方が長く、下の方が短いスタイル。" },
  { term: "SL", text: "上の方が短く、下の方が長いスタイル。" },
  { term: "1 / 2", text: "段差の付き方の違い。数字でレッスン内容が変わる。" },
  { term: "S / M / L", text: "レングス(長さ)。" },
];

window.LESSONS = [
  {
    id: "base-00",
    style: "base",
    title: "U2Cベーススタイルの把握",
    video: "",
    minutes: 0,
    steps: [],
    points: [],
  },
  { id: "bob-s", style: "bob", variant: "S", title: "BOB(S)", video: "", steps: [], points: [] },
  { id: "bob-m", style: "bob", variant: "M", title: "BOB(M)", video: "", steps: [], points: [] },
  { id: "bob-l", style: "bob", variant: "L", title: "BOB(L)", video: "", steps: [], points: [] },
  { id: "ls-01", style: "ls", title: "LS", video: "", steps: [], points: [] },
  { id: "ms-1", style: "ms", variant: "1", title: "MS(1)", video: "", steps: [], points: [] },
  { id: "ms-2", style: "ms", variant: "2", title: "MS(2)", video: "", steps: [], points: [] },
  { id: "ss-1", style: "ss", variant: "1", title: "SS(1)", video: "", steps: [], points: [] },
  { id: "ss-2", style: "ss", variant: "2", title: "SS(2)", video: "", steps: [], points: [] },
  { id: "ll-m", style: "ll", variant: "M", title: "LL(M)", video: "", steps: [], points: [] },
  { id: "ll-l", style: "ll", variant: "L", title: "LL(L)", video: "", steps: [], points: [] },
  { id: "ml-m", style: "ml", variant: "M", title: "ML(M)", video: "", steps: [], points: [] },
  { id: "ml-l", style: "ml", variant: "L", title: "ML(L)", video: "", steps: [], points: [] },
  { id: "sl-m", style: "sl", variant: "M", title: "SL(M)", video: "", steps: [], points: [] },
  { id: "sl-l", style: "sl", variant: "L", title: "SL(L)", video: "", steps: [], points: [] },
  { id: "two-01", style: "two", title: "ツーブロック等 変形スタイル", video: "", steps: [], points: [] },
];
