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
    const info = lines[i + 1].split(" ");
    const splitTime = info[0].split(":");
    const startHour = parseInt(splitTime[0]); //13
    const startMinute = parseInt(splitTime[1]); //00
    const workHour = parseInt(info[1]); //1
    const workMinute = parseInt(info[2]); //30

    const calcHour = toString(
      startHour + workHour + (Math.floor((startMinute + workMinute) / 60) % 24)
    );
    const calcMinute = toString((startMinute + workMinute) % 60);

    let nextHour = 0;
    let nextMinute = 0;

    if (calcHour.length < 2) {
      nextHour = "0" + calcHour;
    }

    if (calcMinute.length < 2) {
      nextMinute = "0" + calcMinute;
    }

    console.log(`${nextHour}:${nextMinute}`);
  }
});
