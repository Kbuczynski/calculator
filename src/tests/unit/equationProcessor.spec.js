const equationProcessor = require("../../calculator/equationProcessor");
const Operations = require("../../calculator/operations");

const operation = new Operations();

describe("equationProcessor:", () => {
  describe.each`
    equation                  | expected
    ${"1 + 1"}                | ${2}
    ${"1 - 1"}                | ${0}
    ${"1 * 1"}                | ${1}
    ${"1 / 1"}                | ${1}
    ${"-1 + 1"}               | ${0}
    ${"1 + 2 / 2"}            | ${2}
    ${"(1 + 2) / 2"}          | ${1.5}
    ${"-(1 + 2) / 2"}         | ${-1.5}
    ${"(-1 + 2) / -1"}        | ${-1}
    ${"-(-1 + 2) / -1"}       | ${1}
    ${"(1 + 2) / 2 * 2 - 10"} | ${-7}
    ${"2+3+8-44*16/4"}        | ${-163}
    ${"1+1"}                  | ${2}
    ${"--(--1)"}              | ${1}
    ${"1.2"}                  | ${1.2}
    ${"1()"}                  | ${1}
    ${")"}                    | ${null}
    ${"1/0"}                  | ${null}
    ${"1 / 0 + 1"}            | ${null}
    ${"1,2"}                  | ${null}
    ${""}                     | ${null}
    ${"test"}                 | ${null}
    ${"test 123"}             | ${null}
    ${undefined}              | ${null}
  `("should return", ({ equation, expected }) => {
    it(`${expected} if passed '${equation}'`, () => {
      expect(equationProcessor(equation, operation)).toBe(expected);
    });
  });
});
