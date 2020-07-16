const { dataLinesToArrayOfNumbers } = require("../helpers");
const data = dataLinesToArrayOfNumbers(`${__dirname}/data.txt`, ",");

const opcodes = {
  "1": (i, input) =>
    (input[input[i + 2]] = input[input[i]] + input[input[i + 1]]),
  "2": (i, input) =>
    (input[input[i + 2]] = input[input[i]] * input[input[i + 1]]),
};

const firstTask = (input, noun, verb) => {
  input[1] = noun;
  input[2] = verb;
  for (let i = 0; i < input.length; i++) {
    const currentOp = input[i];

    if (opcodes[currentOp]) {
      opcodes[currentOp](i + 1, input);
      i += 3;
      continue;
    }

    if (currentOp === 99) {
      return input[0];
    }

    console.log("shit");
  }
};

const secondTask = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (firstTask([...input], i, j) === 19690720) {
        return 100 * i + j;
      }
    }
  }
};

console.log("First problem:", firstTask([...data], 12, 2));
console.log("Second problem:", secondTask([...data]));

module.exports = { firstTask, secondTask };
