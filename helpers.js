const fs = require("fs");

const readData = (path, enc = "utf-8") => fs.readFileSync(path, enc);

module.exports.dataLinesToArrayOfNumbers = (path, separator = "\n") =>
  readData(path, "ascii").split(separator).map(Number);

module.exports.readData = (path) => fs.readFileSync(path, "utf-8");
