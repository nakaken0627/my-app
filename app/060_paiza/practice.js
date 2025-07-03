process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
import readline from "readline";
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  const num = parseInt(lines[0]);

  for (let i = 0; i < num; i++) {
    const val = lines[i + 1].split(" ");
    const name = val[0];
    const age = parseInt(val[1]);

    console.log(`${name} ${age + 1}`);
  }
});
