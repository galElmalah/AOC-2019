const { readData } = require("../helpers");
const parseDirection = (s) => s.match(/([A-Z])([0-9]+)/);
const parse = (cord) =>
  cord.split(",").map((c) => {
    const [, direction, steps] = parseDirection(c);
    return [direction.toLowerCase(), Number(steps)];
  });
  
const [firstCord, secondCord] = readData(`${__dirname}/data.txt`)
  .split("\n")
  .map(parse);

const fillCordsMap = (cords) => {
  const map = new Map();

  cords.forEach((cord, cordId) => {
    let x = 0;
    let y = 0;
    const ops = {
      l: () => x--,
      r: () => x++,
      u: () => y++,
      d: () => y--,
    };
    let totalSteps = 0;
    while (cord.length) {
      const [direction, steps] = cord.shift();
      for (let i = 0; i < steps; i++) {
        totalSteps++;

        ops[direction]();

        if (map.has(`${x},${y}`)) {
          const [, prevSteps, prevCordId] = map.get(`${x},${y}`);

          // check for self overllaping i.e cord 1 intersect with himself...
          if (prevCordId !== cordId) {
            map.set(`${x},${y}`, [1, prevSteps + totalSteps]);
          }
          continue;
        }

        map.set(`${x},${y}`, [0, totalSteps, cordId]);
      }
    }
  });
  return map;
};

const firstTask = (c1, c2) => {
  const intersections = fillCordsMap([c1, c2]);

  const distances = [];
  intersections.forEach(([value], key) => {
    if (value > 0) {
      const [x, y] = key.split(",").map(Number);
      distances.push(Math.abs(x) + Math.abs(y));
    }
  });

  return Math.min(...distances);
};

const secondTask = (c1, c2) => {
  const intersections = fillCordsMap([c1, c2]);

  const steps = [];
  intersections.forEach(([value, totalSteps], key) => {
    if (value > 0) {
      steps.push(totalSteps);
    }
  });
  return Math.min(...steps);
};

console.log("First problem:", firstTask([...firstCord], [...secondCord]));
console.log("Second problem:", secondTask([...firstCord], [...secondCord]));

module.exports = { firstTask, secondTask, parse };
