const { firstTask, secondTask } = require("./index");

describe("Day {{dayNumber}}", () => {
  describe("Task 1", () => {
    it("should solve it correctly for the given example", () => {
      const given = [];
      expect(firstTask(given)).toBe("yeah");
    });
  });

  describe("Task 2", () => {
    it("should solve it correctly for the given example", () => {
      const given = [];
      expect(secondTask(given)).toBe("yeah");
    });
  });
});
