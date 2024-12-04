import * as fs from "fs";
const input = fs.readFileSync(`${__dirname}/data/02.txt`, "utf8");

const reports = input
  .split("\n")
  .map((levels) => levels.split(" ").map(Number));

const isSafe = (levels: number[]) =>
  [(a: number, b: number) => a < b, (a: number, b: number) => a > b].some(
    (fn) =>
      levels.every(
        (value, i) =>
          !i ||
          (fn(levels[i - 1], value) && Math.abs(levels[i - 1] - value) <= 3),
      ),
  );

const part1 = reports.reduce(
  (acc, levels) => acc + (isSafe(levels) ? 1 : 0),
  0,
);

const part2 = reports.reduce(
  (acc, levels) =>
    acc +
    (levels.some((_, i) => isSafe(levels.filter((_, j) => j !== i))) ? 1 : 0),
  0,
);

console.log(`Part1: ${part1}`);
console.log(`Part2: ${part2}`);
