const [from, to] = [264793, 803935];

// another less time effective approach could be to count digits and map their occurences in a map or object
const digitsCounter = (num) =>
  `${num}`
    .split("")
    .reduce((acc, n) => ({ ...acc, [n]: acc[n] ? acc[n] + 1 : 1 }), {});

const isValidPasscodeFirstTask = (num) => {
  const numDigits = `${num}`.split("");
  let hasSameDigit = false;
  for (let i = 0; i < numDigits.length - 1; i++) {
    if (parseInt(numDigits[i]) > parseInt(numDigits[i + 1])) {
      return false;
    }
    if (numDigits[i] === numDigits[i + 1]) {
      hasSameDigit = true;
    }
  }

  return hasSameDigit;
};

const isValidPasscodeSecondTask = (num) => {
  const numDigits = `${num}`.split("");
  let hasSameNumberExactlyTwice = false;
  for (let i = 0; i < numDigits.length - 1; i++) {
    if (parseInt(numDigits[i]) > parseInt(numDigits[i + 1])) {
      return false;
    }
    if (
      numDigits[i] === numDigits[i + 1] &&
      numDigits[i] !== numDigits[i + 2] &&
      numDigits[i] !== numDigits[i - 1]
    ) {
      hasSameNumberExactlyTwice = true;
    }
  }

  return hasSameNumberExactlyTwice;
};

const firstTask = (input) => {
  const valid = [];
  for (let i = from; i < to; i++) {
    if (isValidPasscodeFirstTask(i)) {
      valid.push(i);
    }
  }
  return valid.length;
};

const secondTask = (input) => {
  const valid = [];
  for (let i = from; i < to; i++) {
    if (isValidPasscodeSecondTask(i)) {
      valid.push(i);
    }
  }
  return valid.length;
};

console.log("First problem:", firstTask());
console.log("Second problem:", secondTask());

module.exports = {
  firstTask,
  secondTask,
  isValidPasscodeFirstTask,
  isValidPasscodeSecondTask,
};
