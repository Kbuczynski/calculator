const equationProcessor = require("./equationProcessor");
const Operations = require("./operations");

const operations = new Operations();

module.exports = (exp) => equationProcessor(exp, operations);
