//今回の判定条件
//期間が2020/1/1 0時　~　2020/4/1　0時　の間で
//A-Cのいづれかのコースで会員であること
//※退会した場合は同月内に再入会していれば対象

//①今回の対象ユーザーを記録するために空の配列を作成する
//②扱いやすいデータの形に整形する
//③アクションが1(入会)が2020/1/1 0時より前のユーザーを特定し、ユーザー毎、コース毎に整形する
//④ユーザーのコース毎に繰り返し処理をして、2020/4/1より前に退会が確認された場合、1ヶ月以内に入会がないか確認する。
//⑤④で退会していない場合はからの配列に登録する
//⑥idの若い順にソートして改行区切りで出力する

import fs from "fs"; //csvファイルの読み込み用

//同じディレクトリ内のCSVファイルから抽出する
const data = fs.readFileSync("sample_log.csv", "utf-8");

//行毎に配列を作成
const rows = data.split("\n");
const arr = rows.map((row) => row.split(","));

//①今回の対象ユーザーを記録するために空の配列を作成する
const targetUser = [];

//②扱いやすいデータの形に整形する
//ユーザー毎かつコース毎にデータを構造化して登録する
const newObj: { [key: string]: { [key: string]: string[][] } } = {};

for (const log of arr) {
  const [id, corse, ...rest] = log;

  //ここはエラー解消が必要
  if (!newObj[id]) {
    newObj[id] = {};
  }

  if (!newObj[id][corse]) {
    newObj[id][corse] = [];
  }

  newObj[id][corse].push(rest);
}

//③アクションが1(入会)が2020/1/1 0時以降に登録されているユーザーは
for (const id in newObj) {
  console.log(id);
  for (const corse in newObj[id]) {
    console.log(corse);
    const data = newObj[id][corse]; //コース毎のデータにアクセス

    const firstRegister = data[0]; //ユーザーが契約しているコースの一番最初のデータ
    const registerDate = new Date(firstRegister[1]); //登録日付
    const targetDate = new Date("2020/01/01 00:00:00"); //比較対象の日付

    //2020/1/1時点で契約がない場合はスキップする
    if (registerDate > targetDate) {
      continue;
    }

    //該当するユーザーをtargetUserに追加する
    if (targetUser.indexOf(id) === -1) {
      targetUser.push(id);
    }
  }

  //④2020/4/1より前に退会が確認された場合、1ヶ月以内に入会がないか確認し、該当のユーザーを登録する
  //1ヶ月以内を判定するロジックをどう構築するか。。。
}

//⑥idの若い順にソートして改行区切りで出力する
const result = targetUser
  .map(Number)
  .sort((a, b) => a - b)
  .join("\n");
console.log(result);
