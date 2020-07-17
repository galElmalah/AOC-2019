const { firstTask, secondTask, parse } = require("./index");

describe("Day 3", () => {
  describe("Task 1", () => {
    it("should solve it correctly for the given example", () => {
      const [r, l] = [
        "R75,D30,R83,U83,L12,D49,R71,U7,L72",
        "U62,R66,U55,R34,D71,R55,D58,R83",
      ].map(parse);

      expect(firstTask(r, l)).toBe(159);
    });
  });

  describe("Task 2", () => {
    it("should solve it correctly for the given example", () => {
      const [r, l] = [
        "R75,D30,R83,U83,L12,D49,R71,U7,L72",
        "U62,R66,U55,R34,D71,R55,D58,R83",
      ].map(parse);

      expect(secondTask(r, l)).toBe(610);
    });
  });
});
