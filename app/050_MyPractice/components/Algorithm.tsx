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

const regex = new RegExp("0-9");

export const numChecker = (str: string) => {
  return regex.test(str);
};

export const trimBlank = (str: string) => {
  return str.replace(/\s+/g, "");
};

type Object = {
  name: string;
  age: number;
};

export const deduplicateObjects = (arr: Object[]) => {
  const newArr: Object[] = [];
  arr.map((obj: Object) => {
    const isExistingArr = newArr.find(
      (item) => item.name === obj.name && item.age === obj.age
    );
    if (!isExistingArr) {
      newArr.push(obj);
    }
  });
  return newArr;
};

export const calcDiscountPrice = (price: number, discountRate: number) => {
  return price - (price * discountRate) / 100;
};

export const checkSignalColor = (color: string) => {
  if (color === "red") {
    return "止まれ";
  } else if (color === "blue") {
    return "進め";
  }
};

export const sumArray = (arr: number[]) => {
  arr.reduce((sum, num) => {
    return sum + num;
  }, 0);
};

export const countTrue = (students: boolean[]) => {
  const newArray = students.filter((student) => student === true);
  return newArray.length;
};

import { readFileSync } from "fs";

const lines = readFileSync("/dev/stdin", "utf8").split("\n");
const count = parseInt(lines[0], 10);
console.log(count);

for (let i = 0; i < count; i++) {
  const num = parseFloat(lines[i + 1]);
  if (num === 0) {
    console.log(`${num}は0`);
  } else if (num > 0) {
    console.log(`${num}はプラス`);
  } else {
    console.log(`${num}はマイナス`);
  }
}

export const calcTotalPrice = (price: number, discount: number) => {
  return price - price * Math.floor(discount / 100);
};

export const combineName = (firstName: string, lastName: string) => {
  return `${firstName} ${lastName}`;
};

export const changeEvenNum = (num: number[]) => {
  return num.map((n) => {
    if (n % 2 === 0) {
      return n;
    } else {
      return n + 1;
    }
  });
};

export const convertToInitials = (namesArray: string[]) => {
  return namesArray.map((name) => {
    return name
      .split(" ")
      .map((n) => n.charAt(0).toUpperCase())
      .join(".");
  });
};

const numbers = [5, 12, 8, 130, 44, 1, 3, 7, 9, 11, 15];

const isLargeNumber = (num: number) => num > 10;
const r = numbers.find(isLargeNumber);
console.log(r);

export const trimText = (text: string) => {
  return text.trim();
};

export const changeNum = (num: number) => {
  return Math.abs(num);
};

export const randomNum = (numbers: number[]) => {
  return numbers.sort(() => 0.5 - Math.random());
};

type DataArray = {
  id: number;
  name: string;
  scores?: number[];
  averageScores: number;
};

export const calculateAverageScores = (dataArray: DataArray[]) => {
  dataArray.map((item) => {
    if (!item.scores) return;
    const total = item.scores.reduce((acc, score) => acc + score, 0);
    const average = total / item.scores.length;
    delete item.scores;
    item.averageScores = Math.round(average * 100) / 100;
    return item;
  });
  return data;
};

export const wordCounter = (str: string) => {
  const splitStr = str
    .split(/\s+|[.,!?;]+/)
    .filter((word) => word.length !== 0);
  return splitStr.length;
};

export const inputWordCounter = (sentence: string, str: string) => {
  return sentence.split(str).length - 1;
};

type User = {
  id: number;
  name: string;
};

type NewArray = {
  userId: number;
  userName: string;
};

export const defineUserList = (users: User[]) => {
  const newArray: NewArray[] = [];
  users.map((user) => {
    const newObject = {
      userId: user.id,
      userName: user.name,
    };
    newArray.push(newObject);
  });
  return newArray;
};
