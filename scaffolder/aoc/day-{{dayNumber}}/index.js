const { readData } = require("../helpers");
const data = readData(`${__dirname}/data.txt`);

const firstTask = (input) => {
  return "day-{{dayNumber}} first task";
};

const secondTask = (input) => {
  return "day-{{dayNumber}} second task";
};

console.log("First problem:", firstTask(data));
console.log("Second problem:", secondTask(data));

module.exports = { firstTask, secondTask };
