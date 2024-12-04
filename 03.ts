import * as fs from "fs";
const input = fs.readFileSync(`${__dirname}/data/03.txt`, "utf8");

const multiply = (data: string): number =>
  data
    .matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g)
    .reduce((acc, [, a, b]) => (acc += Number(a) * Number(b)), 0);

console.log(`Part1: ${multiply(input)}`);
console.log(`Part2: ${multiply(input.replace(/don't\(\).*?do\(\)/gs, ""))}`);
