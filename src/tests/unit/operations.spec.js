const Operations = require("../../calculator/operations");

const operations = new Operations();

describe("operations:", () => {
  it("should correctly add two numbers", () => {
    expect(operations.add(1, 1)).toBe(2);
  });

  it("should correctly sub two numbers", () => {
    expect(operations.sub(1, 1)).toBe(0);
  });

  it("should correctly multi two numbers", () => {
    expect(operations.multi(1, 1)).toBe(1);
  });

  it("should correctly divide two numbers", () => {
    expect(operations.divide(1, 1)).toBe(1);
  });

  it("should correctly negate number", () => {
    expect(operations.negate(1)).toBe(-1);
  })
});
