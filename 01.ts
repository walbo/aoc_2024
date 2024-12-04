import * as fs from "fs";
const input = fs.readFileSync(`${__dirname}/data/01.txt`, "utf8");

const lists = input.split("\n").map((line) => {
  const [left, right] = line.split(/\s+/).map(Number);
  return { left, right };
});

const list1 = lists.map(({ left }) => left).sort();
const list2 = lists.map(({ right }) => right).sort();

const part1 = list1
  .map((value, i) => Math.abs(value - list2[i]))
  .reduce((acc, num) => acc + num, 0);

const part2 = list1
  .map((value1) => value1 * list2.filter((value2) => value2 === value1).length)
  .reduce((acc, num) => acc + num, 0);

console.log(`Part1: ${part1}`);
console.log(`Part2: ${part2}`);
