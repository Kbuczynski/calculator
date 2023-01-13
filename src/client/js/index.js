import Calculator from "./calculator.js";
import API from "./api.js";

const elements = {
  keysContainer: document.querySelector(".calculator-keys"),
  calculatorScreen: document.querySelector(".calculator-screen"),
};

const api = new API(`${window.location.href}api`);
new Calculator(elements, api);
