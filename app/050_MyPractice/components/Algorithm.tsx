export const Algorithm = () => {
  // const handleSplit = (texts: string, separator: string) => {
  //   return texts.split(separator);
  // };
  // console.log(handleSplit("Apple,Banana,Cherry", ","));

  // 提供されたUSER配列を定義
  // const users = [
  //   { name: "John", age: 25 },
  //   { name: "Doe", age: null },
  //   { name: "", age: 30 },
  //   { name: "Anna", age: 22 },
  // ];

  // type User = {
  //   name: string;
  //   age: number | null;
  // };

  // 条件に合わないユーザーを除いて新しい配列を作る関数を定義
  //   function removeInvalidUsers(users: User[]) {
  //     //ここに処理を記述してください。
  //     return users.filter((user) => {
  //       return user.name !== "" && user.age !== null;
  //     });
  //   }

  //   // 関数を実行しconsole.logで結果を確認
  //   console.log(removeInvalidUsers(users));

  return <div></div>;
};

const myRe = new RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
);

export const addressChecker = (address: string) => {
  const result = myRe.test(address);
  console.log(result);
};
