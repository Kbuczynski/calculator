const digits = "0123456789";
const operators = ["+", "-", "*", "/"];
const brackets = ["(", ")"];
const specialChars = ["AC", "=", "."];

export default class Calculator {
  constructor(base, api) {
    this._keysContainer = base.keysContainer;
    this._calculatorScreen = base.calculatorScreen;
    this._api = api;
    this._equation = "";

    this._insertCharHandler = this._insertChar.bind(this);
    this._keysContainer.addEventListener("click", this._insertCharHandler);
  }

  async _insertChar(e) {
    const char = e.target.value;

    if (![...digits, ...operators, ...brackets, ...specialChars].includes(char))
      return;

    switch (char) {
      case specialChars[0]:
        this._equation = "";
        this._calculatorScreen.setAttribute("value", this._equation);
        break;
      case specialChars[1]:
        const { result } = await this._checkResult();
        if (result !== 0 && !result) return;
        this._equation = result;
        this._calculatorScreen.setAttribute("value", this._equation);
        break;
      default:
        this._equation += char;
        this._calculatorScreen.setAttribute("value", this._equation);
        break;
    }
  }

  async _checkResult() {
    return await this._api.post("calc", { equation: this._equation });
  }
}
