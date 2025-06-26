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

// const number = 15;

export const conditionalCalculator = (num: number) => {
  if (num > 10) {
    return num * 2;
  }
  return num;
};

// const result = conditionalCalculator(number);
// console.log(result);

export const extractYears = (date: string) => {
  return Number(date.split("-")[0]);
};
const dateString = "2023-02-23";
const result1 = extractYears(dateString);
console.log(result1);

const data = [
  { id: 1, vote: "yes" },
  { id: 2, vote: "no" },
  { id: 3, vote: "yes" },
];
const result = { yes: 0, no: 0 };
data.forEach((item) => {
  if (item.vote === "yes") {
    result.yes += 1;
  } else {
    result.no += 1;
  }
});

const string = "JavaScript";
const pickFirstString = (arg: string) => {
  return arg.slice(0, 1);
};
const result2 = pickFirstString(string);
console.log(result2);

// ① 元となるオブジェクトを定義
const originalObj = { a: 1, b: { c: 2, d: { e: 3 } } };
type OriginalObj = { [value: string]: number | OriginalObj };

// ② 提供された関数を確認し、バグを特定・修正してね！
function cloneObj(obj: OriginalObj, depth = 1) {
  if (depth === 0 || typeof obj !== "object" || obj === null) {
    return obj;
  }

  const result: OriginalObj = {};
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      result[key] = cloneObj(value, depth - 1);
    } else {
      result[key] = value;
    }
  }
  return result;
}
// ③ 関数の実行
console.log(cloneObj(originalObj, 2));

const integerChecker = (num: number) => {
  return Number.isInteger(num);
};

console.log(integerChecker(10));

export const averageNum = (arr: number[]) => {
  const total = arr.reduce((acc, cur) => {
    return acc + cur;
  });

  return total / arr.length;
};
