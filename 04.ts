import * as fs from "fs";
const input = fs.readFileSync(`${__dirname}/data/04.txt`, "utf8");
const lines = input.split("\n");
const numCols = lines[0].length;
const numRows = lines.length;

const part1 = (): number => {
  let count = 0;

  function isValidWord(fn: (i: number) => string): void {
    const word = [0, 1, 2, 3].map((i) => fn(i)).join("");
    if (word.match(/XMAS|SAMX/)) {
      count++;
    }
  }

  // Horizontal
  for (let row = 0; row <= numRows - 1; row++) {
    for (let col = 0; col <= numCols - 4; col++) {
      isValidWord((i) => lines[row][col + i]);
    }
  }

  // Vertical
  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row <= numRows - 4; row++) {
      isValidWord((i) => lines[row + i][col]);
    }
  }

  for (let row = 0; row <= numRows - 4; row++) {
    // Top-left to bottom-right
    for (let col = 0; col <= numCols - 4; col++) {
      isValidWord((i) => lines[row + i][col + i]);
    }

    // Top-right to bottom-left
    for (let col = 3; col < numCols; col++) {
      isValidWord((i) => lines[row + i][col - i]);
    }
  }

  return count;
};

const part2 = (): number => {
  const words = new Set(["MAS", "SAM"]);
  let count = 0;

  for (let row = 1; row < numRows - 1; row++) {
    for (let col = 1; col < numCols - 1; col++) {
      if (
        lines[row][col] === "A" &&
        words.has(`${lines[row - 1][col - 1]}A${lines[row + 1][col + 1]}`) &&
        words.has(`${lines[row - 1][col + 1]}A${lines[row + 1][col - 1]}`)
      ) {
        count++;
      }
    }
  }

  return count;
};

console.log(`Part1: ${part1()}`);
console.log(`Part2: ${part2()}`);
