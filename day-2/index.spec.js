const { firstTask, secondTask } = require("./index");

describe("Day 2", () => {
  describe("Task 1", () => {
    it("should solve it correctly for the given example", () => {
      const given = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
      expect(firstTask(given, 9, 10)).toBe(3500);
    });
  });

  describe("Task 2", () => {
    it("should solve it correctly for the given example", () => {});
  });
});
