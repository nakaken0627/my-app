const lines = ["0"];
const num = Number(lines[0]);
const newNum = num.toString(2);
let count = 0;
for (let i = 0; i < newNum.length; i++) {
  if (newNum[i] === "1") count += 1;
}
console.log(count);
