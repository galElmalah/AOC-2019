const {
  isValidPasscodeFirstTask,
  isValidPasscodeSecondTask,
} = require("./index");

describe("Day 4", () => {
  describe("Task 1", () => {
    it("should solve it correctly for the given example - isValidPasscodeFirstTask", () => {
      const correct = [111111, 111123];
      const notCorrect = [223450, 123789];
      correct.forEach((n) => expect(isValidPasscodeFirstTask(n)).toBe(true));
      notCorrect.forEach((n) =>
        expect(isValidPasscodeFirstTask(n)).toBe(false)
      );
    });
  });

  describe("Task 2", () => {
    it("should solve it correctly for the given example", () => {
      const correct = [223456, 111122];
      const notCorrect = [223450, 123789, 111123, 111111];
      correct.forEach((n) => expect(isValidPasscodeSecondTask(n)).toBe(true));
      notCorrect.forEach((n) =>
        expect(isValidPasscodeSecondTask(n)).toBe(false)
      );
    });
  });
});
