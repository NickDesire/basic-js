const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator}) {
  let newStr = '';
  let addPart = '';
  if (separator == null) separator = '+';
  if (additionSeparator == null) additionSeparator = '|';
  str = String(str);
  separator = String(separator);
  addition = String(addition);
  additionSeparator = String(additionSeparator);
  if (repeatTimes == undefined) repeatTimes = 1;
  if (addition != 'undefined') {
    if (additionRepeatTimes == undefined) additionRepeatTimes = 1;
    for (let i = 1; i <= additionRepeatTimes; i++) {
      addPart = (addPart + addition + additionSeparator);
    }
    let add = addPart.slice(0, -additionSeparator.length);
    for (let j = 1; j <= repeatTimes; j++) {
      newStr = newStr + str + add + separator;
    }
  } else {
    for (let k = 1; k <= repeatTimes; k++) {
      newStr = newStr + str + separator;
    }
  }

  return newStr.substring(0, newStr.length - separator.length);
}