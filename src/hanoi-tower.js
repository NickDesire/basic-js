const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {}

  let turn = Math.pow(2,disksNumber) - 1;
  let sec = Math.floor((3600 * turn)/turnsSpeed)
  result.turns = turn
  result.seconds = sec
  return  result
};
