/* 
   Function based on:
   https://www.tutorialspoint.com/evaluating-a-mathematical-expression-considering-operator-precedence-in-javascript
*/

module.exports = (exp, operation) => {
  if (exp === undefined || exp === "") return null;
  if (exp.includes("/ 0") || exp.includes("/0")) return null;

  const digits = "0123456789.";
  const operators = ["+", "-", "*", "/", "negate"];
  const brackets = ["(", ")"];
  exp = exp.replace(/\s/g, "");

  if (
    exp
      .split("")
      .filter((char) => ![...digits, ...operators, ...brackets].includes(char))
      .length
  )
    return null;

  const legend = {
    "+": { pred: 1, func: operation.add, assoc: "left" },
    "-": { pred: 1, func: operation.sub, assoc: "left" },
    "*": { pred: 2, func: operation.multi, assoc: "left" },
    "/": { pred: 2, func: operation.divide, assoc: "left" },
    negate: { pred: 3, func: operation.negate, assoc: "right" },
  };

  let operations = [];
  let outputQueue = [];
  let ind = 0;
  let str = "";

  while (ind < exp.length) {
    let ch = exp[ind];
    if (operators.includes(ch)) {
      if (str !== "") {
        outputQueue.push(+str);
        str = "";
      }
      if (ch === "-") {
        if (ind == 0) {
          ch = "negate";
        } else {
          let nextCh = exp[ind + 1];
          let prevCh = exp[ind - 1];
          if (
            (digits.includes(nextCh) || nextCh === "(" || nextCh === "-") &&
            (operators.includes(prevCh) || exp[ind - 1] === "(")
          ) {
            ch = "negate";
          }
        }
      }
      if (operations.length > 0) {
        let topOper = operations[operations.length - 1];
        while (
          operations.length > 0 &&
          legend[topOper] &&
          ((legend[ch].assoc === "left" &&
            legend[ch].pred <= legend[topOper].pred) ||
            (legend[ch].assoc === "right" &&
              legend[ch].pred < legend[topOper].pred))
        ) {
          outputQueue.push(operations.pop());
          topOper = operations[operations.length - 1];
        }
      }
      operations.push(ch);
    } else if (digits.includes(ch)) {
      str += ch;
    } else if (ch === "(") {
      operations.push(ch);
    } else if (ch === ")") {
      if (str !== "") {
        outputQueue.push(+str);
        str = "";
      }
      while (
        operations.length > 0 &&
        operations[operations.length - 1] !== "("
      ) {
        outputQueue.push(operations.pop());
      }
      if (operations.length > 0) {
        operations.pop();
      }
    }
    ind++;
  }

  if (str !== "") outputQueue.push(+str);

  outputQueue = outputQueue.concat(operations.reverse());
  let res = [];

  while (outputQueue.length > 0) {
    let ch = outputQueue.shift();
    if (operators.includes(ch)) {
      if (ch === "negate") {
        res.push(legend[ch].func(res.pop()));
      } else {
        let [num2, num1] = [res.pop(), res.pop()];
        res.push(legend[ch].func(num1, num2));
      }
    } else {
      res.push(ch);
    }
  }

  const result = res.pop()?.valueOf();
  if (isNaN(result)) return null;
  return result;
};
