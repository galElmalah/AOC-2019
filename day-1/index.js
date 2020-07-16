const { dataLinesToArrayOfNumbers } = require("../helpers");
const data = dataLinesToArrayOfNumbers(`${__dirname}/data.txt`);

const calcFuelConsumption = (mass) => Math.floor(mass / 3) - 2;

const firstTask = (input) => {
  return input.map(calcFuelConsumption).reduce((acc, n) => acc + n);
};

const calcSecondTaskMassFuel = (mass) => {
  let totalMassFuel = 0;
  mass = calcFuelConsumption(mass);

  while (mass > 0) {
    totalMassFuel += mass;
    mass = calcFuelConsumption(mass);
  }

  return totalMassFuel;
};

const secondTask = (input) => {
  return input.map(calcSecondTaskMassFuel).reduce((acc, n) => acc + n);
};

console.log("First problem", firstTask(data));
console.log("Second problem", secondTask(data));
